import React from "react";

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
      className="min-h-screen md:h-screen flex flex-col pt-24 md:pt-0 justify-center items-center bg-gray-800 text-white p-6"
    >
      <h2 className="text-4xl font-bold mb-8">Projects / Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-600 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
