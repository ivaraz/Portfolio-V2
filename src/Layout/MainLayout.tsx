import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import AOS from "aos";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0f0f14] dark:text-gray-100 transition-colors duration-300 relative">
      {/* Fixed Background blobs globally */}
      <div className="pointer-events-none fixed -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-violet-300/30 dark:bg-violet-600/10 blur-3xl transition-colors duration-300 z-0" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-indigo-300/25 dark:bg-indigo-500/10 blur-3xl transition-colors duration-300 z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </div>
  );
}
