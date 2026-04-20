/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@assets': path.resolve(__dirname, 'attached_assets'),
      '@shared': path.resolve(__dirname, 'shared'),
    };
    return config;
  },
};

module.exports = nextConfig;
