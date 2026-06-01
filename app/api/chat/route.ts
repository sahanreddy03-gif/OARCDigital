import { NextRequest } from "next/server";
import { NAP } from "@/lib/seo/nap";
import {
  buildSystemPrompt,
  buildLinkContext,
  getConversationPhase,
  getPhaseGuidance,
  BUTTON_OPENERS,
  detectObjection,
} from "@/lib/arcSystemPrompt";

export const runtime = "nodejs";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

function sseStream(chunks: Array<{ event: string; data: object }>) {
  return new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      for (const { event, data } of chunks) {
        controller.enqueue(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      }
      controller.close();
    },
  });
}

const SSE_HEADERS = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-cache",
  Connection: "keep-alive",
  "X-Accel-Buffering": "no",
} as const;

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

    if (!process.env.DEEPSEEK_API_KEY) {
      const fallback = `I'm running without an AI key right now. Email ${NAP.email} or call ${NAP.phoneDisplay} and the team will help directly.`;
      return new Response(sseStream([
        { event: "content", data: { content: fallback } },
        { event: "done",    data: {} },
      ]), { headers: SSE_HEADERS });
    }

    const safeHistory: ChatMessage[] = Array.isArray(history) ? history.slice(-24) : [];
    const phase       = getConversationPhase(safeHistory.length);
    const phaseHint   = getPhaseGuidance(phase);
    const linkContext = buildLinkContext(message, safeHistory);

    // Extra context: button opener or objection hint
    let extras = "";
    if (buttonId && BUTTON_OPENERS[buttonId as keyof typeof BUTTON_OPENERS]) {
      extras = `User clicked a quick-action button: ${BUTTON_OPENERS[buttonId as keyof typeof BUTTON_OPENERS]}`;
    }
    const objection = detectObjection(message);
    if (objection) extras += (extras ? "\n" : "") + `Detected objection signal: ${objection}`;

    const systemPrompt = buildSystemPrompt(phaseHint, linkContext, extras);

    const messages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...safeHistory,
      { role: "user", content: message },
    ];

    const deepseekRes = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages,
        temperature: 0.8,
        max_tokens: 600,
        stream: true,
      }),
    });

    if (!deepseekRes.ok) {
      const err = await deepseekRes.text().catch(() => "");
      console.error("DeepSeek error:", deepseekRes.status, err);
      return new Response(sseStream([
        { event: "content", data: { content: `Something went wrong. Email ${NAP.email} or call ${NAP.phoneDisplay}.` } },
        { event: "done",    data: {} },
      ]), { headers: SSE_HEADERS });
    }

    // Stream DeepSeek response → client, splitting off FOLLOWUP lines
    const outputStream = new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder();
        const send = (event: string, data: object) =>
          controller.enqueue(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));

        try {
          const reader = deepseekRes.body!.getReader();
          const dec    = new TextDecoder();
          let buf = "", fullContent = "", followupBuffer = "", inFollowup = false;

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
                const token: string = JSON.parse(raw).choices?.[0]?.delta?.content ?? "";
                if (!token) continue;
                fullContent += token;

                if (!inFollowup && fullContent.includes("FOLLOWUP:")) {
                  inFollowup = true;
                  const splitIdx   = fullContent.indexOf("FOLLOWUP:");
                  const visible    = fullContent.slice(0, splitIdx).trimEnd();
                  const alreadySent = fullContent.slice(0, splitIdx - token.length);
                  const newChunk   = visible.slice(alreadySent.length);
                  if (newChunk) send("content", { content: newChunk });
                  followupBuffer = fullContent.slice(splitIdx);
                } else if (inFollowup) {
                  followupBuffer += token;
                } else {
                  send("content", { content: token });
                }
              } catch { /* malformed chunk */ }
            }
          }

          // Extract follow-ups
          const followups: string[] = [];
          const re = /FOLLOWUP:\s*(.+)/g;
          let m: RegExpExecArray | null;
          while ((m = re.exec(followupBuffer || fullContent)) !== null) {
            followups.push(m[1].trim());
            if (followups.length >= 3) break;
          }
          if (followups.length) send("followups", { followups });
          send("done", { phase });

        } catch (err) {
          console.error("Stream error:", err);
          send("content", { content: `Connection dropped. Email ${NAP.email} or call ${NAP.phoneDisplay}.` });
          send("done", {});
        } finally {
          controller.close();
        }
      },
    });

    return new Response(outputStream, { headers: SSE_HEADERS });

  } catch (err) {
    console.error("Chat route error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
