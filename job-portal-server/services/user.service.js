const User = require('../models/UserApply');
exports.getUserApplyServices=async()=>{
    const jobs=await User.find({})
    return jobs
}
exports.getUserByCompanyNameServices=async(companyname)=>{
    const jobs=await User.find({companyname:companyname})
    return jobs
}
exports.createUserApplyServices=async(data)=>{
    const job=await User.create(data)
    return job
}