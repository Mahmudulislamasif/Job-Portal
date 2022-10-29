const express = require('express');
const router=express.Router()
const UserCollectionController=require('../controllers/usercollection.controller')

router.route('/').get(UserCollectionController.getUser)
.post(UserCollectionController.postUser)


// router.route("/:id").get(JobController.getJobByID)



module.exports=router