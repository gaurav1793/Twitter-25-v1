import {UserSignUpRepos , findByEmailId, getUserByIdRepo, updateUserRepo } from '../Repository/UserRepos.js'
import blackListTokenModel from '../Schema/blackListTokenSchema.js';
import { generateToken } from '../Utils/JWTutils.js';


export const UserSignUpServce = async({username,password,email,avtar,coverImage})=>{

    try {
        const check = await findByEmailId({email,username});
        if(check){
            throw {
                message:"email is already in use",
                success:false
            };
        }
        const user = await UserSignUpRepos({username,password,email,avtar,coverImage});
        console.log(user);
        const token = generateToken(user);
        return {user,token};
    } catch (error) {
        throw{
            message:error.message
        }
    }
}

export const UserSignInServce = async(req)=>{
    try {
        const email=req.body?.email;
        const username = req.body?.username;
        console.log("inside userSignInService email : ",email);
        const password = req.body?.password;
        console.log("inside userSignInService password  : ",password);
        const user = await findByEmailId({email,username});
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



export const userSignOutService =async(token)=>{
    try {
        console.log("token is here in service",token);
        await blackListTokenModel.create({ token });
        return; 
    } catch (error) {
        throw error
    }
}



export const getUserByIdService =async(id)=>{
    try {
        const user = await getUserByIdRepo(id);
        return user;
    } catch (error) {
        throw error
    }
}

export const updateUserService =async({id,username,avtar,coverImage})=>{
    try {
        const response = await updateUserRepo(id,username,avtar,coverImage);
        return response;
    } catch (error) {
        throw error
    }
}