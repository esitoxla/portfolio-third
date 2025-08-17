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

      <div className="md:my-[10rem] my-[13rem]">
        <Background />
      </div>

      <div className="absolute top-[120rem] md:top-[126rem] left-0 right-0">
        <Services />
      </div>

      <div className='absolute top-[180rem] md:top-[160rem] w-full'>
        <Contact/>
      </div>

      <div className="absolute top-[234rem] md:top-[199rem] w-full">
        <Footer />
      </div>
    </div>
  );
}
