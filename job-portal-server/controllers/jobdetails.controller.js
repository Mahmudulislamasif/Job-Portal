
const { getUserJobDetailsServices, createUserJobDetailsServices, deleteUserJobDetailsByIDServices, getUserJobDetailsByEmailServices } = require("../services/JobDetails.service")

exports.getUserJobDetails=async(req,res,next)=>{
    try
    {
     
      const tours=await getUserJobDetailsServices()
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

  exports.postUserJobDetails=async(req,res,next)=>{
    try
    {
     
      const result= await createUserJobDetailsServices(req.body);

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
  exports.getUserJobDetailsByEmail=async(req,res,next)=>{
 
    try
    {
      const {email}=req.params;
      const userEmail=await getUserJobDetailsByEmailServices(email)
      res.status(200).json({
        status:"successfully get data from database",
        messege:"Data get successfully", 
        data:userEmail
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
  exports.deleteUserJobDetailsByID=async(req,res,next)=>{

    try
    {
      const {id}=req.params;
      const userEmail=await deleteUserJobDetailsByIDServices(id)
      res.status(200).json({
        status:"success",
        messege:"Data is deleted successfully", 
        data:userEmail
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