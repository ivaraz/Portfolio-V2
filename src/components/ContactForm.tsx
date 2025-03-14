import { useState } from "react";

import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyBxlPje4c3ZQa66DHE9FHYjU-yqm_S86hNwRvIMxjfHyXORXl1F5DF5V3T1AtpJ0guNg/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("Sukses! Data berhasil dikirim.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Data gagal dikirim.");
      console.error("Error:", error);
    }
  };
  return (
    <form
      id="form-saran"
      name="form-saran"
      className="space-y-6"
      data-aos="fade-left"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <div className="absolute top-3 left-3 flex items-start pointer-events-none text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
        <textarea
          placeholder="Your Message"
          rows="4"
          required
          className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 resize-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button
        type={"submit"}
        className="group w-full md:w-auto px-6 py-3 bg-black hover:text-black text-white rounded-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Button>
      {status && (
        <div
          className={`mt-4 p-3 rounded-lg flex items-center justify-between ${
            status.includes("Sukses")
              ? "bg-green-100 text-green-800 border border-green-400"
              : "bg-red-100 text-red-800 border border-red-400"
          }`}
        >
          <span>{status}</span>
          <button
            onClick={() => setStatus("")}
            className="ml-3 text-lg font-bold"
          >
            ✖
          </button>
        </div>
      )}
    </form>
  );
};
export default ContactForm;
