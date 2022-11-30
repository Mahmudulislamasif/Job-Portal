import React from 'react';
import moment from 'moment';
const GetBlog = ({blog}) => {
    const {title,description,image,date}=blog;
    const result=moment().startOf('hour').fromNow({date})
    return (
        <div  data-aos="flip-down"  className="card shadow-xl bg-[#F3F4F6]  cursor-pointer ">
        <figure >
          
            <img src={image} alt='' className="w-full h-60"/>
        </figure>
        <div className="card-body text-[#130f40] px-5 py-8">
          <div className="flex justify-between items-center">
            <div className="rounded-lg py-1 px-2 bg-teal-300 w-full text-black font-bold">{title}</div>
            
          </div>
          <div className="text-sm flex justify-end">{date}</div>
          <h1 className="text-xl font-bold text-justify">{description}</h1>
          <p className="text-sm"></p>
        </div>
  
      </div>
    );
};

export default GetBlog;