import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
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

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

function getGrokClient(): OpenAI | null {
  if (!process.env.XAI_API_KEY) return null;
  return new OpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: "https://api.x.ai/v1",
  });
}

function hasCloudflareAI(): boolean {
  return !!(process.env.CLOUDFLARE_ACCOUNT_ID && process.env.CLOUDFLARE_AI_TOKEN);
}

async function callCloudflareAI(messages: ChatMessage[]): Promise<string | null> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID!;
  const token = process.env.CLOUDFLARE_AI_TOKEN!;
  const model = process.env.CLOUDFLARE_AI_MODEL || "@cf/meta/llama-3.1-8b-instruct";
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${model}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages, max_tokens: 500, temperature: 0.7 }),
  });
  if (!res.ok) {
    console.error("Cloudflare AI returned non-2xx:", res.status);
    return null;
  }
  const data = await res.json().catch(() => null);
  return data?.result?.response ?? null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history, buttonId } = body ?? {};

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Instant response fast path — skips AI call entirely for matched triggers.
    const instant = checkInstantResponse(message);
    if (instant) {
      return NextResponse.json({ response: instant, type: "instant" });
    }

    // Build conversation context (shared by both providers).
    const messageCount = (history || []).length;
    const phase = getConversationPhase(messageCount);
    const phaseGuidance = getPhaseGuidance(phase, messageCount);

    let buttonContext = "";
    if (buttonId && BUTTON_OPENERS[buttonId]) {
      buttonContext = `\n\n[USER CLICKED BUTTON: "${buttonId}". Use this exact opener as your first response:]\n${BUTTON_OPENERS[buttonId]}`;
    }

    let objectionContext = "";
    const detectedObjection = detectObjection(message);
    if (detectedObjection && OBJECTION_CONTEXTS[detectedObjection]) {
      objectionContext = `\n\n${OBJECTION_CONTEXTS[detectedObjection]}`;
    }

    const fullSystemPrompt = `${ARC_SYSTEM_PROMPT}\n\n${phaseGuidance}${buttonContext}${objectionContext}${FORMAT_REMINDER}`;

    const messages: ChatMessage[] = [
      { role: "system", content: fullSystemPrompt },
      ...((history || []).slice(-10) as ChatMessage[]),
      { role: "user", content: message },
      {
        role: "system",
        content:
          "CRITICAL: Your response MUST use bullet points. No paragraphs. Format: 1 short intro sentence → bullet points → 1 short closing sentence or question.",
      },
    ];

    // Prefer Cloudflare Workers AI when configured; fall back to Grok (xAI).
    if (hasCloudflareAI()) {
      const cfResponse = await callCloudflareAI(messages);
      if (cfResponse) {
        return NextResponse.json({ response: cfResponse, type: "ai", phase });
      }
      // fall through to Grok on Cloudflare failure
    }

    const grok = getGrokClient();
    if (!grok) {
      return NextResponse.json({
        response:
          `I'm currently in demo mode. For full AI capabilities, the team will configure this soon. In the meantime, feel free to email ${NAP.email}!`,
        type: "demo",
      });
    }

    const completion = await grok.chat.completions.create({
      model: "grok-4-1-fast-non-reasoning",
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    return NextResponse.json({ response, type: "ai", phase });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({
      response:
        `Something went wrong. Try again, or email ${NAP.email}`,
      type: "error",
    });
  }
}
