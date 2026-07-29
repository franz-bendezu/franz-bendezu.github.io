import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { createElement } from "react";
import satori from "satori";
import sharp from "sharp";

export const prerender = true;

const WIDTH = 1200;
const HEIGHT = 630;
const require = createRequire(import.meta.url);
const interFonts = Promise.all([
  readFile(
    require.resolve("@fontsource/inter/files/inter-latin-600-normal.woff"),
  ),
  readFile(
    require.resolve("@fontsource/inter/files/inter-latin-700-normal.woff"),
  ),
]);

export const GET: APIRoute = async () => {
  const [interSemiBold, interBold] = await interFonts;
  const svg = await satori(
    createElement(
      "div",
      {
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #e5e7eb, #f9fafb)",
          fontFamily: "Inter",
          color: "#111827",
          textAlign: "center",
        },
      },
      createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 20px",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: -2,
          },
        },
        "Franz Bendezu",
      ),
      createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 860,
            height: 116,
            borderRadius: 8,
            backgroundColor: "#60a5fa",
            color: "#fff",
            fontSize: 44,
            fontWeight: 600,
          },
        },
        "Software Developer · Systems Engineer",
      ),
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
