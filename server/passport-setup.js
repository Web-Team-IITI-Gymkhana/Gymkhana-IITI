const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const Users = require('./models/users')

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/profile"
},
    function (accessToken, refreshToken, profile, done) {
        // use the profile info to check if user is existed or not in db
        console.log(profile)
        return done(null, profile);

    }
));
