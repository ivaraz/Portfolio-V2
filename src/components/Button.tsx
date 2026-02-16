import React from "react";

interface ButtonProps {
  name?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  link?: string;
  text?: string;
  bg?: string;
  download?: boolean;
  bgHover?: string;
  textHover?: string;
  onClick?: () => void;
}

export default function Button({
  name,
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
        className="bg-transparent text-black border-2 justify-center flex border-black font-semibold hover:bg-black hover:text-white py-2 px-4 rounded transition-all duration-500 ease-in-out"
        download={download}
      >
        {children}
        {name}
      </a>
    </button>
  );
}
