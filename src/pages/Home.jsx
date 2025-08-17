import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroImg from "../assets/images/hero.png"
import About from '../components/About';
import Education from '../components/Education';
import Background from './Background';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <div
        className=" md:px-10 h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <Hero />
      </div>
     
    </>
  );
}
