import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/portfoliologo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />

      {/* Desktop Navigation */}
      <div className='desktopMenu'>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-140} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to="internship" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Internships</Link>
      </div>

      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
      </button>

      {/* Mobile Menu Button */}
      <img 
        src={menu} 
        alt="Menu" 
        className={`mobMenu ${showMenu ? 'rotate' : ''}`} 
        onClick={toggleMenu} 
      />

      {/* Mobile Dropdown Menu */}
      <div className={`navMenu ${showMenu ? 'show' : ''}`}>
        <Link to="intro" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About Me</Link>
        <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link to="works" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link to="internship" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Internships</Link>
        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;
