import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectExplorerList } from "@/components/project/ExplorerList";
import type { IProject, IProjectTechnology } from "@/interfaces/project";

const labels = {
  filteredBy: "Filtered by:",
  empty: "No projects found",
  viewProject: "View Project {title}",
};

const react: IProjectTechnology = {
  code: "react",
  name: "React",
  color: "#61dafb",
  categoryCodes: ["frontend"],
  categories: [{ name: "Frontend", value: "frontend" }],
};
const node: IProjectTechnology = {
  code: "nodejs",
  name: "Node.js",
  color: "#339933",
  categoryCodes: ["backend"],
  categories: [{ name: "Backend", value: "backend" }],
};

function project(
  code: string,
  title: string,
  technologies: IProjectTechnology[],
): IProject {
  return {
    translationKey: code,
    position: 1,
    code,
    status: "active",
    title,
    shortDescription: `${title} description`,
    challenge: `${title} challenge`,
    approach: `${title} approach`,
    outcomes: [`${title} outcome`],
    tags: [],
    categoryCode: "personal",
    technologyCodes: technologies.map(({ code }) => code),
    projectGoals: [
      { title: `${title} goal`, description: `${title} goal description` },
    ],
    keyFeatures: [
      {
        title: `${title} feature`,
        description: `${title} feature description`,
      },
    ],
    lang: "en",
    technologies,
  };
}

describe("project explorer island", () => {
  it("filters cards when a technology is selected", () => {
    const projects = [
      project("react-project", "React project", [react]),
      project("node-project", "Node project", [node]),
    ];

    render(
      <ProjectExplorerList
        projects={projects}
        projectBasePath="/projects"
        labels={labels}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "React" }));

    expect(screen.getByText("Filtered by:")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View Project React project" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "View Project Node project" }),
    ).not.toBeInTheDocument();
  });
});
