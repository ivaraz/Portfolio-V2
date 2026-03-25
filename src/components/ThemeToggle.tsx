import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleDark } = useTheme();

  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        shadow-lg
        bg-white border border-slate-200
        dark:bg-white/5 dark:backdrop-blur-md dark:border-white/10
        hover:scale-110 active:scale-95
        transition-all duration-300
      "
    >
      {isDark ? (
        <MdLightMode className="text-yellow-400 text-2xl" />
      ) : (
        <MdDarkMode className="text-violet-600 text-2xl" />
      )}
    </button>
  );
}
