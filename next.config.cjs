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
    config.module.rules.push({
      test: /\.(mp4|mov|webm|avi|m4v|ogv)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' },
    });
    return config;
  },
};

module.exports = nextConfig;
