import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../app/[locale]/about/page";
import { NextIntlClientProvider } from "next-intl";

vi.mock("next-intl/server", () => ({
  unstable_setRequestLocale: vi.fn(),
}));

test("Page", () => {
  render(
    <NextIntlClientProvider locale="en">
      <AboutPage params={{ locale: "en" }} />
    </NextIntlClientProvider>,
  );
  expect(
    screen.getByRole("heading", { level: 1, name: "About.title" }),
  ).toBeDefined();
});
