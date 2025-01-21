import edu from "../data/DataEdu";
export default function Education() {
  return (
    <div className="grid gap-5 lg:flex-row lg:flex max-w-fit mx-auto lg:mx-0">
      {edu.map((data, index) => (
        <div
          key={index}
          className="flex flex-col border-2 border-black px-2 rounded-md"
        >
          <span className="font-semibold">{data.school}</span>
          <span className="italic text-sm">{data.year}</span>
        </div>
      ))}
    </div>
  );
}
