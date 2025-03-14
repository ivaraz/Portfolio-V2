import { Link } from "react-router-dom";
export default function ProjectCard(props) {
  const { photo, title, description, tech, link, animate } = props;
  return (
    <div
      data-aos={animate}
      className="lg:w-full w-[17rem] lg:h-auto rounded-md pb-3 bg-white border-2 border-black shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
    >
      <Link to={link} target="_blank">
        <div
          className={`lg:w-[20rem] lg:h-[10rem] w-[16.8rem] h-[8rem] bg-cover bg-[center_top_-5rem] rounded-sm bg-red-700 `}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className="ml-3">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="flex gap-3 mt-2">
            {tech.map((project, index) => (
              <span
                className="lg:text-sm text-xs italic text-black shadow-sm border border-black bg-white px-2 rounded-lg"
                key={index}
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
