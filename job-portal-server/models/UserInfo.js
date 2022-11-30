const mongoose = require('mongoose');
//schema design
const userInfoSchema=mongoose.Schema({
    firstname:{
      type:String,
    },
    lastname:
    {
      type:String,
    },
    gender:{
        type:String,
    },
    email:{
      type:String,
    },
    mobilenumber:{ 
        type:Number,
    },
    location:{
        type:String,
    }
  },{
    timstamps:true,
  })
  
  const Userinfo=mongoose.model('Userinformation',userInfoSchema)

  module.exports=Userinfo;