import { createTweetRepo, deleteTweetRepo, getTweetByIdRepo, getTweetRepo } from "../Repository/TweetRepo.js";


export const getTweetService = async()=>{
    try {
        const tweets = await getTweetRepo();
        console.log("inside get tweet set=rvice => " ,tweets );
        return tweets;
    } catch (error) {
        throw {
            message:error.message
        }
    }
} 

export const createTweetService = async(req)=>{
    try {
        const body=req.body.body;
        const img = req.body?.img;
        const tweets = await createTweetRepo({body,img});
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