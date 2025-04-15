import Tweet from "../Schema/TweetSchema.js"



export const createTweetRepo =async({body,img})=>{
    try {
        const tweets = await Tweet.create({body,img});
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
        const tweets = await Tweet.findById(id);
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