const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "/google/callback",
},
  function (accessToken, refreshToken, profile, done) {
    console.log("LATEST GOOGLE BASED OAUTH VALIDATION GETTING CALLED")
    const email = profile.emails[0].value
    console.log("GOOGLE EMAIL IN PASSPORT SETUP ", email)
    if (email === 'cse200001044@iiti.ac.in') { return done(null, profile) }
    return done(null, false)
  }
))

passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (obj, done) {
  done(null, obj)
})
