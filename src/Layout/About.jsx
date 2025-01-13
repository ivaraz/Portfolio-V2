import Rifa from "/assets/photos/Rifa.jpg";
import Education from "../components/Education";
export default function About() {
  return (
    <div
      id="about"
      className="flex lg:justify-around justify-center items-center h-screen bg-white"
    >
      <div className="lg:flex lg:flex-row flex flex-col items-center gap-12 lg:gap-24">
        <div
          className="lg:w-[20rem] hidden lg:flex lg:h-[20rem] w-[17rem] h-[17rem] rounded-sm bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${Rifa})` }}
        ></div>
        <div className="lg:w-[50rem] w-[25rem]">
          <div className="flex">
            <h1 className="text-4xl font-bai font-semibold mb-3">About Me</h1>
            <span className="w-[15%] self-center ml-3 h-0.5 bg-black"></span>
          </div>
          <p className="lg:text-xl text-md">
            Saya adalah seorang Frontend Developer yang memiliki pengetahuan
            tentang HTML, CSS, dan JavaScript. Saya memiliki kemampuan untuk
            membuat tampilan website yang menarik dan responsif. Saya juga
            memiliki kemampuan untuk menggunakan framework seperti React
          </p>
          <h2 className="font-semibold my-3">Education</h2>
          <Education />
        </div>
      </div>
    </div>
  );
}
