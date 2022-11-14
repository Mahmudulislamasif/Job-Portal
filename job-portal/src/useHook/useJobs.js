import React, { useEffect, useState } from 'react';

const useJobs = () => {
    const [jobs,setJobs]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data.data))
      },[])
      return[jobs,setJobs]
};

export default useJobs;