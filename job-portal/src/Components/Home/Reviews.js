import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Review from './Review';
const Reviews = () => {
    const [testimonials,setTestimonial]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setTestimonial(data.data))
    })
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="bg-[#f7f7f7]">
            <h1 className="text-5xl font-bold text-center text-[#090A27] py-6">Testimonials</h1>
            <Carousel responsive={responsive} showDots={true}>
               {
                testimonials?.map((testimonial)=><Review testimonial={testimonial} key={testimonial._id}></Review>)
               }
            </Carousel>
        </div>
    );
};

export default Reviews;