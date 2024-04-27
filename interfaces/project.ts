export type ProjectCategoryCodes = "freelance" | "personal" | "demo";

export interface IProjectCategory {
  name: string;
  value: ProjectCategoryCodes;
}

export interface IProject {
  status: "active" | "completed";
  title: string;
  description: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
  link: string;
  categoryCode: ProjectCategoryCodes;
}
