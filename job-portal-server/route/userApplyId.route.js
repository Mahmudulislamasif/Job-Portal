const express = require('express');
const router=express.Router()
const UserApplyController=require('../controllers/user.controller')


router.route("/:id").get(UserApplyController.getUserApplyByID)


module.exports=router