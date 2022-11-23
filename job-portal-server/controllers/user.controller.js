

const { createUserApplyServices, getUserApplyServices, getUserApplyByEmailServices, updateUserApplyByIDServices, getUserApplyByIDServices,} = require('../services/user.service');
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
      console.log(error)
       res.status(400).json({
        status:'fail',
        messege:'Data is not inserted bro',
        error:error.messege
       })
    }
   
  }
  exports.getUserApplyByEmail=async(req,res,next)=>{
  
    try
    {
      const {email}=req.params;
      const tours=await getUserApplyByEmailServices(email)
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
 
  exports.getUserApplyByID=async(req,res,next)=>{
  
    try
    {
      const {id}=req.params;
      const tours=await getUserApplyByIDServices(id)
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
 
  exports.updateUserApplyByID=async(req,res,next)=>{
    try
    {
      const {id}=req.params;
      const tours=await updateUserApplyByIDServices(id,req.body)
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