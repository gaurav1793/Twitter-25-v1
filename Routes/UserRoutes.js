import express from 'express'
import { UserLogOutController, UserProfileController, UserSignInController, UserSignUpController } from '../Controllers/UserControllers.js';
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
            maxCount:3
        }
    ]
),UserSignUpController);

router.get('/userProfile',authenticateToken,UserProfileController);
router.post('/LogOut',UserLogOutController);





export default router