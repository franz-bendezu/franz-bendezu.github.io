export type ProjectCategoryCodes = "freelance" | "personal" | "demo";

export interface IProjectTechonologyCategory {
  name: string;
  value: string;
}
export interface IProjectTechnology {
  code: string;
  name: string;
  color: string;
  categoryCodes: IProjectTechonologyCategory["value"][];
}

export interface IProjectCategory {
  name: string;
  value: ProjectCategoryCodes;
}

export interface IProject {
  status: "active" | "completed";
  title: string;
  shortDescription: string;
  description?: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
  link: string;
  categoryCode: ProjectCategoryCodes;
  technologyCodes: IProjectTechnology["code"][];
}
