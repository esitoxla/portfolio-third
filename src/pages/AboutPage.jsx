import React from 'react'
import Background from './Background'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div>
      <Background />

      <div className='absolute top-[84rem] w-full'>
        <Footer />
      </div>
    </div>
  );
}
