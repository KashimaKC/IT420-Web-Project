import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const DonateEmail = () => {
  const form = useRef();

  const sendDonateEmail = (e) => {
    e.preventDefault();

    //Parameters: Service ID, Template ID, form, Public Key (These can all be found on emailjs.com)
    emailjs.sendForm('service_gnz4xwm', 'template_941alk9', form.current, 'x6NRTBTdFL76jybCi')
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
        <form className="donation-form" onSubmit={sendDonateEmail} ref={form}>
            <input type={'text'} id='name' placeholder="Full name" name="fname" required></input>
            <input type={'email'} id='email' placeholder="sample@email.com" name="sender_email" required></input>
            <input type={'phone'} id='phone' placeholder="(888)888-8888" name="phone" required></input>
            <input type={'text'} id='address' placeholder="7777 Donation Ln." name="address" required></input>
            <input type={'text'} id='items' placeholder="Items you would like to donate (please include gender and size)" name="message" required></input>
            <input type={'submit'} value='Submit'></input>
        </form>
    </div>
    );
};