import axios from 'axios';
import configData from "./../config.dev.json"

const usersURL = configData.USERS_URL
const contentURL = configData.CONTENT_URL
const imgUploadURL = configData.IMG_UPLOAD_URL

console.log("API URLS ",usersURL,contentURL,imgUploadURL)

const verifier = {headers: {token : localStorage.getItem('token')}}

export const uploadImageServer = (imageData) => axios.post(imgUploadURL,imageData)
export const fetchUsers = () => axios.get(usersURL)
export const fetchUser = (userName) => axios.get(`${usersURL}/${userName}`)
export const updateGeneralDetails = (userName,postData) => axios.patch(`${usersURL}/${userName}`,postData,verifier)
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`,verifier)


export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
export const addSection = (userName,postData) => axios.post(`${contentURL}/sections/${userName}`,postData,verifier)

export const updateSection = (userName,sectionID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,updateData,verifier)
export const addSectionChild = (userName,sectionID,postData) => axios.post(`${contentURL}/sections/${userName}/${sectionID}`,postData,verifier)
export const deleteSection = (userName,sectionID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}`,verifier)

export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,updateData,verifier)
export const deleteSectionChild = (userName,sectionID,sectionChildID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,verifier)

export const publishVersion = (userName) => axios.post(`${usersURL}/${userName}`,{},verifier)
