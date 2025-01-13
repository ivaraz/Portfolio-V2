import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardSkills(props) {
  const { logos, title, skills, animate, duration } = props;
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos={animate}
      data-aos-duration={duration}
      className="w-[15rem] h-[20rem] flex justify-center items-center flex-col shadow-lg px-5 rounded-lg border-2 border-black"
    >
      <img src={logos} alt={title} style={{ width: "45%", color: "black" }} />
      <h1>{title}</h1>
      <div className="flex flex-col gap-3 mt-2">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
