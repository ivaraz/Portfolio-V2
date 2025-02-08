import "aos/dist/aos.css";

export default function CardSkills(props) {
  const { logos, title, skills, animate, duration } = props;

  return (
    <div
      data-aos={animate}
      data-aos-duration={duration}
      className="lg:w-[15rem] lg:h-[20rem] w-[10rem] h-[15rem] flex justify-center items-center flex-col shadow-lg px-5 rounded-lg border-2 border-black"
    >
      <img src={logos} alt={title} className="w-[45%]" />
      <h1 className="text-2xl lg:text-3xl">{title}</h1>
      <div className="flex flex-col gap-3 mt-2">
        {skills.map((skill, index) => (
          <span className="text-sm lg:text-md" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
