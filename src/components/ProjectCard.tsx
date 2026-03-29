import type { ProjectItem } from "../types";
import {
  SiTailwindcss,
  SiJavascript,
  SiAlpinedotjs,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiPhp,
  SiReact,
  SiFramer,
} from "react-icons/si";
import { IconType } from "react-icons";

// Map text to icon
const TechIconMap: Record<string, IconType> = {
  TailwindCSS: SiTailwindcss,
  JavaScript: SiJavascript,
  AlpineJS: SiAlpinedotjs,
  Bootstrap: SiBootstrap,
  HTML: SiHtml5,
  CSS: SiCss,
  PHP: SiPhp,
  React: SiReact,
  "Framer Motion": SiFramer,
};

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
        group relative w-full flex flex-col
        border border-slate-200 dark:border-white/10 rounded-2xl
        bg-white dark:bg-white/5 dark:backdrop-blur-md cursor-pointer
        transition-all duration-500 overflow-hidden
        hover:shadow-xl hover:shadow-violet-900/10 dark:hover:shadow-violet-900/20 hover:-translate-y-2
      "
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col"
      >
        {/* Image */}
        <div className="overflow-hidden w-full relative">
          <img
            src={photo}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              w-full h-44 lg:h-52
              object-cover object-top
              transition-transform duration-700
              group-hover:scale-110
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tech Icons */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {tech.map((item) => {
              const Icon = TechIconMap[item];
              return (
                <div
                  key={item}
                  title={item}
                  className="
                    flex items-center justify-center p-2 rounded-lg
                    bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10
                    text-slate-500 dark:text-slate-400
                    group-hover:border-violet-200 dark:group-hover:border-violet-500/30
                    group-hover:text-violet-600 dark:group-hover:text-violet-400
                    transition-colors duration-300
                  "
                >
                  {Icon ? (
                    <Icon className="text-lg" />
                  ) : (
                    <span className="text-xs px-2">{item}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </a>
    </article>
  );
}
