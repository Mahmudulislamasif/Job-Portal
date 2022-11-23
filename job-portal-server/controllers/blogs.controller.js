const { getBlogServices, createBlogServices } = require("../services/blog.services")


exports.getBlogs=async(req,res,next)=>{
    try
    {
     
      const blogs=await getBlogServices()
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

  exports.createBlogs=async(req,res,next)=>{
    try
    {
      
      const result= await createBlogServices(req.body);

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
  
 