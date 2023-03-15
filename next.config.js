/** @type {import('next').NextConfig} */
module.exports = {
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
  },
};
