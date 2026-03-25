import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="group flex items-center space-x-5 p-5 bg-white dark:bg-white/5 dark:backdrop-blur-md border border-slate-100 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1">
    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-full text-violet-600 dark:text-violet-400 group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10 transition-colors">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{description}</p>
    </div>
  </div>
);

export default ContactInfo;
