import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CandidateCourses from './CandidateCourses';
import CandidateEducation from '../JobSeeker/CandidateEducation/CandidateEducation';
import CandidateExperience from './CandidateExperience';
import CandidateImportantLinks from './CandidateImportantLinks';
import CandidateInfo from '../JobSeeker/CandidateInfo/CandidateInfo';
import CandidateProjects from './CandidateProjects';
import CandidateSkills from './CandidateSkills';

const CreateResume = () => {
    const [userInfo,setUser]=useState([])
    const [user]=useAuthState(auth)
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUser(data.data))
    })
    return (
        <section className='w-full md:w-4/5 mx-auto py-10'>
            <h4 className="text-3xl font-bold text-center text-primary my-10">Resume</h4>
            <div className='my-10 p-3 md:p-20 border rounded-md shadow-xl'>
                <CandidateInfo userInfo={userInfo} />
                <div className="divider"></div>
                <CandidateEducation userInfo={userInfo} />
                <div className="divider"></div>
                <CandidateExperience userInfo={userInfo} />
                <div className="divider"></div>
                <CandidateSkills userInfo={userInfo}/>
                <div className="divider"></div>
                <CandidateCourses userInfo={userInfo}/>
                <div className="divider"></div>
                <CandidateProjects userInfo={userInfo}/>
                <div className="divider"></div>
                <CandidateImportantLinks userInfo={userInfo}/>
            </div>
        </section>
    );
};

export default CreateResume;