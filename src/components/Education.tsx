import edu from "../data/DataEdu";
export default function Education() {
  return (
    <div className="grid gap-5 min-w-full">
      {edu.map((data, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-5 w-[17rem]"
        >
          <img src={data.logo} className="w-[3rem]" alt={data.school} />
          <section className="flex flex-col">
            <span className="italic text-sm">{data.year}</span>
            <span className="font-semibold text-sm lg:text-base">{data.school}</span>
            <span className="text-sm">{data.major}</span>
          </section>
        </div>
      ))}
    </div>
  );
}
