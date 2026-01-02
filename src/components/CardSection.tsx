import CardWeb from "./CardWeb";

type SkillItem = {
  id: number;
  logos: string;
  title: string;
  animate: string;
  duration: number;
};

type Props = {
  titleSection: string;
  skills: SkillItem[];
};

export default function CardSection({ titleSection, skills }: Props) {
  return (
    <div className="w-full max-w-full items-center gap-4 bg-white p-4 rounded-lg shadow-lg flex flex-col border-2 border-black">
      <h1 className="text-3xl text-center mb-2 font-semibold">
        {titleSection}
      </h1>

      <div className="grid grid-cols-2 gap-3 justify-items-center">
        {skills.map((skill) => (
          <CardWeb
            key={skill.id}
            title={skill.title}
            logos={skill.logos}
            animate={skill.animate}
            duration={skill.duration}
          />
        ))}
      </div>
    </div>
  );
}
