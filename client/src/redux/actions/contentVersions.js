import * as api from "../../api";

export const setContentVersions = (userName) => async (dispatch) => {
    try {
        const {data} = await api.fetchUser(userName)
        dispatch({type:"SET_PUBLISHED_VERSION",payload:data.user.publishedVersion})
        dispatch({type:"SET_CONTENT_VERSIONS",payload:data.user.contentVersions})
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
        dispatch({type:"UPDATE_SECTION_CHILD"})
    }
    catch(error){
        console.log(error)
    }
}
