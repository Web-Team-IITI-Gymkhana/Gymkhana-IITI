const Users = require('../models/users')
const {OAuth2Client} = require('google-auth-library')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const client = new OAuth2Client("687468938838-qv69j02oai1engmjkd6el428ui4uquom.apps.googleusercontent.com")

const googlelogin = (req,res) => {
  const {email} = req.body

  Users.findOne({userEmailId:email}).exec((err,user)=>{
    if(err){
      return res.status(403).json({error:"Something went wrong"})
    }
    else{
      if(user){
        console.log("In auth controller",user)
        const token = jwt.sign({name:user.userName,email:user.userEmailId},process.env.JWT_KEY,{expiresIn:'7d'});
        console.log("Generating token ",token)
        res.json({token,user:{userName : user.userName,userEmailId : user.userEmailId} })
      }
      else{
        return res.status(403).json({error:"Something went wrong"})
      }
    }
  })


}

module.exports = { googlelogin}
