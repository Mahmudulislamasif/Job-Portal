const mongoose = require('mongoose');
//schema design
const userSchema=mongoose.Schema({
    email:{
      type:String,
    },
    companyname:
    {
      type:String,
      unique:[true,"Please provide a unique Name"],
    },
    resume:{
      type:String,
      required:[true,"Please fill empty field"],
    },
    coverletter:{
        type:String,
    }
  },{
    timstamps:true,
  })
  
  const User=mongoose.model('Userapply',userSchema)

  module.exports=User;