const User = require('../models/UserApply');
exports.getUserApplyServices=async()=>{
    const jobs=await User.find({})
    return jobs
}
exports.createUserApplyServices=async(data)=>{
    const userapply=await User.create(data)
    return userapply
}
exports.getUserApplyByEmailServices=async(email)=>{
    const jobs=await User.find({email:email})
    return jobs
}
exports.updateUserApplyByIDServices=async(id,data)=>{
    const user=await User.updateOne({_id:id},
    {
        $set:data
    
    })
    return user
}
