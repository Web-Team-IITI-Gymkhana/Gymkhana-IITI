import axios from 'axios';

const corsOptions = {
    credentials: "include",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    },
}

const usersURL = process.env.REACT_APP_USERS_URL
const contentURL = process.env.REACT_APP_CONTENT_URL
const imgUploadURL = process.env.REACT_APP_IMG_UPLOAD_URL

export const uploadImageServer = (imageData) => axios.post(imgUploadURL,imageData,{... corsOptions,method:"POST"})

export const fetchUsers = () => axios.get(usersURL,{... corsOptions,method:"GET"})
export const fetchUser = (userName) => axios.get(`${usersURL}/${userName}`,{... corsOptions,method:"GET"})
export const updateGeneralDetails = (userName,postData) => axios.patch(`${usersURL}/${userName}`,postData,{... corsOptions,method:"PATCH"})
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`,{... corsOptions,method:"DELETE"})


export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`,{... corsOptions,method:"GET"})
export const addSection = (userName,postData) => axios.post(`${contentURL}/sections/${userName}`,postData,{... corsOptions,method:"POST"})

export const updateSection = (userName,sectionID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,updateData,{... corsOptions,method:"PATCH"})
export const addSectionChild = (userName,sectionID,postData) => axios.post(`${contentURL}/sections/${userName}/${sectionID}`,postData,{... corsOptions,method:"POST"})
export const deleteSection = (userName,sectionID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}`,{... corsOptions,method:"DELETE"})

export const updateSectionChild = (userName,sectionID,sectionChildID,updateData) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,updateData,{... corsOptions,method:"PATCH"})
export const deleteSectionChild = (userName,sectionID,sectionChildID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,{... corsOptions,method:"DELETE"})

export const publishVersion = (userName) => axios.post(`${usersURL}/${userName}`,{... corsOptions,method:"POST"})
