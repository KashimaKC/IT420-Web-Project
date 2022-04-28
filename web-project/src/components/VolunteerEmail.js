import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const VolunteerEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_8nnxe18', form.current, 'x6NRTBTdFL76jybCi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div>
        <form className='volunteer-form-container' onSubmit={sendEmail}>
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