const addSectionChildHelper = (section,postData)=>{
    let sectionContent = section.sectionContent;
    try {
        postData.sectionChildID = sectionContent[sectionContent.length-1].sectionChildID + 1
    } catch (error) {
        postData.sectionChildID = 1
    }

    (section.sectionChildSequence).push((postData.sectionChildID).toString());
    (section.sectionContent).push(postData);
    return section
}

const updateSectionChild = (sectionChild,updateData)=>{
    sectionChild.sectionChildName = updateData.sectionChildName
    sectionChild.sectionChildShortDesc = updateData.sectionChildShortDesc
    sectionChild.sectionChildDesc = updateData.sectionChildDesc
    sectionChild.sectionChildLinks = updateData.sectionChildLinks
    sectionChild.visible = updateData.visible
    return sectionChild
}

const updateSectionChildHelper = (section,sectionChildID,updateData)=>{
    (section.sectionContent).map((sectionChild)=>sectionChild.sectionChildID===sectionChildID?updateSectionChild(sectionChild,updateData):sectionChild)
    return section
}

const findSectionID = (contentVersions)=>{
    let allSections = contentVersions[contentVersions.length-1].Sections
    if(allSections.length == 0){return 1;}

    return allSections[allSections.length-1].sectionID + 1
}

const deleteSectionChildHelper = (section,sectionChildID)=>{
    section.sectionChildSequence = (section.sectionChildSequence).filter((sectionChildIDArr)=>(parseInt(sectionChildIDArr))!=sectionChildID)
    section.sectionContent = (section.sectionContent).filter((sectionChild)=>sectionChild.sectionChildID!==sectionChildID)
    return section
}

const updateSectionHelper = (section,updateData) => {
    section.sectionName = updateData.sectionName
    section.sectionHeader = updateData.sectionHeader
    section.visible = updateData.visible
    return section
}

const changeSequenceHelper = (section,sectionChildID,type) => {
    let sectionChildIndex = section.sectionChildSequence.findIndex((index)=>(parseInt(index))===sectionChildID)
    if(type==='UP')
    {
        let temp = section.sectionChildSequence[sectionChildIndex]
        section.sectionChildSequence[sectionChildIndex] = section.sectionChildSequence[sectionChildIndex-1]
        section.sectionChildSequence[sectionChildIndex-1] = temp
    }
    else if(type==='DOWN')
    {
        let temp = section.sectionChildSequence[sectionChildIndex]
        section.sectionChildSequence[sectionChildIndex] = section.sectionChildSequence[sectionChildIndex+1]
        section.sectionChildSequence[sectionChildIndex+1] = temp
    }
    return section
}

const reducer =  (contentVersions=[],action) => {

    let lastIndex = contentVersions.length - 1

    switch (action.type) {
        case "SET_CONTENT_VERSIONS":
            return action.payload

        case "UPDATE_GENERAL_DETAILS":

            contentVersions[lastIndex].userDetails.name = action.payload.name
            contentVersions[lastIndex].userDetails.socialMedia = action.payload.socialMedia
            contentVersions[lastIndex].homePagePoster.caption = action.payload.caption
            contentVersions[lastIndex].contactDetails.email = action.payload.email
            contentVersions[lastIndex].contactDetails.phoneNumber = action.payload.phoneNumber
            contentVersions[lastIndex].themeDetails = action.payload.themeDetails

            return [... contentVersions]

        case "ADD_SECTION":
            (contentVersions[lastIndex].sectionSequence).push((findSectionID(contentVersions)).toString());
            (contentVersions[lastIndex].Sections).push({... action.payload,sectionID:findSectionID(contentVersions)});
            return [... contentVersions]

        case "ADD_SECTION_CHILD":
            (contentVersions[lastIndex].Sections).map((section)=>section.sectionID===action.payload.sectionID?addSectionChildHelper(section,action.payload.postData):section)
            return [... contentVersions]

        case "UPDATE_SECTION":
            (contentVersions[lastIndex].Sections).map((section)=>section.sectionID===action.payload.sectionID?updateSectionHelper(section,action.payload.updateData):section)
            return [... contentVersions]

        case "DELETE_SECTION":
            (contentVersions[lastIndex].sectionSequence) = (contentVersions[lastIndex].sectionSequence).filter((sectionID)=>sectionID!==(action.payload.sectionID.toString()));
            (contentVersions[lastIndex].Sections) = (contentVersions[lastIndex].Sections).filter((section)=>section.sectionID!==action.payload.sectionID);
            return [... contentVersions]

        case "UPDATE_SECTION_CHILD":
            console.log(action.payload.updateData);
            (contentVersions[lastIndex].Sections).map((section)=>section.sectionID===action.payload.sectionID?updateSectionChildHelper(section,action.payload.sectionChildID,action.payload.updateData):section)
            console.log(contentVersions)
            return [... contentVersions]

        case "DELETE_SECTION_CHILD":
            (contentVersions[lastIndex].Sections).map((section)=>section.sectionID===action.payload.sectionID?deleteSectionChildHelper(section,action.payload.sectionChildID):section)
            return [... contentVersions]

        case "CHANGE_SECTION_CHILD_SEQ":
            (contentVersions[lastIndex].Sections).map((section)=>section.sectionID===action.payload.sectionID?changeSequenceHelper(section,action.payload.sectionChildID,action.payload.type):section)
            return [... contentVersions]
        case "SAVE_SEQUENCE":
            (contentVersions[lastIndex].sectionSequence) = action.payload.sectionSequence
            return [... contentVersions]



        default:
            return [... contentVersions]

    }
}

export default reducer
