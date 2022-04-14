/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/code_blog",
  assetPrefix: "/code_blog",
}

module.exports = nextConfig
