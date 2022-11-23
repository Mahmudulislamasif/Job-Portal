import React, { useEffect, useState } from 'react';
import GetBlog from './GetBlog';
import Image from '../../Assests/HomePageAssests/49957-blog-menu.gif'
const GetBlogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data.data))
    })
    return (
        <div className='bg-[#f7f7f7]'>
         
        <div className='flex w-full justify-center items-center   pb-3 mb-7'>
            <h1 className='text-5xl font-bold'>Blogs</h1>
          
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-7 mt-5 mx-auto container'>
            
        {
                    blogs?.map(article => <GetBlog
                        key={article._id}
                        blog={article}
                    ></GetBlog>)

                }
        </div>
        <div className='flex lg:justify-end md:justify-center sm:justify-center pt-3'>
            
        </div>
    </div >
    );
};

export default GetBlogs;