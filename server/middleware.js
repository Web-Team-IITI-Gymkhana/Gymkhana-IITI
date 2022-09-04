import  jwt from 'jsonwebtoken';
import Users from './models/users.js';

export const jwtAuth = async (req,res,next)=>{
  try{
    // return next()
    console.log("JWT Middleware",req.headers.authorization)
    const decoded = jwt.verify(req.headers.authorization, process.env.JWT_KEY)
    console.log("Decoded token ",decoded)

    req.userName = decoded.name

    const userEmailId = decoded.email
    const user = await Users.findOne({userEmailId:userEmailId})
    if(user)
    {
      return next()
    }
    else
    {
      return res.status(403).json({message:"JWT Auth Failed"})
    }
  }
  catch(error){
    console.log(error)
    return res.status(403).json({message:"JWT Auth Failed"})
  }
}

