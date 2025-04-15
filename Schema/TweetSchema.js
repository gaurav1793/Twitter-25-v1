import { model,Schema } from "mongoose";

const TweetSchema = new Schema ({
    body:{
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
        default:null
    }
},{timestamps:true});

const Tweet = model('Tweet',TweetSchema);

export default Tweet;