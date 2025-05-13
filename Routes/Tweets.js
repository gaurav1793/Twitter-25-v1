import express from 'express'
import { createTweetController, deleteTweetController, getTweetByIdController, getTweetController, updateTweetController } from '../Controllers/TweetsControllers.js';
import { upload, upload1 } from '../MiddleWares/Multer.MiddleWare.js';
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
                                                maxCount:1
                                                }
                                            ]
                                        ),helpafter,createTweetController);
router.get('/getTweets',authenticateToken,getTweetController);
router.get('/getTweetsbyId/:id',authenticateToken,getTweetByIdController);
router.delete('/deleteTweet/:id',authenticateToken,deleteTweetController);
router.post('/updateTweet',upload1.fields([{name:'avtar',maxCount:1}]),updateTweetController);


export default router