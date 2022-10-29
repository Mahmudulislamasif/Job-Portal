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
  },{
    timstamps:true,
  })
  
  const Usercollection=mongoose.model('Usercollection',userCollectionSchema)

  module.exports=Usercollection;