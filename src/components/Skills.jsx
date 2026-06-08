import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "Redux",
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SCSS",
    "Bootstrap",
    "REST APIs",
    "Axios",
    "Git",
    "GITHUB Actions",
    "Docker",
    "Jenkins",
    "Redis",
    "JWT",
    "WebSockets",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "AWS",
    "Apollo",
    "Chrome DevTools",
    "Power Apps",
    "TanStack Query"
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen md:h-screen pt-24 md:pt-0 py-20 flex flex-col justify-center items-center bg-gray-800 text-white px-6 w-full"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2"
      >
        Skills
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            variants={itemVariants}
            key={skill}
            className="p-4 bg-gray-900 border border-gray-700 text-gray-200 rounded-xl text-center font-medium hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-colors hover:-translate-y-1 text-sm md:text-base cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
