const Education = require('../models/JobDetails');
exports.getUserJobDetailsServices=async()=>{
    const educations=await Education.find({})
    return educations
}
exports.createUserJobDetailsServices=async(data)=>{
    const education=await Education.create(data)
    return education
}
exports.getUserJobDetailsByEmailServices=async(email)=>{
    const user=await Education.find({email:email}).sort('-year').limit(5)
    return user
}
exports.deleteUserJobDetailsByIDServices=async(id)=>{
    const job=await Education.deleteOne({ _id: id})
    return job
}