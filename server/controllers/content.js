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

const  updateSectionChild = async(req,res) => {
    try {
        const userName = req.userName
        console.log("Update section child called",userName)
        const {sectionID : sectionID, sectionChildID : sectionChildID} = req.params

        let user = await Users.findOne({userName:userName})
        let versionIndex = (user.contentVersions).length - 1;

        let updateDetails = req.body;
        let sectionChildName = updateDetails.sectionChildName;
        let sectionChildShortDesc = updateDetails.sectionChildShortDesc;
        let sectionChildDesc = updateDetails.sectionChildDesc;
        let sectionChildLinks = updateDetails.sectionChildLinks;
        let visible = updateDetails.visible


        let allSections = user.contentVersions[versionIndex].Sections;

        let sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        let sectionContent = allSections[sectionIndex].sectionContent;
        let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID))


        if(sectionChildName){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildName`] : sectionChildName}},{new:true})}
        if(sectionChildShortDesc){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildShortDesc`] : sectionChildShortDesc}},{new:true})}
        if(sectionChildDesc){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildDesc`] : sectionChildDesc}},{new:true})}
        if(sectionChildLinks){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildLinks`] : sectionChildLinks}},{new:true})}
        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.visible`] : visible}},{new:true})
        return res.status(201).json({"updatedUser": user})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  addSectionChild = async(req,res) => {
    try {
        const userName = req.userName
        console.log("Add section child called",userName)
        const {sectionID : sectionID} = req.params

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

        const userName = req.userName
        console.log("Delete section child called",userName)

        const {sectionID : sectionID , sectionChildID : sectionChildID} = req.params

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

module.exports = {addSection, updateSection, addSectionChild, updateSectionChild , deleteSectionChild, deleteSection}
