const { createUserServices, getUserServices, getUserEmailServices, updateUserServices } = require("../services/usercollection.service");
exports.getUser=async(req,res,next)=>{
  try
  {
   
    const tours=await getUserServices()
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
exports.getUserByEmail=async(req,res,next)=>{
  const {email}=req.params;
  try
  {
   
    const userEmail=await getUserEmailServices(email)
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
exports.postUser=async(req,res,next)=>{
    try
    {
     
      const result= await createUserServices(req.body);

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
  exports.updateUserByID=async(req,res,next)=>{
 
    try
    {
      const {id}=req.params;
      const result= await updateUserServices(id,req.body);

      res.status(200).json({
        status:"success",
        messege:"Data is updated",
        data:result
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail',
        messege:'Data is not updated',
        error:error.messege
       })
    }
   
  }
