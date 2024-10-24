import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectsPage from "../app/[locale]/projects/page";
import { NextIntlClientProvider } from "next-intl";
import { act } from "react";

vi.mock("next-intl/server", () => ({
  unstable_setRequestLocale: vi.fn(),
}));

test("ProjectsPage", async () => {
  await act(async () => {
    render(
      <NextIntlClientProvider locale="en">
        <ProjectsPage params={Promise.resolve({ locale: "en" })} />
      </NextIntlClientProvider>,
    );
  });
  expect(
    screen.getByRole("heading", { level: 1, name: "Projects.title" }),
  ).toBeDefined();
});
