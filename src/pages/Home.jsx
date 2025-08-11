import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroImg from "../assets/images/hero.png"
import About from '../components/About';

export default function Home() {
  return (
    <div
      className="px-10 h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Navbar />
      <Hero />
      <div className="absolute top-[50rem]" >
        <About />
      </div>
    </div>
  );
}
