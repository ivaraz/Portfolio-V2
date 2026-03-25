import ProjectCard from "../components/ProjectCard";
import dataProject from "../data/DataProject";

export default function Project() {
  return (
    <section
      id="project"
      className="
        min-h-screen w-full transition-colors duration-300
        flex flex-col items-center justify-center
        gap-10 py-20
      "
    >
      <div className="flex flex-col items-center gap-3 text-center mb-8">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500"
        >
          Project
        </h1>
        <p data-aos="fade-up" className="text-slate-500 dark:text-slate-400 font-medium">
          Things I've built so far
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 lg:px-8 max-w-7xl w-full">
        {dataProject.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
