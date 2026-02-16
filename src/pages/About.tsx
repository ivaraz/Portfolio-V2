import DataSos from "../data/DataSos";
import Details from "../components/Details";
import Education from "../components/Education";
import Card from "../components/Card";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:justify-around lg:justify-center items-center min-h-screen bg-white pt-20 lg:pt-0"
    >
      <div className="lg:flex lg:flex-row flex flex-col items-center ">
        <div
          data-aos="fade-left"
          className="lg:w-[50rem] min-w-fit max-w-screen-sm"
        >
          <div className="flex lg:justify-start">
            <h1 className="lg:text-4xl mx-5 lg:mx-0 font-bai font-semibold mb-3 text-start">
              About Me
            </h1>
            <span className="w-[15%] self-center ml-3 rounded-lg h-[0.2rem] bg-black"></span>
          </div>
          <div className="gap-5 grid lg:text-lg lg:mx-0 w-full text-sm lg:w-[45rem]">
            <p className="text-justify mx-5 lg:mx-0">
              I am a Frontend Developer and Informatics student at Suryakancana
              University with a strong passion for building modern and
              user-centered web applications. I enjoy transforming complex ideas
              into clean, intuitive, and efficient digital experiences.
            </p>
            <p className="text-justify mx-5 lg:mx-0">
              With a background in Computer and Network Engineering, I developed
              strong technical fundamentals that help me understand both system
              structure and frontend architecture. Today, I focus on building
              responsive, scalable, and maintainable web interfaces using modern
              technologies.
            </p>
            <div className="flex gap-2 flex-col lg:flex-row justify-center items-center">
              <Card total="Continues" title="Learning & Improvements" />
              <Card total="6+ Project" title="Website Dynamic" />
              <Card total="8+" title="Certificate Earned" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 mx-10 lg:gap-5 gap-3 justify-center items-center">
              {DataSos.map((item, index) => (
                <Details key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit p-4 rounded-md mt-10 lg:mt-0">
        <h1 className="lg:text-3xl text-2xl mx-5 lg:mx-0 font-bai font-semibold mb-3 text-start">
          Education
        </h1>
        <Education />
      </div>
    </div>
  );
}
