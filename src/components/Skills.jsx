import React from "react";

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

  return (
    <section
      id="skills"
      className="min-h-screen md:h-screen pt-24 md:pt-0 py-20 flex flex-col justify-center items-center bg-gray-800 text-white px-6 w-full"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2">Skills</h2>
      <div className="max-w-6xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 bg-gray-900 border border-gray-700 text-gray-200 rounded-xl text-center font-medium hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-1 text-sm md:text-base"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
