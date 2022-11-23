import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const ShowSpeceficJobApplicants = () => {
    const {id}=useParams()
    const navigate=useNavigate();
    const [showUser,setShowJobs]=useState([])
    const navigateToUserForm=(userid)=>{
        navigate(`/applicantsform/${userid}`)
      }
    useEffect(()=>{
        fetch(`http://localhost:5000/userapplyid/${id}`)
        .then(res=>res.json())
        .then(data=>setShowJobs(data.data))
    },[id])
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
                   <th className="bg-cyan-400">Email</th>
                   <th className="bg-cyan-400">Resume</th>
                   <th className="bg-cyan-400">Edit</th>
               </tr>
               </thead>
               <tbody>
                   {
                      showUser.map((apply,index)=>              
                       <tr key={apply._id}>
                           <th className="bg-slate-100">{index+1}</th>
                           <td className="bg-slate-100">{apply.email}</td>
                           <td className="bg-slate-100"><a href={apply.resume} alt="">Resume Link</a></td>
                           <td className="bg-slate-100" onClick={()=>navigateToUserForm(apply._id)} >Details</td>
                       </tr>
                      )
                   }

               </tbody>
           </table>
       </div>
      </div>
    );
};

export default ShowSpeceficJobApplicants;