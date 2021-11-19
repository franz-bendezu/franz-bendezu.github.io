/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["franzbendezu.me"],
    loader: "imgix",
    path: "https://franzbendezu.me/",
  },
};
