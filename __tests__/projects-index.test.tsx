import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ProjectsPage, { getStaticProps } from "../pages/projects/index";
import { IProject, IProjectCategory } from "../interfaces/project";

// Mock the next/navigation module
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/projects"),
}));

// Mock the next/image module
vi.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} alt="mock image" />,
}));

describe("ProjectsPage", () => {
  test("renders project cards", () => {
    const projects: IProject[] = [
      {
        title: "Project 1",
        shortDescription: "Short description 1",
        image: { src: "project1.jpg", alt: "Project 1" },
        technologies: [],
        links: [],
        status: "active",
        tags: [],
        categoryCode: "freelance",
        technologyCodes: [],
      },
      {
        title: "Project 2",
        shortDescription: "Short description 2",
        image: { src: "project2.jpg", alt: "Project 2" },
        technologies: [],
        links: [],
        status: "active",
        tags: [],
        categoryCode: "freelance",
        technologyCodes: [],
      },
    ];

    render(<ProjectsPage projects={projects} categories={[]} messages={{}} />);

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Short description 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Short description 2")).toBeInTheDocument();
  });

  test("renders 'No hay proyectos para mostrar' message when there are no projects", () => {
    render(<ProjectsPage projects={[]} categories={[]} messages={{}} />);

    expect(
      screen.getByText("No hay proyectos para mostrar"),
    ).toBeInTheDocument();
  });

  test("filters projects by technology", () => {
    const projects: IProject[] = [
      {
        title: "Project 1",
        shortDescription: "Short description 1",
        image: { src: "project1.jpg", alt: "Project 1" },
        technologies: [
          {
            code: "tech1",
            name: "Technology 1",
            categories: [],
            color: "",
            categoryCodes: [],
          },
        ],
        links: [],
        status: "active",
        tags: [],
        categoryCode: "freelance",
        technologyCodes: [],
      },
      {
        title: "Project 2",
        shortDescription: "Short description 2",
        image: { src: "project2.jpg", alt: "Project 2" },
        technologies: [
          {
            code: "tech2",
            name: "Technology 2",
            categories: [],
            color: "",
            categoryCodes: [],
          },
        ],
        links: [],
        status: "active",
        tags: [],
        categoryCode: "freelance",
        technologyCodes: [],
      },
    ];

    render(<ProjectsPage projects={projects} categories={[]} messages={{}} />);

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Technology 1"));

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.queryByText("Project 2")).not.toBeInTheDocument();
  });

  test("renders category links", () => {
    const categories: IProjectCategory[] = [
      { value: "freelance", name: "Category 1" },
      { value: "demo", name: "Category 2" },
    ];

    render(
      <ProjectsPage projects={[]} categories={categories} messages={{}} />,
    );

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });
});

describe("getStaticProps", () => {
  test("returns projects and categories", async () => {
    const ctx = {
      locale: "en",
    };

    const { props } = await getStaticProps(ctx);

    expect(props.projects).toBeDefined();
    expect(props.categories).toBeDefined();
  });
});
