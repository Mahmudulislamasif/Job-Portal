import React, { useEffect, useState } from 'react';
import Job from './Job';
import { CiLocationOn } from 'react-icons/ci';
import border from '../../Assests/HomePageAssests/title-border.png'
const FilterJobs = () => {
    const [jobs,setJobs]=useState([])
    const [size,setSize]=useState("")
    const [filter,setFilter]=useState(jobs)
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data.data))
    })
    const filterName =(cat)=>{
        const updateList=jobs.filter((x)=>x.category===cat)
        setFilter(updateList)
     }
    return (
        <div className=" bg-[#f8f9fa] pt-5 md:pt-0 bg-cover bg-no-repeat text-center font-poppins">
        <div class=" md:-translate-y-2/4  rounded-lg mx-auto w-3/4 md:w-1/2 py-8 bg-[#43d485] ">
     
        <div className="block md:flex  items-center justify-center">
       
        <div className="flex items-center mb-4 md:mb-0">
             <CiLocationOn className="text-3xl mx-6 text-[#FCF6F5FF]"/>
        <select className="py-1 px-2 focus:outline-none  rounded-sm  mr-4 bg-slate-900 text-white" name="" id="" onChange={(e)=>{
             const selectSetSize=e.target.value;
             if(selectSetSize!=="All")
             {
                setSize(()=>filterName(selectSetSize))
             }
             else
             {
                setFilter(jobs)
             }
           
         }} >
             <option value="All">All</option>
             <option value="Web Development">Web development</option>
             <option value="Front End Development">Front End Development</option>
             <option value="Data Science">Data Science</option>
        </select> 
        </div>
         <div className="flex items-center">
            <CiLocationOn className="text-3xl mx-6 text-[#FCF6F5FF]"/>
            <select name="" id="" className="py-1 px-2 rounded-sm w-36 mr-4 focus:outline-dotted bg-slate-900 text-white">
                <option value="Location" select>Location</option>
                <option value="Chittagong" select>Chittagong</option>
                <option value="Dhaka" select>Dhaka</option>
                <option value="Rajshahi" select>Rajshahi</option>
                <option value="Khulna" select>Khulna</option>
                <option value="Mymensingh" select>Mymensingh</option>
                <option value="Sylhet" select>Sylhet</option>
            </select>
         </div>
        </div>
       
      
         </div> 
         
         <h1 className="text-[#3c2064] text-5xl my-5  ml-8 text-center">Job List</h1>
    
         <div className="grid grid-cols-1 md:grid-cols-3 g-4">
            {
              filter.map((job)=><Job job={job} key={job._id}></Job>)
            }
         </div>
        </div>
    );
};

export default FilterJobs;