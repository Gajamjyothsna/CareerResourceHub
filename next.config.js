// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ ensures static export for GitHub Pages
  basePath: '/CareerResourceHub', // ✅ repo name
  images: {
    unoptimized: true, // ✅ disable Next.js image optimization
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
      allowedOrigins: ['http://localhost:9002'],
    },
  },
};

module.exports = nextConfig;