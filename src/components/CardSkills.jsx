import "aos/dist/aos.css";

export default function CardSkills(props) {
  const { logos, title, animate, duration } = props;

  return (
    <>
      <div
        data-aos={animate}
        data-aos-duration={duration}
        className="w-15 flex items-center gap-3 justify-center shadow-md px-5 rounded-lg border-2 border-black"
      >
        <img src={logos} alt={title} className="w-[3rem]" />
        <h1 className="text-xl">{title}</h1>
      </div>
    </>
  );
}
