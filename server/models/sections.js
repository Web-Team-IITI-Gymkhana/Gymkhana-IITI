const mongoose = require('mongoose')

const sectionsSchema = mongoose.Schema({
    sectionName : String,
    sectionID : Number,
    sectionHeader : String,
    sectionContent: [{
        sectionChildName : String,
        sectionChildImage : String,
        sectionChildDesc : String
    }]
})

module.exports = sectionsSchema