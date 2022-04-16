/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/food-website",
  assetPrefix: "/food-website",
};

module.exports = nextConfig;
