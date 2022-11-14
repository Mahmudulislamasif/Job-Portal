import React from 'react';
import { GrTrash } from 'react-icons/gr';

const ShowJob = ({jobdetails,handleDelete}) => {
    const {_id,organization,profile,sdate,edate}=jobdetails;
    return (
        <div className="mb-4">
           <div className="flex items-center justify-between">
           <div>
            <h1 className="font-bold">{organization}</h1>
            <h1>{profile}</h1>
            </div>
            <div>
            <GrTrash className="text-2xl" onClick={()=>handleDelete(_id)}/>
            </div>
           </div>
        </div>
    );
};

export default ShowJob;