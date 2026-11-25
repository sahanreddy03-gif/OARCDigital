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
    '127.0.0.1',
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
  async redirects() {
    return [
      { source: '/h360/restaurant-marketing-malta', destination: '/h360', permanent: true },
      { source: '/h360/demo', destination: '/h360#h360-audit', permanent: true },
      // Meta App Live requires a resolvable Privacy Policy URL
      { source: '/privacy', destination: '/legal/privacy-policy', permanent: true },
      { source: '/privacy-policy', destination: '/legal/privacy-policy', permanent: true },
      { source: '/data-deletion', destination: '/legal/data-deletion', permanent: true },
      { source: '/terms-conditions', destination: '/legal/terms-conditions', permanent: true },
      { source: '/cookie-policy', destination: '/legal/cookie-policy', permanent: true },
      // AI system pages: the ways people type or guess the address
      { source: '/ai/law-firm', destination: '/ai/law-firms', permanent: true },
      { source: '/ai/legal', destination: '/ai/law-firms', permanent: true },
      { source: '/ai/law', destination: '/ai/law-firms', permanent: true },
      { source: '/ai/lawyers', destination: '/ai/law-firms', permanent: true },
      { source: '/ai/advocates', destination: '/ai/law-firms', permanent: true },
      { source: '/ai/realestate', destination: '/ai/real-estate', permanent: true },
      { source: '/ai/real-estate-agencies', destination: '/ai/real-estate', permanent: true },
      { source: '/ai/estate-agents', destination: '/ai/real-estate', permanent: true },
      { source: '/ai/property', destination: '/ai/real-estate', permanent: true },
      { source: '/ai/clinic', destination: '/ai/clinics', permanent: true },
      { source: '/ai/healthcare', destination: '/ai/clinics', permanent: true },
      { source: '/ai/hospitals', destination: '/ai/clinics', permanent: true },
      { source: '/ai/medical', destination: '/ai/clinics', permanent: true },
      { source: '/ai/dental', destination: '/ai/clinics', permanent: true },
      { source: '/ai/hotel', destination: '/ai/hotels', permanent: true },
      { source: '/ai/hospitality', destination: '/ai/hotels', permanent: true },
      { source: '/ai/guesthouses', destination: '/ai/hotels', permanent: true },
      { source: '/ai/restaurant', destination: '/ai/restaurants', permanent: true },
      { source: '/ai/cafes', destination: '/ai/restaurants', permanent: true },
      { source: '/ai/tours', destination: '/ai/tourism', permanent: true },
      { source: '/ai/tour-operators', destination: '/ai/tourism', permanent: true },
      { source: '/ai/travel', destination: '/ai/tourism', permanent: true },
      { source: '/ai/schools', destination: '/ai/education', permanent: true },
      { source: '/ai/school', destination: '/ai/education', permanent: true },
      { source: '/ai/language-schools', destination: '/ai/education', permanent: true },
      { source: '/ai/colleges', destination: '/ai/education', permanent: true },
      { source: '/ai/igaming', destination: '/ai/igaming-operators', permanent: true },
      { source: '/ai/casino', destination: '/ai/casinos', permanent: true },
      { source: '/ai/sportsbook', destination: '/ai/igaming-operators', permanent: true },
      { source: '/ai/betting', destination: '/ai/igaming-operators', permanent: true },
      { source: '/ai/igaming-supplier', destination: '/ai/igaming-suppliers', permanent: true },
      { source: '/ai/igaming-b2b', destination: '/ai/igaming-suppliers', permanent: true },
      { source: '/ai/igaming-affiliate', destination: '/ai/igaming-affiliates', permanent: true },
      { source: '/ai/affiliates', destination: '/ai/igaming-affiliates', permanent: true },
      { source: '/ai/admin', destination: '/ai/business-admin', permanent: true },
      { source: '/ai/office', destination: '/ai/business-admin', permanent: true },
      { source: '/ai/back-office', destination: '/ai/business-admin', permanent: true },
      // Old or mistyped addresses that visitors and crawlers still request
      // (Vercel request logs, Nov 2026). Each lands on the live page in one hop.
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/journal', destination: '/blog', permanent: true },
      { source: '/work', destination: '/our-work', permanent: true },
      { source: '/aeo', destination: '/services', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemap-index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemaps.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/blog/seo-malta-guide', destination: '/blog/seo-malta-complete-guide', permanent: true },
      { source: '/creative-growth-malta', destination: '/creative', permanent: true },
      { source: '/website-design-malta', destination: '/services/web-design', permanent: true },
      { source: '/ai-consulting-malta', destination: '/services/ai-consulting', permanent: true },
      { source: '/web-app-development-malta', destination: '/services/web-apps-development', permanent: true },
      { source: '/ai-automation-malta', destination: '/automation', permanent: true },
      // Branding: one main page (Nov 2026). These two pages competed with it on Google.
      { source: '/blog/branding-agency-malta', destination: '/services/branding', permanent: true },
      { source: '/aeo/branding-agency-malta', destination: '/services/branding', permanent: true },
      // Websites: one main page per search (Nov 2026). Web design -> the article Google
      // ranks best; web development -> the websites flagship page.
      { source: '/aeo/web-design-malta', destination: '/blog/web-design-malta', permanent: true },
      { source: '/aeo/website-development-malta', destination: '/aeo/web-development-agency-malta', permanent: true },
      // Homepage first (Nov 2026): weak pages that competed with the homepage forward
      // to it; the 'number one' article was merged into the Why OARC showcase blog.
      { source: '/aeo/best-marketing-agency-malta', destination: '/', permanent: true },
      { source: '/insights/best-marketing-agencies-malta', destination: '/', permanent: true },
      { source: '/blog/number-one-marketing-ai-agency-malta', destination: '/blog/marketing-agency-malta', permanent: true },
      { source: '/mt/blog/number-one-marketing-ai-agency-malta', destination: '/mt', permanent: true },
    ];
  },
  async headers() {
    const immutableCache = [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    ];
    // Most files in public/ keep their name when the picture changes, and this
    // header is also sent with 404s. A one-year "immutable" here kept broken
    // images broken in browsers for a year, so plain public files get a week.
    // It comes first: when two rules set the same header, the later rule wins,
    // so the folder rules below still give their own files the long cache.
    const publicFileCache = [
      { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
    ];
    return [
      {
        source: '/:path*\\.(png|jpg|jpeg|webp|avif|svg|ico|gif|woff|woff2|ttf|otf|mp4|webm|mov)',
        headers: publicFileCache,
      },
      { source: '/_next/static/:path*', headers: immutableCache },
      { source: '/static/media/:path*', headers: immutableCache },
      { source: '/fonts/:path*', headers: immutableCache },
      { source: '/assets/:path*', headers: immutableCache },
      { source: '/media/:path*', headers: immutableCache },
      { source: '/agents/:path*', headers: immutableCache },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
