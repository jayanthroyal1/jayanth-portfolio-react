import React from "react";

export default function Experience() {
  const jobs = [
    {
      role: "Software Engineer",
      company: "Monarch",
      duration: "Apr 2023 – Present",
      desc: [
        "Developing SmartScreen UI using React, Redux, Electron.js.",
        "Optimizing performance and reusable component architectures.",
        "Integrating backend APIs and collaborating in Agile sprints.",
      ],
    },
    {
      role: "Front End Developer",
      company: "Einsite (Invento Labs)",
      duration: "Dec 2022 – Apr 2023",
      desc: [
        "Developed UI features with React.js and JavaScript.",
        "Improved responsiveness and resolved UI defects.",
      ],
    },
    {
      role: "Application Development Analyst",
      company: "Accenture",
      duration: "Aug 2021 – Dec 2022",
      desc: [
        "Developed SPA modules using React.js, Redux.",
        "Migrated legacy IE-based applications to modern browsers.",
        "Worked with Git/SVN and CI/CD using Jenkins.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      {jobs.map((job, idx) => (
        <div key={idx} className="mb-10 bg-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">
            {job.role} – {job.company}
          </h3>
          <p className="text-gray-600 mb-3">{job.duration}</p>
          <ul className="list-disc ml-6 text-gray-700">
            {job.desc.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
