import React from 'react';

const GetBlog = ({blog}) => {
    const {title,description,image,date}=blog;
    return (
        <div  data-aos="flip-down"  className="card shadow-xl bg-[#F3F4F6]  cursor-pointer ">
        <figure >
          
            <img src={image} alt=''     className="w-full h-60"/>
        </figure>
        <div className="card-body text-[#130f40] px-5 py-8">
          <div className="flex justify-between items-center">
            <div className="badge bg-[#f79f1f] text-black">{title}</div>
            <div className="text-sm ">{date}</div>
          </div>
          <h1 className="text-xl font-bold text-justify">{description}</h1>
          <p className="text-sm"></p>
        </div>
  
      </div>
    );
};

export default GetBlog;