import axios from 'axios'

const usersURL = "http://localhost:5000/users"
const contentURL = "http://localhost:5000/content"

export const fetchUsers = () => axios.get(usersURL)
export const fetchSections = (userName) => axios.get(`${contentURL}/sections/${userName}`)
