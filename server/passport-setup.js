const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const Users = require('./models/users')

passport.use(new GoogleStrategy({
    clientID: process.env.PERSONAL_CLIENT_ID,
    clientSecret: process.env.PERSONAL_CLIENT_SECRET,
    callbackURL: "/google/callback",
    passReqToCallback : true
},
    function (request,accessToken, refreshToken, profile, done) {
        const email = (profile.emails[0].value);
        if(email==="cse200001044@iiti.ac.in"){return done(null,profile)}
        return done(null, false);
      }
));

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
