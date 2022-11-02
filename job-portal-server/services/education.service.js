const Education = require('../models/UseEducation');
exports.getUserEducationServices=async()=>{
    const educations=await Education.find({})
    return educations
}
exports.createUserEducationServices=async(data)=>{
    const education=await Education.create(data)
    return education
}

// exports.getJobByIDService=async(id)=>{
//     const job=await Job.findOne({ _id: id})
//     return job
// }