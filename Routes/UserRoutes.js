import express from 'express'
import { UserSignInController, UserSignUpController } from '../Controllers/UserControllers.js';

const router = express.Router();


router.post('/SignIn',UserSignInController);
router.post('/SignUp',UserSignUpController);





export default router