import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen md:h-screen flex flex-col justify-center items-center pt-24 md:pt-0 py-20 px-6 sm:px-8 max-w-5xl mx-auto w-full text-white"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2"
      >
        About Me
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 leading-relaxed text-base md:text-lg text-justify md:text-left bg-gray-800/50 p-6 md:p-10 rounded-2xl border border-gray-700 shadow-xl"
      >
        Mern Developer with strong experience in NodeJs, React.js, Redux, JavaScript (ES6+), HTML5, CSS3, and Electron.js. Started career as a Power Apps Developer building business applications and workflows. Transitioned into React.js Development while working with Accenture (TeamLease payroll) for the client Cigna Health Care, focusing on UI development, state management, API integration, and performance optimization. Worked as a Software Engineer at Monarch Tractor Pvt. Ltd., contributing to an IoT-based Electron application with responsibilities in front-end development and basic backend integration. Skilled in building responsive UI, component-based architecture, REST API integration, debugging, version control (Git), and Agile/Scrum collaboration. Good understanding of TypeScript, Redux Toolkit, React Hooks, Responsive Design, Cross-platform desktop applications, and UI/UX best practices. Looking to contribute to dynamic teams as a Mern Developer / Full Stack-Mern Developer
      </motion.p>
    </section>
  );
}
