import axios from 'axios'

const usersURL = "http://localhost:5000/users"
const contentURL = "http://localhost:5000/content"

export const fetchUsers = () => axios.get(usersURL)
export const fetchUser = (userName) => axios.get(`${usersURL}/${userName}`)
export const updateGeneralDetails = (userName) => axios.patch(`${usersURL}/${userName}`,{"name":"Cynaptics SUPER!!!","logo":"logoSUPER.com","socialMedia":["instaSUPER.com","fbSUPER.com"],"src":"homePageWOW.com","caption":"Cynaptics Caption WOW!!!","email":"cynapticsWOW@iiti.ac.in","phoneNumber":7777})
export const deleteUser = (userName) => axios.delete(`${usersURL}/${userName}`)


export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
export const updateGeneralSection = (userName,sectionID) => axios.patch(`${contentURL}/sections/${userName}/${sectionID}`,{"sectionName" : "Projects Latest Redux", "sectionHeader" : "Header Latest Redux"})
