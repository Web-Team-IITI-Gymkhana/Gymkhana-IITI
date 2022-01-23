const mongoose = require('mongoose')

const sectionsSchema = mongoose.Schema({
    sectionName : String,
    sectionID : Number,
    sectionHeader : String,
    visible : Boolean,
    sectionContent: [{
        sectionChildID : Number,
        sectionChildName : String,
        sectionChildImage : String,
        sectionChildShortDesc : String,
        sectionChildDesc : String,
        sectionChildLinks : [String],
        visible : Boolean
    }]
})

module.exports =  sectionsSchema
