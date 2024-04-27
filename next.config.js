/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "es-ES",
  },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "franzbendezu.me",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
    unoptimized: true,
  },
};
