import React from 'react';
import './Contact.css';
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'; 
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3da1dwm', 'template_zvz7rla', form.current, 'yn31vXL-orI1vdJnO')
      e.target.reset();
  };

  return (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contactContainer">
      <div className="options">
        <div className="option">
          <BsFillEnvelopeFill className='icon'/>
          <h4>Email</h4>
          <h5>rasheedabukhader123@gmail.com</h5>
          <a href="mailto:rasheedabukhader123@gmail.com" target='_blank'>Send a Message</a>
        </div>

        <div className="option">
          <FaFacebookMessenger className='icon'/>
          <h4>FaceBook Massenger</h4>
          <h5>Rasheed Abu Khader</h5>
          <a href="https://www.facebook.com/rasheed.abukhader.5" target='_blank'>Send a Message</a>
        </div>

        <div className="option">
          <ImWhatsapp className='icon'/>
          <h4>WhatsApp</h4>
          <h5>+972592844743</h5>
          <a href="https://api.whatsapp.com/send?phone=+972592844743" target='_blank'>Send a Message</a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>  )
}

export default Contact