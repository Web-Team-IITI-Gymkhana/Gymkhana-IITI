import * as api from "../../api";

export const setContentVersions = (userName,type) => async (dispatch) => {
    try {
        let user = null
        if(type==="admin")
        {
            console.log("In admin user fetch action redux")
            try{
                const {data} = await api.fetchUserAdmin()
                console.log("Fetch data",data)
                user = data.user
                if(!user){dispatch({type:"ADMIN_LOGOUT"})}
            }
            catch(error){
                console.log("In redux error")
                dispatch({type:"ADMIN_LOGOUT"})
            }
        }
        else
        {
            const {data} = await api.fetchUserPublic(userName)
            user = data.user
        }
        dispatch({type:"SET_CONTENT_VERSIONS",payload:user.contentVersions})
    } catch (error) {
        console.log(error)
    }
}


export const updateGeneralDetails = (postData) => async (dispatch) => {
    try{
        await api.updateGeneralDetails(postData)
        dispatch({type:"UPDATE_GENERAL_DETAILS",payload:postData})
    }
    catch(error){
        console.log(error)
    }
}

export const addSection = (postData) => async (dispatch) => {
    try{
        await api.addSection(postData)
        dispatch({type:"ADD_SECTION",payload:postData})
    }
    catch(error){
        console.log(error)
    }
}

export const addSectionChild = (sectionID,postData) => async (dispatch) => {
    try{
        await api.addSectionChild(sectionID,postData)
        dispatch({type:"ADD_SECTION_CHILD",payload:{sectionID:sectionID,postData:postData}})
    }
    catch(error){
        console.log(error)
    }
}

export const updateSection = (sectionID,updateData) => async (dispatch) => {
    try {
      await api.updateSection(sectionID,updateData)
      dispatch({type:"UPDATE_SECTION",payload:{sectionID:sectionID,updateData:updateData}})
    } catch (error) {
        console.log(error)
    }
  }

export const deleteSection = (sectionID) => async (dispatch) => {
    try {
      await api.deleteSection(sectionID)
      dispatch({type:"DELETE_SECTION",payload:{sectionID:sectionID}})
    } catch (error) {
        console.log(error)
    }
  }


export const updateSectionChild = (sectionID,sectionChildID,updateData) => async (dispatch) => {
    try{
        await api.updateSectionChild(sectionID,sectionChildID,updateData)
        dispatch({type:"UPDATE_SECTION_CHILD",payload:{sectionID:sectionID,sectionChildID:sectionChildID,updateData:updateData}})
    }
    catch(error){
        console.log(error)
    }
}

export const deleteSectionChild = (sectionID,sectionChildID) => async (dispatch) => {
    try{
        await api.deleteSectionChild(sectionID,sectionChildID)
        dispatch({type:"DELETE_SECTION_CHILD",payload:{sectionID:sectionID,sectionChildID:sectionChildID}})
    }
    catch(error){
        console.log(error)
    }
}

export const publishVersion = () => async (dispatch) => {
    try{
        console.log(dispatch)
        await api.publishVersion()
    }
    catch(error){
        console.log(error)
    }
}


export const uploadImageServer = (imageData) => async (dispatch) => {
    try {
        await api.uploadImageServer(imageData)
        dispatch({type:"UPLOAD_IMAGE"})
    } catch(error){
        console.log(error)
    }
}

export const changeSequence = (sectionID,actionType) => async (dispatch) => {
    try {
        await api.changeSequence(sectionID,actionType)
        dispatch({type:"CHANGE_SEQUENCE",payload:{sectionID:sectionID,actionType:actionType}})
    } catch (error) {
        console.log(error)
    }
}

