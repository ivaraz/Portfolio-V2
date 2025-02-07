import Rifa from "/assets/photos/Rifa.jpg";
import { useState, useEffect } from "react";

export default function About() {
  const [age, setAge] = useState(19);

  useEffect(() => {
    const today = new Date();
    const birthMonth = 3;
    const birthDay = 23;
    const birthYear =
      today.getFullYear() -
      (today.getMonth() > birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() >= birthDay)
        ? 0
        : 1);

    setAge(19 + (birthYear - 2024));
  }, []);
  return (
    <div
      id="about"
      className="flex mx-auto lg:justify-around justify-center items-center h-screen bg-white"
    >
      <div className="lg:flex lg:flex-row flex flex-col items-center gap-12 lg:gap-24">
        <div
          data-aos="fade-right"
          className="lg:w-[20rem] hidden lg:flex lg:h-[20rem] w-[17rem] h-[17rem] rounded-sm bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${Rifa})` }}
        ></div>
        <div data-aos="fade-left" className="lg:w-[50rem] w-[25rem]">
          <div className="flex lg:justify-start">
            <h1 className="text-4xl font-bai font-semibold mb-3 text-start">
              About Me
            </h1>
            <span className="w-[15%] self-center ml-3 rounded-lg h-[0.2rem] bg-black"></span>
          </div>
          <div className="lg:text-xl gap-5 grid text-md lg:mx-0 w-[25rem] lg:w-[45rem]">
            <p>
              Hello peoples!! My fullname is Muhammad Rifa Maulana Aziz, and I
              was born on 23 April 2005 ({age} years old). I'm an Informatics
              Student at Suryakancana University and have expertise in Front End
              development and computer networking.
            </p>
            <p>
              I have experience in building responsive and dynamic user
              interfaces, as well as a strong understanding of networking
              concepts to ensure optimal connectivity in systems. I am always
              eager to learn new things and enhance my skills in the world of
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
