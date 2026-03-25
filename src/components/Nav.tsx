import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import routes, { AppRoute } from "../router/routes";

export default function Nav() {
  const navLinks = (routes[0]?.children ?? []) as AppRoute[];
  const [hasShadow, setHasShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `
  relative inline-block font-semibold
  transition-colors duration-300
  ${isActive ? "text-black dark:text-white" : "text-slate-800 dark:text-gray-300 hover:text-black dark:hover:text-white"}

  after:content-['']
  after:absolute
  after:left-0
  after:h-[2px]
  after:w-full
  after:bg-black dark:after:bg-white
  after:rounded-full
  after:origin-left
  after:transition-transform
  after:duration-300
  after:scale-x-0

  after:bottom-1
  lg:after:-bottom-1

  hover:after:scale-x-100
  ${isActive ? "after:scale-x-100" : ""}
  `;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 lg:bg-transparent lg:backdrop-blur-sm ${
        hasShadow
          ? "bg-white/70 dark:bg-violet-950/50 backdrop-blur-md shadow-md dark:shadow-gray-800/50"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="font-semibold text-lg lg:text-xl dark:text-white">
          RIFA AZIZ
        </span>

        {/* Hamburger */}
        <button
          className="lg:hidden text-black dark:text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
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

        {/* ONE MENU (Desktop + Mobile) */}
        <ul
          onClick={() => setIsMenuOpen(false)}
          className={`
            absolute top-full left-0 w-full bg-white/80 dark:bg-violet-900/90 backdrop-blur-md shadow-md dark:shadow-violet-900/20
            flex flex-col items-center
            transition-all duration-300
            ${isMenuOpen ? "block" : "hidden"}
            pb-0
            lg:static lg:flex lg:flex-row lg:w-auto lg:shadow-none lg:gap-8 lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none
          `}
        >
          {navLinks.map((route) => (
            <li key={route.path} className="w-full lg:w-auto text-center">
              <NavLink
                to={route.path ?? "/"}
                onClick={() => setIsMenuOpen(false)}
                className={navClass}
              >
                <span className="block py-2 lg:py-0">{route.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
