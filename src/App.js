import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';
import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';

function App() {
  const [isMobile, setIsMobile] = useState(false); //test

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileDevices = /iphone|ipod|android|windows phone|blackberry|iemobile|mobile|opera mini/;
      setIsMobile(mobileDevices.test(userAgent));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  if (isMobile) {
    return (
      <div className='Mobile'>
        <p>Sorry, at this time this website is only available on a desktop device. I am working to add mobile functionality in the future.</p>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
