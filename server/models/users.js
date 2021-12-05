const mongoose = require('mongoose')
const contentSchema = require('./content')

const usersSchema = mongoose.Schema({
    userName : String,
    userEmailId : String,
    publishedVersion : Number,
    contentVersions : [contentSchema]
})

var Users = mongoose.model('Users', usersSchema);

module.exports = Users