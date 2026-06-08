import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    success: false,
    show: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus({
          message: "Message sent successfully!",
          success: true,
          show: true,
        });
        setForm({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setStatus({ ...status, show: false }), 4000);
      })
      .catch((error) => {
        console.error("Email send error:", error.text);
        setStatus({
          message: "Failed to send message!",
          success: false,
          show: true,
        });
        setTimeout(() => setStatus({ ...status, show: false }), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen md:h-screen py-24 md:py-0 flex flex-col justify-center items-center bg-gray-800 text-white px-6 w-full"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg space-y-6 bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={form.from_name}
          onChange={handleChange}
          required
          className="p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={form.from_email}
          onChange={handleChange}
          required
          className="p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors h-40 resize-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-1"
        >
          Send Message
        </button>
      </motion.form>

      {status.show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-xl w-full max-w-lg text-center font-semibold transition-opacity animate-fadeIn ${
            status.success ? "bg-green-500/20 text-green-400 border border-green-500/50" : "bg-red-500/20 text-red-400 border border-red-500/50"
          }`}
        >
          {status.message}
        </motion.div>
      )}
    </section>
  );
}
