import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import resumePdf from "../resume/gandhodijayanth_resume.pdf";
import { motion } from "framer-motion";

export default function Resume({ visitorInfo }) {
  const [downloading, setDownloading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (e) => {
    if (e) e.preventDefault();
    setDownloading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: "Resume Downloader System",
            message: `Someone just downloaded your resume.\n\nIP Address: ${visitorInfo?.ip}\nLocation Details: ${visitorInfo?.location}\nLat: ${visitorInfo?.latitude}, Lon: ${visitorInfo?.longitude}`,
            ip_address: visitorInfo?.ip,
            location: visitorInfo?.location,
          },
          PUBLIC_KEY
        )
        .then(() => console.log("Notification email sent."))
        .catch((err) => console.error("Email notification failed:", err));
    } else {
      console.warn("EmailJS credentials not fully configured in .env. Skipping email notification.");
    }

    // Trigger the actual file download
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Jayanth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloading(false);
  };

  const keyResultAreas = [
    {
      title: "Frontend Architecture",
      description: "Designed and implemented scalable, component-driven React architectures for modern applications.",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
    },
    {
      title: "Backend Architecture",
      description: "Experience with Monolithic Architecture, Microservices Architecture, REST APIs, GraphQL, Node.js, Express.js, MongoDB, Redis, Docker, JWT Authentication, Caching, and Distributed Systems.",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
    },
    {
      title: "Performance Optimization",
      description: "Reduced load times and improved core web vitals through code-splitting and efficient rendering.",
      icon: <span className="text-4xl block leading-none">⚡</span>
    },
    {
      title: "Responsive UI/UX",
      description: "Built pixel-perfect, highly responsive interfaces using Tailwind CSS and modern styling features.",
      icon: <span className="text-4xl block leading-none">🎨</span>
    },
    {
      title: "API Integration",
      description: "Seamlessly integrated RESTful APIs with robust state management and error handling.",
      icon: <span className="text-4xl block leading-none">🔌</span>
    },
    {
      title: "AWS and Docker",
      description: "Experience with AWS (EC2, S3, IAM, CloudFront, Route 53, CloudWatch), Docker, Containerization, CI/CD Pipelines, Cloud Deployments, Infrastructure Management, Monitoring, and Production Support.",
      icon: (
        <div className="flex gap-4 items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="h-10 w-auto bg-gray-200 rounded p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-10 h-10" />
        </div>
      )
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 w-full flex flex-col items-center bg-gray-900 text-white relative">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2"
        >
          My Resume
        </motion.h2>

        {/* Key Result Areas Section */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold mb-8 text-center text-gray-300 flex items-center justify-center gap-4"
          >
            <span className="hidden md:block w-16 h-[2px] bg-blue-500/50"></span>
            Highlights & Key Result Areas
            <span className="hidden md:block w-16 h-[2px] bg-blue-500/50"></span>
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {keyResultAreas.map((area, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform origin-left">{area.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-100">{area.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-16"
        >
          <button
            onClick={() => setShowModal(true)}
            className="w-52 px-6 py-3 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 font-semibold rounded-full transition-all flex justify-center items-center gap-3 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View Resume</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-52 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex justify-center items-center gap-3 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{downloading ? "Processing" : "Download Resume"}</span>
          </button>
        </motion.div>
      </div>

      {/* PDF Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl relative border border-gray-700">

            {/* Modal Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-700 bg-gray-900 rounded-t-xl shrink-0">
              <h3 className="text-lg font-bold text-gray-200 ml-2">Resume Preview</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-red-500 p-1.5 rounded-full z-10"
                aria-label="Close Modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="w-full grow bg-gray-200 rounded-b-xl overflow-hidden relative">
              <object data={resumePdf} type="application/pdf" className="absolute top-0 left-0 w-full h-full">
                <div className="flex flex-col items-center justify-center h-full p-10 text-center bg-gray-800 text-white">
                  <p className="text-gray-300 mb-4 text-sm">
                    Your browser does not support inline PDFs.
                  </p>
                  <button onClick={handleDownload} className="text-blue-400 hover:underline text-sm">
                    Download it instead
                  </button>
                </div>
              </object>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
