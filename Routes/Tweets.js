import express from 'express'
import { createTweetController, deleteTweetController, getTweetByIdController, getTweetController } from '../Controllers/TweetsControllers.js';
import { upload } from '../MiddleWares/Multer.MiddleWare.js';
import { authenticateToken } from "../MiddleWares/Auth.MiddleWare.js";
const router = express.Router();


const helpafter=(req,res,next)=>{
    console.log("after file upload");
    next();
}

router.post('/createTweet',upload.fields(
                                            [ 
                                                {
                                                name:'img',
                                                maxCount:3
                                                }
                                            ]
                                        ),helpafter,createTweetController);
router.get('/getTweets',authenticateToken,getTweetController);
router.get('/getTweets/:id',authenticateToken,getTweetByIdController);
router.delete('/deleteTweet/:id',authenticateToken,deleteTweetController);


export default router