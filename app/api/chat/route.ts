import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import {
  ARC_SYSTEM_PROMPT,
  getConversationPhase,
  getPhaseGuidance,
  BUTTON_OPENERS,
  detectObjection,
  OBJECTION_CONTEXTS,
  FORMAT_REMINDER,
} from "@/lib/arcSystemPrompt";

export const runtime = "nodejs";

function getGrokClient(): OpenAI | null {
  if (!process.env.XAI_API_KEY) {
    return null;
  }
  return new OpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: "https://api.x.ai/v1",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history, buttonId } = body ?? {};

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const grok = getGrokClient();
    if (!grok) {
      return NextResponse.json({
        response:
          "I'm currently in demo mode. For full AI capabilities, the team will configure this soon. In the meantime, feel free to email hello@oarcdigital.com!",
        type: "demo",
      });
    }

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

    const completion = await grok.chat.completions.create({
      model: "grok-4-1-fast-non-reasoning",
      messages: [
        { role: "system", content: fullSystemPrompt },
        ...((history || []).slice(-10)),
        { role: "user", content: message },
        {
          role: "system",
          content:
            "CRITICAL: Your response MUST use bullet points. No paragraphs. Format: 1 short intro sentence → bullet points → 1 short closing sentence or question.",
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    return NextResponse.json({ response, type: "ai", phase });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({
      response:
        "Something went wrong. Try again, or email hello@oarcdigital.com",
      type: "error",
    });
  }
}
