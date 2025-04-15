import jwt from 'jsonwebtoken'

const JWT_SECRECT=process.env.JWT_SECRECT || "your_jwt_secret"

export const authenticateToken = (req,res,next)=>{
    const token = req.header.Authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"access token required"});
    }

    try {
        const decoded = jwt.verify(token,JWT_SECRECT);
        next();
    } catch (error) {
        res.status(401).json({
            message:'invalid or expired token'
        })
    }
}