import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../app/[locale]/about/page";
import { NextIntlClientProvider } from "next-intl";
import { act } from "react";

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
}));

test("Page", async () => {
  await act(async () => {
    render(
      <NextIntlClientProvider locale="en">
        <AboutPage params={Promise.resolve({ locale: "en" })} />
      </NextIntlClientProvider>,
    );
  });

  expect(
    screen.getByRole("heading", { level: 1, name: "About.title" }),
  ).toBeDefined();
});
