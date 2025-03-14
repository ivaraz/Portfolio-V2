import Button from "../components/Button";
import Rifa from "/assets/photos/ivar.jpeg";
import Lanyard from "../components/Lanyard/Lanyard";
import TitledCard from "../components/TitledCard";

export default function Home() {
  return (
    <div
      id="home"
      className="lg:flex lg:flex-row-reverse lg:justify-around flex flex-col justify-center items-center max-w-full h-screen bg-white"
    >
      <div className="w-full max-w-screen-sm rounded-sm bg-cover mb-5 lg:mb-0">
        {/* <Lanyard fov={25} position={[0, 0, 13]} gravity={[0, -40, 0]} /> */}
        <TitledCard
          imageSrc={Rifa}
          altText="Muhammad Rifa"
          captionText="Orang Ganteng"
          containerHeight="300px"
          // containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          // overlayContent={
          //   <p className="tilted-card-demo-text">Muhammad Rifa</p>
          // }
        />
      </div>
      <div data-aos="fade-left" className="flex flex-col lg:gap-5 gap-3">
        <h1 className="lg:text-5xl text-4xl font-semibold flex flex-col">
          <span>
            Muhammad <span className="text-red-600">Rifa</span>
          </span>
          <span>
            Maulana <span className="text-red-600">Aziz</span>
          </span>
        </h1>
        <p className="lg:text-xl">IT Enthusiast | Informatics Student</p>
        <div className="flex gap-5">
          <Button
            name="Resume"
            text="white"
            bg="black"
            bgHover="white"
            textHover="black"
            download="cv"
            link="/assets/cv/latest-cv.pdf"
          />
          <Button name="Contact Me" link="#contact" />
        </div>
      </div>
    </div>
  );
}
