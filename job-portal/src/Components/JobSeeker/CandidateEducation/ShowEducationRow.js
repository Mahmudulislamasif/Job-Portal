import React from 'react';
import { GrTrash } from 'react-icons/gr';
const ShowEducationRow = ({education,handleDelete}) => {
    const {_id,institution,year,gpa,degree}=education;
    return (
        <div className="mb-4">
           <div className="flex items-center justify-between">
           <div>
            <h1 className="font-bold">{degree}</h1>
            <h1>{institution}</h1>
            <h1>{year}</h1>
            <h1>GPA/CGPA : {gpa}</h1>
            </div>
            <div>
            <GrTrash className="text-2xl" onClick={()=>handleDelete(_id)}/>
            </div>
           </div>
        </div>
    );
};

export default ShowEducationRow;