
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
import PostJobs from './Components/HiringManager/PostJobs';
import FilterJobs from './Components/Home/FilterJobs';
import Home from './Components/Home/Home';
import JobDetails from './Components/Home/JobDetails';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
       <Navbar/>
        <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='home' element={<Home></Home>}></Route>
           <Route path='postjobs' element={<PostJobs/>}></Route>
           <Route path='job/:id' element={<JobDetails/>}></Route>
           <Route path='signup' element={<Registration/>}></Route>
           <Route path='login' element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;