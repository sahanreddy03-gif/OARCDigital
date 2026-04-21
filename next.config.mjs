import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'oarcdigital.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  async headers() {
    const immutableCache = [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    ];
    const mediumCache = [
      { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
    ];
    return [
      { source: '/_next/static/:path*', headers: immutableCache },
      { source: '/static/media/:path*', headers: immutableCache },
      { source: '/fonts/:path*', headers: immutableCache },
      { source: '/assets/:path*', headers: mediumCache },
      { source: '/media/:path*', headers: mediumCache },
      { source: '/agents/:path*', headers: mediumCache },
      {
        source: '/:path*\\.(png|jpg|jpeg|webp|avif|svg|ico|gif|mp4|webm|mov)',
        headers: mediumCache,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@assets': path.resolve(__dirname, 'attached_assets'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@/assets': path.resolve(__dirname, 'lib/assets'),
      '@/config': path.resolve(__dirname, 'lib/config'),
      '@/data': path.resolve(__dirname, 'lib/data'),
      '@/hooks': path.resolve(__dirname, 'lib/hooks'),
    };
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg|heic|heif)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' },
    });
    config.module.rules.push({
      test: /\.(mp4|mov|webm|avi|m4v|ogv)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' },
    });
    return config;
  },
};

export default nextConfig;
