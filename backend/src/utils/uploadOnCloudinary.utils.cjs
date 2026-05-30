const cloudinary = require("cloudinary");
const fs = require('fs');

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async function(localFilePath) {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        console.log('File has been successfully uploaded to cloduinary,',response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); 
        console.log('Image could not be uploaded to cloudinary: ',error);//remove the file from the local server.
        return null;
    }
}

module.exports = uploadOnCloudinary;