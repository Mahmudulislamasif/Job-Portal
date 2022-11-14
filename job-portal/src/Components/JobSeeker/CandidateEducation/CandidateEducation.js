import React from 'react';
import { useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import Modal from 'react-modal';
import { useQuery } from 'react-query';
import ShowEducation from './ShowEducation';
const CandidateEducation = ({userInfo}) => {
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
        fetch('http://localhost:5000/education', {
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
                 <h1>Education</h1>
                </div>
                <div className="flex flex-col">
                   <ShowEducation userInfo={userInfo}/>
                   <div className="flex text-sm mt-4 text-primary items-center" onClick={openModal}>
                    <FiPlus className=""/>
                    <h1>Add Education</h1>
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
              <h1 className="text-4xl font-poppins font-bold text-center my-4">Educational Details</h1>
              <form action="" onSubmit={handleSubmit(onSubmitEducation)}>
                  <div className="flex flex-col font-poppins">
                        <label htmlFor="" className="my-2">University/School/College</label>
                        <input type="text" {...register("institution")} className="border p-3" name="institution" id="" />
                        <label htmlFor="" className="my-2">Degree</label>
                        <input type="text" {...register("degree")} className="border p-3" name="degree" id="" />
                        <label htmlFor="" className="my-2">Year</label>
                        <input type="number" {...register("year")} className="border p-3" name="year" id="" />
                        <label htmlFor="" className="my-2">GPA/CGPA</label>
                        <input type="number" {...register("gpa")} className="border p-3" name="gpa" id="" step="any" />
                        <input type="email" {...register("email")} className="border p-3" value={userInfo?.email} id="" hidden />
                        <input type="submit" className="btn btn-primary my-2 w-1/2 mx-auto" value="Create" />
                  </div>
              </form>
            </Modal>
          </div>
        </div>
    );
};

export default CandidateEducation;