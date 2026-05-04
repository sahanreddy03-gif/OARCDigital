export interface ServiceMeta {
  title: string;
  category: string;
}

export interface IndustryMeta {
  name: string;
  plural: string;
}

const titleCase = (slug: string) =>
  slug
    .split("-")
    .map((w) => (w.length <= 3 && w === w.toLowerCase() && /^(ai|ar|3d|seo|sdr|api|crm)$/.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");

const categorize = (slug: string): string => {
  if (slug.startsWith("ai-") || slug === "hire-ai-employees") return "AI Workforce Agents";
  if (slug.includes("revenue") || slug.includes("lead-generation") || slug.includes("funnel") || slug.includes("customer-acquisition") || slug.includes("automation") || slug === "idea-validation-engine") return "Growth Automation";
  if (slug.includes("development") || slug === "mvp-development") return "Development";
  return "Creative & Design";
};

export const serviceMap: Record<string, ServiceMeta> = {
  "social-media-creative-management": { title: "Social Media Management", category: "Creative & Design" },
  "video-production": { title: "Video Production", category: "Creative & Design" },
  "branding": { title: "Brand Identity", category: "Creative & Design" },
  "branding-services": { title: "Brand Identity", category: "Creative & Design" },
  "ai-sdr-agent": { title: "AI Sales Agent", category: "AI Workforce Agents" },
  "ai-support-specialist": { title: "AI Customer Support", category: "AI Workforce Agents" },
  "marketing-automation-suite": { title: "Marketing Automation", category: "Growth Automation" },
  "web-design": { title: "Website Design", category: "Creative & Design" },
  "paid-advertising": { title: "Paid Advertising", category: "Creative & Design" },
};

export const getServiceMeta = (slug: string): ServiceMeta =>
  serviceMap[slug] ?? { title: titleCase(slug), category: categorize(slug) };

export const industryMap: Record<string, IndustryMeta> = {
  restaurant: { name: "Restaurant", plural: "Restaurants" },
  hotel: { name: "Hotel", plural: "Hotels" },
  restaurants: { name: "Restaurant", plural: "Restaurants" },
  hotels: { name: "Hotel", plural: "Hotels" },
  cafe: { name: "Cafe", plural: "Cafes" },
  bar: { name: "Bar & Nightlife", plural: "Bars" },
  cafes: { name: "Cafe", plural: "Cafes" },
  bars: { name: "Bar & Nightlife", plural: "Bars" },
  igaming: { name: "iGaming", plural: "iGaming Companies" },
  fintech: { name: "Fintech", plural: "Fintech Companies" },
  "real-estate": { name: "Real Estate", plural: "Real Estate Agencies" },
  retail: { name: "Retail", plural: "Retail Businesses" },
  fitness: { name: "Fitness", plural: "Fitness Businesses" },
  wellness: { name: "Wellness", plural: "Wellness Businesses" },
  events: { name: "Events", plural: "Event Companies" },
};

export const getIndustryMeta = (slug: string): IndustryMeta =>
  industryMap[slug] ?? { name: titleCase(slug), plural: titleCase(slug) };
