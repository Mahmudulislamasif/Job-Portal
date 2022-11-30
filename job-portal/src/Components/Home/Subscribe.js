import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
const Subscribe = () => {
    return (
     <div className=" bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 py-10">
         <div className="flex flex-col justify-center " data-aos="zoom-in-down">
            <h1 className="text-3xl text-center my-6 font-bold text-white">Subscribe Our Newsletter!</h1>
            <div className="flex justify-center ">
                <AiOutlineMail className="text-4xl rounded-l-sm w-12 p-1 bg-white h-16"/>
                <input type="text" className="border py-5 w-3/4 md:w-1/2  focus:outline-none h-16" />
                <input type="submit" className="btn w-24 md:w-40 btn-primary rounded-l-sm h-16" />
            </div>
        </div>
     </div>
    );
};

export default Subscribe;