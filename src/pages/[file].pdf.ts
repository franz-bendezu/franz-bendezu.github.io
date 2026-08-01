import type { APIRoute, GetStaticPaths } from "astro";
import { experimental_AstroContainer } from "astro/container";
import { chromium } from "@playwright/test";
import interFontUrl from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?inline";
import resumeLayoutSource from "@/layouts/ResumeLayout.astro?raw";
import type { Locale } from "@/lib/i18n";
import ResumePage from "@/views/ResumePage.astro";
import resumePageSource from "@/views/ResumePage.astro?raw";

const files = {
  "Franz-Bendezu-CV-EN": "en",
  "Franz-Bendezu-CV-ES": "es",
} as const satisfies Record<string, Locale>;

const extractStyle = (source: string) => {
  const match = source.match(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/);
  if (!match) throw new Error("The CV component is missing its print styles");
  return match[1];
};

const resumeStyles = `
  @font-face {
    font-family: "Inter Variable";
    font-style: normal;
    font-display: block;
    font-weight: 100 900;
    src: url("${interFontUrl}") format("woff2-variations");
  }
  ${extractStyle(resumeLayoutSource)}
  ${extractStyle(resumePageSource)}
`;

async function generatePdf(locale: Locale) {
  const container = await experimental_AstroContainer.create();
  const renderedHtml = await container.renderToString(ResumePage, {
    props: { locale },
    request: new Request(`https://franzbendezu.me/cv/${locale}/`),
  });
  const html = renderedHtml.replace(
    "</head>",
    `<style>${resumeStyles}</style></head>`,
  );

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.emulateMedia({ media: "print", colorScheme: "light" });
    await page.setContent(html, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    const pdf = await page.pdf({
      format: "A4",
      preferCSSPageSize: true,
      printBackground: true,
    });
    return new Uint8Array(pdf);
  } finally {
    await browser.close();
  }
}

export const getStaticPaths = (() =>
  Object.keys(files).map((file) => ({
    params: { file },
  }))) satisfies GetStaticPaths;

export const GET = (async ({ params }) => {
  const locale = files[params.file as keyof typeof files];
  if (!locale) return new Response("Not found", { status: 404 });
  const pdf = await generatePdf(locale);
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="Franz-Bendezu-CV-${locale.toUpperCase()}.pdf"`,
    },
  });
}) satisfies APIRoute;
