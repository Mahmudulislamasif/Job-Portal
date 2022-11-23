const { getReviewServices, createReviewServices } = require("../services/review.services")

exports.getReviews=async(req,res,next)=>{
    try
    {
     
      const blogs=await getReviewServices()
      res.status(200).json({
        status:"success",
        messege:"Data get successfully",
        data:blogs
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

  exports.createReviews=async(req,res,next)=>{
    try
    {
      
      const result= await createReviewServices(req.body);

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