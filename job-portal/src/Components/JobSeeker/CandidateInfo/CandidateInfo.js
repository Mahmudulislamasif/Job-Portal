import React, { useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import Modal from 'react-modal';
const CandidateInfo = ({userInfo}) => {
    const onSubmitProfile=(e)=>{
      e.preventDefault();
      const submitPostProfile={
        firstname:e.target.firstname.value,
        lastname:e.target.lastname.value,
        gender:e.target.gender.value,
        email:e.target.email.value,
        mobilenumber:e.target.mobilenumber.value,
        location:e.target.location.value,
     }
     const url=`http://localhost:5000/user/${userInfo._id}`
     fetch(url,
       {
           method:'PATCH',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(submitPostProfile)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data)
       })
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
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
    
    return (
        <div className="font-poppins">
          <div className="flex">
              <h1 className="mr-2 text-3xl font-bold mb-3">{userInfo?.firstname} {userInfo?.lastname}</h1>
              <button onClick={openModal}><BiEdit className="text-4xl"/></button>
          </div>
          <h1 className="mb-3">{userInfo?.mobilenumber}</h1>
          <h1>{userInfo?.location}</h1>
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
        <div><h1 className="text-3xl my-4 text-center">Personal Details</h1></div>
        <form className="flex flex-col" onSubmit={(e)=>onSubmitProfile(e)}>
            <div className="flex justify-between">
               <div className="flex flex-col">
                <label htmlFor="">First Name </label>
                <input type="text" name="firstname" className="border p-2 mr-4 focus:outline-blue-500" />
               </div>
                <div className="flex flex-col">
                    <label htmlFor="">Last Name </label>
                    <input type="text" name="lastname" className="border p-2 focus:outline-blue-500" />
                </div>
            </div>
            <label htmlFor="">Gender</label>
            <select name="gender" id="" className="border p-2 w-full">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <label htmlFor="">
                 Email
            </label>
            <input type="text" name="email" value={userInfo?.email} className="border p-2 w-full" disabled />
            <label htmlFor="">
                 Mobile Number
            </label>
            <input type="text" name="mobilenumber"  className="border p-2 w-full" />
            <label htmlFor="">
                 Current Location
            </label>
            <input type="text" name="location"  className="border p-2 w-full" />
            <input type="submit" className="btn btn-primary w-1/2 mt-5 mx-auto" value="Update" />
        </form>
      </Modal>
    </div>
        </div>
    );
};

export default CandidateInfo;