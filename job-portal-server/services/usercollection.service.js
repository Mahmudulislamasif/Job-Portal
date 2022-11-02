const Usercollection = require('../models/UserCollection');
exports.getUserServices=async()=>{
    const jobs=await Usercollection.find({})
    return jobs
}
exports.getUserEmailServices=async(email)=>{
    const user=await Usercollection.findOne({email:email})
    return user
}

exports.createUserServices=async(data)=>{
    const user=await Usercollection.create(data)
    return user
}
exports.updateUserServices=async(id,data)=>{
    const user=await Usercollection.updateOne({_id:id},{$set:data})
    return user
}
