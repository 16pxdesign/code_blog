/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  //basePath: "/code_blog",
  basePath: "/",
  //assetPrefix: "/code_blog",
  assetPrefix: "/",
}

module.exports = nextConfig
