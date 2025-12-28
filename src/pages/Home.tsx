import Rifa from "/assets/photos/Rifa.jpg";
import TitledCard from "../components/TitledCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      id="home"
      className="lg:flex lg:flex-row-reverse lg:justify-around flex flex-col justify-center items-center max-w-full min-h-screen bg-white"
    >
      <div className="w-full max-w-screen-sm rounded-sm bg-cover mb-5 lg:mb-0">
        <TitledCard
          imageSrc={Rifa}
          altText="Muhammad Rifa"
          captionText="Orang Ganteng"
          containerHeight="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
      <div data-aos="fade-left" className="flex flex-col lg:gap-5 gap-3">
        <h1 className="lg:text-5xl text-4xl font-semibold flex flex-col">
          <span className="lg:text-4xl text-3xl font-semibold">
            Hello, I am
          </span>
          <span>
            Muhammad <span className="text-red-600">Rifa</span>
          </span>
          <span>
            Maulana <span className="text-red-600">Aziz</span>
          </span>
        </h1>
        <p className="lg:text-xl font-semibold">
          IT Enthusiast | Informatics Student
        </p>
        <i className="text-gray-500">"a lazy programmer who loves tech."</i>
      </div>
    </div>
  );
}
