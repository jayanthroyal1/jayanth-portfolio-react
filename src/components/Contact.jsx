import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
      className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={form.from_name}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={form.from_email}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white h-32 resize-none"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md"
        >
          Send
        </button>
      </form>

      {status.show && (
        <p
          className={`mt-4 p-3 rounded-md ${
            status.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status.message}
        </p>
      )}
    </section>
  );
}
