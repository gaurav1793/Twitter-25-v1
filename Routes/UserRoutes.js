import express from 'express'
import { UserSignInController, UserSignUpController } from '../Controllers/UserControllers.js';
import {upload}  from '../MiddleWares/Multer.MiddleWare.js'
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





export default router