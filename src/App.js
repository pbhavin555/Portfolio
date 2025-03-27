import React from 'react';
import './App.css';

import Navbar from './components/Navbar/navbar';
import Intro from "./components/Navbar/Intro/intro";
import Skills from './components/Navbar/Skills/skills';
import Works from './components/Navbar/Works/works';
import Contact from './components/Navbar/Contact/contact';
import InternshipSection from './components/Navbar/internships/internship';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <InternshipSection/>
      <Contact/>
    
      
    </div>
  );
}

export default App;
