"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuMonitor, LuServer, LuGlobe } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <LuGlobe className="w-[3rem] h-[6rem] text-[#6C63FF]" />,
      title: "Responsive Static Websites",
      description:
        "Design responsive static websites that are perfect for portfolios, landing pages, and business showcases.",
      animation: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }, // slide from left
    },
    {
      id: 2,
      icon: <LuMonitor className="w-[3rem] h-[6rem] text-[#6C63FF]" />,
      title: "Full React Applications",
      description:
        "Build scalable, responsive, and modern React applications tailored to your business needs.",
      animation: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }, // pop in
    },
    {
      id: 3,
      icon: <LuServer className="w-[3rem] h-[6rem] text-[#6C63FF]" />,
      title: "API Development",
      description:
        "Develop robust RESTful APIs with clean architecture, optimized queries, and strong security.",
      animation: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }, // slide from right
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center my-8 sm:my-12">
          OFFERINGS TO MY CLIENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={service.animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
