import moment from 'moment';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostReviews = () => {
    const [user]=useAuthState(auth)
    const onSubmitReview=(event)=>{
        event.preventDefault()
        const review={
         email: event.target.email.value,
         description: event.target.description.value,
         ratings:event.target.ratings.value,
         date:event.target.date.value
        }
        fetch('http://localhost:5000/reviews', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(review)
          })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if(data.status=='success')
             {
                toast.success('Review recorded succesfully')
             }
             else{
                toast.error('Already Exists')
            }
         });
     }
    return (
        <div>
            <form action="" onSubmit={(e)=>onSubmitReview(e)} className="mx-auto bg-white p-10 w-3/4 my-2 md:w-1/2 rounded-md ">
               <h1 className="text-3xl text-center font-bold">Add Your Blog Here</h1>
               <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Email</label>
                   <input type="text" name="email" value={user?.email} className="border p-2 focus:outline-green-300" required disabled/>
                </div>
                <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Ratings</label>
                   <input type="number" max="5" min="1" name="ratings" className="border p-2 focus:outline-green-300"  step="any" required/>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor=""  className="font-bold mb-3"> Description</label>
                  <textarea name="description" id="" cols="30" rows="10" className="border p-2" required></textarea>
                </div>
            
                <div className="flex flex-col">
                   <label htmlFor="" className="font-bold mb-3">Date</label>
                   <input type="text" name="date" className="border p-2 mb-3 focus:outline-green-300" value={moment().format('LL')} required disabled/>
                </div>
                <input type="submit" className="bg-gradient-to-r cursor-pointer w-full p-4 text-white from-indigo-500 to-purple-500" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default PostReviews;