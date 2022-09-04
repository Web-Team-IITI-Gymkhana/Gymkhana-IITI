import mongoose from 'mongoose'

const sectionsSchema = mongoose.Schema({
    sectionName : String,
    sectionID : Number,
    sectionHeader : String,
    visible : Boolean,
    //desc,footer,image/icon,theme,
    sectionChildSequence : [String], //array of ids
    // history: [{userName:, resourceType: sectionChild, resourceId:, method:add|delete|update,previousObj, newObj}]
    sectionContent: [
      //separate model with ids stored
      {
        sectionChildID : Number,
        sectionChildName : String,
        sectionChildImage : String,
        sectionChildShortDesc : String,
        sectionChildDesc : String,
        sectionChildLinks : [String],
        visible : Boolean
    }]
})

export default sectionsSchema;
