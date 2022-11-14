import React from 'react';
import { useQuery } from 'react-query';
import ShowJob from './ShowJob';
import Loading from '../../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const ShowJobs = () => {
    const [user]=useAuthState(auth)

    const { data, isLoading, refetch } = useQuery(['job', user?.email], () => fetch(`http://localhost:5000/jobdetails/${user?.email}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete items?')
        if(proceed)
        { 
            fetch(`http://localhost:5000/jobdetails/${id}`,
            {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                refetch()
            })
        }
    }
    return (
        <div>
             {
            data.data?.map((jobdetails)=><ShowJob handleDelete={handleDelete} key={jobdetails._id} jobdetails={jobdetails}></ShowJob>)
           }
        </div>
    );
};

export default ShowJobs;