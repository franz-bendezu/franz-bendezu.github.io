import { expect, test } from "@playwright/test";

test("serves all locale URL families with canonical metadata", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/en/",
    "/es/",
    "/projects",
    "/en/projects",
    "/es/projects",
  ]) {
    await page.goto(path);
    await expect(page.locator("main")).toBeVisible();
  }
  await page.goto("/en/projects");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://franzbendezu.me/projects",
  );
  await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
    "href",
    "https://franzbendezu.me/es/projects",
  );
});

test("switches locale while preserving the page", async ({ page }) => {
  await page.goto("/projects");
  await page.locator("[data-language-switch]").click();
  await expect(page).toHaveURL(/\/es\/projects\/?$/);
});

test("persists dark mode", async ({ page }) => {
  await page.goto("/");
  await page.locator("[data-theme-toggle]").click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("filters projects and opens a project gallery", async ({ page }) => {
  await page.goto("/projects");
  const explorer = page.locator("[data-project-explorer]");
  await expect(explorer).toBeVisible();
  await explorer.getByRole("button").first().click();
  await expect(explorer.getByText("Filtered by:")).toBeVisible();

  const projectLink = explorer
    .getByRole("link", { name: /View Project/ })
    .first();
  await projectLink.click();
  const galleryButton = page.locator('[role="tab"]').first();
  if (await galleryButton.count()) {
    await galleryButton.click();
    await expect(galleryButton).toHaveAttribute("aria-selected", "true");
  }
});

test("supports the mobile menu and keyboard-closeable gallery", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.locator("nav details summary").click();
  await expect(
    page.locator("nav details").getByRole("link", { name: "Projects" }),
  ).toBeVisible();

  await page.goto("/projects/movify-payment-module");
  const panel = page.getByRole("tabpanel").first();
  await panel.scrollIntoViewIfNeeded();
  await expect(
    panel.locator("xpath=ancestor::astro-island"),
  ).not.toHaveAttribute("ssr", "");
  await panel.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("validates the localized contact form", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "submit" }).click();
  await expect(page.locator("#email")).toHaveJSProperty(
    "validity.valid",
    false,
  );
  await page.goto("/es/contact");
  await expect(page.getByLabel("Correo")).toBeVisible();
});

test("renders bilingual CV pages and serves generated PDFs", async ({
  page,
  request,
}) => {
  for (const locale of ["en", "es"]) {
    await page.goto(`/cv/${locale}/`);
    await expect(page.locator(`[data-resume="${locale}"]`)).toBeVisible();
    await expect(page.locator("[data-resume] img")).toHaveCount(0);
    await expect(
      page.getByRole("heading", {
        name: locale === "es" ? "Resumen Profesional" : "Professional Summary",
      }),
    ).toBeVisible();
    await expect(page.locator(".experience")).toHaveCount(7);
    await expect(page.locator(".certification")).toHaveCount(10);
    await expect(page.locator(".project a").first()).toHaveAttribute(
      "href",
      locale === "es" ? /\/es\/projects\// : /\.me\/projects\//,
    );
  }

  for (const locale of ["EN", "ES"]) {
    const response = await request.get(`/Franz-Bendezu-CV-${locale}.pdf`);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  }
});

test("internal links and rendered assets resolve", async ({
  page,
  request,
}) => {
  const urls = new Set<string>();
  for (const path of [
    "/",
    "/projects",
    "/about",
    "/contact",
    "/es/",
    "/es/projects",
  ]) {
    await page.goto(path);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((links) =>
        links.map((link) => (link as HTMLAnchorElement).getAttribute("href")!),
      )) {
      urls.add(href);
    }
    for (const src of await page
      .locator('img[src^="/"]')
      .evaluateAll((images) =>
        images.map((image) => (image as HTMLImageElement).getAttribute("src")!),
      )) {
      urls.add(src);
    }
  }
  for (const url of urls) {
    const response = await request.get(url);
    expect(response.status(), `${url} should resolve`).toBeLessThan(400);
  }
});
