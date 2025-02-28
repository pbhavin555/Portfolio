import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Walmart from '../../../assets/walmart.png';
import Adobe from '../../../assets/adobe.png';
import Microsoft from '../../../assets/microsoft.png';
import Facebook from '../../../assets/facebook.png';
import FacebookIcon from '../../../assets/facebook-icon.png'
import TwitterIcon from '../../../assets/twitter.png'
import YoutubeIcon from '../../../assets/youtube.png'
import InstagramIcon from '../../../assets/instagram.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2mmnlmm', 'template_0w9cmbc', form.current, {
            publicKey: 'HvswLcYps3xdzSDa7',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent Successfully');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactPage'>

        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>Write about the client description</p>
        </div>
        <div className='clientImgs'>
            <img src={Walmart} alt="" className='clientImg'></img>
            <img src={Adobe} alt="" className='clientImg'></img>
            <img src={Microsoft} alt="" className='clientImg'></img>
            <img src={Facebook}alt="" className='clientImg'></img>
        </div>

        <div id="contact">

            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please Fill out the form below to discuss any work opportunites.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className="name" placeholder='Your Name' name='your_name'/>
                <input type='email' className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon}alt='Twitter' className='link'/>
                    <img src={YoutubeIcon} alt='Youtube' className='link'/>
                    <img src={InstagramIcon}alt='Instagram' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact