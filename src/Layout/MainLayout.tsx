import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import AOS from "aos";
import Footer from "../components/Footer";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
