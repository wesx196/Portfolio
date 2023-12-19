import { Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ln3fdnj', 'template_169i1rs', e.target, 'ZIyJROy6E2InjB0Cd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="App">
      <form className='contact__form' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <Button type="Submit" variant="contained" endIcon={<Send />} className="submit__btn" style={{ marginTop: "5px" }}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default Contact