import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import Tutorials from '../components/Tutorials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Gallery />
      <Tutorials />
      <Contact />
    </>
  );
};

export default HomePage;