const UserApply = require('../models/UserApply');
exports.getUserApplyServices=async()=>{
    const usersApply=await UserApply.find({})
    return usersApply
}
exports.createUserApplyServices=async(data)=>{
 
   
    const usersApply=await UserApply.create(data)
    return usersApply
}
exports.getUserApplyByEmailServices=async(email)=>{
    const jobs=await UserApply.find({email:email})
    return jobs
}
exports.getUserApplyByIDServices=async(id)=>{
    const jobs=await UserApply.find({jobId:id})
    return jobs
}
exports.updateUserApplyByIDServices=async(id,data)=>{
    const user=await UserApply.updateOne({_id:id},
    {
        $set:data
    
    })
    return user
}
