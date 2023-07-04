// const {createUserServices,getUserDetailsServices,updateUserDetailsServices,deleteUserDetailsServices}=require('../services/userServices')
exports.createUser=async(req,res)=>{
console.log(req.body)
return res.status(200).json(req.body)
// const createUserServices=createUserServices(req.body)
}


exports.getUserDetails=async(req,res)=>{
    
}
exports.updateUserDetails=async(req,res)=>{
    
}
exports.deleteUserDetails=async(req,res)=>{
    
}