const Users = require('../models/users')

const  getAllSections = async(req,res) => {
    try {
        const {userName : userName} = req.params
        const user = await Users.findOne({userName:userName});
        const versionIndex = (user.contentVersions).length - 1;

        const allSections = user.contentVersions[versionIndex].Sections;

        return res.status(201).json({"sections": allSections})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  addSection = async(req,res) => {
    try {
        const {userName : userName} = req.params
        let user = await Users.findOne({userName:userName});
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;


        const newSection = req.body;
        newSection.sectionID = allSections[allSections.length-1].sectionID + 1

        allSections.push(newSection);

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections`] : allSections}},{new:true})

        return res.status(201).json({"updatedUser": user})


    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  getSection = async(req,res) => {
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

const updateSection = async(req,res) => {
    try {
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

const  getSectionChild = async(req,res) => {
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

const  updateSectionChild = async(req,res) => {
    try {
        const {userName : userName ,sectionID : sectionID, sectionChildID : sectionChildID} = req.params

        let user = await Users.findOne({userName:userName})
        let versionIndex = (user.contentVersions).length - 1;

        let updateDetails = req.body;

        let sectionChildName = updateDetails.sectionChildName;
        let sectionChildImage = updateDetails.sectionChildImage;
        let sectionChildDesc = updateDetails.sectionChildDesc;


        let allSections = user.contentVersions[versionIndex].Sections;

        let sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));
        let sectionContent = allSections[sectionIndex].sectionContent;
        let sectionChildIndex = sectionContent.findIndex((element) => element.sectionChildID === parseInt(sectionChildID))


        if(sectionChildName){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildName`] : sectionChildName}},{new:true})}
        if(sectionChildImage){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildImage`] : sectionChildImage}},{new:true})}
        if(sectionChildDesc){user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent.${sectionChildIndex}.sectionChildDesc`] : sectionChildDesc}},{new:true})}

        return res.status(201).json({"updatedUser": user})

    } catch (error) {
        console.log(error)
        return res.status(404).json({"message":error})
    }
}

const  addSectionChild = async(req,res) => {
    try {
        const {userName : userName ,sectionID : sectionID} = req.params

        let user = await Users.findOne({userName:userName})
        const versionIndex = (user.contentVersions).length - 1;

        let allSections = user.contentVersions[versionIndex].Sections;
        const sectionIndex = allSections.findIndex((element) => element.sectionID === parseInt(sectionID));

        let sectionContent = user.contentVersions[versionIndex].Sections[sectionIndex].sectionContent;

        let newSectionChild = req.body
        newSectionChild.sectionChildID = sectionContent[sectionContent.length-1].sectionChildID + 1

        sectionContent.push(newSectionChild)

        user = await Users.updateOne({userName:userName},{'$set': { [`contentVersions.${versionIndex}.Sections.${sectionIndex}.sectionContent`] : sectionContent}},{new:true})

        return res.status(201).json({"updatedUser":user})
    } catch (error) {
        return res.status(404).json({"message":error})
    }
}

const deleteSectionChild = async(req,res)=>{
    try {
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

module.exports = {addSection, updateSection, getAllSections, getSectionChild,
                  addSectionChild, getSection,updateSectionChild , deleteSectionChild, deleteSection}
