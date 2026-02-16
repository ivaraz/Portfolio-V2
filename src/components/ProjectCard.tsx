import type { ProjectItem } from "../types";

export default function ProjectCard({
  photo,
  title,
  description,
  tech,
  link,
  animate = "fade-up",
}: ProjectItem) {
  return (
    <article
      data-aos={animate}
      className="
        w-[17rem] lg:w-full
        border-2 border-black rounded-md
        bg-white cursor-pointer
        transition-shadow duration-300
        hover:shadow-lg hover:shadow-gray-400
      "
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-sm">
          <img
            src={photo}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              w-full h-32 lg:h-40
              object-cover object-top
              transition-transform duration-300
              hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  text-xs lg:text-sm italic
                  border border-black
                  px-2 py-[2px] rounded-full
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
