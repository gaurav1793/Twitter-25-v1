import User from "../Schema/UserSchema.js";

export const UserSignUpRepos=async({username,password,email,avtar,coverImage})=>{
    try {
        const user = await User.create({username,password,email,avtar,coverImage});
        return user;
    } catch (error) {
        throw error;
    }
}

export const findByEmailId=async({email,username})=>{
    try {
        const user = await User.findOne({
            $or:[{email},{username}]
        });
        console.log("inside repo");
        console.log(user);
        return user;
    } catch (error) {
        throw error
    }
}



export const getUserByIdRepo = async(id)=>{
    try {
        const user  = await User.findById(id);
        return user;
    } catch (error) {
        throw error
    }
}

export const updateUserRepo = async(id,username,avtar,coverImage)=>{
    try {
        const response = await User.findByIdAndUpdate({_id:id},{$set: { username: username ,avtar:avtar,
            coverImage:coverImage
        }})
        return response;
    } catch (error) {
        throw error
    }
}