import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Intro({ onComplete }) {
  const name = "Gandhodi Jayanth";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      // Typewriter delay - slightly slower for a dramatic fantasy feel
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 200); 
      return () => clearTimeout(timeout);
    } else {
      // Pause briefly after typing finishes before transitioning out
      const timeout = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [index, name.length, onComplete]);

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');`}
      </style>
      <motion.div 
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black px-4"
      >
        <div 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl flex flex-wrap justify-center items-center tracking-widest uppercase text-center"
          style={{ fontFamily: '"Bank Gothic", "BankGothic Md BT", "Michroma", sans-serif', minHeight: '5rem' }}
        >
          {name.split("").map((char, i) => (
            <span 
              key={i} 
              className={`transition-all duration-300 ${
                i < index 
                  ? "text-yellow-600/80 drop-shadow-[0_0_8px_rgba(202,138,4,0.5)]" 
                  : i === index 
                    ? "text-yellow-300 drop-shadow-[0_0_20px_rgba(253,224,71,1)] scale-110 inline-block" 
                    : "hidden" 
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {index === name.length && (
            <motion.span 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="w-[2px] h-[1em] bg-yellow-400 ml-1 md:ml-2 shadow-[0_0_10px_rgba(253,224,71,0.8)] inline-block"
            />
          )}
        </div>
      </motion.div>
    </>
  );
}
