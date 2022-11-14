
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllJobs from './Components/AllJobs/AllJobs';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
import RequiredAuth from './Components/Auth/RequiredAuth';
import PostJobs from './Components/HiringManager/PostJobs';
import ShowApplicants from './Components/HiringManager/ShowApplicants';
import ShowSpecificApplicants from './Components/HiringManager/ShowSpecificApplicants';
import FilterJobs from './Components/Home/FilterJobs';
import Home from './Components/Home/Home';
import JobDetails from './Components/Home/JobDetails';
import AppliedJobs from './Components/JobSeeker/AppliedJobs';
import CreateResume from './Components/JobSeeker/CreateResume';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
       <Navbar/>
        <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='home' element={<Home></Home>}></Route>
           <Route path='postjobs' element={<PostJobs/>}></Route>
           <Route path='alljobs' element={<AllJobs/>}></Route>
           <Route path='job/:id'
        element={<RequiredAuth>
         <JobDetails/>
        </RequiredAuth>
          }>
        </Route>
           <Route path='signup' element={<Registration/>}></Route>
           <Route path='applicants' element={<ShowApplicants/>}></Route>
           <Route path='appliedjobs' element={<AppliedJobs/>}></Route>
           <Route path='createresume' element={<CreateResume/>}></Route>
           <Route path='applicants/:id' element={<ShowSpecificApplicants/>}></Route>
           <Route path='login' element={<Login/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
