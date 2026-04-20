/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true, formats: ['image/avif', 'image/webp'] },
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
    config.module.rules.push({
      test: /\.(avif|heic|heif)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/images/[name].[hash][ext]' },
    });
    return config;
  },
};

module.exports = nextConfig;
