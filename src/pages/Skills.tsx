import { useState, useMemo } from "react";
import SkillsButton from "../components/SkillsButton";
import SkillsWeb from "../components/SkillsWeb";

export type TabItem = {
  id: number;
  label: string;
  desc?: string;
  content: React.ReactNode;
};

const tabItems: TabItem[] = [
  {
    id: 1,
    label: "Programming",
    desc: "I focus on building responsive web interfaces and functional systems using modern web technologies.",
    content: <SkillsWeb />,
  },
  {
    id: 2,
    label: "Other Skills",
    desc: "Besides web development, I also explore photography, graphic design, and data engineering to support creative and data-driven solutions.",
    content: <h1 className="text-center font-bold">Coming Sooooonnnn</h1>,
  },
];

export default function Skills() {
  type TabId = (typeof tabItems)[number]["id"];
  const [activeTab, setActiveTab] = useState<TabId>(1);

  const activeContent = useMemo(
    () => tabItems.find((tab) => tab.id === activeTab)?.content,
    [activeTab],
  );

  return (
    <div
      id="skills"
      className="flex flex-col gap-10 items-center mt-10 pt-20 pb-10 min-h-screen transition-colors duration-300"
    >
      <div className="text-center flex flex-col gap-3">
        <h1
          data-aos="fade-down"
          data-aos-duration="2000"
          className="font-semibold text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500"
        >
          What I Do
        </h1>

        <p className="text-center max-w-2xl mx-auto px-4 font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {tabItems.find((tab) => tab.id === activeTab)?.desc}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex bg-slate-100 dark:bg-white/5 dark:backdrop-blur-md p-1 rounded-full shadow-inner border border-slate-200 dark:border-white/10">
        {tabItems.map((tab) => (
          <SkillsButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl px-4 lg:px-8 flex justify-center min-h-[400px]">
        {activeContent ?? <h1>Konten tidak tersedia</h1>}
      </div>
    </div>
  );
}
