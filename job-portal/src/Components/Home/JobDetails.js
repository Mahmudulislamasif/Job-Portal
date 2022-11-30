import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiOutlineCalendar, AiOutlineHome, AiOutlineMoneyCollect } from 'react-icons/ai';
import { FaMoneyBill, FaMoneyBillAlt, FaMoneyBillWave } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import moment from 'moment';
const JobDetails = () => {
    const {jobid}=useParams()
    const [job,setJob]=useState({})
    const [jopApply,setJobApply]=useState([])
    const [user]=useAuthState(auth)
    useEffect(()=>{
        const url=`http://localhost:5000/jobs/${jobid}`
        fetch(url)
        .then(res=>res.json()) 
        .then(data=>setJob(data.data))
    },[jobid])
    const onSubmitApply=(e)=>{
      e.preventDefault();
      const submitUserApply={
         email:e.target.email.value,
         jobId:e.target.jobid.value,
         companyname:e.target.companyname.value,
         subject:e.target.subject.value,
         resume:e.target.resume.value,
         coverletter:e.target.coverletter.value,
         date:e.target.date.value
      }
      fetch('http://localhost:5000/userapply', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(submitUserApply)
         })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
   }
    return (
        <div className="font-poppins  min-h-screen ">
            
            <div className="container mx-auto mb-6">
            <h1 className="text-4xl font-bold text-center mt-4 mb-4">InterShip At <span className="text-orange-400">{job.companyname}</span> </h1>
            <div className="pl-4 flex flex-col border-2 border-gray-100 shadow-lg py-4 px-2 ">
                   <h1 className="text-xl font-bold mb-3">{job.title}</h1>
                   <h1 className="text-gray-500 mb-3">{job.companyname}</h1>
                   <div className="flex flex-row items-center mb-3">
                    <AiOutlineHome className="text-xl"/>
                    <h1 className="ml-4">{job.address}</h1>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="flex flex-col ">
                        <div className="flex items-center">
                            <AiOutlineCalendar />
                            <h1 className="ml-4">Duration</h1>
                        </div>
                        <div>
                          <h1>{job.period} month</h1>
                        </div>
                      </div>
                      <div  className="flex flex-col">
                       <div className="flex items-center">
                        <FaMoneyBillWave className="mr-4" />
                        <h1>Salary</h1>
                       </div>
                        <div>
                        <h1>{job.salary} tk</h1>
                        </div>
                      </div>
                   </div>
                   <div className=" mt-4"> 
                   <h1 className="text-xl font-bold">About {job.companyname}</h1>
                   <h1 className="text-justify mt-3">About {job.companydescription}</h1>
                   </div>
                   <div className="mt-4">
                    <h1 className="text-xl font-bold">Responsibilities</h1>
                    <h1>{job.responsibilities}</h1>
                   </div>
                   <div className="mt-4">
                    <h1 className="text-xl font-bold">Skills Required</h1>
                    {
                      job.skills
                    }
                   </div>
                   <div className="mt-4">
                        <h1 className="text-xl font-bold">Education Required</h1>
                        <h1>{job.study}</h1>
                   </div>
                   <div className="mt-4">
                        <h1 className="text-xl font-bold">Number of Openings</h1>
                        <h1>{job.vacant}</h1>
                   </div>
                  
              <label for="my-modal" className="button mt-10 text-center cursor-pointer bg-purple-500 text-white w-40 rounded-sm mx-auto py-4">Apply Now</label>
              <input type="checkbox" id="my-modal" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-2xl text-center my-6">InterShip at {job.companyname}</h3>
                  <form action="" onSubmit={(e)=>onSubmitApply(e)} >
                  <label htmlFor="">Email</label>
                  <input type="text" className="border p-2 w-full" name="email" value={user?.email} disabled/>
                  <label htmlFor="">Job ID</label>
                  <input type="text" className="border p-2 w-full" name="jobid" value={jobid} disabled/>
                  <label htmlFor="">Company Name</label>
                  <input type="text" className="border p-2 w-full" name="companyname" value={job.companyname} disabled/>
                  <label htmlFor="">Subject</label>
                  <input type="text" className="border p-2 w-full" name="subject"/>
                  <label htmlFor="">Resume Link</label>
                  <input type="text" name="resume" className="border p-2 w-full"/>
                  <label htmlFor="">Cover Letter</label>
                  <textarea name="coverletter"  id="" className="border p-2 w-full" cols="30" rows="10"></textarea>
                  <label htmlFor="">Date</label>
                  <input type="text" className="border p-2 w-full" name="date" value={moment().format('LL')} disabled/>
                  <input type="submit" value="Submit" className="btn mx-auto btn-primary w-full" required/>
                  <div class="modal-action">
                    <label for="my-modal" class="btn">Yay!</label>
                  </div>

                  </form>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default JobDetails;