import { useState, useEffect } from "react";
import DataSos from "../data/DataSos";
import Details from "../components/Details";
import Education from "../components/Education";

export default function About() {
  const [age, setAge] = useState(19);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date("2005-04-23");
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const isBeforeBirthday =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());
  
    if (isBeforeBirthday) {
      age -= 1;
    }
  
    setAge(age);
  }, []);
  
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:justify-around justify-center items-center h-screen bg-white"
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
              Hello everyone!! My fullname is Muhammad Rifa Maulana Aziz, and I
              was born on 23 April 2005 ({age} years old). I'm a Lazy Programmer also Informatics
              Student at Suryakancana University and have interesting on Front End
              Development and Computer Networking.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 mx-10 lg:gap-5 gap-3 justify-center items-center">
            {DataSos.map((item, index) => (
               <Details key={index} {...item} />
            ))}
            </div>
          </div>
        </div>
      </div>
        <div className="bg-white shadow-lg w-fit p-4 rounded-md mt-10 lg:mt-0">
          <h1 className="lg:text-3xl text-2xl mx-5 lg:mx-0 font-bai font-semibold mb-3 text-start">
            Education
          </h1>
          <Education />
        </div>
    </div>
  );
}
