import React from "react";
import { LuMonitor, LuServer, LuFileText } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <LuMonitor className="w-[3rem] h-[6rem] text-[#6C63FF]" />,
      title: "Full React Applications",
      description:
        "Build scalable, responsive, and modern React applications tailored to your business needs.",
    },
    {
      id: 2,
      icon: <LuServer className="w-[3rem] h-[6rem] text-[#6C63FF]" />,
      title: "API Development",
      description:
        "Develop robust RESTful APIs with clean architecture, optimized queries, and strong security.",
    },
    {
      id: 1,
      icon: <LuFileText className="w-[3rem] h-[6rem] text-[#6C63FF]" />,
      title: "API Testing & Documentation",
      description:
        "Test APIs and provide clear, developer-friendly documentation using tools like Postman.",
    },
  ];
  return (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-medium text-center my-12">
        OFFERINGS TO MY CLIENTS
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
