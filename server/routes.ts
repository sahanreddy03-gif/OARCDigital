import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { maltaLocations, locationServices, allServiceSlugs, allCaseStudySlugs } from "../shared/seoConfig";
import { insertLeadSchema } from "../shared/schema";
import OpenAI from "openai";
import multer from "multer";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const execAsync = promisify(exec);
const upload = multer({ dest: '/tmp/uploads/' });
import { 
  ARC_SYSTEM_PROMPT, 
  getConversationPhase, 
  getPhaseGuidance,
  BUTTON_OPENERS,
  detectObjection,
  OBJECTION_CONTEXTS
} from "../client/src/lib/arcSystemPrompt";

function getGrokClient(): OpenAI | null {
  if (!process.env.XAI_API_KEY) {
    return null;
  }
  return new OpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: "https://api.x.ai/v1"
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // ARC Chatbot API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history, buttonId } = req.body;

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

      // Track conversation phase
      const messageCount = (history || []).length;
      const phase = getConversationPhase(messageCount);
      const phaseGuidance = getPhaseGuidance(phase, messageCount);

      // Check if this is a button click with a specific opener
      let buttonContext = '';
      if (buttonId && BUTTON_OPENERS[buttonId]) {
        buttonContext = `\n\n[USER CLICKED BUTTON: "${buttonId}". Use this exact opener as your first response:]\n${BUTTON_OPENERS[buttonId]}`;
      }

      // Detect objections in user message
      let objectionContext = '';
      const detectedObjection = detectObjection(message);
      if (detectedObjection && OBJECTION_CONTEXTS[detectedObjection]) {
        objectionContext = `\n\n${OBJECTION_CONTEXTS[detectedObjection]}`;
      }

      // Build the complete system prompt with all context
      const fullSystemPrompt = `${ARC_SYSTEM_PROMPT}\n\n${phaseGuidance}${buttonContext}${objectionContext}`;

      const completion = await grok.chat.completions.create({
        model: 'grok-4-1-fast-non-reasoning',
        messages: [
          { role: 'system', content: fullSystemPrompt },
          ...(history || []).slice(-10),
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      const response = completion.choices[0].message.content;
      return res.json({ response, type: 'ai', phase });

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

  // Video conversion endpoint - WebM to MP4 (H.264) for Meta Ads
  app.post('/api/convert-video', upload.single('video'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No video file uploaded' });
      }

      const inputPath = req.file.path;
      const outputPath = path.join('/tmp', `output-${Date.now()}.mp4`);

      // Meta-safe FFmpeg command that fixes ALL common rejection issues:
      // - scale + crop for TRUE 1080x1080 (no fake square)
      // - setsar=1:1 for square pixels
      // - setdar=1:1 for correct display aspect ratio
      // - H.264 high profile level 4.2 (Meta preferred)
      // - yuv420p pixel format (required by Meta)
      // - faststart for streaming
      // - Removes hidden padding/metadata quirks
      const ffmpegCmd = `ffmpeg -y -i "${inputPath}" -vf "scale=1080:1080:force_original_aspect_ratio=increase,crop=1080:1080,setsar=1:1,setdar=1:1" -r 30 -c:v libx264 -profile:v high -level 4.2 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k "${outputPath}"`;

      await execAsync(ffmpegCmd);

      // Read the converted file
      const mp4Data = fs.readFileSync(outputPath);

      // Clean up temp files
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);

      // Send MP4 back
      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Content-Disposition', 'attachment; filename="oarc-instagram-1080x1080.mp4"');
      res.send(mp4Data);

    } catch (error) {
      console.error('Video conversion error:', error);
      res.status(500).json({ error: 'Video conversion failed' });
    }
  });

  // Lead capture API endpoint
  app.post('/api/leads', async (req, res) => {
    try {
      const result = insertLeadSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: 'Invalid lead data' });
      }
      const lead = await storage.createLead(result.data);
      return res.json({ success: true, lead });
    } catch (error) {
      console.error('Lead capture error:', error);
      return res.status(500).json({ error: 'Failed to save lead' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

function generateServicePages(): string {
  return allServiceSlugs.map(service => 
    `  <url><loc>https://www.oarcdigital.com/services/${service}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`
  ).join('\n');
}

function generateLocationPages(): string {
  const pages: string[] = [];
  maltaLocations.forEach(location => {
    locationServices.forEach(service => {
      pages.push(`  <url><loc>https://www.oarcdigital.com/malta/${location}/${service}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
    });
  });

  return pages.join('\n');
}

function generateCaseStudyPages(): string {
  return allCaseStudySlugs.map(study => 
    `  <url><loc>https://www.oarcdigital.com/case-studies/${study}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
  ).join('\n');
}