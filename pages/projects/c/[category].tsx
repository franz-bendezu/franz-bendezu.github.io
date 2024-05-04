import { GetStaticProps, GetStaticPaths } from "next";
import { PROJECTS, PROJECT_CATEGORIES } from "../../../constants/projects";
import { IProject } from "../../../interfaces/project";
import ProjectsPage from "..";
import {
  PROJECT_TECHNOLOGIES,
  PROJECT_TECHNOLOGY_CATEGORY,
} from "../../../constants/projects/techologies";

export const getStaticPaths = (async () => {
  return {
    paths: PROJECT_CATEGORIES.map((category) => ({
      params: { category: category.value },
    })),
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<{
  projects: IProject[];
  categories: { name: string; value: string }[];
}> = async (ctx) => {
  const category = ctx.params?.category;
  return {
    props: {
      projects: PROJECTS.filter(
        (project) => project.categoryCode === category,
      ).map((project) => ({
        ...project,
        technologies: PROJECT_TECHNOLOGIES.filter((technology) =>
          project.technologyCodes.includes(technology.code),
        ).map((technology) => ({
          ...technology,
          categories: PROJECT_TECHNOLOGY_CATEGORY.filter((category) =>
            technology.categoryCodes.includes(category.value),
          ),
        })),
      })),
      categories: PROJECT_CATEGORIES,
    },
  };
};

export default ProjectsPage;
