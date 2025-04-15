import express from 'express'
import UserRouter from './Routes/UserRoutes.js';
import TweetsRouter from './Routes/Tweets.js';
import connectDb from './Db/Db.js'
import {config} from 'dotenv';
const app = express()

config();
connectDb();

app.use(express.json());
app.use('/User',UserRouter);
app.use('/Tweets',TweetsRouter);

app.listen(3000,()=>{
    console.log("server is started on port :3000");
})