import React, { useState } from 'react';
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { FiUsers } from 'react-icons/fi';
import { HiOutlineClipboardList } from 'react-icons/hi';
const BussinessSummary = () => {
    const [counterOn,setCounterOn]=useState(false)
    return (

          <div className="py-4 bg-[#f7f7f7]">
            <h1 className="text-5xl font-bold text-center py-6">Stats</h1>
           <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
              <div className="container  mx-auto bg-green-100  text-black  grid grid-cols-1 md:grid-cols-4 g-4">
                 <div className="p-6 border-r-2 border-indigo-500 ">
                    <FiUsers className="text-5xl  bg-gray-100 text-[#800080] rounded-full p-3"/>
                    <h1  className="text-3xl">Users</h1>
                 <h1 className="text-3xl">
                 {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}+
                 </h1>
                 </div>
                 <div className="p-6 border-r-2 border-indigo-500 ">
                     <HiOutlineClipboardList className="text-5xl  bg-gray-100 text-[#800080] rounded-full p-3"/>
                    <h1 className="text-3xl">Total Jobs</h1>
                 <h1 className="text-3xl">
                 {counterOn && <CountUp start={0} end={50} duration={2} delay={0}/>}+
                 </h1>
                 </div>
              </div>
           </ScrollTrigger>
          </div>
      
    );
};

export default BussinessSummary;