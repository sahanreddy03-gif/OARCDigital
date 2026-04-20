import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/", crawlDelay: 0 },
      { userAgent: "Bingbot", allow: "/", crawlDelay: 0 },
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
    ],
    sitemap: "https://oarcdigital.com/sitemap.xml",
  };
}
