import express from 'express'
import { createTweetController, deleteTweetController, getTweetByIdController, getTweetController } from '../Controllers/TweetsControllers.js';
import { upload } from '../MiddleWares/Multer.MiddleWare.js';
const router = express.Router();


router.post('/createTweet',upload.fields(
                                            [ 
                                                {
                                                name:'img',
                                                maxCount:3
                                                }
                                            ]
                                        ),createTweetController);
router.get('/getTweets',getTweetController);
router.get('/getTweets/:id',getTweetByIdController);
router.delete('/deleteTweet/:id',deleteTweetController);


export default router