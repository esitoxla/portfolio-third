import React from "react";
import mineImg from "../assets/images/mine.jpeg";
import { IoCallOutline } from "react-icons/io5";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { PiHouseLineThin } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[4rem] absolute bg-white top-[4rem] md:top-[6rem] mx-4 sm:mx-6 h-auto lg:h-[40rem] w-[95%] lg:w-[90%] rounded-lg p-4 sm:p-6 lg:p-8 shadow">
      {/* Left image */}
      <div className="w-full lg:w-1/2 h-[18rem] sm:h-[22rem] lg:h-auto">
        <img
          src={mineImg}
          alt="My Image"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col gap-6 py-6 lg:py-10">
        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="text-sm sm:text-base">HELLO EVERYONE, I AM</p>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            IRENE TOXLA
          </h3>
          <p className="font-medium text-lg sm:text-xl lg:text-2xl">
            WEB DEVELOPER
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            I build intuitive, purposeful digital experiences that solve
            real-world problems. Blending creativity with technical skill, I
            focus on delivering solutions that engage users, drive results, and
            bring innovative ideas to life.
          </p>
        </div>

        <div className="text-gray-600 flex flex-col gap-3 sm:gap-4 text-sm sm:text-base">
          <div className="flex gap-2 sm:gap-3 items-center">
            <span className="text-xl sm:text-2xl text-[#6C63FF]">
              <IoCallOutline />
            </span>
            <span>+233 206678495</span>
          </div>
          <div className="flex gap-2 sm:gap-3 items-center">
            <span className="text-xl sm:text-2xl text-[#6C63FF]">
              <PiEnvelopeSimpleThin />
            </span>
            <span>toxlairene@gmail.com</span>
          </div>
          <div className="flex gap-2 sm:gap-3 items-center">
            <span className="text-xl sm:text-2xl text-[#6C63FF]">
              <PiHouseLineThin />
            </span>
            <span>Accra, Ghana</span>
          </div>
        </div>

        <div className="text-gray-600 flex gap-3 sm:gap-4 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/irene-toxla-40a634248"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 p-1 border bg-gray-200 rounded text-xl sm:text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
              <FaLinkedinIn />
            </div>
          </a>

          <a
            href="https://github.com/esitoxla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 p-1 border bg-gray-200 rounded text-xl sm:text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
              <FaGithub />
            </div>
          </a>

          <a
            href="https://wa.me/0206678495"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 p-1 border bg-gray-200 rounded text-xl sm:text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
              <FaWhatsapp />
            </div>
          </a>

          <a
            href="https://www.instagram.com/esi_toxla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 p-1 border bg-gray-200 rounded text-xl sm:text-2xl text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#3FE7E8] transition-all duration-300">
              <FaInstagram />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
