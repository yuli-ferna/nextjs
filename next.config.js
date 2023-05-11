/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: "export",
  images: { unoptimized: true },
  basePath: "/nextjs",
  trailingSlash: true,
};

module.exports = nextConfig;
