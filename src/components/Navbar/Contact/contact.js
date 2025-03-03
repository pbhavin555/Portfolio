import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import LinkedInIcon from '../../../assets/linkedInicon.png';
import GithubIcon from '../../../assets/githublogo.png';




const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    if (!formData.get("your_name") || !formData.get("your_email") || !formData.get("message")) {
      setNotification({ message: "Please fill out all fields before submitting.", type: "error" });
      return;
    }

    emailjs
      .sendForm('service_2mmnlmm', 'template_0w9cmbc', form.current, {
        publicKey: 'HvswLcYps3xdzSDa7',
      })
      .then(
        () => {
          setNotification({ message: "Thank you for reaching out! Your message has been sent successfully.", type: "success" });
          e.target.reset();
        },
        (error) => {
          setNotification({ message: "Failed to send message. Please try again.", type: "error" });
        }
      );
  };

  return (
    <section id='contactPage'>
      
      {/* Contact Section */}
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>

        {notification.message && (
          <div className={`notification ${notification.type}`}>{notification.message}</div>
        )}

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className="name" placeholder='Your Name' name='your_name' />
          <input type='email' className="email" placeholder='Your Email' name='your_email' />
          <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>

          <div className='links'>
            <a href='https://www.linkedin.com/in/bhavinpatel1205/' target='_blank' rel='noopener noreferrer'>
              <img src={LinkedInIcon} alt='LinkedIn' className='link' />
            </a>
            <a href='https://github.com/pbhavin555' target='_blank' rel='noopener noreferrer'>
              <img src={GithubIcon} alt='Github' className='link' />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
