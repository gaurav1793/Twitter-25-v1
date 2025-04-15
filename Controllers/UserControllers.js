import {UserSignUpServce ,UserSignInServce} from '../Services/UserServices.js'

export const UserSignUpController = async(req,res)=>{
    try {
        const response =await UserSignUpServce(req);
        console.log(response);
        return res.status(201).json({
            data:response,
            message:"signUp completed"
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:error.message});
    }
}

export const UserSignInController = async(req,res)=>{
    try {
        console.log("inside signin controller");
        console.log(req.body);
        const response =await UserSignInServce(req);
        console.log(response);
        return res.status(201).json({
            data:response.user,
            token:response.token,
            message:"signIN completed"
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:error.message});
    }
}