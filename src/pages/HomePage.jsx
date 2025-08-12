import React from 'react'
import Home from './Home'
import Background from './Background'
import Services from '../components/Services'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Home />

      <div className="my-[10rem]">
        <Background />
      </div>

      <div className="absolute top-[126rem] left-0 right-0">
        <Services />
      </div>

      <div className='absolute top-[160rem] w-full'>
        <Contact/>
      </div>

      <div className="absolute top-[196rem] w-full">
        <Footer />
      </div>
    </div>
  );
}
