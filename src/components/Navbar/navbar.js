import React from 'react';
import './navbar.css';
import logo from '../../assets/portfoliologo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png';
import { useState } from 'react';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-140} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to="internship" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Internships</Link>
      </div>

      <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
      </button>

      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to="internship" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Internships</Link>
        <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;