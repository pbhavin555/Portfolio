import React from 'react';
import './intro.css';
import bg from '../../../assets/bhavinimage.webp';
import { Link } from 'react-scroll';
import resume from '../../../assets/Resume (1).pdf';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <motion.span className='hello' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Hello
        </motion.span>
        
        <motion.span className='introText' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          I'm <span className='introName'>Bhavin Patel</span><br />FrontEnd Developer
        </motion.span>
        
        <motion.p className='introPara' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          I am a skilled Web Developer, specializing in building scalable 
          and interactive web experiences with <b>ReactJS</b>,<br/> ensuring visually appealing and user-friendly designs.
        </motion.p>
        
        <div className="buttonContainer">
          <Link to="works" smooth={true} duration={500} offset={-100}>
            <motion.button className='btn' whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }}>View My Work</motion.button>
          </Link>
          
          <a href={resume} download="Resume.pdf">
            <motion.button className='btn downloadBtn' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Download Resume</motion.button>
          </a>
        </div>
      </div>
      
      <motion.img src={bg} alt="Bhavin Patel" className="bg" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} />
    </section>
  );
}

export default Intro;
