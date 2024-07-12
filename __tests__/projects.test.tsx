import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectsPage from "../app/[locale]/projects/page";
import { NextIntlClientProvider } from "next-intl";

vi.mock("next-intl/server", () => ({
  unstable_setRequestLocale: vi.fn(),
}));

test("ProjectsPage", () => {
  render(
    <NextIntlClientProvider locale="en">
      <ProjectsPage params={{ locale: "en" }} />
    </NextIntlClientProvider>,
  );

  expect(
    screen.getByRole("heading", { level: 1, name: "Projects.title" }),
  ).toBeDefined();
});
