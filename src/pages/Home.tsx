import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Rifa from "/assets/photos/Rifa.jpg";
import TitledCard from "../components/TitledCard";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-screen w-full bg-white
        flex flex-col items-center justify-center
        lg:flex-row-reverse lg:justify-around
      "
    >
      {/* Photo Section */}
      <div className="w-full max-w-sm mb-6 lg:mb-0">
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
          showTooltip
          displayOverlayContent
        />
      </div>

      {/* Text Section */}
      <div
        data-aos="fade-left"
        className="flex flex-col gap-3 lg:gap-5 text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
          <span className="block text-3xl lg:text-4xl">Hello, I am</span>
          <span className="block">
            Muhammad <span className="text-red-600">Rifa</span>
          </span>
          <span className="block">
            Maulana <span className="text-red-600">Aziz</span>
          </span>
        </h1>

        <p className="text-lg lg:text-xl font-semibold">
          IT Enthusiast | Informatics Student
        </p>

        <i className="text-gray-500">
          &quot;a lazy programmer who loves tech.&quot;
        </i>
      </div>
    </section>
  );
}
