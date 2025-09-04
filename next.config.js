// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',  // ✅ increase from 1MB → 10MB
      allowedOrigins: ['http://localhost:9002'], // optional: allow local dev origin
    },
  },

  // ✅ allow external images from picsum.photos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

module.exports = nextConfig;
