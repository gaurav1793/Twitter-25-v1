import dotenv from 'dotenv';
dotenv.config();

import {v2 as cloudinary} from 'cloudinary'
import fs from'fs'


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});



export const UploadOnCloudinary =async(localFilePath)=>{
  try {
    if(localFilePath==undefined){
      console.log("return kr gya");
      return ;
    }
    //uploding file on cloudinary
    console.log("isnide uploadcloudinary local path => ",localFilePath);
    console.log("api_key => ",process.env.API_KEY);
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file uploaded
    console.log("inside upload on cloudinary response => ",response);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath)
    //this will remove the locally saved temperory file as the upload operation failed
    throw {
        message:error.message
    }
  }
}

