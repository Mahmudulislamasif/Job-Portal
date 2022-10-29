const Usercollection = require('../models/UserCollection');
exports.getUserServices=async()=>{
    const jobs=await Usercollection.find({})
    return jobs
}
exports.createUserServices=async(data)=>{
    const user=await Usercollection.create(data)
    return user
}
