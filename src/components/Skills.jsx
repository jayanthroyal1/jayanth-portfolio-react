import React from "react";

export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "Redux",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SCSS",
    "Bootstrap",
    "Node.js",
    "REST APIs",
    "Axios",
    "Git",
    "Jenkins",
    "Chrome DevTools",
    "Power Apps",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen md:h-screen pt-24 md:pt-0 flex flex-col justify-center items-center bg-gray-700 text-white p-6"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 bg-gray-800 text-white rounded-lg text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
