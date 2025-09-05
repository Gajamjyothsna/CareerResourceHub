// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/CareerResourceHub',  // ✅ GitHub repo name
  assetPrefix: '/CareerResourceHub/', // ✅ ensures assets load from correct path
  images: {
    unoptimized: true, // disable Next.js Image Optimization
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
      allowedOrigins: ['http://localhost:9002'],
    },
  },
};

module.exports = nextConfig;
