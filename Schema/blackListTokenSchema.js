import  {model ,Schema} from 'mongoose'

const blackListTokenSchema =new Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },

},{timestamps:true})


const blackListTokenModel = model('blackListToken',blackListTokenSchema);

export default blackListTokenModel;