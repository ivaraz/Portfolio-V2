interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  link?: string;
  download?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  link = "#",
  download = false,
  onClick,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      <a
        href={link}
        className="bg-transparent text-black dark:text-white border-2 justify-center flex border-black dark:border-white font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black py-2 px-4 rounded transition-all duration-500 ease-in-out"
        download={download}
      >
        {children}
      </a>
    </button>
  );
}
