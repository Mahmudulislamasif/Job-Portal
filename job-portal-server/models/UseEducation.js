const mongoose = require('mongoose');
//schema design
const userEducationSchema=mongoose.Schema({
    institution:{
      type:String,
    },
    degree:{
      type:String,
    },
    year:
    {
      type:String,
    },
    gpa:{
      type:String,
    },
    email:{
      type:String,
    }
  },{
    timstamps:true,
  })
  
  const Education=mongoose.model('Education',userEducationSchema)

  module.exports=Education;