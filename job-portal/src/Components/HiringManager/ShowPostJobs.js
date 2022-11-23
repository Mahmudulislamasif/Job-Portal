import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
const ShowPostJobs = () => {
    const [user]=useAuthState(auth)
    const [showJobs,setShowJobs]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/jobemail/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setShowJobs(data.data))
    },[user?.email])
    const navigate=useNavigate();
    const navigateToUser=(id)=>{
      navigate(`/applicants/${id}`)
    }
    return (
        <div>
        <div class="overflow-x-auto p-3 font-poppins">
           {/* {
               userApply.map((apply)=><ShowSpecificApplicants key={apply._id} apply={apply}></ShowSpecificApplicants>)
           }  */}
           <table class="table w-full">
               <thead>
               <tr>
                   <th className="bg-cyan-400">Serial</th>
                   <th className="bg-cyan-400">Company Name</th>
                   <th className="bg-cyan-400">Email</th>
                   <th className="bg-cyan-400">Edit</th>
               </tr>
               </thead>
               <tbody>
                   {
                      showJobs?.map((apply,index)=>              
                       <tr key={apply._id}>
                           <th className="bg-slate-100">{index+1}</th>
                           <td className="bg-slate-100">{apply.companyname}</td>
                           <td className="bg-slate-100">{apply.email}</td>
                           <td className="bg-slate-100" onClick={()=>navigateToUser(apply._id)} >Details</td>
                       </tr>
                      )
                   }

               </tbody>
           </table>
       </div>
      </div>
    );
};

export default ShowPostJobs;