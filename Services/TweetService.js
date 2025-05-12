import { createTweetRepo, deleteTweetRepo, getTweetByIdRepo, getTweetRepo, updateTweetRepo } from "../Repository/TweetRepo.js";


export const getTweetService = async()=>{
    try {
        const tweets = await getTweetRepo();
        
        return tweets;
    } catch (error) {
        throw {
            message:error.message
        }
    }
} 

export const createTweetService = async({body,img,username,avtar,userId})=>{
    try {
        const tweets = await createTweetRepo({body,img,username,avtar,userId});
        return tweets;
    } catch (error) {
        throw {
            message:error.message
        }
    }
}
export const getTweetByIdService = async(id)=>{
    try {
        const tweets = getTweetByIdRepo(id);
        if(!tweets){
            throw {
                message:"tweet not found",
                status:404,
                success:false
            }
        }
        console.log("hello from tweet id service",tweets);
        return tweets;
    } catch (error) {
        throw {
            message:error.messagea
        }
    }
}

export const deleteTweetService = async(id)=>{
    try {
        const tweets = deleteTweetRepo(id);
        if(!tweets){
            throw {
                message:"tweet not found",
                status:404,
                success:false
            }
        }
        return tweets;
    } catch (error) {
        throw {
            message:error.messagea
        }
    }
}


export const updateTweetService = async({id,avtar,username})=>{
    try{
        console.log("inside update tweet service =>",{id,avtar,username});
        const response = await updateTweetRepo(id,avtar,username);
        return response;
    }
    catch(error){
        throw error
    }
}
