import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "../app/[locale]/contact/page";

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(() => [vi.fn(), vi.fn()]),
  ValidationError: vi.fn(),
}));

test("Page", () => {
  render(<ContactPage />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Contáctame" }),
  ).toBeDefined();

  expect(screen.getByRole("button", { name: "submit" })).toBeDefined();
});

