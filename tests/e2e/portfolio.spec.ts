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
    "https://franzbendezu.me/en/projects",
  );
  await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
    "href",
    "https://franzbendezu.me/es/projects",
  );
});

test("serves localized service routes with consolidated canonicals", async ({
  page,
}) => {
  const slugs = [
    "mvp-development",
    "saas-product-development",
    "internal-tools",
    "landing-page-development",
  ] as const;
  const routes = slugs.flatMap((slug) => [
    [`/services/${slug}`, `https://franzbendezu.me/en/services/${slug}`],
    [`/en/services/${slug}`, `https://franzbendezu.me/en/services/${slug}`],
    [`/es/services/${slug}`, `https://franzbendezu.me/es/services/${slug}`],
  ]);
  for (const [path, canonical] of routes) {
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      canonical,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
  }
  await page.goto("/en/services/mvp-development");
  await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
    "href",
    "https://franzbendezu.me/es/services/mvp-development",
  );
});

test("gives every submitted page unique metadata and one primary heading", async ({
  request,
}) => {
  const sitemapIndex = await request.get("/sitemap-index.xml");
  const sitemapName = (await sitemapIndex.text()).match(
    /https:\/\/franzbendezu\.me\/(sitemap-[^<]+\.xml)/,
  )?.[1];
  expect(sitemapName).toBeTruthy();
  const sitemap = await request.get(`/${sitemapName}`);
  const locations = [
    ...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g),
  ].map(([, location]) => new URL(location).pathname);
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const path of locations) {
    const response = await request.get(path);
    const html = await response.text();
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )?.[1];
    expect(title, `${path} should have a title`).toBeTruthy();
    expect(description, `${path} should have a description`).toBeTruthy();
    expect(titles.has(title!), `${path} should have a unique title`).toBe(
      false,
    );
    expect(
      descriptions.has(description!),
      `${path} should have a unique description`,
    ).toBe(false);
    expect(
      (html.match(/<h1[ >]/g) ?? []).length,
      `${path} should have one H1`,
    ).toBe(1);
    titles.add(title!);
    descriptions.add(description!);
  }
});

test("publishes canonical URLs in robots and sitemap", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(
    "Sitemap: https://franzbendezu.me/sitemap-index.xml",
  );
  const sitemapIndex = await request.get("/sitemap-index.xml");
  expect(sitemapIndex.status()).toBe(200);
  const sitemapName = (await sitemapIndex.text()).match(
    /https:\/\/franzbendezu\.me\/(sitemap-[^<]+\.xml)/,
  )?.[1];
  expect(sitemapName).toBeTruthy();
  const sitemap = await request.get(`/${sitemapName}`);
  const contents = await sitemap.text();
  expect(contents).toContain(
    "https://franzbendezu.me/en/services/mvp-development",
  );
  expect(contents).toContain(
    "https://franzbendezu.me/es/services/mvp-development",
  );
  expect(contents).toContain(
    '<xhtml:link rel="alternate" hreflang="en" href="https://franzbendezu.me/en/services/mvp-development/"/>',
  );
  expect(contents).toContain(
    '<xhtml:link rel="alternate" hreflang="es" href="https://franzbendezu.me/es/services/mvp-development/"/>',
  );
  expect(contents).not.toContain("https://franzbendezu.me/services/");
  expect(contents).not.toContain("/projects/c/");
  expect(contents).not.toContain("/cv/");
});

test("enforces a restrictive CSP and Trusted Types", async ({ page }) => {
  await page.goto("/");

  const policy = await page
    .locator('meta[http-equiv="content-security-policy"]')
    .getAttribute("content");
  expect(policy).toContain("default-src 'self'");
  expect(policy).toContain("object-src 'none'");
  expect(policy).toContain("require-trusted-types-for 'script'");
  expect(policy).toContain("trusted-types default goog#html");
  expect(policy).not.toContain("script-src 'unsafe-inline'");

  const trustedTypesEnforced = await page.evaluate(() => {
    const element = document.createElement("div");
    try {
      element.innerHTML = "<span>untrusted</span>";
      return false;
    } catch {
      return true;
    }
  });
  expect(trustedTypesEnforced).toBe(true);
});

test("renders parseable structured data and indexing controls", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/about",
    "/services/mvp-development",
    "/projects/agendalo-ssr-migration",
  ]) {
    await page.goto(path);
    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    expect(blocks.length, `${path} should contain JSON-LD`).toBeGreaterThan(0);
    for (const block of blocks) expect(() => JSON.parse(block)).not.toThrow();
  }
  await page.goto("/projects/c/freelance");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex,follow",
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
    const galleryTabs = page.locator('[role="tab"]');
    const targetTab = galleryTabs.nth(1);
    await targetTab.click();
    await expect(targetTab).toHaveAttribute("aria-selected", "true");
  }
});

test("changes the large-gallery preview from its thumbnails", async ({
  page,
}) => {
  await page.goto("/projects/movify-quote-order-management");
  const gallery = page.locator("astro-island").filter({
    has: page.getByRole("tablist"),
  });
  const tabs = gallery.getByRole("tab");
  const targetTab = tabs.nth(7);
  const targetAlt = await targetTab.locator("img").getAttribute("alt");

  await targetTab.click();

  await expect(targetTab).toHaveAttribute("aria-selected", "true");
  await expect(tabs.first()).toHaveAttribute("aria-selected", "false");
  await expect(
    gallery.getByRole("tabpanel").getByRole("img", { name: targetAlt ?? "" }),
  ).toBeVisible();
  await expect(gallery.getByRole("tabpanel")).toBeInViewport();
});

test("presents featured case studies and resets archive filters", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator('[data-featured-project="true"]')).toHaveCount(3);
  await expect(
    page.getByRole("link", { name: "View selected work" }),
  ).toHaveAttribute("href", "/en/projects");

  await page.goto("/projects");
  await expect(page.locator('[data-featured-project="true"]')).toHaveCount(3);
  const explorer = page.locator("[data-project-explorer]");
  await explorer.getByRole("button", { name: "Java", exact: true }).click();
  await expect(
    explorer.getByRole("button", { name: "Clear filters" }),
  ).toBeVisible();
  await explorer.getByRole("button", { name: "Clear filters" }).click();
  await expect(explorer.getByText("13 projects")).toBeVisible();
});

test("supports case-study navigation and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projects/agendalo-ssr-migration");
  await expect(page.getByRole("heading", { name: "Challenge" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Approach" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Impact" })).toBeVisible();
  await expect(page.getByText("Next project")).toBeVisible();
  const animationDuration = await page
    .locator("body")
    .evaluate((element) => getComputedStyle(element).animationDuration);
  expect(["0s", "0.00001s", "1e-05s"]).toContain(animationDuration);
});

test("keeps redesigned pages within responsive viewports", async ({ page }) => {
  for (const width of [375, 768, 1280, 1536]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/services",
      "/services/mvp-development",
      "/projects",
      "/about",
      "/contact",
    ]) {
      await page.goto(path);
      const dimensions = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
      }));
      expect(
        dimensions.documentWidth,
        `${path} should not overflow at ${width}px`,
      ).toBeLessThanOrEqual(dimensions.viewportWidth);
    }
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
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("dialog")).toBeHidden();
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
  await expect(page.getByLabel("Correo de trabajo")).toBeVisible();
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
      locale === "es" ? /\/es\/projects\// : /\/en\/projects\//,
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
    "/services",
    "/services/mvp-development",
    "/es/",
    "/es/services",
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
