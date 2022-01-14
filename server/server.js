const express = require('express')
const cookieSession = require("cookie-session");
const passport = require('passport')
const cors = require('cors')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

const passportJwt = require('passport-jwt');

const DB_URI = process.env.MONGO_URI
const port = process.env.PORT || 5000;
const Process = require("process");

require('./passport-setup')
const Users = require('./models/users')

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: Process.env.CLOUDINARY_NAME,
  api_key: Process.env.CLOUDINARY_API_KEY,
  api_secret: Process.env.CLOUDINARY_API_SECRET,
})

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(res => console.log('mongoDB connected...'))
  .catch(err => console.log(err))


app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use(express.json({ limit: '50mb' }))


const CLIENT_URL = "http://localhost:3000/admin/home"

app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This is the server of Gymkhana IITI"
  })
})

function generateUserToken(req, res) {
  const accessToken = token.generateAccessToken(req.user.id);
  res.render('authenticated.html', {
    token: accessToken
  });
}

// app.get("/login/failed", (req, res) => {
//   res.redirect(CLIENT_URL)
// });

// app.get('/google/success',
//   passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));

// app.get('/google/callback',
//   passport.authenticate('google', { session: false,successRedirect: CLIENT_URL,failureRedirect: "/login/failed" }),
//   generateUserToken);

// app.get('/google',
//   passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));


app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

app.get("/login/failed", (req, res) => {
  res.redirect(CLIENT_URL)
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

app.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

const contentRoute = require('./routes/content')
app.use('/content', contentRoute)

app.route('/uploadImage').post(async (req, res) => {
  try {
    let imgData  = req.body.img
    imgData = JSON.parse(imgData)
    const imgString = imgData.data

    const dataFor = req.body.dataFor

    const uploadResponse = await cloudinary.uploader.upload(imgString);
    const imgURL = uploadResponse.secure_url

    let userName = req.body.userName

    let user = await Users.findOne({userName:userName})
    const versionIndex = (user.contentVersions).length - 1;

    if(dataFor=="poster")
    {
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.homePagePoster.src`] : imgURL}},{new:true})
    }
    else if(dataFor=="logo")
    {
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.userDetails.logo`] : imgURL}},{new:true})
    }
    else if(dataFor=="editSectionChild")
    {
        const sectionID = req.body.sectionID
        const sectionChildID = req.body.sectionChildID
        let allSections = user.contentVersions[versionIndex].Sections;
        let sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        let sectionContent = allSections[sectionIndex].sectionContent;
        let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID))
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildImage`] : imgURL}},{new:true})
    }

    res.json({ msg: 'success' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: 'Something went wrong' });
  }
})


app.listen(port, () => {
  console.log(`Listening on the port: ${port}`);
});
