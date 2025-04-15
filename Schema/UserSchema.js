import {model,Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    username:{
        type:String,
        reuired:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        reuired:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});


UserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10);
    return next();
})

UserSchema.methods.comparePassword=async function(candpass){
    const isMatch=await bcrypt.compare(candpass,this.password);
    return isMatch;
}

const User = model('User',UserSchema);

export default User;