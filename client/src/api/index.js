import axios from 'axios';
import configData from "../config.dev.json"

const usersURL = configData.USERS_URL
const contentURL = configData.CONTENT_URL
const imgUploadURL = configData.IMG_UPLOAD_URL
const publicGetURL = configData.PUBLIC_GET_URL

console.log("API URLS ",usersURL,contentURL,imgUploadURL,publicGetURL)

export const fetchUserPublic = (userName) => axios.get(`${publicGetURL}/${userName}`)

export const uploadImageServer = (imageData) => axios.post(imgUploadURL,imageData)
export const fetchUsers = () => axios.get(usersURL)
export const fetchUserAdmin = (userName) => axios.get(`${usersURL}/${userName}`,{headers: {token : localStorage.getItem('token')}})
export const updateGeneralDetails = (userName,postData) => axios.patch(`${usersURL}/${userName}`,postData,{headers: {token : localStorage.getItem('token')}})
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`,{headers: {token : localStorage.getItem('token')}})

export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
export const addSection = (userName,postData) => axios.post(`${contentURL}/sections/${userName}`,postData,{headers: {token : localStorage.getItem('token')}})

export const updateSection = (userName,sectionID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,updateData,{headers: {token : localStorage.getItem('token')}})
export const addSectionChild = (userName,sectionID,postData) => axios.post(`${contentURL}/sections/${userName}/${sectionID}`,postData,{headers: {token : localStorage.getItem('token')}})
export const deleteSection = (userName,sectionID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}`,{headers: {token : localStorage.getItem('token')}})

export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,updateData,{headers: {token : localStorage.getItem('token')}})
export const deleteSectionChild = (userName,sectionID,sectionChildID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,{headers: {token : localStorage.getItem('token')}})

export const publishVersion = (userName) => axios.post(`${usersURL}/${userName}`,{},{headers: {token : localStorage.getItem('token')}})
