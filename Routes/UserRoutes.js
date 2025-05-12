import express from 'express'
import { getUserByIdController, updateUserController, UserLogOutController, UserProfileController, UserSignInController, UserSignUpController } from '../Controllers/UserControllers.js';
import {upload}  from '../MiddleWares/Multer.MiddleWare.js'
import { authenticateToken } from '../MiddleWares/Auth.MiddleWare.js';
const router = express.Router();


router.post('/SignIn',upload.none(),UserSignInController);
router.post('/SignUp',upload.fields(
    [ 
        {
            name:'avtar',
            maxCount:1
        },
        {
            name:'coverImage',
            maxCount:1
        }
    ]
),UserSignUpController);
router.get('/getUserById/:id',authenticateToken,getUserByIdController),
router.get('/userProfile',authenticateToken,UserProfileController);
router.post('/LogOut',UserLogOutController);
router.post('/updateUser',upload.fields(
    [ 
        {
            name:'avtar',
            maxCount:1
        },
        {
            name:'coverImage',
            maxCount:1
        }
    ]
),updateUserController);





export default router