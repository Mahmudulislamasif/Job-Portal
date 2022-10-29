const express = require('express');
const router=express.Router()
const UserController=require('../controllers/user.controller')

router.route('/')
.get(UserController.getUserApply)
.post(UserController.postUserApply)


// router.route("/:id").get(JobController.getJobByID)



module.exports=router