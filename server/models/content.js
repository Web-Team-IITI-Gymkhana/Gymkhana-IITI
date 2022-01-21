const mongoose = require('mongoose')
const sectionsSchema = require('./sections')

const contentSchema = mongoose.Schema({

    contentVersion : Number,

    userDetails : {
        name : {type:String , required:true},
        logo : {type:String , required:true},
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

    sectionSequence : [String],

    Sections : { type : [sectionsSchema]},

    themeDetails : String
})

module.exports =  contentSchema
