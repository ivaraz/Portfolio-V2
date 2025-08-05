import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  useEffect(() => {
      AOS.init({ once: true });
    }, []);
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
