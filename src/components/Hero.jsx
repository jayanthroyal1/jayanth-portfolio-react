import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen relative flex flex-col justify-center items-center text-center bg-gray-900 text-white overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 animate-pulse-slow -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse-slow top-1/2 -right-48"></div>
      <div className="absolute w-64 h-64 bg-green-500 rounded-full opacity-20 animate-pulse-slow bottom-0 left-1/4"></div>

      <h1 className="text-5xl md:text-6xl font-bold mb-4 relative z-10">
        Hi, I'm Jayanth
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 relative z-10">
        Front-End / React Developer
      </p>
    </section>
  );
}
