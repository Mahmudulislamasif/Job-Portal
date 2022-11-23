const Job = require('../models/Jobpost');
exports.getJobServices=async()=>{
    const jobs=await Job.find({})
    return jobs
}
exports.createJobServices=async(data)=>{
    const job=await Job.create(data)
    return job
}

exports.getJobByIDService=async(id)=>{
    const job=await Job.findOne({ _id: id})
    return job
}
exports.getJobByEmailServices=async(email)=>{
    const user=await Job.find({email:email})
    return user
}
