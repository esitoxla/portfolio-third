import React from 'react'
import mineImg from '../assets/images/mine.jpeg'
import { IoCallOutline } from "react-icons/io5";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { PiHouseLineThin } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Hero() {
  return (
    <div className="flex gap-[4rem]  absolute bg-white top-[6rem] mx-6 h-[40rem] w-[90%] rounded-lg p-8 shadow">
      <div className="w-1/2">
        <img
          src={mineImg}
          alt="My Image"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="w-1/2 lg:pl-10 flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-6">
          <p>HELLO EVERYONE, I AM</p>
          <h3 className="text-6xl font-bold">IRENE TOXLA</h3>
          <p className="font-medium text-2xl">WEB DEVELOPER</p>
          <p className="text-gray-600">
            I build intuitive, purposeful digital experiences that solve
            real-world problems. Blending creativity with technical skill, I
            focus on delivering solutions that engage users, drive results, and
            bring innovative ideas to life.
          </p>
        </div>

        <div className="text-gray-600 flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <span className="text-2xl text-[#6C63FF]">
              <IoCallOutline />
            </span>
            <span>+233 206678495</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-2xl text-[#6C63FF]">
              <PiEnvelopeSimpleThin />
            </span>
            <span>toxlairene@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-2xl text-[#6C63FF]">
              <PiHouseLineThin />
            </span>
            <span>Accra, Ghana</span>
          </div>
        </div>

        <div className="text-gray-600 flex gap-4 cursor-pointer ">
          <div className="w-[2.5rem] h-[2.5rem] p-1 border bg-gray-200 rounded text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
            <FaLinkedinIn />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] p-1 border bg-gray-200 rounded text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
            <FaWhatsapp />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] p-1 border bg-gray-200 rounded text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
