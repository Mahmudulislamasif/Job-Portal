const express = require('express');
const router=express.Router()
const JobController=require('../controllers/job.controller')


router.route("/:email").get(JobController.getJobByEmail)


module.exports=router