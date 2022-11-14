import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CandidateCourses from './CandidateCourses';
import CandidateEducation from '../JobSeeker/CandidateEducation/CandidateEducation';
import CandidateImportantLinks from './CandidateImportantLinks';
import CandidateInfo from '../JobSeeker/CandidateInfo/CandidateInfo';
import CandidateProjects from './CandidateProjects';
import CandidateSkills from './CandidateSkills';
import CandidateJob from './CandidateJobs/CandidateJob';

const CreateResume = () => {
    const [userInfo,setUser]=useState([])
    const [user]=useAuthState(auth)
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUser(data.data))
    })
    return (
       <div className="bg-[#f7f7f7] text-[#090A27]">
         <section className='w-full md:w-4/5 mx-auto py-10 '>
            <h4 className="text-3xl font-bold text-center my-10">Resume</h4>
            <div className='my-10 p-3 md:p-20 border rounded-md shadow-xl bg-white'>
                <CandidateInfo userInfo={userInfo} />
                <div className="divider bg-gray-100 h-1"></div>
                <CandidateEducation userInfo={userInfo} />
                <div className="divider bg-gray-100 h-1"></div>
                <CandidateJob userInfo={userInfo} />
                <div className="divider bg-gray-100 h-1 "></div>
                <CandidateSkills userInfo={userInfo}/>
                <div className="divider bg-gray-100 h-1"></div>
                <CandidateCourses userInfo={userInfo}/>
                <div className="divider bg-gray-100 h-1"></div>
                <CandidateProjects userInfo={userInfo}/>
                <div className="divider bg-gray-100 h-1"></div>
                <CandidateImportantLinks userInfo={userInfo}/>
            </div>
        </section>
       </div>
    );
};

export default CreateResume;