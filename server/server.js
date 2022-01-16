const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const path = require('path')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Process = require("process");
require('dotenv').config()

const DB_URI = process.env.MONGO_URI
const port = process.env.PORT || 5000;

require('./passport-setup')
const Users = require('./models/users')

// const CLIENT_ORIGIN = "http://localhost:3000"
const CLIENT_ORIGIN = "https://gymkhana-iiti.netlify.app"

app.use(cookieParser())
app.use(passport.initialize())
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
app.use(express.json({ limit: '50mb' }))


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

const config = {secretOrKey:"mysecret"}
// const CLIENT_URL = "http://localhost:3000/admin/home"
const CLIENT_URL = "https://gymkhana-iiti.netlify.app/admin/home"

app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This is the server of Gymkhana IITI"
  })
})


app.get('/google',  passport.authenticate('google', { scope: ['profile','email'] }))

app.get('/google/callback', passport.authenticate('google',{failureRedirect:CLIENT_URL}),(req, res)=>{
  console.log('redirected', req.user)
  let user = {
      displayName: req.user.displayName,
      name: req.user.name.givenName,
      email: req.user._json.email,
      provider: req.user.provider }
      console.log(user)

  let token = jwt.sign({
      data: user
      }, config.secretOrKey, { expiresIn: 4000 }); // expiry in seconds
  res.cookie('jwt', token,{secure:true})
  res.redirect(CLIENT_URL)
})

app.get('/login/success', passport.authenticate('jwt', { session: false }) ,(req,res)=>{
  res.status(200).json({user : req.user})
})

app.get("/logout", (req, res) => {
    res.cookie('jwt',{})
    res.redirect(CLIENT_URL)
});

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
