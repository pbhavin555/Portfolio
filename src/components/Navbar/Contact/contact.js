import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import LinkedInIcon from '../../../assets/linkedInicon.png';
import GithubIcon from '../../../assets/githublogo.png';

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });

  // Improved regex to prevent numbers at the beginning of the domain and other invalid formats
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("your_name");
    const email = formData.get("your_email");
    const message = formData.get("message");

    // Check for empty fields
    if (!name || !email || !message) {
      setNotification({ message: "Please fill out all fields before submitting.", type: "error" });
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setNotification({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    // Send email using emailjs
    emailjs
      .sendForm('service_2mmnlmm', 'template_0w9cmbc', form.current, {
        publicKey: 'HvswLcYps3xdzSDa7',
      })
      .then(
        () => {
          setNotification({
            message: "Thank you for reaching out! Your message has been sent successfully.",
            type: "success"
          });
          e.target.reset();
        },
        (error) => {
          setNotification({
            message: "Failed to send message. Please try again.",
            type: "error"
          });
        }
      );
  };

  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuss any work opportunities.
        </span>

        {/* Notification */}
        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

        {/* Contact Form */}
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className="name"
            placeholder='Your Name'
            name='your_name'
          />
          <input
            type='email'
            className="email"
            placeholder='Your Email'
            name='your_email'
          />
          <textarea
            className='msg'
            name='message'
            rows="5"
            placeholder='Your Message'
          ></textarea>
          <button type='submit' className='submitBtn'>Submit</button>

          {/* Social Links */}
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
