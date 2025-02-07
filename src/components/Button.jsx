export default function Button(props) {
  const {
    name,
    children,
    type,
    link = "#",
    text = "black",
    bg = "transparent",
    download = false,
    bgHover = "black",
    textHover = "white",
    onClick,
  } = props;
  return (
    <button type={type} onClick={onClick}>
      <a
        href={link}
        className={`bg-${bg} text-${text} border-2 justify-center flex border-black font-semibold hover:bg-${bgHover} hover:text-${textHover} py-2 px-4 rounded transition-all duration-500 ease-in-out`}
        download={download}
      >
        {[children, name]}
      </a>
    </button>
  );
}
