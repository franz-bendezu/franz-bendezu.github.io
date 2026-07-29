import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectExplorerList } from "@/components/project/ExplorerList";
import { getProjects, isProjectCategory } from "@/lib/projects";

const labels = {
  filteredBy: "Filtered by:",
  empty: "No projects found",
  viewProject: "View Project {title}",
};

describe("project data", () => {
  it("returns localized, categorized projects with technologies", () => {
    const projects = getProjects("en", "personal");
    expect(projects.length).toBeGreaterThan(0);
    expect(projects.every((project) => project.lang === "en")).toBe(true);
    expect(
      projects.every((project) => project.categoryCode === "personal"),
    ).toBe(true);
    expect(projects.every((project) => project.technologies.length > 0)).toBe(
      true,
    );
    expect(
      getProjects("es").find(
        (project) => project.position === projects[0].position,
      )?.lang,
    ).toBe("es");
  });

  it("validates category codes", () => {
    expect(isProjectCategory("demo")).toBe(true);
    expect(isProjectCategory("unknown")).toBe(false);
  });
});

describe("project explorer island", () => {
  it("filters cards when a technology is selected", () => {
    const projects = getProjects("en").slice(0, 4);
    render(
      <ProjectExplorerList
        projects={projects}
        projectBasePath="/projects"
        labels={labels}
      />,
    );
    const technology = projects[0].technologies[0].name;
    const buttons = screen.getAllByRole("button", { name: technology });
    fireEvent.click(buttons[0]);
    expect(screen.getByText("Filtered by:")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /View Project/ }).length,
    ).toBeLessThanOrEqual(projects.length);
  });
});
