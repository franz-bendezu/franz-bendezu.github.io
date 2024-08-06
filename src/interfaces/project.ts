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
export type ProjectLinkType =
  | "github"
  | "website"
  | "source"
  | "download"
  | "video"
  | "gitlab";
export interface IProjectLink {
  title: string;
  url: string;
  type: ProjectLinkType;
}

export interface IBaseProject {
  code: string;
  status: "active" | "completed";
  title: string;
  shortDescription: string;
  description?: string;
  tags: string[];
  banner?: IProjectImage;
  links?: IProjectLink[];
  categoryCode: ProjectCategoryCodes;
  technologyCodes: IBaseProjectTechnology["code"][];
  priority?: number;
  start?: string;
  end?: string;
  projectGoals: {
    title: string;
    description: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  images?: IProjectImage[];
}

export interface IProjectTechnology extends IBaseProjectTechnology {
  categories: IProjectTechonologyCategory[];
}
export interface IProject extends IBaseProject {
  technologies: IProjectTechnology[];
}
