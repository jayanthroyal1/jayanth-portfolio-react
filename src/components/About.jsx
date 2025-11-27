import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen md:h-screen flex flex-col justify-center items-center pt-24 md:pt-0 py-20 px-8 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 leading-7">
        I am a Front-End Developer with 5+ years of experience building
        scalable, responsive, and high-performance applications using React.js,
        JavaScript (ES6+), Redux, Tailwind, and Next.js. I specialize in UI/UX
        design, API integration, and Agile development.
      </p>
    </section>
  );
}
