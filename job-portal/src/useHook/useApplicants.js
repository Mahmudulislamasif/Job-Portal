import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Shared/Loading';

const useApplicants = () => {
    const {id}=useParams()
    const { data:userData, isLoading, refetch } = useQuery(['userapply', id], () => fetch(`http://localhost:5000/userapplyid/${id}`)
    .then(res => res.json()))
    
    
    return {userData,isLoading,refetch}
};

export default useApplicants;