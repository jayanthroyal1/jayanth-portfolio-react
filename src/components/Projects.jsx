import React from "react";
import { motion } from "framer-motion";

// Example project data
const projects = [
  {
    title: "Monarch One+",
    description:
      "Standalone Application, React.js, NodeJS, ExpressJS, MongoDB, SCSS, ElectronJS for vehicle configruation",
    tech: ["React", "ElectronJS", "SCSS"],
  },
  {
    title: "MK-V SmartScreen",
    description:
      "Front-End development using React.js, SCSS,TailwindCSS, ElectronJS for vehicle interaction.",
    tech: ["React", "Redux", "ElectronJS", "SCSS", "zustand "],
  },
  {
    title: "Auger SmartScreen",
    description:
      "Front-End development using React.js, SCSS, ElectronJS for vehicle interaction.",
    tech: ["React", "ElectronJS", "SCSS"],
  },
  {
    title: "Customer Service Portal",
    description:
      "React.js based platform for BPOs to assist customers; integrated with backend services.",
    tech: ["React", "Redux", "SCSS", "AWS", "Jenkins"],
  },
  {
    title: "E-Service Delivery (Browser Migration)",
    description:
      "Migrated legacy portal from IE to modern browsers using React.js and ES6 syntax.",
    tech: ["React", "JavaScript", "Git", "Jira", "Jenkins"],
  },
  {
    title: "Power Apps Projects",
    description:
      "Developed applications in Microsoft Power Apps and Power BI to automate processes.",
    tech: ["Power Apps", "Power BI", "Automation"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen md:h-screen flex flex-col py-24 md:py-0 justify-center items-center bg-gray-900 text-white px-6 w-full"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2"
      >
        Projects / Portfolio
      </motion.h2>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-2 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-100">{project.title}</h3>
            <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-blue-300 rounded-md text-xs font-semibold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
