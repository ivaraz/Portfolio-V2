import Button from "../components/Button";
import Rifa from "/assets/photos/hero.jpeg";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="lg:flex flex-col lg:flex-row-reverse flex lg:justify-around justify-center gap-11 items-center max-h-screen-sm h-screen bg-white"
      >
        <div
          className="lg:w-4/12 w-[20rem] h-[15rem] bg-red-500 bg-bottom rounded-sm bg-cover"
          style={{ backgroundImage: `url(${Rifa})` }}
        ></div>
        <div className="flex flex-col mr-10  lg:gap-5 gap-3">
          <h1 className="lg:text-5xl text-3xl font-semibold flex flex-col">
            <span>Muhammad Rifa</span>
            <span>Maulana Aziz</span>
          </h1>
          <p className="text-xl">IT Enthusiast</p>
          <div className="flex gap-5">
            <Button
              name="Download CV"
              text="white"
              bg="black"
              bgHover="white"
              textHover="black"
              download="cv"
              link="/assets/cv/cv.mrifa.pdf"
            />
            <Button name="Contact Me" />
          </div>
        </div>
      </div>
    </>
  );
}
