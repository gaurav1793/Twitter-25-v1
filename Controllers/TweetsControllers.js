import { createTweetService, deleteTweetService, getTweetByIdService, getTweetService } from "../Services/TweetService.js";
import { UploadOnCloudinary } from "../Utils/cloudinaryConfig.js";
export const getTweetController = async(req,res)=>{
    try {
        const response = await getTweetService();
        console.log("inside get tweet controller");
        console.log(response);
        return res.status(201).json({
            success:true,
            message:"giving all the tweets",
            data:response
        })
        
    } catch (error) {
        return res.status(401).json({
            message:error.message,
            data:error
        })
    }
}

export const createTweetController = async(req,res)=>{
    try {
        const body=req.body?.body;
        const imgLocalPath = req.files?.img[0]?.path;
        console.log("inside crate tweet controller imgLocalPath => ",imgLocalPath);
        const imgResponse= await UploadOnCloudinary(imgLocalPath);
        console.log("inside tcreate tweet controller this is img res ",imgResponse);
        const img = imgResponse?.url || "";
        const response = await createTweetService({body,img});
        return res.status(201).json({
            success:true,
            message:"creation of tweet",
            data:response
        })
        
    } catch (error) {
        return res.status(401).json({
            message:error.message,
            data:error
        })
    }
}

export const getTweetByIdController = async(req,res)=>{
    try {
        const response = await getTweetByIdService(req?.params?.id);
        return res.status(201).json({
            success:true,
            message:"creation of tweet",
            data:response
        })
        
    } catch (error) {
        return res.status(401).json({
            message:error.message,
            data:error
        })
    }
}


export const deleteTweetController = async(req,res)=>{
    try {
        const response = await deleteTweetService(req?.params?.id);
        return res.status(201).json({
            success:true,
            message:"deletion of tweet",
            data:response
        })
        
    } catch (error) {
        return res.status(401).json({
            message:error.message,
            data:error
        })
    }
}