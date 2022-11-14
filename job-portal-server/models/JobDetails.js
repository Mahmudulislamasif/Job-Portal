const mongoose = require('mongoose');
//schema design
const jobDetailsSchema=mongoose.Schema({
    profile:{
      type:String,
    },
    organization:
    {
      type:String,
    },
    location:{
      type:String,
    },
    sdate:
    {
      type:Date,
    },
    edate:
    {
      type:Date,
    },
    email:
    {
      type:String,
    },
  },{
    timstamps:true,
  })
  
  const JobDetails=mongoose.model('Jobdescription',jobDetailsSchema)

  module.exports=JobDetails;