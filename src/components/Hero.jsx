import React, { useState, useEffect } from "react";
import profileImg from "../assets/GandhodiJayanth.jpg";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";
  
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
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse-slow top-10 left-10"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow bottom-10 right-10"
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-teal-500 rounded-full opacity-20 blur-3xl animate-float top-1/3 left-1/3"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-24 md:mt-0">
        
        {/* Left: Profile Image with Glowing Effect */}
        <div className="flex justify-center md:justify-start animate-fadeInDown w-full md:w-1/3 md:pl-10">
          <div className="relative group">
            {/* Glowing blur behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <img 
              src={profileImg} 
              alt="G.Jayanth" 
              className="relative w-64 h-64 md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fadeInUp w-full md:w-2/3 md:pr-10">
          <h2 className="text-blue-400 font-semibold text-lg md:text-xl tracking-wider mb-2 uppercase">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Hi, I'm <span className="text-white">G.Jayanth</span>
          </h1>
          <div className="h-10 md:h-12 mb-6">
            <p className="text-2xl md:text-4xl text-gray-300 font-medium flex items-center justify-center md:justify-start">
              A <span className="ml-3 text-blue-400 font-bold border-r-4 border-blue-400 pr-2 animate-pulse">{text}</span>
            </p>
          </div>
          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed text-lg">
            I am passionate about creating interactive, responsive, and dynamic web experiences. Let's build something amazing together!
          </p>
          
          <div className="flex gap-4">
             <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.6)]">
               Hire Me
             </a>
             <a href="#projects" className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-300 text-white font-semibold rounded-full transition-all hover:scale-105">
               View Work
             </a>
          </div>
        </div>

      </div>
    </section>
  );
}
