/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'franzbendezu.me',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
    unoptimized: true,
  },
};
