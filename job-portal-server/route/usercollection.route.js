const express = require('express');
const router=express.Router()
const UserCollectionController=require('../controllers/usercollection.controller')

router.route('/').get(UserCollectionController.getUser)
.post(UserCollectionController.postUser)


router.route("/:email").get(UserCollectionController.getUserByEmail)

router.route("/:id").patch(UserCollectionController.updateUserByID)

module.exports=router