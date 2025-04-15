import {UserSignUpRepos , findByEmailId } from '../Repository/UserRepos.js'
import { generateToken } from '../Utils/JWTutils.js';


export const UserSignUpServce = async(req)=>{

    try {
        const email = req.body?.email;
        const username=req.body?.username;
        const check = await findByEmailId({email,username});
        if(check){
            throw {
                message:"email is already in use",
                success:false
            };
        }
        const user = await UserSignUpRepos({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        });
        console.log(user);
        return user;
    } catch (error) {
        throw{
            message:error.message
        }
    }
}

export const UserSignInServce = async(req)=>{
    try {
        const email=req.body.email;
        console.log("inside userSignInService email : ",email);
        const password = req.body.password;
        console.log("inside userSignInService password  : ",password);
        const user = await findByEmailId({email});
        console.log(user);
        if(!user){
            throw{
                message:"user does not exist",
                success:false
            };
        }
        const isMatch =await user.comparePassword(password);
        if(!isMatch){
            throw{
                message:'wrong password',
                success:false
            }
        }
        
        console.log(user);
        const token = generateToken(user);
        return {user,token};
    } catch (error) {
        throw{
            message:error.message
        }
    }
}