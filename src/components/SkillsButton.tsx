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
      className={`px-4 py-2 rounded 
        ${isActive ? "bg-blue-600 text-white" : "bg-gray-200"}
      `}
    >
      {label}
    </button>
  );
}
