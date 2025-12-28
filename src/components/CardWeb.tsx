import "aos/dist/aos.css";

type Props = {
  logos: string;
  title: string;
  animate: string;
  duration: number;
};

export default function SkillsWeb({ logos, title, animate, duration }: Props) {
  return (
    <>
      <div
        data-aos={animate}
        data-aos-duration={duration}
        className="w-23 lg:w-15 max-w-[15rem] flex items-center gap-3 justify-center shadow-md px-5 rounded-lg border-2 border-black"
      >
        <img src={logos} alt={title} className="w-[2rem] lg:w-[3rem]" />
        <h1 className="text-sm font-semibold lg:text-xl">{title}</h1>
      </div>
    </>
  );
}
