const mongoose = require('mongoose')

const sectionsSchema = mongoose.Schema({
    sectionName : String,
    sectionID : Number,
    sectionHeader : String,
    sectionContent: [{
        sectionChildID : Number,
        sectionChildName : String,
        sectionChildImage : String,
        sectionChildShortDesc : String,
        sectionChildDesc : String,
        sectionChildLinks : [String]
    }]
})

module.exports =  sectionsSchema
