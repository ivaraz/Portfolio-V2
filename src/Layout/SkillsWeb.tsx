import DataSkills from "../data/DataSkills";
import CardWeb from "../components/CardWeb";

export default function SkillsWeb() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto">
      {DataSkills.map((data, index) => (
        <CardWeb key={index} {...data} />
      ))}
    </div>
  );
}
