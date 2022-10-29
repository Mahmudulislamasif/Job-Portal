import React from 'react';
import BannerImage from '../../Assests/HomePageAssests/geometric-background-with-copy-space.jpg'
import BannerImage2 from '../../Assests/HomePageAssests/banner-removebg-preview.png'
import { AiFillLinkedin } from 'react-icons/ai'
const Banner = () => {
    return (
        <div  style={{background:`url(${BannerImage})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}} className="h-screen">
           
           <div className="flex flex-col ml-10 justify-center items-center font-poppins h-screen ">
           <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
           <h1 className="text-5xl">Find your favourite <span className="text-orange-600 ">job</span>  here</h1>
</div>
        
               <button className="btn  w-36 text-left bg-purple-700 text-white py-2 px-5 rounded-lg mt-10">Get started</button>
           </div>
          
          
        </div>
    );
};

export default Banner;