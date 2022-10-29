const express = require('express');
const router=express.Router()
const JobController=require('../controllers/job.controller')

router.route('/')
.get(JobController.getJobs)
.post(JobController.createJob)


router.route("/:id").get(JobController.getJobByID)



module.exports=router