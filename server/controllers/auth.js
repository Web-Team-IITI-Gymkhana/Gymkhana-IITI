const Users = require('../models/users')
const {OAuth2Client} = require('google-auth-library')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const client = new OAuth2Client("750894076426-off7cchrpi2kgcfec64h6vr2ddgl4vfn.apps.googleusercontent.com")

const googlelogin = (req,res) => {
  const {tokenId} = req.body
  client.verifyIdToken({idToken:tokenId,audience : "750894076426-off7cchrpi2kgcfec64h6vr2ddgl4vfn.apps.googleusercontent.com"}).then(response=>{
    const {email_verified,name,email} = response.payload;
    if(email_verified)
    {
        Users.findOne({userEmailId:email}).exec((err,user)=>{
          if(err){
            return res.status(400).json({error:"Something went wrong"})
          }
          else{
            if(user){
              const token = jwt.sign({name:user.userName,email:user.userEmailId},process.env.JWT_KEY,{expiresIn:'7d'});
              res.json({token,user:{userName : user.userName,userEmailId : user.userEmailId} })
            }
            else{
              return res.status(400).json({error:"Something went wrong"})
            }
          }
        })
    }
  })
}

const jwtverify = async (req,res)=>{
  const {token} = req.body

  try {
      const decoded = jwt.verify(token, process.env.JWT_KEY)
      const userEmailId = decoded.email
      const user = await Users.findOne({userEmailId:userEmailId})
      if(user)
      {
          return res.status(200).json({user:user})
      }
      else
      {
          return res.status(400).json({error:"Invalid"})
      }
  } catch (error) {
          return res.status(400).json({error:error})
  }
}

module.exports = { googlelogin , jwtverify}
