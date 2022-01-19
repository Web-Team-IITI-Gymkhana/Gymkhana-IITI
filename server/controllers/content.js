const Users = require('../models/users')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = async (token,type) => {
  try{
      console.log("verifyToken called",type)
      const decoded = jwt.verify(token, process.env.JWT_KEY)
      console.log("Decoded token ",decoded)
      const userEmailId = decoded.email
      const user = await Users.findOne({userEmailId:userEmailId})
      if(user)
      {
          console.log("User found")
          return true
      }
      else
      {
          console.log("User not found")
          return false
      }
  }
  catch(error){
    console.log(error)
    return false;
  }
}

const  getCurrentSections = async(req,res) => {
  try {
      const {userName : userName } = req.params
      const user = await Users.findOne({userName:userName});

      const versionIndex = (user.contentVersions).length - 1;
      const allSections = user.contentVersions[versionIndex].Sections;

      return res.status(201).json({"sections": allSections})

  } catch (error) {
      console.log(error)
      return res.status(404).json({"message":error})
  }
}

const  getPublishedSections = async(req,res) => {
    try {
        const {userName : userName , publishedVersion : publishedVersion} = req.params
        const user = await Users.findOne({userName:userName});

        const versionIndex = publishedVersion-1;
        const allSections = user.contentVersions[versionIndex].Sections;

        return res.status(201).json({"sections": allSections})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  addSection = async(req,res) => {
    try {
        const authRes = await verifyToken(req.headers.token,"addsection");
        if(!authRes){return res.status(401).json({message:"JWT Auth Failed"})}

        const {userName : userName} = req.params
        let user = await Users.findOne({userName:userName});
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;


        const newSection = req.body;

        try{
          newSection.sectionID = allSections[allSections.length-1].sectionID + 1
        }
        catch{
          newSection.sectionID = 1
        }

        allSections.push(newSection);

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections`] : allSections}},{new:true})

        return res.status(201).json({"updatedUser": user})


    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  getCurrentSection = async(req,res) => {
    try {
        const {userName : userName , sectionID : sectionID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;

        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        const section = user.contentVersions[versionIndex].Sections[sectionIndex];

        return res.status(201).json({"section":section})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  getPublishedSection = async(req,res) => {
  try {
      const {userName : userName , publishedVersion:publishedVersion,sectionID : sectionID} = req.params

      let user = await Users.findOne({userName:userName})
      const versionIndex = publishedVersion-1

      let allSections = user.contentVersions[versionIndex].Sections;

      const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
      const section = user.contentVersions[versionIndex].Sections[sectionIndex];

      return res.status(201).json({"section":section})

  } catch (error) {
      console.log(error)
      return res.status(404).json({"message":error})
  }
}

const updateSection = async(req,res) => {
    try {

        const authRes = await verifyToken(req.headers.token,"updateSection");
        if(!authRes){return res.status(401).json({message:"JWT Auth Failed"})}

        const {userName : userName , sectionID : sectionID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        const updateDetails = req.body;

        let sectionName = updateDetails.sectionName;
        let sectionHeader = updateDetails.sectionHeader;

        let allSections = user.contentVersions[versionIndex].Sections;

        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

        console.log(sectionName,sectionHeader)

        if(sectionName){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionName`] : sectionName}},{new:true})}
        if(sectionHeader){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionHeader`] : sectionHeader}},{new:true})}

        return res.status(201).json({"updatedUser": user})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const deleteSection = async (req,res)=>{

    try {
      const authRes = await verifyToken(req.headers.token,"delsection");
      if(!authRes){return res.status(401).json({message:"JWT Auth Failed"})}

      const {userName : userName , sectionID : sectionID} = req.params

      let user = await Users.findOne({userName:userName})
      const versionIndex = (user.contentVersions).length - 1;

      let allSections = user.contentVersions[versionIndex].Sections;

      const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

      allSections.splice(sectionIndex,1);

      user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections`] : allSections}},{new:true})

      return res.status(201).json({"updatedUser": user})

    } catch (error) {
      return res.status(404).json({"message":error})
    }

}

const  getCurrentSectionChild = async(req,res) => {
    try {
        const {userName : userName ,sectionID : sectionID, sectionChildID : sectionChildID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;

        let sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        let sectionContent = allSections[sectionIndex].sectionContent;
        let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID))
        let sectionChild = user.contentVersions[versionIndex].Sections[sectionIndex].sectionContent[sectionChildIndex]

        return res.status(201).json({"sectionChild": sectionChild})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  getPublishedSectionChild = async(req,res) => {
  try {
      const {userName : userName ,publishedVersion:publishedVersion,sectionID : sectionID, sectionChildID : sectionChildID} = req.params

      let user = await Users.findOne({userName:userName})
      const versionIndex = publishedVersion - 1;

      let allSections = user.contentVersions[versionIndex].Sections;

      let sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
      let sectionContent = allSections[sectionIndex].sectionContent;
      let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID))
      let sectionChild = user.contentVersions[versionIndex].Sections[sectionIndex].sectionContent[sectionChildIndex]

      return res.status(201).json({"sectionChild": sectionChild})

  } catch (error) {
      console.log(error)
      return res.status(404).json({"message":error})
  }
}

const  updateSectionChild = async(req,res) => {
    try {
        const authRes = await verifyToken(req.headers.token,"updateSectionChild");
        if(!authRes){return res.status(401).json({message:"JWT Auth Failed"})}

        const {userName : userName ,sectionID : sectionID, sectionChildID : sectionChildID} = req.params

        let user = await Users.findOne({userName:userName})
        let versionIndex = (user.contentVersions).length - 1;

        let updateDetails = req.body;
        let sectionChildName = updateDetails.sectionChildName;
        let sectionChildShortDesc = updateDetails.sectionChildShortDesc;
        let sectionChildDesc = updateDetails.sectionChildDesc;
        let sectionChildLinks = updateDetails.sectionChildLinks;


        let allSections = user.contentVersions[versionIndex].Sections;

        let sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        let sectionContent = allSections[sectionIndex].sectionContent;
        let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID))


        if(sectionChildName){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildName`] : sectionChildName}},{new:true})}
        if(sectionChildShortDesc){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildShortDesc`] : sectionChildShortDesc}},{new:true})}
        if(sectionChildDesc){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildDesc`] : sectionChildDesc}},{new:true})}
        if(sectionChildLinks){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildLinks`] : sectionChildLinks}},{new:true})}

        return res.status(201).json({"updatedUser": user})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  addSectionChild = async(req,res) => {
    try {
        const authRes = await verifyToken(req.headers.token,"addsectionchild");
        if(!authRes){return res.status(401).json({message:"JWT Auth Failed"})}

        const {userName : userName ,sectionID : sectionID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;
        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

        let sectionContent = user.contentVersions[versionIndex].Sections[sectionIndex].sectionContent;

        let newSectionChild = req.body
        try {
          newSectionChild.sectionChildID = sectionContent[sectionContent.length-1].sectionChildID + 1
        } catch (error) {
          newSectionChild.sectionChildID = 1
        }


        sectionContent.push(newSectionChild)

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent`] : sectionContent}},{new:true})

        return res.status(201).json({"updatedUser":user})
    } catch (error) {
        return res.status(404).json({"message":error})
    }
}

const deleteSectionChild = async(req,res)=>{
    try {
        const authRes = await verifyToken(req.headers.token,"delsectionchild");
        if(!authRes){return res.status(401).json({message:"JWT Auth Failed"})}

        const {userName : userName ,sectionID : sectionID , sectionChildID : sectionChildID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;
        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        let sectionContent = user.contentVersions[versionIndex].Sections[sectionIndex].sectionContent;
        let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID));

        sectionContent.splice(sectionChildIndex,1);

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent`] : sectionContent}},{new:true})

        return res.status(201).json({"updatedUser":user})
    } catch (error) {
        console.log(error);
        return res.status(404).json({"message":"Error" })
    }

}

module.exports = {addSection, updateSection, getCurrentSections,getPublishedSections, getCurrentSectionChild, getPublishedSectionChild,
                  addSectionChild, getCurrentSection,getPublishedSection,updateSectionChild , deleteSectionChild, deleteSection}
