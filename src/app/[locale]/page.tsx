import { PROJECTS } from "@/constants/projects";
import { LastProjects } from "@/components/home/LastProjects";

const HomePage = () => {
  // Sort projects by position and take the top 3
  const topProjects = PROJECTS.sort((a, b) => a.position - b.position).slice(0, 3);

  return (
    <div>
      <LastProjects projects={topProjects} />
    </div>
  );
};

export default HomePage;
