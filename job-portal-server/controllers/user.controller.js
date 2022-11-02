

const { createUserApplyServices, getUserApplyServices, getUserByCompanyNameServices } = require('../services/user.service');
exports.getUserApply=async(req,res,next)=>{
    try
    {
     
      const tours=await getUserApplyServices()
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully",
        data:tours
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail to get data',
        messege:'Data is not available',
        error:error.messege
       })
    }
   
  }
  exports.getUserByCompanyName=async(req,res,next)=>{
    const {companyname}=req.params;
    try
    {
     
      const tours=await getUserByCompanyNameServices(companyname)
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully",
        data:tours
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail to get data',
        messege:'Data is not available',
        error:error.messege
       })
    }
   
  }
  exports.postUserApply=async(req,res,next)=>{
    try
    {
     
      const result= await createUserApplyServices(req.body);

      res.status(200).json({
        status:"success",
        messege:"Data inserted",
        data:result
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail',
        messege:'Data is not inserted',
        error:error.messege
       })
    }
   
  }
  
 