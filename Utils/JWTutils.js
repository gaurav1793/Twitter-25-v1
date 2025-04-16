import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const jwtKey =process.env.JWT_SECRET

export const generateToken = (user)=>{
    console.log("inside genretae token my jwtkey is  ",jwtKey);
    if(!jwtKey){
        console.log("please enter the key");
    }
    return jwt.sign(
        {id:user._id , email:user.email},
        jwtKey,
        {expiresIn:'1h'}
    )
}