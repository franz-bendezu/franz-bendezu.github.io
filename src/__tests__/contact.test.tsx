import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "../app/[locale]/contact/page";
import { NextIntlClientProvider } from "next-intl";
import { act } from "react";

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(() => [vi.fn(), vi.fn()]),
  ValidationError: vi.fn(),
}));

vi.mock("next-intl/server", () => ({
  unstable_setRequestLocale: vi.fn(),
}));

test("Page", async () => {
  await act(async () => {
    render(
      <NextIntlClientProvider locale="en">
        <ContactPage params={Promise.resolve({ locale: "en" })} />
      </NextIntlClientProvider>,
    );
  });
  expect(
    screen.getByRole("heading", { level: 1, name: "Contact.title" }),
  ).toBeDefined();

  expect(screen.getByRole("button", { name: "submit" })).toBeDefined();
});
