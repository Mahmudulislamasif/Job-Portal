import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';
const Navbar = () => {
     const [nav,setNav]=useState(false)
     const [user]=useAuthState(auth)
     const [userRole,setUserRole]=useState({})
     const logout = () => {
         signOut(auth);
     };
     useEffect(()=>{
      fetch(`http://localhost:5000/user/${user?.email}`)
      .then(res=>res.json())
      .then(data=>setUserRole(data.data))
  },[user])
    const handleNav=()=>{
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center text-left h-24 w-full bg-gray-50 mx-auto px-4 text-black font-poppins'>
      <h1 className='w-full text-3xl font-bold'>InternBD</h1>
      <ul className='hidden md:flex'>
       <NavLink to='/home'> <li className='p-4'>Home</li></NavLink>
       <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <a>
            <span>Dashboard</span>
            
          </a>
          <ul class="p-2 bg-white z-30">
            {
              userRole?.role=='recruiter' ?
              <>
              <NavLink to='/postjobs'><li className="border-b no-underline border-gray-500 py-2 m-2">Post Jobs</li></NavLink>
            <NavLink to='/applicants'><li className="border-b no-underline border-gray-500 py-2 m-2">Show Applicants</li></NavLink>
            <NavLink to='/myreviews'> <li  className="border-b border-gray-600 py-2 m-2">Add Reviews</li></NavLink>
              </>: 
              <>
                <NavLink to='/appliedjobs'><li className="border-b border-gray-500 py-2 m-2">Applied Jobs</li></NavLink>
                <NavLink to='/createresume'><li className="border-b border-gray-500 py-2 m-2">Create Resume</li></NavLink>
              </>
            }
          </ul>
        </li>
        </ul>

     
        <NavLink to="/signup"><li className='p-4'>SignUP</li></NavLink>
        {user ?  <button className="-mt-1" onClick={logout}>Logout</button>:<NavLink to='/login'><li className='p-4'>Login</li></NavLink>}
      </ul> 
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-left'>Blogs Project</h1>
          <li className='p-4 border-b border-gray-600 '>Home</li>
          <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <a>
            <span>Blogs</span>
          </a>
          <ul class="p-2 bg-slate-900">
            <NavLink to='/blogs'><li className="border-b border-gray-500 py-2 m-2">Post Blogs</li></NavLink>
            <NavLink to='/myblogs'><li className="border-b border-gray-500 py-2 m-2">My Blogs</li></NavLink>
            <NavLink to='/myreviews'> <li  className="border-b border-gray-600 py-2 m-2">Add Reviews</li></NavLink>
          </ul>
        </li>
        </ul>
          <li className='p-4 border-b border-gray-600'>My Blogs</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
          
      </ul>
    </div>
    );
};

export default Navbar;