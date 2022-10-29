const { createUserServices, getUserServices } = require("../services/usercollection.service");
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
