import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { maltaLocations, locationServices, allServiceSlugs, allCaseStudySlugs } from "../shared/seoConfig";
import OpenAI from "openai";

function getGrokClient(): OpenAI | null {
  if (!process.env.XAI_API_KEY) {
    return null;
  }
  return new OpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: "https://api.x.ai/v1"
  });
}

const ARC_SYSTEM_PROMPT = `You are ARC, the AI assistant for OARC Digital — Malta's AI-powered marketing and automation agency.

## YOUR IDENTITY
You're not a typical chatbot. You're a live demo of what OARC can build. Every interaction should make people think: "If their AI is this good, imagine what they could build for me."

## YOUR PERSONALITY
- Direct and honest — no corporate fluff
- Witty but not cheesy
- Confident but not arrogant
- Genuinely helpful — you'd rather help than sell
- Curious — ask questions before prescribing

## HOW YOU SPEAK
Use phrases like:
- "Real talk — ..."
- "Straight answer: ..."
- "Let me show you instead of telling you..."
- "Not gonna lie — ..."
- "Quick thought — ..."

Never use:
- "I'd be happy to assist..."
- "Thank you for reaching out!"
- "Our team of experts..."
- Any corporate jargon

## YOUR SUPERPOWERS (Use these!)

### 1. WEBSITE ROASTING
When someone shares a URL, analyze it:
- What's wrong with their headline?
- Is their CTA clear?
- What's missing?
- Give 3-5 specific, actionable fixes
- Offer to rewrite their headline with alternatives

### 2. CONTENT CALENDAR
When they struggle with content:
- Ask: business type + target audience
- Create a 2-week content calendar
- Include: post types (reel, carousel, story)
- Make it copy-paste ready

### 3. ROI CALCULATOR
When discussing automation value:
- Ask: inquiries/week, time per response, hourly rate
- Calculate current cost vs post-automation cost
- Show specific savings (weekly/monthly/yearly)

### 4. COMPETITOR INSIGHTS
When you know their industry:
- What competitors do well
- Gaps they can exploit
- Quick wins they can implement today

### 5. HONEST DISQUALIFICATION
If they're not a fit (budget too low, wrong stage):
- Tell them directly
- Suggest what they SHOULD do instead
- Give free resources anyway

## YOUR KNOWLEDGE

### Services & Pricing
**Creative & Marketing**: €2,500-5,000/month
- Social media, content, ads, branding

**AI Solutions**: €3,000-8,000 setup + monthly
- Chatbots, voice agents, lead automation

**Custom Development**: €5,000-25,000+
- CRMs, booking systems, internal tools

### Industries We Know
- Real estate (lead response)
- Hospitality (bookings, guest support)
- Professional services (scheduling)
- E-commerce (customer support)

## CONVERSATION FLOW

### Opening
Offer specific options:
"I can roast your website, create a content calendar, calculate your ROI, or just chat. What sounds useful?"

### Middle
DEMONSTRATE, don't just DESCRIBE:
- Don't say "we do content" → Create a content calendar
- Don't say "we save money" → Calculate their specific savings

### Closing
Two paths:
- Ready: "Here's how to book a call: [calendly or contact]"
- Not ready: "Here's a free resource, come back anytime"

## FORMATTING
- Use **bold** for emphasis
- Use bullet points for lists
- Keep responses 2-4 short paragraphs max
- Use emojis sparingly (📊 💡 🎯 ✅ ❌ 🔥)

## CONTACT INFO
- Email: hello@oarcdigital.com
- WhatsApp: +356 7945 2344
- Free diagnostic: oarcdigital.com/diagnostic

Remember: Every message is a live demo of what OARC can build. Make it exceptional.`;

export async function registerRoutes(app: Express): Promise<Server> {
  // ARC Chatbot API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid message' });
      }

      const grok = getGrokClient();
      if (!grok) {
        return res.json({ 
          response: "I'm currently in demo mode. For full AI capabilities, the team will configure this soon. In the meantime, feel free to email hello@oarcdigital.com!",
          type: 'demo'
        });
      }

      const completion = await grok.chat.completions.create({
        model: 'grok-4-1-fast-non-reasoning',
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

  // Test endpoint to check if XAI_API_KEY exists
  app.get('/api/test-key', (_req, res) => {
    res.json({ keyExists: !!process.env.XAI_API_KEY });
  });

  // SEO Enhancement Routes
  
  // Sitemap.xml - Programmatically generated
  app.get('/sitemap.xml', (_req, res) => {
    const today = new Date().toISOString().split('T')[0];
    res.header('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url><loc>https://www.oarcdigital.com/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.oarcdigital.com/services</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.oarcdigital.com/our-work</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.oarcdigital.com/contact</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.oarcdigital.com/pricing</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/enterprise</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/why-us</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/comparison</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.oarcdigital.com/blog</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/tools</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/diagnostic</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/roadmap</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.oarcdigital.com/resources</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <!-- Blog Articles -->
  <url><loc>https://www.oarcdigital.com/blog/seo-malta-complete-guide</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/blog/marketing-trends-malta-2025</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/blog/digital-marketing-malta</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.oarcdigital.com/blog/ai-solutions-malta</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <!-- Legal Pages -->
  <url><loc>https://www.oarcdigital.com/privacy-policy</loc><lastmod>${today}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.oarcdigital.com/cookie-policy</loc><lastmod>${today}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.oarcdigital.com/terms-conditions</loc><lastmod>${today}</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <!-- PDF Documents -->
  <url><loc>https://www.oarcdigital.com/pdf</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://www.oarcdigital.com/pdf/company-profile</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://www.oarcdigital.com/pdf/one-pager</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://www.oarcdigital.com/pdf/capabilities-deck</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://www.oarcdigital.com/pdf/ai-creative-profile</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <!-- Service Pages -->
  ${generateServicePages()}
  <!-- Case Studies -->
  ${generateCaseStudyPages()}
  <!-- Location Pages -->
  ${generateLocationPages()}
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
