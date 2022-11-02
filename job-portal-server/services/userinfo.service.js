const Userinfo = require('../models/UserInfo');
exports.getUserInfoServices=async()=>{
    const jobs=await Userinfo.find({})
    return jobs
}


exports.createUserInfoServices=async(data)=>{
    const user=await Userinfo.create(data)
    return user
}
