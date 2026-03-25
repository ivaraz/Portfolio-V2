import type { SkillItem } from "../types";
import CardWeb from "./CardWeb";

interface CardSectionProps {
  titleSection: string;
  skills: SkillItem[];
}

export default function CardSection({
  titleSection,
  skills,
}: CardSectionProps) {
  return (
    <div className="w-full max-w-full items-center gap-6 bg-white dark:bg-white/5 dark:backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none flex flex-col border border-slate-200 dark:border-white/10 transition-all duration-300">
      <h1 className="text-sm tracking-[0.2em] uppercase text-center font-semibold text-slate-800 dark:text-slate-200">
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
