const express = require('express');
const router=express.Router()
const UserController=require('../controllers/user.controller')

router.route('/')
.get(UserController.getUserApply)
.post(UserController.postUserApply)

router.route("/:email").get(UserController.getUserApplyByEmail)
// // router.route("/:id").get(JobController.getJobByID)
router.route("/:id").patch(UserController.updateUserApplyByID)


module.exports=router