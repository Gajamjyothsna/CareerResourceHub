/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ✅ enables static export
  basePath: '/CareerResourceHub',  // ✅ repo name
  assetPrefix: '/CareerResourceHub/', // ✅ ensures assets load from correct path
  images: {
    unoptimized: true, // ✅ required for GitHub Pages
  },
};

module.exports = nextConfig;