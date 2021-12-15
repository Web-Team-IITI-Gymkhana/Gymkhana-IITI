import axios from 'axios'

const usersURL = "http://localhost:5000/users"
const contentURL = "http://localhost:5000/content"

export const fetchUsers = () => axios.get(usersURL)
export const fetchUser = (userName) => axios.get(`${usersURL}/${userName}`)
export const updateGeneralDetails = (userName) => axios.patch(`${usersURL}/${userName}`,{"name":"Cynaptics SUPER!!!","logo":"logoSUPER.com","socialMedia":["instaSUPER.com","fbSUPER.com"],"src":"homePageWOW.com","caption":"Cynaptics Caption WOW!!!","email":"cynapticsWOW@iiti.ac.in","phoneNumber":7777})
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`)


export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
export const addSection = (userName) => axios.post(`${contentURL}/sections/${userName}`,{"sectionName": "Tasdasd","sectionHeader": "Cynaptics xcvcx","sectionContent":[]})

export const updateGeneralSection = (userName,sectionID) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,{"sectionName" : "Projects Latest Redux", "sectionHeader" : "Header Latest Redux"})
export const addSectionChild = (userName,sectionID) => axios.post(`${contentURL}/sections/${userName}/${sectionID}`,{"sectionChildName" : "Latest Project","sectionChildImage" : "ImgLatestProject","sectionChildDesc" : "Latest Project is very good"})
export const deleteSection = (userName,sectionID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}`)

export const updateSectionChild = (userName,sectionID,sectionChildID) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`,{"sectionChildName" : "Latest Hackathon 1","sectionChildImage" : " New Image for Hackathon 1","sectionChildDesc" : "Desc for Hackathon 1"})
export const deleteSectionChild = (userName,sectionID,sectionChildID) => axios.delete(`${contentURL}/sections/${userName}/${sectionID}/${sectionChildID}`)

