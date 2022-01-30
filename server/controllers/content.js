const Users = require('../models/users')

const  addSection = async(req,res) => {
    try {
        const userName = req.userName
        console.log("Add section called",userName)
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

        let sectionSequence = user.contentVersions[versionIndex].sectionSequence
        sectionSequence.push((newSection.sectionID).toString())

        allSections.push(newSection);

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.sectionSequence`] : sectionSequence}},{new:true})
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections`] : allSections}},{new:true})

        return res.status(201).json({"updatedUser": user})


    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const updateSection = async(req,res) => {
    try {
        const userName = req.userName
        console.log("Update section called",userName)

        const {sectionID : sectionID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        const updateDetails = req.body;

        let sectionName = updateDetails.sectionName;
        let sectionHeader = updateDetails.sectionHeader;
        let visible = updateDetails.visible

        let allSections = user.contentVersions[versionIndex].Sections;

        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

        console.log(sectionName,sectionHeader)

        if(sectionName){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionName`] : sectionName}},{new:true})}
        if(sectionHeader){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionHeader`] : sectionHeader}},{new:true})}
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.visible`] : visible}},{new:true})
        return res.status(201).json({"updatedUser": user})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const deleteSection = async (req,res)=>{

    try {
    const userName = req.userName
    console.log("Delete section called",userName)
      const { sectionID : sectionID} = req.params

      let user = await Users.findOne({userName:userName})
      const versionIndex = (user.contentVersions).length - 1;

      let allSections = user.contentVersions[versionIndex].Sections;

      const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

      allSections.splice(sectionIndex,1);

      let sectionSequence = user.contentVersions[versionIndex].sectionSequence
      sectionSequence = sectionSequence.filter(id=>id!==(sectionID.toString()))

      user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.sectionSequence`] : sectionSequence}},{new:true})
      user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections`] : allSections}},{new:true})

      return res.status(201).json({"updatedUser": user})

    } catch (error) {
      return res.status(404).json({"message":error})
    }

}

const saveSection = async (req,res)=>{

    try {
        const userName = req.userName
        console.log("Save section called",userName)
        const { sectionID : sectionID} = req.params
        const updatedSection = req.body

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;

        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

        allSections[sectionIndex] = updatedSection

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections`] : allSections}},{new:true})

        return res.status(201).json({"updatedUser": user})

    } catch (error) {
      return res.status(404).json({"message":error})
    }

}

const saveSequence = async (req,res)=>{
  try {
    const userName = req.userName
    const sectionSequence = req.body.sectionSequence
    console.log("Save sequence called",userName,sectionSequence)
    let user = await Users.findOne({userName:userName})
    const versionIndex = (user.contentVersions).length - 1;
    user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.sectionSequence`] : sectionSequence}},{new:true})
    return res.status(201).json({"updatedUser": user})
  
  } catch (error) {
    console.log(error)
    return res.status(404).json({"message":error})
  }
}





module.exports = {addSection, updateSection,deleteSection,saveSection,saveSequence}
