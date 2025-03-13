import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectsPage from "../app/[locale]/projects/page";
import { NextIntlClientProvider } from "next-intl";
import { act } from "react";
import { createNavigation } from "next-intl/navigation";

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
}));

vi.mock("next-intl/navigation", () => ({
  createNavigation: vi.fn(
    () => ({
      Link: vi.fn(),
      redirect: vi.fn(),
      usePathname: vi.fn(),
      useRouter: vi.fn(),
    }),
  ),
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
