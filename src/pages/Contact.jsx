import '../styles/Contact.css';
import React from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Reusable_components/Input';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_w7imzoq', 'template_cpj9n7q', e.target, 'Stgb-kwT9vJlVCjrx')
      .then((result) => {
        console.log('Email successfully sent!');
        toast.success("Your message have been sent!!");
        e.target.reset();
      }, (error) => {
        console.error('Error sending email:', error);
      });
  }
  return (
    <section>
    <div id='contact' className='contact'>
      <div className="head_contact">
        <h1><span>Let's</span> speak</h1>
      </div>
      <div className="contact_container">
      <div className="contact-title" >
        <div className='heading'>
        <h1 style={{color : '#3F59DE'}}>GET IN TOUCH</h1>
        <p>Let have an project togethor!!</p>
        </div>
        <div className="contact_details">
          <div className="mail">
          <i class="fa-solid fa-envelope"></i>
          <p>santhoshmsanthosh.1916@gmail.com</p>
          </div>
          <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <p>+91 8838144509</p>
          </div>
          <div className="address">
          <i class="fa-solid fa-location-dot"></i>
          <p>SNS Kalvi nagar,Coimbatore</p>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <div className="contact_form_container">
          <div className="form_title">
            <h1 style={{color : "#3F59DE"}}>Say something !!</h1>
          </div>
          <div className="form">
          <form onSubmit={sendEmail}>
          <p>Name</p>
          {/* <input type="text" name='name' placeholder='Say your name' required/>
           */}
           <Input msg={"Say your name"} type = {"text'"} name = {"name"}/>
          <p>Email</p>
          {/* <input type="email" name='email' placeholder='Say your email'required/> */}
          <Input msg={"Say your Email"}  type = {"email'"} name = {"email"}/>
          <p>Message</p>
          {/* <input type="text" name='message' /><br></br> */}
          <textarea name="message" id="" cols="49" rows="8" placeholder='Say the message'></textarea><br/>
          <button type='submit'>Send</button>
          </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Contact