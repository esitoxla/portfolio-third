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

      <div className="md:mt-[10rem] mt-[13rem]">
        <Background />
      </div>

      <div className="">
        <Services />
      </div>

      <div className=''>
        <Contact/>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
