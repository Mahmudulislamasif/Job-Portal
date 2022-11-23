const express = require('express');
const router=express.Router()
const UserInfoController=require('../controllers/userinfo.controller')

router.route('/')
.get(UserInfoController.getUserInfo)
.post(UserInfoController.postUserInfo)





module.exports=router