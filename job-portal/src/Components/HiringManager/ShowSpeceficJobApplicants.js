import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import useApplicants from '../../useHook/useApplicants';
import Loading from '../Shared/Loading';

const ShowSpeceficJobApplicants = () => {
    const {id}=useParams()
    const navigate=useNavigate();
    const [showUser,setShowJobs]=useState([])
    const { userData, isLoading, refetch } = useApplicants()
    
    if(isLoading){
        return <Loading></Loading>
    }
    const navigateToUserForm=(userid)=>{
        navigate(`/applicantsform/${userid}`)
      }
  
    console.log(showUser)
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
                      userData?.data.map((apply,index)=>              
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