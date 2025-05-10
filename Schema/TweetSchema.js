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
    },
    username:{
        type:String,
        reuired:true,
        trim:true
    },
    avtar:{
        type:String,
        required:true
    }
},{timestamps:true});

const Tweet = model('Tweet',TweetSchema);

export default Tweet;