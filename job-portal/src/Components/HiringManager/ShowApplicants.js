import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ShowSpecificApplicants from './ShowSpecificApplicants';

const ShowApplicants = () => {
    const [userApply,setUserApply]=useState([])
    const navigate=useNavigate();
    const navigateToUser=(id)=>{
      navigate(`/applicants/${id}`)
    }
    const { register, formState: { errors }, handleSubmit } = useForm();
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
                    <th className="bg-cyan-400">Edit</th>
                </tr>
                </thead>
                <tbody>
                    {
                       userApply.map((apply,index)=>              
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

export default ShowApplicants;