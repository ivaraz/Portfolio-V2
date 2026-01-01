import { FrontEnd, BackEnd, Tools, OtherLanguages } from "../data/DataSkills";
import CardSection from "../components/CardSection";

export default function SkillsWeb() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full lg:px-4 lg:mx-0 mx-24">
      <CardSection titleSection="Front End" skills={FrontEnd} />
      <CardSection titleSection="Back End" skills={BackEnd} />
      <CardSection titleSection="Tools" skills={Tools} />
      <CardSection titleSection="Other Languages" skills={OtherLanguages} />
    </div>
  );
}
