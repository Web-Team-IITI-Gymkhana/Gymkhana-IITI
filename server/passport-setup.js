const jwt = require('jsonwebtoken')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const config = {secretOrKey:"mysecret"}
var opts = {}
opts.jwtFromRequest = function(req) {
    var token = null;
    if (req && req.cookies){
        token = req.cookies['jwt']
    }
    return token
}
opts.secretOrKey = config.secretOrKey

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("JWT BASED AUTH GETTING CALLED")
    console.log(jwt_payload.data)
    // if (CheckUser(jwt_payload.data)) {
    //     return done(null, jwt_payload.data)
    // } else {
    //     return done(null, false)
    // }
    return done(null, jwt_payload.data)
}))

// const CALLBACK_URL = "http://localhost:5000/google/callback"
const CALLBACK_URL = "https://gymkhana-iiti.herokuapp.com/google/callback"

passport.use(new GoogleStrategy({
      clientID: process.env.PERSONAL_CLIENT_ID,
      clientSecret: process.env.PERSONAL_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("GOOGLE BASED OAUTH VALIDATION GETTING CALLED")
      const email = profile.emails[0].value
      if(email==='cse200001044@iiti.ac.in'){return done(null,profile)}
      return done(null, false)
  }
))

passport.serializeUser(function(user, done) {
    done(null, user)
})
passport.deserializeUser(function(obj, done) {
    done(null, obj)
})
