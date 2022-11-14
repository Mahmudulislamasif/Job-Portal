const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types
//schema design
const jobSchema=mongoose.Schema({
    title:{
      type:String,
      required:[true,"Please provide a title name for job"],
      trim:true,
    },
    jobtype:
    {
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    salary:
    {
      type:Number,
      required:true
    },
    address:
    {
      type:String,
      required:true
    },
    companyname:{
      type:String,
      required:true
    },
    companydescription:{
      type:String,
      required:true
    },
    responsibilities:{
      type:String,
      required:true
    },
    skills:{
      type:String,
      required:true
    },
    study:{
      type:String,
      required:true
    },
    vacant:{
      type:Number,
      required:true
    },
    period:{
      type:Number,
      required:true
    },
 
  },{
    timstamps:true,
  })
  
  const Job=mongoose.model('Jobpost',jobSchema)

  module.exports=Job;