import {UserSignUpServce ,UserSignInServce} from '../Services/UserServices.js'
import { UploadOnCloudinary } from '../Utils/cloudinaryConfig.js';

export const UserSignUpController = async(req,res)=>{
    try {
        const username= req.body?.username;
        const password=req.body?.password;
        const email=req.body?.email;
        console.log("inside usersignupcontroller => ",req.files);
        const avtarLocalPath=req.files?.avtar?.[0]?.path;
        console.log("avtarlocalpath => ",avtarLocalPath)
        const coverImageLocalPath = req.files?.coverImage[0]?.path;

        if(!avtarLocalPath){
            throw {
                message:"avtar is required"
            }
        }

        const avtarResponse= await UploadOnCloudinary(avtarLocalPath);
        const coverImageResponse= await UploadOnCloudinary(coverImageLocalPath);

        const avtar = avtarResponse?.url;
        const coverImage = coverImageResponse?.url || "";

        const response =await UserSignUpServce({username,password,email,avtar,coverImage});
        console.log(response);
        return res.status(201).json({
            data:response,
            message:"signUp completed"
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:error.message});
    }
}

export const UserSignInController = async(req,res)=>{
    try {
        console.log("inside signin controller");
        console.log(req);
        const username = req.body?.username;
        const password = req.body?.password;
        console.log("inside controleer => ",username,password);
        const {user,token} =await UserSignInServce(req);
        console.log({user,token});
        res.cookie("token",token,{
            httpOnly:true,
            sameSite: "strict",
            maxAge:3600000
        })
        return res.status(201).json({
            data:user,
            message:"signIN completed"
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:error.message});
    }
}