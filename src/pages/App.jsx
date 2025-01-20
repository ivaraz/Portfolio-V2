import Home from "../Layout/Home";
import About from "../Layout/About";
import Skills from "../Layout/Skills";
import Project from "../Layout/Project";
import Certificate from "../Layout/Certificate";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../Layout/Contact";
import "../index.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="*:outline-2 *:outline-red-500 justify-center items-center flex flex-col">
      <Nav />
      <div id="home" className=" pb-20">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills" className="pb-20">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="certificate">
        <Certificate />
      </div>
      <div id="suggestion">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
