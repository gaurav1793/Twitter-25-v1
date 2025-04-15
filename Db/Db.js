import {connect} from 'mongoose'


const connectDb =async()=>{
    try {
        const con = await connect(process.env.DB_URL, {
            useNewUrlParser: true,
          });
          console.log("mongodb connected")
    } catch (error) {
        throw new Error(error.message);
    }
}

export default connectDb