const mongoose = require('mongoose');

const blogsSchema=mongoose.Schema({
    title:{
      type:String,
      required:[true,"Please provide a title name for job"],
    },
    description:
    {
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    },
    date:{
        type:String,
        required:true
    }
 
  },{
    timstamps:true,
  })
  
  const Blogs=mongoose.model('Blog',blogsSchema)

  module.exports=Blogs;