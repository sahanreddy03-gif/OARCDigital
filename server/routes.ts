import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // SEO Enhancement Routes
  
  // Sitemap.xml - Programmatically generated
  app.get('/sitemap.xml', (_req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://oarcdigital.com/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://oarcdigital.com/services</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://oarcdigital.com/why-us</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://oarcdigital.com/our-work</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://oarcdigital.com/contact</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  ${generateServicePages()}
  ${generateLocationPages()}
  ${generateCaseStudyPages()}
</urlset>`);
  });

  // Robots.txt - SEO optimized
  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /

# Sitemap
Sitemap: https://oarcdigital.com/sitemap.xml

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
`);
  });

  const httpServer = createServer(app);

  return httpServer;
}

function generateServicePages(): string {
  const services = [
    'social-media-creative-management', 'ad-creative', 'web-design', 'mobile-apps-development',
    'video-production', 'motion-design', 'branding-services', 'design-systems', 'email-creative',
    'presentation-pitch', 'illustration', 'print-packaging', 'immersive-3d-ar', 'ai-copywriting',
    'paid-advertising', 'media-buying', 'influencer-marketing', 'ai-consulting',
    'hire-ai-employees', 'ai-sdr', 'ai-support', 'ai-marketing', 'ai-writer', 'ai-analyst',
    'ai-financial-analyst', 'ai-admin', 'revenue-automation', 'funnel-automation',
    'lead-generation', 'customer-acquisition', 'digital-marketing', 'rapid-idea-testing'
  ];
  
  return services.map(service => 
    `  <url><loc>https://oarcdigital.com/services/${service}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`
  ).join('\n');
}

function generateLocationPages(): string {
  const locations = ['valletta', 'sliema', 'st-julians', 'mosta', 'birkirkara', 'qormi', 'hamrun', 'naxxar', 'zabbar', 'attard'];
  const topServices = [
    'social-media-creative-management', 'digital-marketing', 'branding-services',
    'web-design', 'video-production', 'ai-copywriting', 'hire-ai-employees', 'revenue-automation'
  ];
  
  const pages: string[] = [];
  locations.forEach(location => {
    topServices.forEach(service => {
      pages.push(`  <url><loc>https://oarcdigital.com/malta/${location}/${service}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
    });
  });
  
  return pages.join('\n');
}

function generateCaseStudyPages(): string {
  const caseStudies = [
    'tefal', 'azzaro', 'body-shop', 'dont-make-ads', 'lenovo-legion', 'esl-gaming'
  ];
  
  return caseStudies.map(study => 
    `  <url><loc>https://oarcdigital.com/case-studies/${study}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
  ).join('\n');
}
