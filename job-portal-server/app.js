const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const { info } = require("daisyui/src/colors");

app.use(express.json());
app.use(cors());

const jobRoute=require('./route/job.route')
const jobEmail=require('./route/jobemail.route')
const userApply=require('./route/user.route')
const userApplyID=require('./route/userApplyId.route')
const userCollection=require('./route/usercollection.route.js')
const userInfo=require('./route/userinfo.route')
const userEducation=require('./route/education.route')
const userJobDetails=require('./route/jobdetails.route')
const userBlogs=require('./route/blogs.route')
const userReviews=require('./route/reviews.route')
app.get("/", (req, res) => {
 res.send('it is working')
});

//posting 
app.use('/jobs',jobRoute)
// get data
app.use('/jobs',jobRoute)
app.use('/jobemail',jobEmail)
app.use('/userapply',userApply)

app.use('/userapplyid',userApplyID)
app.use('/user',userCollection)
app.use('/userinfo',userInfo)
app.use('/education',userEducation)
app.use('/jobdetails',userJobDetails)
app.use('/blogs',userBlogs)
app.use('/reviews',userReviews)
module.exports = app;
