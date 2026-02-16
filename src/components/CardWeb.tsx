type Props = {
  logos: string;
  title: string;
  animate: string;
  duration: number;
};

export default function CardWeb({ title, logos, animate, duration }: Props) {
  return (
    <>
      <div
        data-aos={animate}
        data-aos-duration={duration}
        className="w-23 lg:w-15 max-w-[15rem] flex flex-col items-center gap-1 justify-center"
      >
        <img src={logos} className="w-[2rem] lg:w-[3rem]" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </>
  );
}
