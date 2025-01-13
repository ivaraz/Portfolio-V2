import Home from "../Layout/Home";
import About from "../Layout/About";
import Skills from "../Layout/Skills";
import Project from "../Layout/Project";
import Certificate from "../Layout/Certificate";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../Layout/Contact";
import "../index.css";

export default function App() {
  return (
    <>
      <Nav />
      <div id="home" className="pb-20">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
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
    </>
  );
}
