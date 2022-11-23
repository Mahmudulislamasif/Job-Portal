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
        <div className="bg-[#f7f7f7]">
            <h1 className="text-5xl font-bold text-center py-6">Contact Us</h1>
              <form ref={form} onSubmit={sendEmail} className="flex rounded-lg flex-col w-1/2 mx-auto bg-white shadow-lg p-6">
                <div className="inputContainer">
                
                <input type="text" className="border p-2 mb-3 rounded-lg w-full" name="name" required/>
                <span className="mb-2" >Your Name</span>
                </div>
                <label  className="mb-2">Email</label>
                <input placeholder="Your Email" type="email" className="border p-3 mb-3  rounded-lg" name="email_id" required/>
                <label  className="mb-2">Message</label>
                <textarea name="message" placeholder="Write Something Here..." className="mb-3  rounded-lg" required  />
                <input type="submit" className="btn btn-primary" value="Send" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;