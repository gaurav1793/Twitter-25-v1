import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import UserRouter from './Routes/UserRoutes.js';
import TweetsRouter from './Routes/Tweets.js';
import connectDb from './Db/Db.js'
import cookieParser from 'cookie-parser';

const app = express()


connectDb();

app.use(express.json());
app.use(cookieParser());
app.use('/User',UserRouter);
app.use('/Tweets',TweetsRouter);

app.listen(3000,()=>{
    console.log("server is started on port :3000");
})