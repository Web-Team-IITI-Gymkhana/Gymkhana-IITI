const express = require('express')
const passport = require('passport')
// const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const path = require('path')
// const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
require('dotenv').config()
const cookieSession = require("cookie-session");


const DB_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN
const CLIENT_URL = process.env.CLIENT_URL

require('./passport-setup')
const Users = require('./models/users')

// const config = {secretOrKey:"mysecret"}

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

const corsOptions = {
  origin: CLIENT_ORIGIN,
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
}

// app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session());
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }))


const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(res => console.log('mongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This is the server of Gymkhana IITI"
  })
})


// app.get('/google',  passport.authenticate('google', { scope: [
//   'https://www.googleapis.com/auth/userinfo.profile',
//   'https://www.googleapis.com/auth/userinfo.email'
// ]}))

// app.get('/google/callback', passport.authenticate('google',{failureRedirect:CLIENT_URL}),(req, res)=>{
//   // console.log('redirected', req.user)
//   let user = {
//       displayName: req.user.displayName,
//       name: req.user.name.givenName,
//       email: req.user._json.email,
//       provider: req.user.provider }
//       // console.log(user)

//   let token = jwt.sign({
//       data: user
//       }, config.secretOrKey, { expiresIn: 4000 });
//   res.cookie('jwt', token,{secure:true})
//   res.redirect(CLIENT_URL)
// })

// app.get('/login/success', passport.authenticate('jwt', { session: false }) ,(req,res)=>{
//   res.status(200).json({user : req.user})
// })

// app.get("/logout", (req, res) => {
//     res.cookie('jwt',{})
//     res.redirect(CLIENT_URL)
// });

app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

// app.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

app.get("/google", passport.authenticate("google", { scope: ["profile","email"] }));

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: CLIENT_URL,
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


app.listen(PORT, () => {
  console.log(`Listening on the port: ${PORT}`);
});
