import { Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function Contact() {

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const form = useRef();

  const sendEmail = (e) => {
    //e.preventDefault();

    emailjs.sendForm('service_ln3fdnj', 'template_169i1rs', form.current, 'ZIyJROy6E2InjB0Cd')
      .then((result) => {
        alert("Message sent successfully!");
        console.log(result.text)
      }, (error) => {
        alert("Message couldn't be sent!")
        console.log(error.text);
      });
  };

  
  return (
    <div className="App">
      <form className='contact__form' ref={form}  onSubmit={handleSubmit(sendEmail)}>
        <label>Name</label>
        <input
          {...register("user_name", {
            required: "Name is Required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters long",
            },
            maxLength: {
              value: 30,
              message: "Name must be at most 30 characters long",
            },
          })}
          placeholder="Name"
        />
        <p>{errors.user_name?.message}</p>
        <label>Email</label>
        <input
          {...register("user_email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })} 
          placeholder="Email"
         />
         <p>{errors.user_email?.message}</p>
        <label>Message</label>
        <textarea name="message" rows="10" cols="40" placeholder="Message"/>
        <Button type="Submit" variant="contained" endIcon={<Send />} className="submit__btn" style={{ marginTop: "5px" }}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default Contact