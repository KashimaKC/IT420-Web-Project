import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const VolunteerEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //Parameters: Service ID, Template ID, form, Public Key (These can all be found on emailjs.com)
    emailjs.sendForm('service_gnz4xwm', 'template_8nnxe18', form.current, 'x6NRTBTdFL76jybCi')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
        e.target.reset();
        alert("Form Submitted!");
  };

  return (
    <div>
        <form className='volunteer-form-container' onSubmit={sendEmail} ref={form}>
            <input type={'text'} placeholder='First name' name="fname" required></input>
            <input type={'text'} placeholder='Last name' name="lname" required></input>
            <input type={'email'} placeholder='Email' name="sender_email" required></input>
            <input type={'tel'} placeholder='Phone' name="phone"></input>
            <input type={'text'} placeholder='Volunteer oportunities you are interested in' name="message"></input>
            <input type="hidden" name="_subject" value="Volunteer Email!"></input>
            <input type="hidden" name="_autoresponse" value="Copy of volunteer form"></input>
            <input type={'submit'} placeholder="Submit"></input>
        </form>
    </div>
    );
};