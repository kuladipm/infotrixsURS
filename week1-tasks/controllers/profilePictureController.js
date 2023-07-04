const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();
let publicId;
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRECT
});

// Function to upload profile picture to Cloudinary
const uploadProfilePicture = async(file) => {
try {
    const result=await cloudinary.uploader.upload(file, { folder: 'profile-pictures' })
    console.log(result)
    publicId=result
} catch (error) {
    console.log(error)
}
  
};

// Function to get profile picture URL from Cloudinary
const getProfilePictureUrl = (publicId) => {
  return cloudinary.url(publicId, { secure: true });
};

module.exports = {
  uploadProfilePicture,
  getProfilePictureUrl
};
