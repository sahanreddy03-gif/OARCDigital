import { NextRequest } from "next/server";
import { NAP } from "@/lib/seo/nap";
import {
  ARC_SYSTEM_PROMPT,
  getConversationPhase,
  getPhaseGuidance,
  BUTTON_OPENERS,
  detectObjection,
  OBJECTION_CONTEXTS,
  FORMAT_REMINDER,
  checkInstantResponse,
} from "@/lib/arcSystemPrompt";

export const runtime = "nodejs";

const BASE = "https://oarcdigital.com";

// Specific service page lookup — only used when user asks about a very specific service
const SERVICE_LINK_MAP: Array<{ keywords: string[]; path: string }> = [
  { keywords: ["social media", "instagram", "tiktok", "facebook content", "content creation"], path: "/services/social-media-creative-management" },
  { keywords: ["branding", "logo", "brand identity", "brand design"], path: "/services/branding" },
  { keywords: ["video production", "video", "film", "reel"], path: "/services/video-production" },
  { keywords: ["web design", "website design", "web development", "website"], path: "/services/web-design" },
  { keywords: ["seo", "google ranking", "search engine optimisation", "organic search"], path: "/services/seo-services" },
  { keywords: ["paid ads", "ppc", "google ads", "facebook ads", "paid advertising"], path: "/services/paid-advertising" },
  { keywords: ["content marketing", "blog", "copywriting", "article"], path: "/services/content-marketing" },
  { keywords: ["email marketing", "newsletter", "email campaign"], path: "/services/email-marketing" },
  { keywords: ["ai sdr", "sales agent", "ai sales rep", "outbound ai"], path: "/services/ai-sdr-agent" },
  { keywords: ["ai support", "customer support", "support agent", "chatbot"], path: "/services/ai-support-specialist" },
  { keywords: ["ai consulting", "ai strategy", "ai audit"], path: "/services/ai-consulting" },
  { keywords: ["hire ai", "ai employee", "ai staff", "ai team"], path: "/services/hire-ai-employees" },
  { keywords: ["ai appointment", "booking ai", "appointment bot"], path: "/services/ai-appointment-booker" },
  { keywords: ["funnel", "funnel automation", "sales funnel"], path: "/services/funnel-automation" },
  { keywords: ["lead generation", "lead gen", "more leads"], path: "/services/lead-generation" },
  { keywords: ["mvp", "startup", "product build", "minimum viable"], path: "/services/mvp-development" },
  { keywords: ["revenue automation", "revenue ops", "sales automation"], path: "/services/revenue-automation" },
  { keywords: ["marketing automation", "crm", "automation suite"], path: "/services/marketing-automation-suite" },
  { keywords: ["growth strategy", "growth plan", "scale", "scaling"], path: "/services/growth-strategy" },
  { keywords: ["ecommerce", "shopify", "online store", "e-commerce"], path: "/services/ecommerce-development" },
  { keywords: ["influencer", "ugc", "creator"], path: "/services/influencer-marketing" },
  { keywords: ["mobile app", "ios app", "android app", "mobile development"], path: "/services/mobile-apps-development" },
  { keywords: ["saas", "software development", "custom software"], path: "/services/saas-development" },
  { keywords: ["analytics", "data", "tracking", "performance"], path: "/services/performance-analytics" },
  { keywords: ["motion design", "animation", "motion graphics"], path: "/services/motion-design" },
];

// Pillar fallbacks — used when no specific service matches
const PILLAR_LINKS = [
  { keywords: ["creative", "marketing", "social", "brand", "content", "video", "seo", "ads", "email"], path: "/creative" },
  { keywords: ["ai", "artificial intelligence", "automation", "bot", "agent", "chatbot", "automate"], path: "/ai-agents" },
  { keywords: ["revenue", "growth", "funnel", "crm", "strategy", "scale", "leads", "sales"], path: "/solutions" },
];

function getRelevantLinks(message: string, history: Array<{ content: string }>): string {
  const fullText = (message + " " + history.map((m) => m.content).join(" ")).toLowerCase();

  // Try specific service match first
  for (const entry of SERVICE_LINK_MAP) {
    if (entry.keywords.some((kw) => fullText.includes(kw))) {
      return `Most relevant OARC page for this conversation:\n${BASE + entry.path}\n\nDefault pillar links if you need others:\n${BASE}/creative\n${BASE}/ai-agents\n${BASE}/solutions`;
    }
  }

  // Fall back to pillar match
  for (const pillar of PILLAR_LINKS) {
    if (pillar.keywords.some((kw) => fullText.includes(kw))) {
      return `Relevant OARC pillar page for this conversation:\n${BASE + pillar.path}\n\nOther pillar links: ${BASE}/creative | ${BASE}/ai-agents | ${BASE}/solutions`;
    }
  }

  // Default — use the three main pillars
  return `When linking to OARC naturally, use these main pages:\n${BASE}/creative\n${BASE}/ai-agents\n${BASE}/solutions\n${BASE}`;
}

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history, buttonId } = body ?? {};

    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Invalid message" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fast-path: instant response from local library — no AI call
    const instant = checkInstantResponse(message);
    if (instant) {
      const stream = new ReadableStream({
        start(controller) {
          const enc = new TextEncoder();
          controller.enqueue(enc.encode(`event: content\ndata: ${JSON.stringify({ content: instant })}\n\n`));
          controller.enqueue(enc.encode(`event: done\ndata: {}\n\n`));
          controller.close();
        },
      });
      return new Response(stream, {
        headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
      });
    }

    // Build system prompt
    const safeHistory: ChatMessage[] = Array.isArray(history) ? history.slice(-20) : [];
    const messageCount = safeHistory.length;
    const phase = getConversationPhase(messageCount);
    const phaseGuidance = getPhaseGuidance(phase, messageCount);
    const linkContext = getRelevantLinks(message, safeHistory);

    let buttonContext = "";
    if (buttonId && BUTTON_OPENERS[buttonId as keyof typeof BUTTON_OPENERS]) {
      buttonContext = `\n\n[USER CLICKED BUTTON: "${buttonId}". Respond with this opener:]\n${BUTTON_OPENERS[buttonId as keyof typeof BUTTON_OPENERS]}`;
    }

    let objectionContext = "";
    const objection = detectObjection(message);
    if (objection && OBJECTION_CONTEXTS[objection as keyof typeof OBJECTION_CONTEXTS]) {
      objectionContext = `\n\n${OBJECTION_CONTEXTS[objection as keyof typeof OBJECTION_CONTEXTS]}`;
    }

    const followupInstruction = `\n\nAt the very end of your reply, after a blank line, write exactly 3 natural follow-up questions the user might want to ask next. Each on its own line, starting with "FOLLOWUP: ". Keep them genuinely useful, not salesy.`;

    const fullSystemPrompt = `${ARC_SYSTEM_PROMPT}\n\n${phaseGuidance}${buttonContext}${objectionContext}\n\n${linkContext}${FORMAT_REMINDER}${followupInstruction}`;

    const messages: ChatMessage[] = [
      { role: "system", content: fullSystemPrompt },
      ...safeHistory,
      { role: "user", content: message },
    ];

    // Check DeepSeek key
    if (!process.env.DEEPSEEK_API_KEY) {
      const fallback = `I'm running without an AI key right now — so I can't give you a proper answer. Email ${NAP.email} or call ${NAP.phoneDisplay} and the team will help you directly.`;
      const stream = new ReadableStream({
        start(controller) {
          const enc = new TextEncoder();
          controller.enqueue(enc.encode(`event: content\ndata: ${JSON.stringify({ content: fallback })}\n\n`));
          controller.enqueue(enc.encode(`event: done\ndata: {}\n\n`));
          controller.close();
        },
      });
      return new Response(stream, {
        headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
      });
    }

    // DeepSeek SSE streaming
    const deepseekRes = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages,
        temperature: 0.75,
        max_tokens: 900,
        stream: true,
      }),
    });

    if (!deepseekRes.ok) {
      const err = await deepseekRes.text().catch(() => "");
      console.error("DeepSeek error:", deepseekRes.status, err);
      const fallback = `Something went wrong on my end. Email ${NAP.email} or call ${NAP.phoneDisplay} — Red responds fast.`;
      const stream = new ReadableStream({
        start(controller) {
          const enc = new TextEncoder();
          controller.enqueue(enc.encode(`event: content\ndata: ${JSON.stringify({ content: fallback })}\n\n`));
          controller.enqueue(enc.encode(`event: done\ndata: {}\n\n`));
          controller.close();
        },
      });
      return new Response(stream, {
        headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
      });
    }

    // Pipe DeepSeek SSE → client SSE
    const outputStream = new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder();

        const sendEvent = (event: string, data: object) => {
          controller.enqueue(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
        };

        try {
          const reader = deepseekRes.body!.getReader();
          const dec = new TextDecoder();
          let buf = "";
          let fullContent = "";
          let inFollowup = false;
          let followupBuffer = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buf += dec.decode(value, { stream: true });
            const lines = buf.split("\n");
            buf = lines.pop() ?? "";

            for (const line of lines) {
              if (!line.startsWith("data: ")) continue;
              const raw = line.slice(6).trim();
              if (raw === "[DONE]") break;

              try {
                const parsed = JSON.parse(raw);
                const token: string = parsed.choices?.[0]?.delta?.content ?? "";
                if (!token) continue;

                fullContent += token;

                if (!inFollowup && fullContent.includes("FOLLOWUP:")) {
                  inFollowup = true;
                  const splitIdx = fullContent.indexOf("FOLLOWUP:");
                  const visiblePart = fullContent.slice(0, splitIdx).trimEnd();
                  const alreadySent = fullContent.slice(0, splitIdx - token.length);
                  const newVisible = visiblePart.slice(alreadySent.length);
                  if (newVisible) sendEvent("content", { content: newVisible });
                  followupBuffer = fullContent.slice(splitIdx);
                } else if (inFollowup) {
                  followupBuffer += token;
                } else {
                  sendEvent("content", { content: token });
                }
              } catch {
                // malformed JSON chunk — skip
              }
            }
          }

          // Extract follow-up questions
          const followups: string[] = [];
          const regex = /FOLLOWUP:\s*(.+)/g;
          let match: RegExpExecArray | null;
          const searchIn = followupBuffer || fullContent;
          while ((match = regex.exec(searchIn)) !== null) {
            followups.push(match[1].trim());
            if (followups.length >= 3) break;
          }

          if (followups.length > 0) sendEvent("followups", { followups });
          sendEvent("done", { phase });

        } catch (err) {
          console.error("Stream error:", err);
          sendEvent("content", { content: `Connection dropped. Email ${NAP.email} or call ${NAP.phoneDisplay}.` });
          sendEvent("done", {});
        } finally {
          controller.close();
        }
      },
    });

    return new Response(outputStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });

  } catch (err) {
    console.error("Chat route error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
