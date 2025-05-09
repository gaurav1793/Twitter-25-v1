import jwt from 'jsonwebtoken'
import User from '../Schema/UserSchema.js';

const jwtKey=process.env.JWT_SECRET

export const authenticateToken = async(req,res,next)=>{
    console.log("inside auth middleware jwt key is ",jwtKey);
    const token =req.cookies?.token|| req.headers?.authorization?.split(" ")[1];
    console.log(' token in header : ',token);
    if(!token){
        return res.status(401).json({message:"access token required"});
    }

    try {
        const decoded = jwt.verify(token,jwtKey);
        const user =await User.findById(decoded.id);
        console.log("user is here in jwt" ,user);
        req.user=user;
        console.log("inside authenticae token this is decoded=> ",decoded);
        next();
    } catch (error) {
        console.log("error: ",error.message);
        res.status(403).json({
            message:'invalid or expired token'
        })
    }
}