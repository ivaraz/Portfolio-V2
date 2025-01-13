import ProjectCard from "../components/ProjectCard";
import dataProject from "../data/DataProject";

export default function Project() {
  return (
    <div
      id="project"
      className="mt-5 flex flex-col gap-10 justify-center items-center min-h-screen bg-white"
    >
      <h1 className="text-4xl font-semibold">Project</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {dataProject.map((data, index) => (
          <ProjectCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
