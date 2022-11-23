const mongoose = require('mongoose');
//schema design
const userSchema=mongoose.Schema({
    email:{
      type:String,
      required:true
    },
    jobId:{
      type:String,
      required:true
    },
    companyname:{
      type:String,
    },
    subject:{
      type:String,
      required:true
    },
    resume:{
      type:String,
    },
    coverletter:{
        type:String,
    },
    status:{
        type:String,
    },
    msg:{
      type:String,
    }
    
  },{
    timstamps:true,
  })
  
  const User=mongoose.model('Userapply',userSchema)

  module.exports=User;