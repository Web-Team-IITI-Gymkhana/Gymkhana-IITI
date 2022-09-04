import Users from '../models/users.js'
import  jwt from 'jsonwebtoken';

import dotenv from 'dotenv'
dotenv.config()


export  const googlelogin = (req,res) => {
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
