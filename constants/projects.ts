import type {
  IProject,
  IProjectCategory,
  ProjectCategoryCodes,
} from "../interfaces/project";

export const PROJECT_CATEGORIES: IProjectCategory<
  ProjectCategoryCodes | "all"
>[] = [
  {
    name: "Todos",
    value: "all",
  },
  {
    name: "Freelance",
    value: "freelance",
  },
  {
    name: "Personal",
    value: "personal",
  },
  {
    name: "Demo",
    value: "demo",
  },
];

export const PROJECTS: IProject[] = [
  {
    status: "active",
    title: "Project 1",
    description: "This is a project description",
    tags: ["Vue 3", "CSS", "Typescript"],
    image: {
      src: "/images/project-1.jpg",
      alt: "Project 1",
    },
    link: "https://github.com/franz-bendezu/franz-bendezu.github.io",
    categoryCode: "freelance",
  },
  {
    status: "completed",
    title: "Project 2",
    description: "This is a project description",
    tags: ["React", "Tailwind CSS", "Javascript"],
    image: {
      src: "/images/project-2.jpg",
      alt: "Project 2",
    },
    link: "https://github.com/franz-bendezu/franz-bendezu.github.io",
    categoryCode: "personal",
  },
  {
    status: "completed",
    title: "Project 3",
    description: "This is a project description",
    tags: ["Next.js", "SASS", "Javascript"],
    image: {
      src: "/images/project-3.jpg",
      alt: "Project 3",
    },
    link: "https://github.com/franz-bendezu/franz-bendezu.github.io",
    categoryCode: "demo",
  },
];
