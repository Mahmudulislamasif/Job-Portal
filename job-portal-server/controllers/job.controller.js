
const { getJobServices, createJobServices, getJobByIDService } = require('../services/job.services');
exports.getJobs=async(req,res,next)=>{
    try
    {
     
      const tours=await getJobServices()
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

  exports.createJob=async(req,res,next)=>{
    try
    {
     
      const result= await createJobServices(req.body);

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
  
  exports.getJobByID=async(req,res,next)=>{
    
    const {id}=req.params;
    try
    {
     
      const result= await getJobByIDService(id);

      res.status(200).json({
        status:"success",
        messege:"Data is get by ID",
        data:result
      })
    }
    catch(error)
    {
       res.status(400).json({
        status:'fail',
        messege:'Data is not get by ID',
        error:error.messege
       })
    }
   
  }
