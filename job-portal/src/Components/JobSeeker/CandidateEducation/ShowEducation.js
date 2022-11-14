import React, { useEffect, useState } from 'react';
import ShowEducationRow from './ShowEducationRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
const ShowEducation = ({userInfo}) => {
    const [user]=useAuthState(auth)
    // const [educations,setEducation]=useState([])
    // const [filter,setFilter]=useState(educations)
    // const [loading,setLoading]=useState(false)
   
    const { data, isLoading, refetch } = useQuery(['available', user?.email], () => fetch(`http://localhost:5000/education/${user?.email}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete items?')
        if(proceed)
        { 
            fetch(`http://localhost:5000/education/${id}`,
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
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/education/${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setEducation(data.data))
    //     setLoading(false)
    // },[user?.email])
    return (
        <div>
           {
            data.data?.map((education)=><ShowEducationRow handleDelete={handleDelete} key={education._id} education={education}></ShowEducationRow>)
           }
        </div>
    );
};

export default ShowEducation;