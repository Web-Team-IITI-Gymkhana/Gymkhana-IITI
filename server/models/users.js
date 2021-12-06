const mongoose = require('mongoose')
const contentSchema = require('./content')

const usersSchema = mongoose.Schema({
    userEmailId : String,
    contentVersions : [contentSchema]
})

var Users = mongoose.model('Users', usersSchema);

module.exports = Users;