const Users = require('../models/users')
require('dotenv').config();

const getAllUsers = async(req,res) => {
  try {
      const users = await Users.find({})
      return res.status(201).json({"users":users})

  } catch (error) {
      return res.status(404).json({"message":error})
  }
}

const deleteUser = async(req,res) => {
    try {
        const {userName : userName} = req.params
        await Users.deleteOne({userName:userName});
        return res.status(201).json({"message":"Deleted Successfully"})

    } catch (error) {
        return res.status(404).json({"message":error})
    }
}

const addUser = async(req,res) => {
    try {
        const user = await Users.create(req.body)
        return res.status(201).json({"newUser":user})

    } catch (error) {
        return res.status(404).json({"message":error})
    }
}

const getUser = async(req,res) => {
    try {
        const {userName : userName} = req.params
        const user = await Users.findOne({userName:userName})
        return res.status(201).json({"user":user})

    } catch (error) {
        return res.status(404).json({message:error})
    }
}

const updateGeneralDetails = async(req,res) => {
    try {

        const {userName : userName} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        const updateDetails = req.body;

        let name = updateDetails.name;
        let socialMedia = updateDetails.socialMedia;
        let caption = updateDetails.caption;
        let email = updateDetails.email;
        let phoneNumber = updateDetails.phoneNumber;
        // let publishedVersion = updateDetails.publishedVersion
        let publishedVersion = (user.contentVersions).length - 1

        if(name){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.userDetails.name`] : name}},{new:true})}
        if(socialMedia){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.userDetails.socialMedia`] : socialMedia}},{new:true})}
        if(caption){ user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.homePagePoster.caption`] : caption}},{new:true})}
        if(email){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.contactDetails.email`] : email }},{new:true})}
        if(phoneNumber){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.contactDetails.phoneNumber`] : phoneNumber}},{new:true})}
        if(publishedVersion){await Users.updateOne({userName:userName},{'$set': { [`publishedVersion`] : publishedVersion}},{new:true})}

        return res.status(201).json({"updatedUser":user});

    } catch (error) {
        console.log(error)
        return res.status(404).json({message:"Failed Update"})
    }
}

const publishVersion = async(req,res)=>{
  try{
      const {userName : userName} = req.params
      let user = await Users.findOne({userName:userName})
      let contentVersions = user.contentVersions

      // contentVersions = [contentVersions[0],contentVersions[1]]
      // contentVersions[0].contentVersion = 1
      // contentVersions[1].contentVersion = 2

      let versionIndex = contentVersions.length - 1

      if(versionIndex==-1)
      {
        contentVersions.push({})
      }
      else
      {
          let newVersion = contentVersions[versionIndex]
          newVersion.contentVersion = contentVersions.length + 1
          contentVersions.push(newVersion);
      }

      user = await Users.updateOne({userName:userName},{'$set': { [`publishedVersion`] : contentVersions.length-1}},{new:true})
      user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions`] : contentVersions}},{new:true})
      return res.status(201).json({"updatedUser":user})

  } catch (error) {
    console.log(error)
    return res.status(404).json({message:error})
  }

}

module.exports = {getAllUsers,addUser,getUser , updateGeneralDetails , publishVersion , deleteUser}
