import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../pages/contact";

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(() => [vi.fn(), vi.fn()]),
  ValidationError: vi.fn(),
}));

test("Page", () => {
  render(<Page />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Contáctame" }),
  ).toBeDefined();

  expect(screen.getByRole("button", { name: "submit" })).toBeDefined();
});

