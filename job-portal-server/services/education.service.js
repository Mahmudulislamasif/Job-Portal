const Education = require('../models/UseEducation');
exports.getUserEducationServices=async()=>{
    const educations=await Education.find({})
    return educations
}
exports.createUserEducationServices=async(data)=>{
    const education=await Education.create(data)
    return education
}
exports.getUserEducationByEmailServices=async(email)=>{
    const user=await Education.find({email:email}).sort('-year').limit(5)
    return user
}
exports.deleteUserEducationByIDServices=async(id)=>{
    const job=await Education.deleteOne({ _id: id})
    return job
}