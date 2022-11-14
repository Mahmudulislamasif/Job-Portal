import React from 'react';
import { useParams } from 'react-router-dom';

const ShowSpecificApplicants = () => {
    const {id}=useParams()

    const handleUserApply =(event)=>
    {
          event.preventDefault();
          const updateApply={
            status:event.target.status.value,
            msg:event.target.msg.value,
          }
          const url=`http://localhost:5000/userapply/${id}`
          fetch(url,
            {
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateApply)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
    }

    return (
        <div>
               <form action="" onSubmit={(e)=>handleUserApply(e)} className="container mx-auto w-1/2">
                    <select name="status" id=""  className="border p-3 w-full my-4">
                        <option value="Rejected">Rejected</option>
                        <option value="Ontouch">On touch</option>
                        <option value="Hire">Hire</option>
                    </select>
                    <input name="msg" type="text" className="border p-3 w-full my-4" />
                    <input type="submit" className="btn w-full" />
                </form>
        </div>
    );
};

export default ShowSpecificApplicants;