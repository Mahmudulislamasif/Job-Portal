import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import Modal from 'react-modal';
import { useQuery } from 'react-query';
import ShowJobs from './ShowJobs';
const CandidateJob = ({userInfo}) => {
  const [location,setLocation]=useState(false)
  const [working,setWorking]=useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {data,isLoading,refetch}=useQuery()
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'50%'
        },
      };
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      const onSubmitEducation=(data)=>{
        console.log(data)
        fetch('http://localhost:5000/jobdetails', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
           })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              refetch()
          });
      }
    return (
        <div>
        <div className="grid md:grid-cols-2 grid-cols-1 font-poppins">
            <div>
             <h1>Jobs</h1>
            </div>
            <div className="flex flex-col">
               <ShowJobs userInfo={userInfo}/>
               <div className="flex text-sm mt-4 text-primary items-center" onClick={openModal}>
                <FiPlus className=""/>
                <h1>Add Job</h1>
            </div>
            
            </div>
            
        </div>
        <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-end">
              <button onClick={closeModal} ><ImCross className="text-2xl"/></button>
          </div>
          <h1 className="text-4xl font-poppins font-bold text-center my-4">Job Details</h1>
          <form action="" onSubmit={handleSubmit(onSubmitEducation)}>
              <div className="flex flex-col font-poppins">
                    <label htmlFor="" className="my-2">Profile</label>
                    <input type="text" {...register("profile")} className="border p-3"  placeholder="e.g. Operations " id="" />
                    <label htmlFor="" className="my-2">Organization</label>
                    <input type="text" placeholder="e.g. Internsala " {...register("organization")} className="border p-3" id="" />
                    <label htmlFor="" className="my-2">Location</label>
                    <input type="text" placeholder="e.g. Dhaka"  {...register("location")} className="border p-3"  id="" />
                    {/* {
                      location ?
                      <input type="text" placeholder="e.g. Dhaka " {...register("location")} className="border p-3" name="degree" value="Work from home" id="" />: <input type="text" placeholder="e.g. Dhaka" value="" {...register("location")} className="border p-3" name="degree" id="" />
                    } */}
                    {/* <div className="flex my-4">
                    <input type="checkbox" className="checkbox" onClick={()=>setLocation(!location)}/>
                    <h1 className="ml-4">Is it work from home?</h1>
                    </div> */}
                    <div className="flex justify-between">
                     <div className="flex flex-col w-1/2 mr-2">
                      <label htmlFor="" className="my-2">Start Date</label>
                      <input type="date" {...register("sdate")} className="border p-3" id="" />
                     </div>
                    <div className="flex flex-col w-1/2">
                    <label htmlFor="" className="my-2">End Date</label>
                    <input type="date" {...register("edate")} className="border p-3" id="" />
                     
                     {/* {
                       working ? <input type="text" {...register("year")} className="border p-3" name="year" value="present" id=""/>: <input type="date" {...register("year")} className="border p-3" name="year" id="" />
                     } */}
                    </div>
                    
                    </div>
                       {/* <div className="flex my-2">
                        <input type="checkbox" className="checkbox" onClick={()=>setWorking(!working)}/>
                        <h1 className="ml-4">Currently working here?</h1>
                       </div> */}
                    
                    <input type="email" {...register("email")} className="border p-3" value={userInfo?.email} id="" hidden />
                    <input type="submit" className="btn btn-primary my-2 w-1/2 mx-auto" value="Create" />
              </div>
          </form>
        </Modal>
      </div>
    </div>
    );
};

export default CandidateJob;