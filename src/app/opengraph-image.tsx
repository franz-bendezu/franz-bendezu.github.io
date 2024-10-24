import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "Franz Bendezu";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #e5e7eb , #f9fafb)",
          fontSize: 120,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div
              style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "60px 20px",
            margin: "0 20px",
          }}
        >Franz Bendezu
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 60px",
            margin: "0 20px",
            fontSize: 40,
            width: "auto",
            maxWidth: 1000,
            textAlign: "center",
            backgroundColor: "#60a5fa",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          Desarrollador de Software
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
