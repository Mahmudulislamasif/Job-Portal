import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user]=useAuthState(auth)
    const [userRole,setUserRole]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUserRole(data.data))
    },[user])
    return (
        <div>
         <div class="drawer drawer-mobile bg-slate-800">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-72 bg-slate-900 text-white ">
                <div class="avatar mx-auto">
                    <div class="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    </div>
                    {
                    userRole?.role=='recruiter' ?
                    <>
                    <NavLink to='/dashboard/postjobs'><li className="border-b no-underline border-gray-500 py-2 m-2">Post Jobs</li></NavLink>
                    <NavLink to='/dashboard/showpostedjobs'><li className="border-b no-underline border-gray-500 py-2 m-2">Show Posted Jobs</li></NavLink>
                    <NavLink to='/dashboard/myreview'> <li  className="border-b border-gray-600 py-2 m-2">Add Reviews</li></NavLink>
                    <NavLink to='/dashboard/blogs'> <li  className="border-b border-gray-600 py-2 m-2">Add Blogs</li></NavLink>
                    </>
                    :
                    <>
                    <NavLink to='/dashboard/appliedjobs'><li className="border-b border-gray-500 py-2 m-2">Applied Jobs</li></NavLink>
                    <NavLink to='/dashboard/createresume'><li className="border-b border-gray-500 py-2 m-2">Create Resume</li></NavLink>
                    <NavLink to='/dashboard/blogs'> <li  className="border-b border-gray-600 py-2 m-2">Add Blogs</li></NavLink>
                    <NavLink to='/dashboard/myreview'> <li  className="border-b border-gray-600 py-2 m-2">Add Reviews</li></NavLink>
                    </>
                    
                    }
                </ul>

            </div>
        </div>

        </div>
    );
};

export default Dashboard;