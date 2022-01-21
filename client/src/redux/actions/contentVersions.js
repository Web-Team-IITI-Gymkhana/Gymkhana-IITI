import * as api from "../../api";

export const setContentVersions = (userName,type) => async (dispatch) => {
    try {
        let user = null
        if(type==="admin")
        {
            console.log("In admin user fetch action redux")
            try{
                const {data} = await api.fetchUserAdmin(userName)
                console.log("Fetch data",data)
                user = data.user
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

        dispatch({type:"SET_PUBLISHED_VERSION",payload:user.publishedVersion})
        dispatch({type:"SET_CONTENT_VERSIONS",payload:user.contentVersions})
    } catch (error) {
        console.log(error)
    }
}


export const updateGeneralDetails = (userName,postData) => async (dispatch) => {
    try{
        await api.updateGeneralDetails(userName,postData)
        dispatch({type:"UPDATE_GENERAL_DETAILS",payload:postData})
    }
    catch(error){
        console.log(error)
    }
}

export const addSection = (userName,postData) => async (dispatch) => {
    try{
        await api.addSection(userName,postData)
        dispatch({type:"ADD_SECTION",payload:postData})
    }
    catch(error){
        console.log(error)
    }
}

export const addSectionChild = (userName,sectionID,postData) => async (dispatch) => {
    try{
        await api.addSectionChild(userName,sectionID,postData)
        dispatch({type:"ADD_SECTION_CHILD",payload:{sectionID:sectionID,postData:postData}})
    }
    catch(error){
        console.log(error)
    }
}

export const updateSection = (userName,sectionID,updateData) => async (dispatch) => {
    try {
      await api.updateSection(userName,sectionID,updateData)
      dispatch({type:"UPDATE_SECTION",payload:{sectionID:sectionID,updateData:updateData}})
    } catch (error) {
        console.log(error)
    }
  }

export const deleteSection = (userName,sectionID) => async (dispatch) => {
    try {
      await api.deleteSection(userName,sectionID)
      dispatch({type:"DELETE_SECTION",payload:{sectionID:sectionID}})
    } catch (error) {
        console.log(error)
    }
  }


export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => async (dispatch) => {
    try{
        await api.updateSectionChild(userName,sectionID,sectionChildID,updateData)
        dispatch({type:"UPDATE_SECTION_CHILD",payload:{sectionID:sectionID,sectionChildID:sectionChildID,updateData:updateData}})
    }
    catch(error){
        console.log(error)
    }
}

export const deleteSectionChild = (userName,sectionID,sectionChildID) => async (dispatch) => {
    try{
        await api.deleteSectionChild(userName,sectionID,sectionChildID)
        dispatch({type:"DELETE_SECTION_CHILD",payload:{sectionID:sectionID,sectionChildID:sectionChildID}})
    }
    catch(error){
        console.log(error)
    }
}

export const publishVersion = (userName) => async (dispatch) => {
    try{
        await api.publishVersion(userName)
        dispatch({type:"PUBLISH_VERSION"})
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

