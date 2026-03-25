import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const scriptURL = import.meta.env.VITE_CONTACT_FORM_URL;

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
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-5 py-4 bg-white dark:bg-white/5 dark:backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 text-slate-800 dark:text-white placeholder-slate-400 transition-all duration-300 shadow-sm hover:border-violet-300 dark:hover:border-violet-500/50"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-4 bg-white dark:bg-white/5 dark:backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 text-slate-800 dark:text-white placeholder-slate-400 transition-all duration-300 shadow-sm hover:border-violet-300 dark:hover:border-violet-500/50"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-5 py-4 bg-white dark:bg-white/5 dark:backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 text-slate-800 dark:text-white placeholder-slate-400 transition-all duration-300 shadow-sm hover:border-violet-300 dark:hover:border-violet-500/50 resize-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button 
        type="submit" 
        className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
      >
        <span>Send Message</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      </button>
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
