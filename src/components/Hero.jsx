import React, { useState, useEffect } from "react";
import profileImg from "../assets/GandhodiJayanth.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiRedis, SiMongodb, SiJenkins, SiTailwindcss, SiExpress, SiMqtt } from "react-icons/si";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yPos = useTransform(scrollY, [0, 300], [0, 100]);

  const techStack = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React JS" },
    { icon: <SiRedux className="text-[#764ABC]" />, name: "Redux" },
    { icon: <FaNodeJs className="text-[#339933]" />, name: "NodeJS" },
    { icon: <SiExpress className="text-[#e91e63]" />, name: "NodeJS" },
    { icon: <SiRedis className="text-[#DC382D]" />, name: "Redis" },
    { icon: <FaDocker className="text-[#2496ED]" />, name: "Docker" },
    { icon: <FaAws className="text-[#FF9900]" />, name: "AWS" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "GIT" },
    { icon: <SiJenkins className="text-[#D33833]" />, name: "Jenkins" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
    // { icon: <SiMqtt className="text-[#FF9900]" />, name: "AWS" },
  ];

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      setText(fullText.slice(0, index));

      if (!isDeleting && index < fullText.length) {
        index++;
        timeout = setTimeout(type, 100); // Typing speed
      } else if (isDeleting && index > 0) {
        index--;
        timeout = setTimeout(type, 50); // Deleting speed
      } else if (!isDeleting && index === fullText.length) {
        isDeleting = true;
        timeout = setTimeout(type, 2000); // Pause at end before deleting
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        timeout = setTimeout(type, 500); // Pause before typing again
      }
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col md:flex-row justify-center items-center px-6 md:px-20 bg-gray-900 text-white overflow-hidden"
    >
      {/* Dynamic Background with floating animated blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse-slow top-10 left-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse-slow bottom-10 right-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-float top-1/3 left-1/3"
        ></motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-24 md:mt-0">

        {/* Left: Profile Image with Glowing Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start w-full md:w-1/3 md:pl-10"
        >
          <div className="relative group">
            {/* Glowing blur behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <img
              src={profileImg}
              alt="G.Jayanth"
              className="relative w-64 h-64 md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3 md:pr-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-400 font-semibold text-lg md:text-xl tracking-wider mb-2 uppercase"
          >
            Welcome to my portfolio
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            Hi, I'm <span className="text-white">G.Jayanth</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-10 md:h-12 mb-6"
          >
            <p className="text-2xl md:text-4xl text-gray-300 font-medium flex items-center justify-center md:justify-start">
              A <span className="ml-3 text-blue-400 font-bold border-r-4 border-blue-400 pr-2 animate-pulse">{text}</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 max-w-lg mb-8 leading-relaxed text-lg"
          >
            I am passionate about creating interactive, responsive, and dynamic web experiences. Let's build something amazing together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4"
          >
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.6)]">
              Hire Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-300 text-white font-semibold rounded-full transition-all hover:scale-105">
              View Work
            </a>
          </motion.div>
        </div>

      </div>

      {/* Floating Tech Stack Logos on Right Corner */}
      <motion.div
        style={{ opacity, y: yPos }}
        className="hidden lg:flex flex-col gap-4 absolute right-4 lg:right-8 top-1/4 -translate-y-1/2 z-20"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.3, x: -10, rotate: 5 }}
            className="text-[26px] xl:text-[30px] relative group cursor-pointer drop-shadow-md transition-transform"
          >
            {tech.icon}
            {/* Tooltip */}
            <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-gray-700">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
