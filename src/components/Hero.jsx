import React, { useState, useEffect } from "react";
import profileImg from "../assets/GandhodiJayanth.jpg";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaRocket } from "react-icons/fa";
import { SiRedux, SiRedis, SiMongodb, SiJenkins, SiTailwindcss, SiExpress, SiMqtt } from "react-icons/si";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";
  const [rocketTarget, setRocketTarget] = useState(null);
  const [showPopper, setShowPopper] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yPos = useTransform(scrollY, [0, 300], [0, 100]);

  const techStack = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React JS" },
    { icon: <SiRedux className="text-[#764ABC]" />, name: "Redux" },
    { icon: <FaNodeJs className="text-[#339933]" />, name: "NodeJS" },
    { icon: <SiExpress className="text-[#e91e63]" />, name: "Express" },
    { icon: <SiRedis className="text-[#DC382D]" />, name: "Redis" },
    { icon: <FaDocker className="text-[#2496ED]" />, name: "Docker" },
    { icon: <FaAws className="text-[#FF9900]" />, name: "AWS" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "GIT" },
    { icon: <SiJenkins className="text-[#D33833]" />, name: "Jenkins" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
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

  const handleRocketNav = (e, target) => {
    e.preventDefault();
    setRocketTarget(target);
    setShowPopper(false);

    // Play movie-like motion
    setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });

      // Cleanup after scrolling
      setTimeout(() => {
        setRocketTarget(null);
        setShowPopper(true);

        // Cleanup popper
        setTimeout(() => {
          setShowPopper(false);
        }, 2000);
      }, 800);
    }, 1200);
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col md:flex-row justify-center items-center px-6 md:px-20 pt-28 pb-20 md:pt-0 md:pb-0 bg-gray-900 text-white overflow-hidden"
    >
      {/* Interactive Movie Motion Rocket */}
      <AnimatePresence>
        {rocketTarget && (
          <motion.div
            initial={{ x: "30vw", y: "-20vh", scale: 0.5, rotate: 110 }}
            animate={{
              x: ["30vw", "50vw", "60vw"],
              y: ["-20vh", "50vh", "120vh"],
              scale: [0.5, 1.5, 2],
              rotate: [110, 125, 135],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            className="fixed z-[100] pointer-events-none drop-shadow-[0_0_30px_rgba(255,100,0,1)] flex flex-col items-center justify-center"
            style={{ left: 0, top: 0 }}
          >
            <FaRocket className="text-white text-7xl md:text-9xl drop-shadow-2xl" />
            <motion.div
              initial={{ height: 20, opacity: 0.8 }}
              animate={{ height: [40, 80, 150], opacity: [0.8, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-[85%] left-1/2 -translate-x-1/2 w-6 bg-gradient-to-t from-transparent via-yellow-400 to-orange-600 rounded-full blur-md"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popper Blast Animation */}
      <AnimatePresence>
        {showPopper && (
          <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-[200]">
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = (i * 360) / 60;
              const velocity = 15 + Math.random() * 35;
              const x = Math.cos((angle * Math.PI) / 180) * velocity;
              const y = Math.sin((angle * Math.PI) / 180) * velocity;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [1, 1, 0],
                    scale: [0, Math.random() * 1.5 + 0.5, 0],
                    x: x + "vw",
                    y: y + "vh",
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 1.5 + Math.random() * 0.5, ease: "easeOut" }}
                  className="absolute rounded-sm"
                  style={{
                    width: Math.random() * 10 + 5 + "px",
                    height: Math.random() * 10 + 5 + "px",
                    backgroundColor: ["#3B82F6", "#8B5CF6", "#14B8A6", "#F59E0B", "#EF4444", "#EC4899", "#10B981"][i % 7]
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

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

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* Left: Profile Image with Glowing Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start w-full md:w-[40%] xl:w-1/3 md:pl-6 xl:pl-10 order-1 md:order-none"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80 xl:w-[380px] xl:h-[380px]">
            {/* Glowing blur behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse-slow"></div>
            <img
              src={profileImg}
              alt="G.Jayanth"
              className="relative w-full h-full object-cover rounded-full border-[6px] border-gray-900/80 shadow-[0_0_40px_rgba(0,0,0,0.9)] z-10 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[60%] xl:w-2/3 md:pr-10 order-2 md:order-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm md:text-base font-medium mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 tracking-tight"
          >
            Hi, I'm <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 drop-shadow-sm pb-2 inline-block">G. Jayanth</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-10 md:h-12 lg:h-14 mb-6 md:mb-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium flex items-center justify-center md:justify-start">
              A <span className="ml-3 text-blue-400 font-bold border-r-4 border-blue-400 pr-2 animate-pulse">{text}</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 max-w-lg lg:max-w-xl xl:max-w-2xl mb-8 leading-relaxed text-base md:text-lg lg:text-xl"
          >
            I am passionate about creating interactive, responsive, and dynamic web experiences. Let's build something amazing together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => handleRocketNav(e, '#contact')}
              className="group relative px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me <FaRocket className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </a>
            <a
              href="#projects"
              onClick={(e) => handleRocketNav(e, '#projects')}
              className="group relative px-8 py-3 lg:px-10 lg:py-4 bg-gray-900/50 border-2 border-gray-600 hover:border-blue-400 text-white font-semibold rounded-full transition-all hover:scale-105 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work <FaRocket className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:-translate-y-1 group-hover:translate-x-1 text-blue-400 transition-all duration-300" />
              </span>
            </a>
            <a
              href="#resume"
              onClick={(e) => handleRocketNav(e, '#resume')}
              className="group relative px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-full transition-all hover:scale-110 shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Resume <FaRocket className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:-translate-y-1 group-hover:translate-x-1 text-white transition-all duration-300" />
              </span>
            </a>
          </motion.div>
        </div>

      </div>

      {/* Floating Tech Stack Logos on Right Corner */}
      <motion.div
        style={{ opacity, y: yPos }}
        className="hidden lg:flex flex-col gap-5 xl:gap-6 absolute right-4 lg:right-10 bottom-5 -translate-y-1/2 z-20"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.3, x: -10, rotate: 5 }}
            className="text-[24px] xl:text-[30px] relative group cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform"
          >
            {tech.icon}
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-gray-700/50 backdrop-blur-md font-medium">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

