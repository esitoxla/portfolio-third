import React from "react";
import logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between px-8 py-6 h-[4rem] text-white ">
        <div className="flex items-center">
          <div className="w-[3rem] h-[3rem]"><img src={logo} alt="logo" /></div>
          <div className="text-2xl font-bold">
            <span>ie</span>
            <span>Toxla</span>
          </div>
        </div>

        <div>
          <ul className="flex gap-6 items-center cursor-pointer font-medium">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
