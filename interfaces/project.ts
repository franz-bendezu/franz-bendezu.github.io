export type ProjectCategoryCodes = "freelance" | "personal" | "demo";

export interface IProjectTechonologyCategory {
  name: string;
  value: string;
}

export interface IBaseProjectTechnology {
  code: string;
  name: string;
  logo?: string;
  color: string;
  categoryCodes: IProjectTechonologyCategory["value"][];
}

export interface IProjectCategory {
  name: string;
  value: ProjectCategoryCodes;
}

export interface IProjectImage {
  src: string;
  alt: string;
}

export interface IProjectLink {
  title: string;
  url: string;
  type: "github" | "website" | "source" | "download" | "video";
}

export interface IBaseProject {
  status: "active" | "completed";
  title: string;
  shortDescription: string;
  description?: string;
  tags: string[];
  image: IProjectImage;
  links?: IProjectLink[];
  categoryCode: ProjectCategoryCodes;
  technologyCodes: IBaseProjectTechnology["code"][];
}

export interface IProjectTechnology extends IBaseProjectTechnology {
  categories: IProjectTechonologyCategory[];
}
export interface IProject extends IBaseProject {
  technologies: IProjectTechnology[];
}
