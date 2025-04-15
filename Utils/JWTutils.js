import jwt from 'jsonwebtoken'

const JWT_SECRECT =process.env.JWT_SECRECT || "your_jwt_secret"
export const generateToken = (user)=>{
    return jwt.sign(
        {id:user._id , email:user.email},
        JWT_SECRECT,
        {expiresIn:'1h'}
    )
}