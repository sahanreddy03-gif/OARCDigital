// Vercel Edge Middleware for Prerender.io
// Intercepts bot traffic and serves pre-rendered HTML

const PRERENDER_TOKEN = 'Pxkbsw0Uk9YVB3Wz6beq';

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'duckduckbot', 'slurp',
  'baiduspider', 'facebookexternalhit', 'twitterbot', 'rogerbot',
  'linkedinbot', 'embedly', 'showyoubot', 'outbrain', 'pinterest',
  'slackbot', 'redditbot', 'applebot', 'whatsapp', 'discordbot',
  'telegrambot', 'google page speed', 'chrome-lighthouse',
];

const IGNORE_EXTENSIONS = [
  '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif',
  '.pdf', '.ico', '.zip', '.mp4', '.svg', '.webp', '.woff', '.woff2', '.ttf',
];

export default async function handler(request: Request): Promise<Response> {
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const path = url.pathname;

  const isBot = BOT_AGENTS.some(bot => ua.toLowerCase().includes(bot));
  const isStaticFile = IGNORE_EXTENSIONS.some(ext => path.endsWith(ext));
  const isApi = path.startsWith('/api/');

  if (!isBot || isStaticFile || isApi) {
    return fetch(request);
  }

  const prerenderUrl = `https://service.prerender.io/${url.href}`;

  try {
    const prerendered = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'User-Agent': ua,
      },
    });

    if (prerendered.ok) {
      const html = await prerendered.text();
      return new Response(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Prerendered': 'true',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  } catch (e) {
    // Prerender unavailable — fall through to normal
  }

  return fetch(request);
}

export const config = {
  runtime: 'edge',
  matcher: ['/((?!_vercel|_next).*)'],
};
