import React, { useState, useEffect } from "react";
import routes, { AppRoute } from "../router/routes";
import { NavLink } from 'react-router-dom'



const Nav: React.FC = () => {
  const navLinks = (routes[0]?.children ?? []) as AppRoute[];
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


  return (
    <nav
      className={`min-w-full bg-white fixed top-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <span className="font-semibold text-lg lg:text-xl">RIFA AZIZ</span>

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
          className={`lg:flex hidden md:hidden items-center gap-8 font-semibold text-gray-700 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((route, item) => (
            <li key={item} className="list-none">
            <NavLink className={"relative group"}
              to={route.path ?? "/"}
              style={({ isActive }) => ({
                color: isActive ? "black" : "gray",
                fontWeight: isActive ? "bold" : "semibold",
              })}
            >
              {route.name}
            <span className="absolute bottom-[-5px] left-0 w-0 h-[2.5px] bg-black transition-all duration-300 group-hover:w-full rounded-md"></span>
            </NavLink>
          </li>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden bg-white shadow-md px-4 pb-4">
          {navLinks.map((route,item) => (
            <NavLink to={route.path}
              key={item}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center font-semibold px-4 py-2 text-black hover:bg-gray-100 hover:font-bold"
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;