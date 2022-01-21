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
export const fetchUserAdmin = (userName) => axios.get(`${usersURL}/${userName}`,{headers: {authorization : localStorage.getItem('token')}})
export const updateGeneralDetails = (userName,postData) => axios.patch(`${usersURL}/${userName}`,postData,{headers: {authorization  : localStorage.getItem('token')}})
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`,{headers: {authorization : localStorage.getItem('token')}})

export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
export const addSection = (userName,postData) => axios.post(`${contentURL}/sections/${userName}`,postData,{headers: {authorization: localStorage.getItem('token')}})

export const updateSection = (userName,sectionID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,updateData,{headers: {authorization  : localStorage.getItem('token')}})
export const addSectionChild = (userName,sectionID,postData) => axios.post(`${contentURL}/sections/${userName}/${sectionID}`,postData,{headers: {authorization  : localStorage.getItem('token')}})
export const deleteSection = (userName,sectionID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}`,{headers: {authorization  : localStorage.getItem('token')}})

export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,updateData,{headers: {authorization  : localStorage.getItem('token')}})
export const deleteSectionChild = (userName,sectionID,sectionChildID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,{headers: {authorization  : localStorage.getItem('token')}})

export const autoSaveContent = (userName,contentVersions) => axios.patch(`${usersURL}/autosave/${userName}`,contentVersions,{headers: {authorization  : localStorage.getItem('token')}})

export const publishVersion = (userName) => axios.post(`${usersURL}/${userName}`,{},{headers: {authorization  : localStorage.getItem('token')}})
