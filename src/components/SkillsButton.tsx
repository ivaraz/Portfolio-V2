type SkillsButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function SkillsButton({
  label,
  isActive,
  onClick,
}: SkillsButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
        ${isActive 
          ? "bg-white dark:bg-violet-600 text-slate-900 dark:text-white shadow-sm" 
          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}
      `}
    >
      {label}
    </button>
  );
}
