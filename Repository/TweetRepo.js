import Tweet from "../Schema/TweetSchema.js"



export const createTweetRepo =async({body,img,username,avtar,userId})=>{
    try {
        const tweets = await Tweet.create({body,img,username,avtar,userId});
        return tweets;
    } catch (error) {
        throw error
    }
}

export const getTweetRepo = async()=>{
    try {
        const tweets = await Tweet.find();
        
        return tweets;
    } catch (error) {
        throw error;
    }
}

export const getTweetByIdRepo = async(id)=>{
    try {
        const tweets = await Tweet.find({userId:id});
        console.log("inside reepo get tweet by id",tweets);
        return tweets;
    } catch (error) {
        throw error;
    }
}
export const deleteTweetRepo = async(id)=>{
    try {
        const tweet = Tweet.findByIdAndDelete(id);
        return tweet;
    } catch (error) {
        throw error;
    }
}


export const updateTweetRepo = async(id,avtar,username)=>{
    try {
        console.log("inside update tweet repo =>",{id,avtar,username})
        const response = await Tweet.updateMany({userId:id},{ $set: { username: username ,avtar:avtar} });
        return response;
    } catch (error) {
        throw error
    }
}