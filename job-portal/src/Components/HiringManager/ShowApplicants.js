import React, { useEffect, useState } from 'react';
import ShowSpecificApplicants from './ShowSpecificApplicants';

const ShowApplicants = () => {
    const [userApply,setUserApply]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/userapply')
        .then(res=>res.json())
        .then(data=>setUserApply(data.data))
    })
    return (
       <div>
         <div class="overflow-x-auto p-3 font-poppins bg-purple-800">
            {/* {
                userApply.map((apply)=><ShowSpecificApplicants key={apply._id} apply={apply}></ShowSpecificApplicants>)
            }  */}
            <table class="table w-full">
                <thead>
                <tr>
                    <th className="bg-cyan-400">Serial</th>
                    <th className="bg-cyan-400">Company Name</th>
                    <th className="bg-cyan-400">Email</th>
                </tr>
                </thead>
                <tbody>
                    {
                       userApply.map((apply,index)=> 

                        <ShowSpecificApplicants key={apply._id} index={index} apply={apply}></ShowSpecificApplicants>
                       )
                    }

                </tbody>
            </table>
        </div>
       </div>
    );
};

export default ShowApplicants;