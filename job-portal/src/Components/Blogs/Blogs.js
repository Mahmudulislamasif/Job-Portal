import React from 'react';
import moment from 'moment'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TbH1 } from 'react-icons/tb';
import auth from '../../../src/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const [user]=useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmitBlog=(e)=>
    {
        e.preventDefault();
        
        const submitBlogs={
            email:e.target.email.value,
            title:e.target.title.value,
            description:e.target.description.value,
            image:e.target.image.value,
            date:e.target.date.value
        }
        fetch('http://localhost:5000/blogs', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(submitBlogs)
          })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             toast.success('Blogs written succesfully')
         });
        
    }
   
    return (
        <div>
         <form action="" onSubmit={(e)=>onSubmitBlog(e)} className="mx-auto bg-white p-10 w-3/4 my-2 md:w-1/2 rounded-md ">
               <h1 className="text-3xl text-center font-bold">Add Your Blog Here</h1>
               <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Email</label>
                   <input type="text" name="email" value={user?.email} className="border p-2 focus:outline-green-300" required disabled/>
                </div>
                <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Blog Title</label>
                   <input type="text" name="title" className="border p-2 focus:outline-green-300" required/>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor=""  className="font-bold mb-3">Blog Description</label>
                  <textarea name="description" id="" cols="30" rows="10" className="border p-2" required></textarea>
                </div>
                <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Blog Image</label>
                   <input type="text" name="image" className="border p-2 mb-3 focus:outline-green-300" required/>
                </div>
                <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Date</label>
                   <input type="text" name="date" {...register('date')} className="border p-2 mb-3 focus:outline-green-300" value={moment().format('LLL')} required disabled/>
                </div>
                <input type="submit" className="bg-gradient-to-r cursor-pointer w-full p-4 text-white from-indigo-500 to-purple-500" />
            </form>
            <ToastContainer/>
              
           
        </div>
    );
};

export default Blogs;