import CardSkills from "../components/CardSkills";
import dataSkills from "../data/DataSkills";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col gap-10 justify-center items-center min-h-screen"
    >
      <h1>Technical Skill</h1>
      <div className="lg:flex lg:gap-12">
        {dataSkills.map((data, index) => (
          <CardSkills key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
