import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from "./components/Navbar/Intro/intro";
import Skills from './components/Navbar/Skills/skills';
import Works from './components/Navbar/Works/works';
import Contact from './components/Navbar/Contact/contact';
import Footer from './components/Navbar/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
