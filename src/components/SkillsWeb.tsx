import { FrontEnd, BackEnd, Tools, OtherLanguages } from "../data/DataSkills";
import CardSection from "../components/CardSection";

export default function SkillsWeb() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl px-6 lg:px-8">
      <CardSection titleSection="Front End" skills={FrontEnd} />
      <CardSection titleSection="Back End" skills={BackEnd} />
      <CardSection titleSection="Tools" skills={Tools} />
      <CardSection titleSection="Other Languages" skills={OtherLanguages} />
    </div>
  );
}
