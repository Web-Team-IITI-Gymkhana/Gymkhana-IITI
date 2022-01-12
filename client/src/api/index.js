import axios from 'axios'

// const usersURL = "http://localhost:5000/users"
// const contentURL = "http://localhost:5000/content"
// const imgUploadURL = "http://localhost:5000/uploadImage"

const usersURL = "https://gymkhana-iiti.herokuapp.com/users"
const contentURL = "https://gymkhana-iiti.herokuapp.com/content"
const imgUploadURL = "https://gymkhana-iiti.herokuapp.com/uploadImage"

export const uploadImageServer = (imageData) => axios.post(imgUploadURL,imageData)

export const fetchUsers = () => axios.get(usersURL)
export const fetchUser = (userName) => axios.get(`${usersURL}/${userName}`)
export const updateGeneralDetails = (userName,postData) => axios.patch(`${usersURL}/${userName}`,postData)
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`)


export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
export const addSection = (userName,postData) => axios.post(`${contentURL}/sections/${userName}`,postData)

export const updateSection = (userName,sectionID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,updateData)
export const addSectionChild = (userName,sectionID,postData) => axios.post(`${contentURL}/sections/${userName}/${sectionID}`,postData)
export const deleteSection = (userName,sectionID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}`)

export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,updateData)
export const deleteSectionChild = (userName,sectionID,sectionChildID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`)

export const publishVersion = (userName) => axios.post(`${usersURL}/${userName}`)
