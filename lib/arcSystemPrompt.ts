import fs from "fs";
import path from "path";
import { NAP } from "@/lib/seo/nap";

export * from "@/lib/arc/arcPromptShared";

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
export function buildSystemPrompt(
  phaseHint: string,
  linkContext: string,
  extras: string,
  userContextBlock: string,
  contextMode: "default" | "h360" = "default",
): string {
  const h360Block =
    contextMode === "h360"
      ? `\n## ACTIVE MODE: H360 RESTAURANT\n\nThe user is on oarcdigital.com/h360. Follow the H360 MODE section in your brain. Diagnose first (Maps, reviews, Wolt margin, repeat guests). Link to specific /h360 product pages only when clearly relevant — never in the opening reply unless they asked for a page.\n`
      : "";

  return `${BRAIN}

---

## SESSION CONTEXT

Contact details for this conversation:
Phone: ${NAP.phoneDisplay}
Email: ${NAP.email}
Website: https://oarcdigital.com

${phaseHint}

${h360Block}

${linkContext}

${extras}

${userContextBlock}

---

## OUTPUT FORMAT

BREVITY IS THE RULE. Default to 2–4 sentences. Only go longer if the question genuinely demands it. Never pad. Never repeat a point. A short sharp answer beats a long safe one every time.

Plain conversational sentences only. No bullet points. No numbered lists. No markdown bold. No headers.
Links in markdown format [text](url) embedded naturally in a sentence — max two per message.
End with a question only when it genuinely moves the conversation forward.
At the very end of your reply, after a blank line, write exactly 3 natural follow-up questions starting with "FOLLOWUP: " on separate lines.`;
}
