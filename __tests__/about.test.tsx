import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/[locale]/about/page";

test("Page", () => {
  render(<AboutPage />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Acerca de mí" }),
  ).toBeDefined();
});
