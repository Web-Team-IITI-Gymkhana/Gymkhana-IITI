import mongoose from 'mongoose'
import contentSchema from './content.js'

const usersSchema = mongoose.Schema({
    userName : String,
    userEmailId : String,
    publishedVersion : Number, //change to id
    contentVersions : [contentSchema] //array of ids
})

const Users = mongoose.model('Users', usersSchema);

export default Users;

