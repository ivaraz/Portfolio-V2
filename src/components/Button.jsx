export default function Button(props) {
  const {
    name,
    link = "#",
    text = "black",
    bg = "transparent",
    download = false,
    bgHover = "black",
    textHover = "white",
  } = props;
  return (
    <a
      href={link}
      className={`bg-${bg} text-${text} border-2 justify-center flex border-black font-semibold hover:bg-${bgHover} hover:text-${textHover} py-2 px-4 rounded transition-all duration-500 ease-in-out`}
      download={download}
    >
      {name}
    </a>
  );
}
