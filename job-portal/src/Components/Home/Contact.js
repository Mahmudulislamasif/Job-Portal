import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Shared/textFieldDesign.css'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mi2alox', 'template_bz403lh', form.current, 'OKXeEeNGutiOxdfGY')
        .then((result) => {
            toast.success('Your email sent successfully')
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="bg-[#f7f7f7] pb-3">
            <h1 className="text-5xl font-bold text-center py-6">Contact Us</h1>
              <form ref={form}  data-aos="zoom-in" onSubmit={sendEmail} className="flex rounded-lg flex-col w-1/2 mx-auto bg-white shadow-lg p-8">
                <div className="inputContainer">
                
                <input type="text" className="border p-3 mb-3 rounded-lg w-full focus:outline-lime-500" name="name" required/>
                <span className="mb-2" >Your Name</span>
                </div>
                <div className="inputContainer">
                <input  type="email" className="border p-3 mb-3 w-full rounded-lg focus:outline-lime-500" name="email_id" required/>
                <span  className="mb-2">Your Email</span>
                </div>
                <div className="inputContainer">
                <textarea name="message" cols={30} rows={10} className="mb-3 border p-3 w-full focus:outline-lime-500  rounded-lg" required  />
                <label  className="my-2">Message</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Send" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;