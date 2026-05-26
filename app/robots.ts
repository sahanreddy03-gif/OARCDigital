import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/admin/"] },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Slurp", allow: "/" },
      // AI / answer engines
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      // Uptime / availability monitors — explicitly allowed so production
      // health checks keep working when Sahan adds a monitor. If he uses one
      // not on this list (e.g. Pingdom RUM, NewRelic Synthetics, Datadog
      // Synthetics) it should be added in a follow-up task — see Task #83
      // Ask A4.
      { userAgent: "UptimeRobot", allow: "/" },
      { userAgent: "Pingdom.com_bot", allow: "/" },
      { userAgent: "StatusCake", allow: "/" },
      // Competitor SEO scrapers — block. These crawl the entire site to feed
      // backlink / keyword databases sold to competitors and contribute
      // nothing to user discovery. Sahan flagged these in Task #83 Step 2
      // after the W1 scrape audit.
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "AhrefsSiteAudit", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "SemrushBot-SA", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
      { userAgent: "BLEXBot", disallow: "/" },
      { userAgent: "SeekportBot", disallow: "/" },
      { userAgent: "BacklinkCrawler", disallow: "/" },
      { userAgent: "SerpstatBot", disallow: "/" },
      { userAgent: "MegaIndex.ru", disallow: "/" },
      { userAgent: "WebMeUp", disallow: "/" },
      { userAgent: "Exabot", disallow: "/" },
      { userAgent: "rogerbot", disallow: "/" },
      { userAgent: "ZoominfoBot", disallow: "/" },
      { userAgent: "DataForSeoBot", disallow: "/" },
      { userAgent: "BarkrowlerBot", disallow: "/" },
    ],
    sitemap: [
      "https://oarcdigital.com/sitemap.xml",
      "https://oarcdigital.com/image-sitemap.xml",
      // AI answer-engine discovery — GPTBot, PerplexityBot, ClaudeBot, Gemini
      // all parse Sitemap: directives and follow the URL. llms.txt is the
      // standard AI-readable index and llms-full.txt is the detailed reference.
      "https://oarcdigital.com/llms.txt",
      "https://oarcdigital.com/llms-full.txt",
    ],
    host: "https://oarcdigital.com",
  };
}
