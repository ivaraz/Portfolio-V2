import CardSkills from "../components/CardSkills";
import dataSkills from "../data/DataSkills";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col gap-10 justify-center items-center min-h-screen"
    >
      <h1
        data-aos="fade-down"
        data-aos-duration="2000"
        className="font-semibold text-2xl lg:text-4xl"
      >
        Stack
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        {dataSkills.map((data, index) => (
          <CardSkills key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
