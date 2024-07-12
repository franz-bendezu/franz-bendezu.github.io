import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "../app/[locale]/contact/page";
import { NextIntlClientProvider } from "next-intl";

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(() => [vi.fn(), vi.fn()]),
  ValidationError: vi.fn(),
}));

vi.mock("next-intl/server", () => ({
  unstable_setRequestLocale: vi.fn(),
}));

test("Page", () => {
  render(
    <NextIntlClientProvider locale="en">
      <ContactPage params={{ locale: "en" }} />
    </NextIntlClientProvider>,
  );

  expect(
    screen.getByRole("heading", { level: 1, name: "Contact.title" }),
  ).toBeDefined();

  expect(screen.getByRole("button", { name: "submit" })).toBeDefined();
});
