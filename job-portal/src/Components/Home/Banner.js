import React, { useState } from 'react';
import BannerImage from '../../Assests/HomePageAssests/close-up-briefcase.jpg'

import { AiFillLinkedin } from 'react-icons/ai'

const Banner = () => {
    const [counterOn,setCounterOn]=useState(false)
    return (
        <div  style={{background:`url(${BannerImage})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat',opacity:"1"}} >
           
           <div className="flex flex-col ml-10 justify-center items-start font-poppins h-screen ">
           <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >
           <h1 className="text-6xl text-white font-bold">Find your favourite <span className="text-orange-600 ">job</span>  here</h1>
           <h1 className="text-3xl text-white mt-6">Find Jobs, Employment & Career Opportunities</h1>
           </div>
           </div>
          
          
        </div>
    );
};

export default Banner;