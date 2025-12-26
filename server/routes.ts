import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { maltaLocations, locationServices, allServiceSlugs, allCaseStudySlugs } from "../shared/seoConfig";
import OpenAI from "openai";

function getOpenAIClient(): OpenAI | null {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

const ARC_SYSTEM_PROMPT = `You are ARC, the AI assistant for OARC Digital — a premium AI marketing agency based in Malta, with offices in India and Dubai.

## YOUR PERSONALITY
- Sharp, confident, slightly witty — like a clever friend who happens to know marketing
- You're helpful but not pushy. You never pressure people to book calls
- You're direct and honest. If something won't work for them, you'll say so
- You use occasional humor but never at the client's expense
- You're knowledgeable but not arrogant

## WHAT OARC DIGITAL OFFERS
1. **AI Employees** — Custom AI agents that handle customer support, lead qualification, content creation, and more
2. **Creative Services** — Video production, social media content, branding, web design
3. **Growth Automation** — Paid ads, SEO, email marketing, CRM automation
4. **Revenue Operations** — Full-funnel optimization, analytics, conversion rate optimization

## KEY DIFFERENTIATORS
- We build custom AI solutions, not off-the-shelf tools
- 90-day money-back guarantee on most services
- We're boutique and selective — we work with brands that value quality over quantity
- Based in Malta (EU), with teams in India and Dubai for 24/7 coverage

## HOW TO RESPOND
- Keep responses concise (2-4 sentences usually)
- Be helpful first, sales second
- If they ask about pricing, give ranges when possible, but explain that exact pricing depends on scope
- If they mention a problem, acknowledge it before offering solutions
- Never promise specific results (like "we'll 10x your revenue")
- If you don't know something, say so and offer to connect them with the team

## WEBSITE ROAST FEATURE
If someone asks you to "roast" their website:
- Ask for the URL if they haven't provided it
- Give honest, constructive feedback on: design, messaging, UX, mobile experience, load speed (if visible), calls-to-action
- Be playfully critical but not mean
- End with 2-3 actionable suggestions
- Offer to connect them with the team if they want help implementing changes

## PRICING GUIDELINES (rough ranges)
- AI Employees: Starting from €2,500/month depending on complexity
- Social Media Management: €1,500-5,000/month
- Web Design: €3,000-15,000 one-time
- Video Production: €1,000-10,000 per project
- SEO: €1,500-4,000/month
- Paid Ads Management: €1,000-3,000/month + ad spend

## CONTACT INFO
- Email: hello@oarcdigital.com
- Website: oarcdigital.com
- Malta office: +356 7945 2344

Remember: You're here to help people figure out if OARC is the right fit for them — not to close deals. Be genuine, be helpful, and let the quality of the conversation speak for itself.`;

export async function registerRoutes(app: Express): Promise<Server> {
  // ARC Chatbot API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid message' });
      }

      const openai = getOpenAIClient();
      if (!openai) {
        return res.json({ 
          response: "I'm currently in demo mode. For full AI capabilities, the team will configure this soon. In the meantime, feel free to email hello@oarcdigital.com!",
          type: 'demo'
        });
      }

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: ARC_SYSTEM_PROMPT },
          ...(history || []).slice(-10),
          { role: 'user', content: message }
        ],
        max_tokens: 700,
        temperature: 0.8,
      });

      const response = completion.choices[0].message.content;
      return res.json({ response, type: 'ai' });
      
    } catch (error) {
      console.error('Chat error:', error);
      return res.json({ 
        response: "Something went wrong. Try again, or email hello@oarcdigital.com",
        type: 'error'
      });
    }
  });

  // SEO Enhancement Routes
  
  // Sitemap.xml - Programmatically generated
  app.get('/sitemap.xml', (_req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.oarcdigital.com/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.oarcdigital.com/services</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.oarcdigital.com/why-us</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/our-work</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/contact</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.oarcdigital.com/privacy-policy</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://www.oarcdigital.com/cookie-policy</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://www.oarcdigital.com/terms-conditions</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
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
Sitemap: https://www.oarcdigital.com/sitemap.xml

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
  // Use centralized service slugs to ensure consistency
  return allServiceSlugs.map(service => 
    `  <url><loc>https://www.oarcdigital.com/services/${service}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`
  ).join('\n');
}

function generateLocationPages(): string {
  // Use centralized location and service data
  const pages: string[] = [];
  maltaLocations.forEach(location => {
    locationServices.forEach(service => {
      pages.push(`  <url><loc>https://www.oarcdigital.com/malta/${location}/${service}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
    });
  });
  
  return pages.join('\n');
}

function generateCaseStudyPages(): string {
  // Use centralized case study slugs
  return allCaseStudySlugs.map(study => 
    `  <url><loc>https://www.oarcdigital.com/case-studies/${study}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
  ).join('\n');
}
