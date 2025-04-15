import {v2 as cloudinary} from 'cloudinary'
import fs from'fs'
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const UploadOnCloudinary =async(localFilePath)=>{
  try {
    //uploding file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file uploaded
    return res;
  } catch (error) {
    fs.unlinkSync(localFilePath)
    //this will remove the locally saved temperory file as the upload operation failed
    return null;
  }
}

