const mongoose = require('mongoose');
//schema design
const userCollectionSchema=mongoose.Schema({
    email:{
      type:String,
    },
    name:
    {
      type:String,
    },
    role:{
      type:String,
    },
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
  
  const Usercollection=mongoose.model('Usercollection',userCollectionSchema)

  module.exports=Usercollection;