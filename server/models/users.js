import mongoose from 'mongoose';

const sectionsSchema = mongoose.Schema({
    sectionName : String,
    sectionID : Number,
    sectionHeader : String,
    sectionContent: {
        sectionChildName : String,
        sectionChildImage : String,
        sectionChildDesc : String
    }
})

const clubsSchema = mongoose.Schema({
    userID : {
        email : {type:String , required:true},
        goAuth : {type:String , required:true}
    },

    clubDetails : {
        clubName : {type:String , required:true},
        clubLogo : {type:String , required:true},
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




var Clubs = mongoose.model('Clubs', clubsSchema);

export default Clubs;