import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cloudinaryPkg from 'cloudinary'

import {jwtAuth} from './middleware.js';
import Users from './models/users.js';

const app = express()
dotenv.config()

const DB_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGINS = ["http://localhost:3000","https://gymkhana-iiti.netlify.app",
                        "https://cynaptics-club.netlify.app","https://pclub-iiti.netlify.app"]


app.use(cors({ origin :CLIENT_ORIGINS, credentials: true }))
app.use(express.json({ limit: '50mb' }))

const cloudinary = cloudinaryPkg.v2
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
    msg: "This is the server of Gymkhana IITI Central Website"
  })
})


import usersRoute from './routes/users.js';
app.use('/users', jwtAuth,usersRoute)

import contentRoute from './routes/content.js';
app.use('/content', jwtAuth,contentRoute)

import authRoute from './routes/auth.js';
app.use('/auth',authRoute)

app.use('/uploadImage',jwtAuth)

app.route('/uploadImage').post(async (req, res) => {
  try {
    let imgData  = req.body.img
    imgData = JSON.parse(imgData)
    const imgString = imgData.data

    const dataFor = req.body.dataFor

    const uploadResponse = await cloudinary.uploader.upload(imgString);
    const imgURL = uploadResponse.secure_url

    let userName = req.userName


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
        console.log("Edit section child image called ",sectionID,sectionChildID,versionIndex,imgURL)
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildImage`] : imgURL}},{new:true})
    }

    res.json({ msg: 'success' , imgURL : imgURL });
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: 'Something went wrong' });
  }
})

app.route('/public/:userName').get(async (req,res)=>{
  try {
    console.log("Public user fetch called")
    const {userName : userName} = req.params
    const user = await Users.findOne({userName:userName})
    return res.status(201).json({"user":user})


  } catch (error) {
      return res.status(404).json({message:error})
  }
})

app.listen(PORT, () => {
  console.log(`Listening on the port: ${PORT}`);
});


