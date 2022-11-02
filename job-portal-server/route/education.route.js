const express = require('express');
const router=express.Router()
const EducationController=require('../controllers/education.controller')

router.route('/')
.get(EducationController.getUserEducation)
.post(EducationController.postUserEducation)


// router.route("/:id").get(JobController.getJobByID)



module.exports=router