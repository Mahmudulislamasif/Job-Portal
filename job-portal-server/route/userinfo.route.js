const express = require('express');
const router=express.Router()
const UserInfoController=require('../controllers/userinfo.controller')

router.route('/')
.get(UserInfoController.getUserInfo)
.post(UserInfoController.postUserInfo)

// router.route("/:companyname").get(UserController.getUserByCompanyName)
// router.route("/:id").get(JobController.getJobByID)



module.exports=router