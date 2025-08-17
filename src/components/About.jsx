import React from "react";
import mine2 from "../assets/images/mine2.jpeg";
import mine3 from "../assets/images/mine3.jpeg";

export default function About() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 lg:gap-8 justify-around items-center mt-[3rem] lg:mt-[5rem]">
      {/* Left side */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left">
          ABOUT MYSELF
        </div>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          I am a passionate individual with a background in biology. I
          transitioned into tech by training in web development at MEST. This
          experience has allowed me to combine my scientific knowledge with
          technology to create innovative solutions.
        </p>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Driven by curiosity, I create user-focused applications that merge
          science and technology. With a commitment to continuous learning, I
          strive to contribute to impactful projects.
        </p>

        <a href="/IRENE.RESUME.pdf" target="_blank" rel="noopener noreferrer">
          <p className="border rounded bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] text-white w-fit sm:w-[50%] lg:w-[25%] text-center px-4 py-2 cursor-pointer">
            DOWNLOAD CV
          </p>
        </a>
      </div>

      {/* Right side (image) */}
      <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[320px] lg:w-[500px] lg:h-[450px] bg-indigo-100 rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%] flex items-center justify-center">
        <img
          src={mine2}
          alt="Profile"
          className="w-[80%] h-[70%] rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%] object-cover"
        />
      </div>
    </div>
  );
}
