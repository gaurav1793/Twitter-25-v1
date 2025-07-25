import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import express from 'express'
import UserRouter from './Routes/UserRoutes.js';
import TweetsRouter from './Routes/Tweets.js';
import connectDb from './Db/Db.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express()


connectDb();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));
app.use(express.json());
app.use(cookieParser());
app.use('/User',UserRouter);
app.use('/Tweets',TweetsRouter);


app.listen(3000,()=>{
    console.log("server is started on port :3000");
})