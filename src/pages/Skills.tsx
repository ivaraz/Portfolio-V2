import { useState, useMemo } from "react";
import SkillsButton from "../components/SkillsButton";
import SkillsWeb from "../Layout/SkillsWeb";

export type TabItem = {
  id: number;
  label: string;
  content: React.ReactNode;
};

const tabItems: TabItem[] = [
  {
    id: 1,
    label: "Programming",
    content: <SkillsWeb />,
  },
  {
    id: 2,
    label: "Other Skills",
    content: <h1 className="text-center font-bold">Coming Sooooonnnn</h1>,
  },
];

export default function Skills() {
  type TabId = (typeof tabItems)[number]["id"];
  const [activeTab, setActiveTab] = useState<TabId>(1);

  const activeContent = useMemo(
    () => tabItems.find((tab) => tab.id === activeTab)?.content,
    [activeTab]
  );

  return (
    <div
      id="skills"
      className="flex flex-col gap-10 items-center mt-20 min-h-screen bg-white"
    >
      <h1
        data-aos="fade-down"
        data-aos-duration="2000"
        className="font-semibold text-2xl lg:text-4xl"
      >
        Technical Stack
      </h1>

      {/* Buttons */}
      <div className="flex gap-2">
        {tabItems.map((tab) => (
          <SkillsButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      <div className="w-full max-w-5xl flex justify-center min-h-[400px]">
        {activeContent ?? <h1>Konten tidak tersedia</h1>}
      </div>
    </div>
  );
}
