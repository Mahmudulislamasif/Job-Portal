import React, { useEffect, useState } from 'react';

const ShowSpecificApplicants = ({apply,index}) => {
    const {companyname,email}=apply;

    return (
       
        <tr>
          <th className="bg-slate-100">{index+1}</th>
          <td className="bg-slate-100">{companyname}</td>
          <td className="bg-slate-100">{email}</td>
        </tr>
        
       
    );
};

export default ShowSpecificApplicants;