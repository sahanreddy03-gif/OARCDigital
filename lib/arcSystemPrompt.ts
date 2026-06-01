import fs from "fs";
import path from "path";
import { NAP } from "@/lib/seo/nap";

// ─── Load the brain once at module level ────────────────────────────────────
// brain.md is the single source of truth for everything ARC knows and how it
// thinks. Edit that file to update ARC's knowledge — never hard-code here.
function loadBrain(): string {
  try {
    return fs.readFileSync(path.join(process.cwd(), "lib/arc/brain.md"), "utf-8");
  } catch {
    return ""; // graceful fallback if file is missing in an edge case
  }
}

const BRAIN = loadBrain();

// ─── Full system prompt ──────────────────────────────────────────────────────
// This is intentionally short. The intelligence lives in brain.md.
// We are giving ARC a thinking framework, not a script.
export function buildSystemPrompt(phaseHint: string, linkContext: string, extras: string): string {
  return `${BRAIN}

---

## SESSION CONTEXT

Contact details for this conversation:
Phone: ${NAP.phoneDisplay}
Email: ${NAP.email}
Website: https://oarcdigital.com

${phaseHint}

${linkContext}

${extras}

---

## OUTPUT FORMAT

BREVITY IS THE RULE. Default to 2–4 sentences. Only go longer if the question genuinely demands it. Never pad. Never repeat a point. A short sharp answer beats a long safe one every time.

Plain conversational sentences only. No bullet points. No numbered lists. No markdown bold. No headers.
Links in markdown format [text](url) embedded naturally in a sentence — max two per message.
End with a question only when it genuinely moves the conversation forward.
At the very end of your reply, after a blank line, write exactly 3 natural follow-up questions starting with "FOLLOWUP: " on separate lines.`;
}

// ─── Conversation depth hints ────────────────────────────────────────────────
export function getConversationPhase(n: number): "early" | "mid" | "deep" {
  if (n <= 4) return "early";
  if (n <= 12) return "mid";
  return "deep";
}

export function getPhaseGuidance(phase: string): string {
  if (phase === "early") return "This is an early message — focus on understanding what they actually need.";
  if (phase === "mid")   return "You have context now — go deeper and more specific.";
  return "Long conversation — keep being useful. Only suggest human contact if it naturally fits.";
}

// ─── Link context builder ─────────────────────────────────────────────────────
const SERVICE_LINKS: Array<{ keywords: string[]; path: string }> = [
  { keywords: ["social media", "instagram", "tiktok", "facebook content"], path: "/services/social-media-creative-management" },
  { keywords: ["branding", "logo", "brand identity"], path: "/services/branding" },
  { keywords: ["video production", "video", "reel", "film"], path: "/services/video-production" },
  { keywords: ["web design", "website design", "website"], path: "/services/web-design" },
  { keywords: ["seo", "google ranking", "organic search", "search engine"], path: "/services/seo-services" },
  { keywords: ["paid ads", "ppc", "google ads", "facebook ads", "paid advertising"], path: "/services/paid-advertising" },
  { keywords: ["content marketing", "blog", "copywriting"], path: "/services/content-marketing" },
  { keywords: ["email marketing", "newsletter", "email campaign"], path: "/services/email-marketing" },
  { keywords: ["ai sdr", "sales agent", "ai sales", "outbound ai"], path: "/services/ai-sdr-agent" },
  { keywords: ["ai support", "customer support", "support agent"], path: "/services/ai-support-specialist" },
  { keywords: ["ai consulting", "ai strategy"], path: "/services/ai-consulting" },
  { keywords: ["hire ai", "ai employee", "ai staff"], path: "/services/hire-ai-employees" },
  { keywords: ["ai appointment", "booking ai", "appointment bot"], path: "/services/ai-appointment-booker" },
  { keywords: ["funnel automation", "sales funnel"], path: "/services/funnel-automation" },
  { keywords: ["lead generation", "lead gen", "more leads"], path: "/services/lead-generation" },
  { keywords: ["mvp", "startup", "minimum viable product"], path: "/services/mvp-development" },
  { keywords: ["revenue automation", "revenue ops"], path: "/services/revenue-automation" },
  { keywords: ["marketing automation", "crm"], path: "/services/marketing-automation-suite" },
  { keywords: ["growth strategy", "growth plan", "scaling"], path: "/services/growth-strategy" },
  { keywords: ["ecommerce", "shopify", "online store"], path: "/services/ecommerce-development" },
  { keywords: ["influencer", "ugc", "creator"], path: "/services/influencer-marketing" },
  { keywords: ["mobile app", "ios", "android"], path: "/services/mobile-apps-development" },
  { keywords: ["saas", "custom software", "software development"], path: "/services/saas-development" },
  { keywords: ["analytics", "tracking", "data", "performance"], path: "/services/performance-analytics" },
  { keywords: ["motion design", "animation", "motion graphics"], path: "/services/motion-design" },
];

const PILLAR_LINKS = [
  { keywords: ["creative", "marketing", "social", "brand", "content", "video", "seo", "email"], path: "/creative" },
  { keywords: ["ai", "automation", "bot", "agent", "chatbot", "automate", "artificial intelligence"], path: "/ai-agents" },
  { keywords: ["revenue", "growth", "funnel", "crm", "strategy", "scale", "sales"], path: "/solutions" },
];

export function buildLinkContext(message: string, history: Array<{ content: string }>): string {
  const text = (message + " " + history.map(m => m.content).join(" ")).toLowerCase();

  for (const entry of SERVICE_LINKS) {
    if (entry.keywords.some(kw => text.includes(kw))) {
      return `Most relevant OARC page: https://oarcdigital.com${entry.path}`;
    }
  }
  for (const pillar of PILLAR_LINKS) {
    if (pillar.keywords.some(kw => text.includes(kw))) {
      return `Relevant OARC section: https://oarcdigital.com${pillar.path}`;
    }
  }
  return `Main OARC pages: https://oarcdigital.com/creative | https://oarcdigital.com/ai-agents | https://oarcdigital.com/solutions`;
}

// ─── Button openers ───────────────────────────────────────────────────────────
export const BUTTON_OPENERS: Record<string, string> = {
  "more-customers":     `They clicked "I Need More Customers". Reverse-engineer what they actually mean and ask one sharp question to understand their situation.`,
  "social-not-working": `They clicked "Social Media Isn't Working". Ask what "not working" means to them — no engagement, engagement but no leads, or something else.`,
  "competitors":        `They clicked "Competitors Are Beating Me". Ask how they are being beaten — more visibility, better content, or winning clients they should have.`,
  "roast":              `They want an honest assessment. Ask them to drop a URL — website, Instagram, LinkedIn. Tell them you will give a straight read with no sugarcoating.`,
};

// ─── Objection detection ──────────────────────────────────────────────────────
export function detectObjection(message: string): string {
  const m = message.toLowerCase();
  if (/too expensive|can't afford|too much|costly/.test(m)) return "Price concern — reframe to ROI, not discount.";
  if (/think about|need time|not sure/.test(m))              return "Hesitation — ask what specifically they need to think through.";
  if (/bad time|busy|later|not now/.test(m))                 return "Timing objection — ask what changes between now and later.";
  if (/tried|didn't work|burned|failed/.test(m))             return "Past bad experience — ask what they tried and why it failed.";
  if (/myself|diy|in-house|internal/.test(m))                return "DIY preference — respect it, give genuine advice, stay available.";
  return "";
}

// ─── Instant responses (greeting / goodbye only) ─────────────────────────────
// Everything else goes to DeepSeek for a real answer.
export const INSTANT_GREETINGS = [
  `Hey — I'm ARC, OARC Digital's AI. Ask me anything: marketing, AI, growing a business, specific services — whatever's on your mind.`,
  `ARC here. What do you want to know?`,
  `Hey. I'm ARC — ask me anything about marketing, AI, or growing your business.`,
];

export function getRandomGreeting(): string {
  return INSTANT_GREETINGS[Math.floor(Math.random() * INSTANT_GREETINGS.length)];
}
