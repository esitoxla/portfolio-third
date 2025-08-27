"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import projectsData from "../Data/projectData"
import heroImg from "../assets/images/hero.png"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Apply filter + search together
  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = filter === "all" || p.category === filter
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = [
    { key: "all", label: "All" },
    { key: "static", label: "Static Sites" },
    { key: "react-apps", label: "React Apps" },
    { key: "api-development", label: "API Development" },
  ]

  return (
    <div className="md:px-[5rem] h-full bg-gray-100 px-[2rem] py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center my-6 sm:my-10">
        My Projects
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm"
        />
      </div>

      {/* Filter Buttons with underline */}
      <div className="flex gap-4 justify-center mb-6 flex-wrap relative">
        {categories.map((category) => (
          <motion.button
            key={category.key}
            onClick={() => setFilter(category.key)}
            className={`relative px-4 py-2 rounded-lg ${
              filter === category.key
                ? "text-black font-semibold"
                : "text-gray-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
            {filter === category.key && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-black rounded"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-3 gap-10 justify-center">
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className=" w-[100%] flex gap-[3rem] flex-col"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-[8rem] ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-50 object-left rounded-2xl"
                  />
                </div>

                <div className="p-4 bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden w-full md:h-[10rem]">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      View project
                    </span>
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              key="empty"
              className="text-center text-gray-500 col-span-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No projects found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
