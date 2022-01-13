const passport = require('passport')
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config()
const Users = require('./models/users')

passport.use(new GoogleStrategy({
    clientID: process.env.PERSONAL_CLIENT_ID,
    clientSecret: process.env.PERSONAL_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback : true
},
    function (request , accessToken, refreshToken, profile, done) {
        // use the profile info to check if user is existed or not in db
        console.log(profile)
        return done(null, profile);
      }
));

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
