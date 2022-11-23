import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const PostJobs = () => {
  const [user]=useAuthState(auth)
    const onSubmit=(e)=>{
       e.preventDefault();
       const submitPostJob={
          email:e.target.email.value,
          title:e.target.title.value,
          jobtype:e.target.jobtype.value,
          category:e.target.category.value,
          salary:e.target.salary.value,
          address:e.target.address.value,
          companyname:e.target.companyname.value,
          companydescription:e.target.companydescription.value,
          responsibilities:e.target.responsibilities.value,
          skills:e.target.skills.value,
          study:e.target.study.value,
          vacant:e.target.vacant.value,
          period:e.target.period.value
       }
       fetch('http://localhost:5000/jobs', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(submitPostJob)
          })
         .then(res => res.json())
         .then(data => {
             console.log(data)
         });
    }
    return (
        <div className="">
           
           <div className="bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-center   p-4 font-poppins">
           <form action="" onSubmit={(e)=>onSubmit(e)} className="mx-auto bg-white p-10 w-3/4 md:w-1/2 rounded-md ">
               <h1 className="text-3xl text-center font-bold">Post Your jobs here</h1>
               <div className="flex flex-col">
                   <label htmlFor="">Email</label>
                   <input type="text" name="email" value={user?.email} className="border p-2 focus:outline-green-300" required/>
                </div>
                <div className="flex flex-col">
                   <label htmlFor="">Job Title</label>
                   <input type="text" name="title" className="border p-2 focus:outline-green-300" required/>
                </div>
               
                <div className="flex flex-col py-2">
                  <label htmlFor="">Job category</label>
                  <select name="category" id="" className="border p-2" required>
                    <option value="Front End Development" >Front End Development</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Job Type</label> 
                  <select name="jobtype" id="" className="border p-2" required>
                    <option value="Onsite">Onsite</option>
                    <option value="Online">Online</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="flex flex-col py-2">
                   <label htmlFor="">Salary</label>
                   <input type="number" name="salary" className="border p-2" required />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Address</label>
                  <input type="text" name="address" className="border p-2" required />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Company Name</label>
                  <input type="text" name="companyname" className="border p-2" required />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Company Description</label>
                  <textarea name="companydescription" id="" cols="30" rows="10" className="border p-2" required></textarea>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Resposibilities</label>
                  <textarea name="responsibilities" id="" cols="30" rows="10" className="border p-2" required></textarea>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Skill Required</label>
                  <input type="text" name="skills" className="border p-2" required/>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Study Required</label>
                  <input type="text" name="study" className="border p-2" required />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Number of vacancy</label>
                  <input type="number" name="vacant" className="border p-2" required />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="">Perod of internship</label>
                  <input type="number" name="period" className="border p-2" required />
                </div>
                <input type="submit" className="bg-gradient-to-r cursor-pointer w-full p-4 text-white from-indigo-500 to-purple-500" />
            </form>
           </div>
           
        </div>
    );
};

export default PostJobs;