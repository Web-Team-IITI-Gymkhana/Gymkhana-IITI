import * as api from "../../api";

export const getSections = (userName) => async (dispatch) => {
    try {
        const {data} = await api.fetchSections(userName)
        dispatch({type:"FETCH_ALL_SECTIONS",payload:data.sections})
    } catch (error) {
        console.log(error)
    }
}

export const addSection = (userName,postData) => async (dispatch) => {
  try {
      await api.addSection(userName,postData)
      dispatch({type:"ADD_SECTION"})
  } catch (error) {
      console.log(error)
  }
}

export const updateSection = (userName,sectionID) => async (dispatch) => {
  try {
    await api.updateSection(userName,sectionID)
    dispatch({type:"UPDATE_SECTION"})
  } catch (error) {
      console.log(error)
  }
}
export const deleteSection = (userName,sectionID) => async (dispatch) => {
  try {
    await api.deleteSection(userName,sectionID)
    dispatch({type:"DELETE_SECTION"})
  } catch (error) {
      console.log(error)
  }
}

export const addSectionChild = (userName,sectionID,postData) => async (dispatch) => {
  try {
    await api.addSectionChild(userName,sectionID,postData)
    dispatch({type:"ADD_SECTION_CHILD"})
  } catch (error) {
      console.log(error)
  }
}


export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => async (dispatch) => {
  try {
    await api.updateSectionChild(userName,sectionID,sectionChildID,updateData)
    dispatch({type:"UPDATE_SECTION_CHILD"})
  } catch (error) {
      console.log(error)
  }
}

export const deleteSectionChild = (userName,sectionID,sectionChildID) => async (dispatch) => {
  try {
    await api.deleteSectionChild(userName,sectionID,sectionChildID)
    dispatch({type:"DELETE_SECTION_CHILD"})
  } catch (error) {
      console.log(error)
  }
}
