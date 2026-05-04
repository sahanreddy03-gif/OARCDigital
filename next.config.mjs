import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? (await import('@next/bundle-analyzer')).default({ enabled: true })
    : (cfg) => cfg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Temporarily disabled during Next 15 upgrade debug. Re-enable selectively
    // once the runtime "Cannot read properties of undefined (reading 'call')"
    // is isolated.
    // optimizePackageImports: [...]
  },
  images: {
    unoptimized: false,
    // Kept true: 461 @assets imports across the codebase are used as plain
    // URL strings (CSS background-image, <img src>, etc). Flipping this would
    // make Next augment those imports as `StaticImageData` objects and break
    // every consumer. The dedicated webpack `asset/resource` rule below keeps
    // returning strings for direct optimization. Migration to <Image /> per
    // component is tracked in follow-up #44.
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
    return [
      { source: '/_next/static/:path*', headers: immutableCache },
      { source: '/static/media/:path*', headers: immutableCache },
      { source: '/fonts/:path*', headers: immutableCache },
      { source: '/assets/:path*', headers: immutableCache },
      { source: '/media/:path*', headers: immutableCache },
      { source: '/agents/:path*', headers: immutableCache },
      {
        source: '/:path*\\.(png|jpg|jpeg|webp|avif|svg|ico|gif|woff|woff2|ttf|otf|mp4|webm|mov)',
        headers: immutableCache,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@shared': path.resolve(__dirname, 'shared'),
      '@/assets': path.resolve(__dirname, 'lib/assets'),
      '@/config': path.resolve(__dirname, 'lib/config'),
      '@/data': path.resolve(__dirname, 'lib/data'),
      '@/hooks': path.resolve(__dirname, 'lib/hooks'),
    };
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
