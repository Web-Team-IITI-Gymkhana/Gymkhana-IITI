const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
require('dotenv').config()
const DB_URI = process.env.MONGO_URI
const port = process.env.PORT || 5000;
const Process = require("process");
const passport = require('passport')
require('./passport-setup')
const Users = require('./models/users')

const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: Process.env.CLOUDINARY_NAME,
  api_key: Process.env.CLOUDINARY_API_KEY,
  api_secret: Process.env.CLOUDINARY_API_SECRET,
})

//database connection
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(res => console.log('mongoDB connected...'))
  .catch(err => console.log(err))


//middleware
app.use(session({
  secret: 'cats'
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(express.json({ limit: '50mb' }))

//endpoints
app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This is the server of Gymkhana IITI"
  })
})

app.get('/failed', (req, res) => {
  res.send("Login failed!")
})

app.get('/google',
  passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/logout', (req, res) => {
  req.session = null
  req.logOut()
  res.redirect('/')
})

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

const contentRoute = require('./routes/content')
app.use('/content', contentRoute)

app.route('/uploadImage').post(async (req, res) => {
  // console.log(req.body)

  try {
    let imgData  = req.body.img
    imgData = JSON.parse(imgData)
    const imgString = imgData.data

    const dataFor = req.body.dataFor

    const uploadResponse = await cloudinary.uploader.upload(imgString);
    const imgURL = uploadResponse.url

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

// server
app.listen(port, () => {
  console.log(`Listening on the port: ${port}`);
});
