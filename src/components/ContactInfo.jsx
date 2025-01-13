const ContactInfo = ({ icon, title, description, bgColor, iconColor }) => (
  <div
    className={`flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300`}
  >
    <div className={`p-3 ${bgColor} rounded-full`}>
      <svg
        className={`w-6 h-6 ${iconColor}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);
export default ContactInfo;
