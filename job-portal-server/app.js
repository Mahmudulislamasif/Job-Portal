const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const { info } = require("daisyui/src/colors");

app.use(express.json());
app.use(cors());

const jobRoute=require('./route/job.route')
const userApply=require('./route/user.route')
const userCollection=require('./route/usercollection.route.js')
const userInfo=require('./route/userinfo.route')
const userEducation=require('./route/education.route')

app.get("/", (req, res) => {
 res.send('it is working')
});

//posting 
app.use('/jobs',jobRoute)
// get data
app.use('/jobs',jobRoute)

app.use('/userapply',userApply)
app.use('/user',userCollection)
app.use('/userinfo',userInfo)
app.use('/education',userEducation)
module.exports = app;
