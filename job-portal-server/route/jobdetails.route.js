const express = require('express');
const router=express.Router()
const JobDetailsController=require('../controllers/jobdetails.controller')

router.route('/')
.get(JobDetailsController.getUserJobDetails)
.post(JobDetailsController.postUserJobDetails)

router.route("/:email").get(JobDetailsController.getUserJobDetailsByEmail)
router.route("/:id").delete(JobDetailsController.deleteUserJobDetailsByID)



module.exports=router