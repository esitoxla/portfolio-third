import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png"
import { NavLink, useLocation } from "react-router";
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";


export default function Navbar() {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
  
  useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 50) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "about" },
    { label: "SERVICES", path: "services" },
    { label: "PROJECTS", path: "projects" },
    { label: "CONTACT", path: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full md:px-14 px-4 py-2 z-50 transition-colors duration-50 ${
        location.pathname !== "/" || scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center  text-white">
        <div className="flex items-center">
          <div className="w-[3rem] h-[3rem]">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-2xl font-bold">
            <span>ie</span>
            <span>Toxla</span>
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-6 items-center cursor-pointer font-medium pr-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#4831D4] border-b-2 border-[#4831D4]"
                      : "hover:text-[#4831D4]"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* hamburgar */}
        <div className="md:hidden px-4" onClick={() => setOpen(!open)}>
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <MdMenu className="text-4xl" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 120, // controls how "bouncy" it feels
              damping: 12, // controls how much it settles
            }}
            className="absolute top-20 left-0 w-full h-screen z-20 md:hidden"
          >
            <div className="flex flex-col gap-8 px-8 text-xl font-semibold uppercase bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8]  text-white py-5 m-6 rounded-3xl">
              <ul className="flex flex-col gap-6 font-medium  cursor-pointer">
                <NavLink to="/" onClick={() => setOpen(false)}>
                  <li>HOME</li>
                </NavLink>

                <NavLink to="about" onClick={() => setOpen(false)}>
                  <li>ABOUT</li>
                </NavLink>

                <NavLink to="services" onClick={() => setOpen(false)}>
                  <li>SERVICES</li>
                </NavLink>

                <NavLink to="projects" onClick={() => setOpen(false)}>
                  <li>PROJECTS</li>
                </NavLink>

                <NavLink to="contact" onClick={() => setOpen(false)}>
                  <li>CONTACT</li>
                </NavLink>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
