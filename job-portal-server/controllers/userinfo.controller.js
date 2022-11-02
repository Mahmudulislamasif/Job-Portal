const { getUserInfoServices, createUserInfoServices } = require("../services/userinfo.service")

exports.getUserInfo=async(req,res,next)=>{
    try
    {
     
      const tours=await getUserInfoServices()
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
 
  exports.postUserInfo=async(req,res,next)=>{
      try
      {
       
        const result= await createUserInfoServices(req.body);
  
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
  