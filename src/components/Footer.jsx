import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col py-8 gap-6 items-center text-white ">
      <div className="flex items-center">
        <div className="w-[3rem] h-[3rem]">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-2xl font-bold">
          <span>ie</span>
          <span>Toxla</span>
        </div>
      </div>
      <p>FOLLOW ME</p>

      <div className=" flex gap-4 cursor-pointer ">
        <div className="w-[2.5rem] h-[2.5rem] p-1 rounded text-2xl text-white flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] transition-all duration-300">
          <FaLinkedinIn />
        </div>
        <div className="w-[2.5rem] h-[2.5rem] p-1 rounded text-2xl text-white flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] transition-all duration-300">
          <FaGithub />
        </div>
        <div className="w-[2.5rem] h-[2.5rem] p-1 rounded text-2xl text-white flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] transition-all duration-300">
          <FaWhatsapp />
        </div>
        <div className="w-[2.5rem] h-[2.5rem] p-1 rounded text-2xl text-white flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] transition-all duration-300">
          <FaInstagram />
        </div>
      </div>

      <div>Copyright © 2025 IRENE ESINAM TOXLA | All rights reserved.</div>
    </div>
  );
}
