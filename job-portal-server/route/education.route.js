const express = require('express');
const router=express.Router()
const EducationController=require('../controllers/education.controller')

router.route('/')
.get(EducationController.getUserEducation)
.post(EducationController.postUserEducation)

router.route("/:email").get(EducationController.getUserEducationByEmail)
router.route("/:id").delete(EducationController.deleteUserEducationByID)



module.exports=router