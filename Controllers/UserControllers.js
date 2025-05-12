import {UserSignUpServce ,UserSignInServce, userSignOutService, getUserByIdService, updateUserService} from '../Services/UserServices.js'
import { UploadOnCloudinary } from '../Utils/cloudinaryConfig.js';

export const UserSignUpController = async(req,res)=>{
    try {
        const username= req.body?.username;
        const password=req.body?.password;
        const email=req.body?.email;
        console.log("inside usersignupcontroller => ",req.files);
        const avtarLocalPath=req.files?.avtar?.[0]?.path;
        console.log("avtarlocalpath => ",avtarLocalPath)
        const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

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
        return res.status(400).json({message:error.message});
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
            sameSite:"strict",
            maxAge:10800000
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

export const UserProfileController = async(req,res)=>{
    try {
        res.status(201).json(req.user);
    } catch (error) {
        res.status(400).json({message:"error in getting User Profile"})
    }
}

export const UserLogOutController = async(req,res)=>{
    try {
        console.log("cookies ye rhi tumhari",req?.cookies);
        console.log("token ye rha babu",req?.cookies?.token);
        const token=req.cookies.token
        res.clearCookie('token');
        await userSignOutService(token);
        return res.status(201).json({message:"Logged out successfully"});
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error.message});
    }
}

export const getUserByIdController = async(req,res)=>{
    try {
        const response = await getUserByIdService(req?.params?.id);
        return res.status(201).json({
            success:true,
            message:"succes getting user by id",
            data:response
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error.message});
    }
}

export const updateUserController =async(req,res)=>{
    try {
        const id = req?.body?.id;
        const username = req?.body?.username;

        const avtarLocalPath = req.files?.avtar?.[0]?.path;
        const avtarResponse= await UploadOnCloudinary(avtarLocalPath);
        console.log("inside update user controller this is avtar res ",avtarResponse);
        const avtar = avtarResponse?.secure_url;

        const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
        const coverImageResponse= await UploadOnCloudinary(coverImageLocalPath);
        console.log("inside update user controller this is coverimg res ",coverImageResponse);
        const coverImage = coverImageResponse?.secure_url;

        const response = await updateUserService({id,username,avtar,coverImage});
        return res.status(201).json({
            success:true,
            message:"succes update user",
            data:response
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:error.message});
    }
}