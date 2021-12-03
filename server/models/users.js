const mongoose = require('mongoose')
const sectionsSchema = require('./sections')

const usersSchema = mongoose.Schema({
    userID : {
        email : {type:String , required:true},
        goAuth : {type:String , required:true}
    },

    userDetails : {
        userName : {type:String , required:true},
        userLogo : {type:String , required:true},
        socialMedia : [String]
    },

    homePagePoster : {
        src : { type : String, default: ""},
        caption : { type : String, default: ""}
    },

    contactDetails : {
        email : String,
        phoneNumber : Number
    },

    Sections : { type : [sectionsSchema]},

    themeDetails = {
        color : {type: String , default: ''},
        font : {type: String , default:''}
    }
})

var Users = mongoose.model('Users', usersSchema);

export default Users;