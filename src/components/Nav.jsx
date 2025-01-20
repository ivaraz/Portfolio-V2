import { useState, useEffect } from "react";

export default function Nav() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "certificate", label: "Certificate" },
    { id: "suggestion", label: "Suggestion" },
  ];

  return (
    <nav
      className={`w-full bg-white fixed top-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <span className="font-semibold text-lg lg:text-xl">M.R.M.A</span>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* PC Navbar */}
        <div
          className={`lg:flex hidden items-center gap-8 font-semibold text-gray-700 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className="block lg:inline-block text-left text-black text-md py-2 lg:py-0 hover:text-black focus:outline-none relative group"
            >
              {item.label}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2.5px] bg-black transition-all duration-300 group-hover:w-full rounded-md"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className="block w-full text-center font-semibold px-4 py-2 text-black hover:bg-gray-100 hover:font-bold"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
