export type ProjectCategoryCodes = "freelance" | "personal" | "demo";

export interface IProjectTechonologyCategory {
  name: string;
  value: string;
}

export interface IBaseProjectTechnology {
  code: string;
  name: string;
  color: string;
  categoryCodes: IProjectTechonologyCategory["value"][];
}

export interface IProjectCategory {
  name: string;
  value: ProjectCategoryCodes;
}

export interface IBaseProject {
  status: "active" | "completed";
  title: string;
  shortDescription: string;
  description?: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
  link?: string;
  categoryCode: ProjectCategoryCodes;
  technologyCodes: IBaseProjectTechnology["code"][];
}

export interface IProjectTechnology extends IBaseProjectTechnology {
  categories: IProjectTechonologyCategory[];
}
export interface IProject extends IBaseProject {
  technologies: IProjectTechnology[];
}
