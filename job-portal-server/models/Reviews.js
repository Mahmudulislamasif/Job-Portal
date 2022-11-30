const mongoose = require('mongoose');
const validator=require('validator');
const reviewsSchema=mongoose.Schema({
    email:{
      type:String,
      unique:[true,"Only one post you can give you"]
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