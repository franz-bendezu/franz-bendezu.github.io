import { describe, expect, it } from "vitest";
import { getProject, getProjects, isProjectCategory } from "@/lib/projects";

describe("project data", () => {
  it("returns localized, categorized projects with technologies", async () => {
    const projects = await getProjects("en", "personal");
    expect(projects.length).toBeGreaterThan(0);
    expect(projects.every((project) => project.lang === "en")).toBe(true);
    expect(
      projects.every((project) => project.categoryCode === "personal"),
    ).toBe(true);
    expect(projects.every((project) => project.technologies.length > 0)).toBe(
      true,
    );
    const spanishProjects = await getProjects("es");
    expect(
      spanishProjects.find(
        (project) => project.position === projects[0].position,
      )?.lang,
    ).toBe("es");
  });

  it("loads one bilingual model for each project", async () => {
    const [englishProjects, spanishProjects] = await Promise.all([
      getProjects("en"),
      getProjects("es"),
    ]);

    expect(englishProjects).toHaveLength(16);
    expect(spanishProjects).toHaveLength(16);
    expect(
      new Set(englishProjects.map(({ translationKey }) => translationKey)).size,
    ).toBe(16);
    expect(
      spanishProjects.map(({ translationKey }) => translationKey).sort(),
    ).toEqual(
      englishProjects.map(({ translationKey }) => translationKey).sort(),
    );
    expect(
      englishProjects.every(({ start, end }) => !start || !end || start <= end),
    ).toBe(true);
    expect(
      [...englishProjects, ...spanishProjects].every(
        ({ challenge, approach, outcomes, projectGoals, keyFeatures }) =>
          challenge.length > 0 &&
          approach.length > 0 &&
          outcomes.length > 0 &&
          projectGoals.length > 0 &&
          keyFeatures.length > 0,
      ),
    ).toBe(true);

    const englishPortfolio = await getProject("en", "my-portfolio");
    const spanishPortfolio = await getProject("es", "my-portfolio");
    expect(englishPortfolio?.translationKey).toBe(
      spanishPortfolio?.translationKey,
    );
  });

  it("validates category codes", () => {
    expect(isProjectCategory("demo")).toBe(true);
    expect(isProjectCategory("unknown")).toBe(false);
  });
});
