import { NAP } from "@/lib/seo/nap";

export interface InstantResponseResult {
  response: string;
  showPricingCTA: boolean;
}

const PHONE = NAP.phoneDisplay;
const EMAIL = NAP.email;

// These are LOCAL fast-path responses for very common openers — everything
// else goes straight to DeepSeek so it gets a real, intelligent answer.
const responses: Array<{
  triggers: string[];
  response: string;
  showPricingCTA?: boolean;
}> = [
  {
    triggers: ['hi', 'hello', 'hey', 'yo', 'hola', 'good morning', 'good afternoon', 'good evening'],
    response: `Hey — I'm ARC, OARC Digital's AI. Ask me anything about marketing, AI, growing a business, or what OARC can do for you. What's on your mind?`,
  },
  {
    triggers: ['bye', 'goodbye', 'thanks', 'thank you', 'cheers'],
    response: `Anytime. Come back whenever — I'm always here. Good luck with everything.`,
  },
];

export function checkInstantResponse(message: string): InstantResponseResult | null {
  const lower = message.toLowerCase().trim();

  for (const item of responses) {
    for (const trigger of item.triggers) {
      const escaped = trigger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(^|\\s|\\b)${escaped}(\\s|\\b|$)`, 'i');
      if (regex.test(lower)) {
        return {
          response: item.response,
          showPricingCTA: item.showPricingCTA || false,
        };
      }
    }
  }

  // No match — let DeepSeek handle it
  return null;
}

export const GREETING_MESSAGES = [
  `Hey — I'm ARC, OARC Digital's AI. I can answer questions about marketing, AI agents, business growth, or anything else. What are you trying to figure out?`,

  `ARC here — OARC Digital's AI. Ask me anything: marketing strategy, AI automation, how to get more customers, what we do, anything. What's on your mind?`,

  `Hey. I'm ARC. Ask me anything about growing your business, marketing, AI, or what OARC does. What do you want to know?`,
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[Math.floor(Math.random() * GREETING_MESSAGES.length)];
}
