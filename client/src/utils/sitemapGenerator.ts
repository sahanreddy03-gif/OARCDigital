// Dynamic Sitemap Generator for SEO
// Automatically generates sitemap.xml based on all routes in the application

import { servicesCatalog } from '@/config/servicesConfig';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const BASE_URL = 'https://oarcdigital.com';
const TODAY = new Date().toISOString().split('T')[0];

// Core pages
const corePages: SitemapUrl[] = [
  { loc: '/', lastmod: TODAY, changefreq: 'daily', priority: 1.0 },
  { loc: '/services', lastmod: TODAY, changefreq: 'weekly', priority: 0.9 },
  { loc: '/why-us', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/our-work', lastmod: TODAY, changefreq: 'weekly', priority: 0.8 },
  { loc: '/contact', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  { loc: '/roadmap', lastmod: TODAY, changefreq: 'monthly', priority: 0.6 },
  { loc: '/enterprise', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
];

// Case studies
const caseStudyPages: SitemapUrl[] = [
  { loc: '/case-studies/tefal', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  { loc: '/case-studies/azzaro', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  { loc: '/case-studies/body-shop', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  { loc: '/case-studies/dont-make-ads', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  { loc: '/case-studies/kfc', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  { loc: '/case-studies/redbull', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
];

// Generate service pages dynamically
function generateServicePages(): SitemapUrl[] {
  const pages: SitemapUrl[] = [];
  
  Object.values(servicesCatalog).forEach(category => {
    category.items.forEach(service => {
      const route = service.route || service.slug;
      pages.push({
        loc: `/services/${route}`,
        lastmod: TODAY,
        changefreq: 'weekly',
        priority: service.badge === 'Popular' ? 0.9 : 0.8
      });
    });
  });
  
  return pages;
}

// Malta location pages - PROGRAMMATIC SEO!
const maltaLocations = [
  'valletta', 'sliema', 'st-julians', 'mosta', 'birkirkara', 
  'qormi', 'hamrun', 'naxxar', 'zabbar', 'attard'
];

// Generate location-specific landing pages for top services
function generateLocationPages(): SitemapUrl[] {
  const pages: SitemapUrl[] = [];
  
  const topServices = [
    { slug: 'social-media-creative-management', name: 'Social Media Marketing' },
    { slug: 'digital-marketing', name: 'Digital Marketing' },
    { slug: 'branding-services', name: 'Brand Identity' },
    { slug: 'web-design', name: 'Web Design' },
    { slug: 'video-production', name: 'Video Production' },
    { slug: 'ai-copywriting', name: 'AI Copywriting' },
    { slug: 'hire-ai-employees', name: 'AI Employees' },
    { slug: 'revenue-automation', name: 'Revenue Automation' },
  ];
  
  maltaLocations.forEach(location => {
    topServices.forEach(service => {
      pages.push({
        loc: `/malta/${location}/${service.slug}`,
        lastmod: TODAY,
        changefreq: 'monthly',
        priority: 0.7
      });
    });
  });
  
  return pages;
}

// Generate complete sitemap
export function generateSitemap(): SitemapUrl[] {
  return [
    ...corePages,
    ...generateServicePages(),
    ...caseStudyPages,
    ...generateLocationPages()
  ];
}

// Convert to XML format
export function generateSitemapXML(): string {
  const urls = generateSitemap();
  
  const urlTags = urls.map(url => `
  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlTags}
</urlset>`;
}

// Generate robots.txt
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Fast crawling for Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 0

# Block common bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /
`;
}
