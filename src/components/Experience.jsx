import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Monarch Tractor – Autonomous Platform",
      role: "Full Stack Engineer (Zimeno India)",
      duration: "Apr 2023 - Present",
      techStack: ["React", "TypeScript", "OpenLayers", "Node.js", "Express", "MongoDB", "Zustand", "WebSockets"],
      desc: [
        "Developed real-time geospatial UI using OpenLayers for tractor tracking and field operations.",
        "Integrated WebSocket-based telemetry for live updates and mission monitoring.",
        "Optimized map performance for large-scale datasets and smooth interactions.",
        "Led UI development, mentoring the team on geospatial and performance best practices.",
        "Improved application performance by ~30% through optimized rendering and Zustand state management.",
        "Developed RESTful & GraphQL APIs using Node.js, Express, and Apollo Server.",
        "Designed CRUD operations with MongoDB and implemented JWT-based authentication."
      ],
    },
    {
      title: "Auger Smart Screen",
      role: "Full Stack Engineer (Zimeno India)",
      duration: "Apr 2023 - Present",
      techStack: ["ReactJS", "ElectronJS", "Express.js", "MongoDB", "Redux", "MQTT"],
      desc: [
        "Architected a high-performance, event-driven MERN stack application optimized for IoT vehicle dashboards.",
        "Utilized ElectronJS for a robust cross-platform desktop experience (React-TypeScript -> Node API -> MQTT & WebSockets).",
        "Implemented Global State Management using Redux and React Query for server cache.",
        "Integrated real-time geospatial UI using OpenLayers for vehicle location and field operations.",
        "Integrated APIs with frontend applications, ensuring secure data flow and system reliability."
      ],
    },
    {
      title: "Customer Service Portal (Evernorth CSP)",
      role: "Front-End Developer (Accenture)",
      duration: "Sep 2021 - Dec 2022",
      techStack: ["ReactJS", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Jenkins", "SonarCube"],
      desc: [
        "Developed scalable single-page applications (SPA) using component-based architecture.",
        "Integrated RESTful APIs, handling dynamic data rendering and interactive UI behavior.",
        "Optimized frontend performance through efficient state management, lazy loading, and code splitting.",
        "Worked extensively on debugging, bug fixing, and enhancing application usability and accessibility.",
        "Collaborated in Agile (Kanban) environments, participated in code reviews, and performed unit testing."
      ],
    },
    {
      title: "E-Service Delivery (Cigna Migration)",
      role: "Front-End Developer (Accenture)",
      duration: "Sep 2021 - Dec 2022",
      techStack: ["JavaScript (ES6+)", "JSP", "AJAX", "Jenkins", "Git"],
      desc: [
        "Migrated legacy web applications from Internet Explorer to modern browsers, analyzing and fixing compatibility issues.",
        "Performed cross-browser testing and debugging to ensure responsive design.",
        "Refactored frontend codebase using modern JavaScript standards to enhance maintainability.",
        "Integrated CI/CD pipelines using Jenkins for automated build, test, and deployment.",
        "Accessed server logs via WinSCP to troubleshoot production issues and perform root cause analysis."
      ],
    },
    {
      title: "Power Apps Developer",
      role: "Associate Software Engineer (AFC Digital)",
      duration: "Jun 2021 - Aug 2021",
      techStack: ["Microsoft Power Apps", "SharePoint", "Excel"],
      desc: [
        "Developed and customized business applications using Microsoft Power Apps to automate workflows.",
        "Built user-friendly forms, dashboards, and process-driven applications.",
        "Integrated Power Apps with SharePoint and Excel for seamless data handling and reporting.",
        "Implemented business logic, validation rules, and workflow automation to streamline manual processes."
      ],
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 w-full bg-gray-900 text-white relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2"
        >
          Work Experience & Key Projects
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="relative border-l-2 border-blue-500/30 ml-4 md:ml-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mb-12 relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-blue-500 border-4 border-gray-900 group-hover:bg-teal-400 group-hover:shadow-[0_0_10px_rgba(45,212,191,0.8)] transition-all duration-300"></div>
              
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>
                    <h4 className="text-lg text-blue-400 font-semibold mt-1">{exp.role}</h4>
                  </div>
                  <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/20 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-gray-300 text-xs font-medium rounded-md tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400 leading-relaxed text-sm md:text-base">
                      <span className="text-blue-500 mr-3 mt-1 opacity-80 text-lg leading-none">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
