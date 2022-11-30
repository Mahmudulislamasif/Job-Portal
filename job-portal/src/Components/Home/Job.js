import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { ImOffice } from 'react-icons/im';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
const Job = ({job}) => {
    const {_id,title,category,jobtype,salary,companyname,period,address}=job;
    const navigate=useNavigate();
    const navigateToToolDetails=(id)=>{
      navigate(`/job/${id}`)
    }
    return (
        <div data-aos="flip-left" class="bg-[#F3F4F6] py-8 px-4 text-left w-96  shadow-2xl container mx-auto mb-3 rounded-xl">
            <h1 className="text-xl font-bold">{title}</h1>
            <h1 className=" text-gray-500 mt-2">{companyname}</h1>
          
           <div className="flex items-center mt-2">
           {
                jobtype==="Online" ?  <AiOutlineHome className="text-2xl text-purple-500"/> : jobtype==="Onsite"? <ImOffice className="text-2xl text-purple-500"/>:<MdOutlineMapsHomeWork className="text-2xl text-purple-500"/>
            }
            <h1 className="text-sm ml-3">{jobtype}</h1>
           </div>
           <div className="flex justify-between mt-3">
           <div className="flex flex-col">
              <div className="flex items-center">
              <AiOutlineCalendar className=" text-purple-500 text-2xl"/>
              <h1 className="ml-2">Duration</h1>
              </div>
             <h1 className="flex justify-end">{period} month</h1>
           </div>
           <div>
           <div className="flex flex-col">
              <div className="flex items-center">
              <FaMoneyBillWave className="text-purple-500 text-2xl"/>
              <h1 className="ml-2">Salary</h1>
              </div>
             <h1 className="flex justify-end">{salary}</h1>
           </div>
        
           
           </div>
           <div>
           <div className="flex flex-col">
              <div className="flex items-center">
              <CiLocationOn className="text-purple-500 text-2xl"/>
              <h1 className="ml-2">Address</h1>
              </div>
             <h1 className="flex justify-end">{address}</h1>
           </div>
        
           
           </div>
           </div>
           <div>
             <h1  onClick={()=>navigateToToolDetails(_id)}  className="text-right mt-4 text-blue-600">View Details</h1>
           </div>
        </div>
    );
};

export default Job;