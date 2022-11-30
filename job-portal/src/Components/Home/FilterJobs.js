import React, { useEffect, useState } from 'react';
import Job from './Job';
import { CiLocationOn } from 'react-icons/ci';
import border from '../../Assests/HomePageAssests/title-border.png'
import useJobs from '../../useHook/useJobs';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const FilterJobs = () => {
    const [jobs]=useJobs([])
    const [size,setSize]=useState("")
    const [filter,setFilter]=useState(jobs)
    const [filterTrue,setFilterTrue]=useState(false)
    const [search,setSearch]=useState()
    const { register, formState: { errors }, handleSubmit } = useForm();
  
     const onSubmit=(data)=>{
      const updateList=jobs?.filter((x)=>x.category===data.category && x.address=== data.address)
      setFilter(updateList)
      setFilterTrue(true)
     }

    return (
        <div className=" bg-[#F3F4F6] pt-5 md:pt-0 bg-cover bg-no-repeat text-center font-poppins">
        <div class=" md:-translate-y-2/4 rounded-full mx-auto w-3/4 md:w-1/2 py-10 bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 shadow-2xl ">
            
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="block md:flex  items-center justify-center">
            
            <div className="flex items-center mb-4 md:mb-0">
            <select className="py-1 px-2 focus:outline-none  rounded-sm  mr-4  text-black" name="" id="" {...register('category')} >
                <option value="All">All</option>
                <option value="Web Development">Web development</option>
                <option value="Front End Development">Front End Development</option>
                <option value="Data Science">Data Science</option>
            </select> 
            </div>
            <div className="flex items-center">
                <select name="" id="" className="py-1 px-2 rounded-sm w-36 mr-4 focus:outline-dotted text-black" {...register('address')}>
                    <option value="Location" select>Location</option>
                    <option value="Chittagong" select>Chittagong</option>
                    <option value="Dhaka" select>Dhaka</option>
                    <option value="Rajshahi" select>Rajshahi</option>
                    <option value="Khulna" select>Khulna</option>
                    <option value="Mymensingh" select>Mymensingh</option>
                    <option value="Sylhet" select>Sylhet</option>
                    <option value="Work from home" select>Work from home</option>
                </select>
            </div>
            <input type="submit" className="border py-1 px-2 cursor-pointer text-white "/>
            
            </div>
            </form>
       
      
         </div> 
         <div>
            
         </div>
         <h1 className="text-[#090A27] font-bold text-5xl my-5  ml-8 text-center">Job List</h1>
    
         <div className="grid grid-cols-1 md:grid-cols-3 g-4">
            {
             filterTrue===false && jobs.slice(0,6).map((job)=><Job job={job} key={job._id}></Job>)
            }
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 g-4">
            {
              filter?.slice(0,6).map((job)=><Job job={job} key={job._id}></Job>)
            }
         </div>
         <NavLink to='/alljobs'><button className="btn btn-primary btn-animate my-5">Load More</button></NavLink>
        </div>
    );
};

export default FilterJobs;