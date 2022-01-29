import axios from 'axios';

import configData from "../config.prod.json"

const usersURL = configData.USERS_URL
const contentURL = configData.CONTENT_URL
const imgUploadURL = configData.IMG_UPLOAD_URL
const publicGetURL = configData.PUBLIC_GET_URL

console.log("API URLS ",usersURL,contentURL,imgUploadURL,publicGetURL)

export const uploadImageServer = (imageData) => axios.post(imgUploadURL,imageData,{headers: {authorization : localStorage.getItem('token')}})

export const fetchUserPublic = (userName) => axios.get(`${publicGetURL}/${userName}`)

export const fetchUserAdmin = () => axios.get(`${usersURL}`,{headers: {authorization : localStorage.getItem('token')}})
export const updateGeneralDetails = (postData) => axios.patch(`${usersURL}`,postData,{headers: {authorization  : localStorage.getItem('token')}})
export const publishVersion = () => axios.post(`${usersURL}`,{},{headers: {authorization  : localStorage.getItem('token')}})

export const addSection = (postData) => axios.post(`${contentURL}/sections`,postData,{headers: {authorization: localStorage.getItem('token')}})
export const updateSection = (sectionID,updateData) => axios.patch(`${contentURL}/sections/${sectionID}`,updateData,{headers: {authorization  : localStorage.getItem('token')}})
export const deleteSection = (sectionID) => axios.delete(`${contentURL}/sections/${sectionID}`,{headers: {authorization  : localStorage.getItem('token')}})
export const saveSection = (sectionID,updatedSection) => axios.patch(`${contentURL}/sections/save/${sectionID}`,updatedSection,{headers: {authorization  : localStorage.getItem('token')}})


