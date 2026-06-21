import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? (await import('@next/bundle-analyzer')).default({ enabled: true })
    : (cfg) => cfg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent binary assets (images, video, fonts) from being bundled into
  // serverless functions via Node File Tracing. Without this the
  // image-sitemap.xml route — which uses fs.readdir on public/ — causes
  // Next.js to trace every AVIF/PNG in the repo into the Lambda, hitting
  // Vercel's 300 MB function size limit.
  outputFileTracingExcludes: {
    '*': [
      './public/**/*.avif',
      './public/**/*.png',
      './public/**/*.jpg',
      './public/**/*.jpeg',
      './public/**/*.webp',
      './public/**/*.gif',
      './public/**/*.svg',
      './public/**/*.mp4',
      './public/**/*.webm',
      './public/**/*.mov',
      './public/**/*.woff',
      './public/**/*.woff2',
      './public/**/*.ttf',
      './public/**/*.otf',
      './attached_assets/**',
    ],
  },
  allowedDevOrigins: [
    '*.janeway.replit.dev',
    '*.janeway.repl.co',
    '*.replit.dev',
    '*.repl.co',
  ],
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@shared': path.resolve(__dirname, 'shared'),
      '@/assets': path.resolve(__dirname, 'lib/assets'),
      '@/config': path.resolve(__dirname, 'lib/config'),
      '@/data': path.resolve(__dirname, 'lib/data'),
      '@/hooks': path.resolve(__dirname, 'lib/hooks'),
    },
  },
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
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/__mockup/:path*',
        destination: 'http://localhost:23636/__mockup/:path*',
      },
    ];
  },
  async headers() {
    const immutableCache = [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    ];
    return [
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
};

export default withBundleAnalyzer(nextConfig);
