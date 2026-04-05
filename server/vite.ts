import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

const PRERENDER_TOKEN = 'Pxkbsw0Uk9YVB3Wz6beq';

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'duckduckbot', 'slurp',
  'baiduspider', 'facebookexternalhit', 'twitterbot', 'rogerbot',
  'linkedinbot', 'embedly', 'showyoubot', 'outbrain', 'pinterest',
  'slackbot', 'redditbot', 'applebot', 'whatsapp', 'discordbot',
  'telegrambot', 'google page speed', 'chrome-lighthouse', 'prerender',
];

const IGNORE_EXTENSIONS = [
  '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif',
  '.pdf', '.ico', '.rss', '.zip', '.mp3', '.rar', '.exe', '.wmv',
  '.avi', '.mp4', '.m4v', '.svg', '.webp', '.woff', '.woff2', '.ttf',
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some(bot => ua.includes(bot));
}

async function prerenderMiddleware(req: any, res: any, next: any) {
  const ua = req.headers['user-agent'] || '';
  const url = req.path;

  // Only intercept bots
  if (!isBot(ua)) return next();

  // Skip static files and API
  if (IGNORE_EXTENSIONS.some(ext => url.endsWith(ext))) return next();
  if (url.startsWith('/api/')) return next();

  const fullUrl = `https://oarcdigital.com${url}`;
  const prerenderUrl = `https://service.prerender.io/${fullUrl}`;

  try {
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'User-Agent': ua,
      },
    });

    if (response.ok) {
      const html = await response.text();
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('X-Prerendered', 'true');
      return res.status(200).send(html);
    }
  } catch (e) {
    // Prerender failed — fall through to normal response
  }

  return next();
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Prerender middleware — intercepts bots before static file serving
  app.use(prerenderMiddleware);

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
