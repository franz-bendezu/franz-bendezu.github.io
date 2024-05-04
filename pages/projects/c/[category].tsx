import { GetStaticPaths } from "next";
import { PROJECT_CATEGORIES } from "../../../constants/projects";
import ProjectsPage, { getStaticProps } from "..";

export const getStaticPaths = (async () => {
  return {
    paths: PROJECT_CATEGORIES.map((category) => ({
      params: { category: category.value },
    })),
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export { getStaticProps };

export default ProjectsPage;
