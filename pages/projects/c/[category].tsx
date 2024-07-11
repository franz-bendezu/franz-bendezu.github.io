import { GetStaticPaths } from "next";
import { PROJECT_CATEGORIES } from "../../../constants/projects";
import ProjectsPage, { getStaticProps } from "..";

export const getStaticPaths = (async ({ locales = [] }) => {
  const paths: { params: { category: string }; locale: string }[] = [];
  for (const category of PROJECT_CATEGORIES) {
    for (const locale of locales) {
      paths.push({ params: { category: category.value }, locale });
    }
  }
  return {
    paths: paths,
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export { getStaticProps };

export default ProjectsPage;
