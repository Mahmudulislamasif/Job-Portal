const mongoose = require('mongoose');

const reviewsSchema=mongoose.Schema({
    email:{
      type:String,
    },
    description:
    {
      type:String,
      required:true
    },
    ratings:{
      type:Number,
      required:true
    },
    date:{
        type:String,
        required:true
    }
  },{
    timstamps:true,
  })
  
  const Reviews=mongoose.model('Review',reviewsSchema)

  module.exports=Reviews;