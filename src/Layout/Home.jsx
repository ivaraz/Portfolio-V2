import Button from "../components/Button";
import Rifa from "/assets/photos/ivar.jpeg";

export default function Home() {
  return (
    <div
      id="home"
      className="lg:flex lg:flex-row-reverse lg:justify-around flex flex-col justify-center items-center gap-11 max-w-full h-screen bg-white"
    >
      <div
        data-aos="fade-right"
        className="lg:w-4/12 w-[15rem] h-[15rem] max-w-screen-sm bg-[50%_30%] rounded-sm bg-cover"
        style={{ backgroundImage: `url(${Rifa})` }}
      ></div>
      <div data-aos="fade-left" className="flex flex-col lg:gap-5 gap-3">
        <h1 className="lg:text-5xl text-3xl font-semibold flex flex-col">
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
