import mongoose from 'mongoose'
import sectionsSchema from './sections.js'

const contentSchema = mongoose.Schema({

    contentVersion : Number,

    userDetails : {
        name : {type:String , required:true},
        logo : {type:String , required:true},
        socialMedia : {
          Instagram : { type : String, default: ""},
          LinkedIn : { type : String, default: ""},
          Facebook : { type : String, default: ""},
          Discord : { type : String, default: ""},
        }
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

export default contentSchema;
