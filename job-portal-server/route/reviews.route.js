const express = require('express');
const router=express.Router()
const ReviewsController=require('../controllers/reviews.controller')

router.route('/')
.get(ReviewsController.getReviews)
.post(ReviewsController.createReviews)






module.exports=router