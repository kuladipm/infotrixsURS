const express = require("express");
const router = express.Router();
const {validateFormData}=require('../middleware/validations')
const {
  createUser,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require("../controllers/userController");
const {getProfilePictureUrl,uploadProfilePicture}=require('../controllers/profilePictureController')
router.post("/user",validateFormData,createUser);
router.get("/user", getUserDetails);
router.patch("/user", updateUserDetails);
router.delete("/user", deleteUserDetails);
//profile picture
router.post("/upload-picture", uploadProfilePicture);
router.get("/get-picture", getProfilePictureUrl);
module.exports = router;
