import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  output: 'export'
};
 
export default withNextIntl(nextConfig);
