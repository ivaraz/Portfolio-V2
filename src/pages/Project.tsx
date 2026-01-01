import ProjectCard from "../components/ProjectCard";
import dataProject from "../data/DataProject";

export default function Project() {
  return (
    <section
      id="project"
      className="
        min-h-screen w-full bg-white
        flex flex-col items-center justify-center
        gap-10 py-20
      "
    >
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-3xl lg:text-4xl font-semibold"
      >
        Project
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {dataProject.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
