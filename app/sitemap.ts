import type { MetadataRoute } from "next";
import {
  maltaLocations,
  locationServices,
  maltaIndustries,
  allServiceSlugs,
  allCaseStudySlugs,
} from "../shared/seoConfig";

const BASE = "https://oarcdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/our-work`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/creative`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ai-agents`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/automation`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/why-us`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/comparison`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/tools`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diagnostic`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/roadmap`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = [
    "seo-malta-complete-guide",
    "marketing-trends-malta-2025",
    "digital-marketing-malta",
    "ai-solutions-malta",
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const aeoPages: MetadataRoute.Sitemap = [
    "best-marketing-agency-malta",
    "ai-agency-malta",
    "restaurant-marketing-malta",
    "hospitality-360-malta",
    "social-media-agency-malta",
  ].map((slug) => ({
    url: `${BASE}/aeo/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    "privacy-policy",
    "cookie-policy",
    "terms-conditions",
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: today,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const pdfPages: MetadataRoute.Sitemap = [
    "pdf",
    "pdf/company-profile",
    "pdf/one-pager",
    "pdf/capabilities-deck",
    "pdf/ai-creative-profile",
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePages: MetadataRoute.Sitemap = allServiceSlugs.map((service) => ({
    url: `${BASE}/services/${service}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = allCaseStudySlugs.map((study) => ({
    url: `${BASE}/case-studies/${study}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = [];
  maltaLocations.forEach((location) => {
    locationServices.forEach((service) => {
      locationPages.push({
        url: `${BASE}/malta/${location}/${service}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  const industryPages: MetadataRoute.Sitemap = maltaIndustries.map((industry) => ({
    url: `${BASE}/industries/${industry}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...blogPages,
    ...aeoPages,
    ...legalPages,
    ...pdfPages,
    ...servicePages,
    ...caseStudyPages,
    ...locationPages,
    ...industryPages,
  ];
}
