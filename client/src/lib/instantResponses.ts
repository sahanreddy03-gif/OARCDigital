interface InstantResponseItem {
  triggers: string[];
  response: string;
  showPricingCTA?: boolean;
}

export interface InstantResponseResult {
  response: string;
  showPricingCTA: boolean;
}

const responses: InstantResponseItem[] = [
  {
    triggers: ['hi', 'hello', 'hey', 'yo', 'hola', 'good morning', 'good afternoon'],
    response: `Hey! I'm ARC 👋

I can:
• Roast your website (for free)
• Answer questions about OARC
• Help you find the right package

What sounds useful?`
  },
  {
    triggers: ['price', 'cost', 'pricing', 'how much', 'rates', 'budget', 'expensive', 'afford'],
    response: `We customize packages based on your needs. Here's the structure:

- **3 tiers** — Starter, Growth, Scale
- **Each includes** — Core deliverables + video production + bonuses
- **Bonuses** — Strategy sessions, competitor analysis, priority support

Exact pricing depends on your goals. Fill out the quick form (30 seconds) to see packages tailored to you.

What problem are you trying to solve?`,
    showPricingCTA: true
  },
  {
    triggers: ['services', 'what do you do', 'what do you offer', 'help with'],
    response: `We do three things:

**1. Creative & Marketing**
Social media, content, ads, branding — getting you noticed.

**2. AI Automation**
Chatbots, voice agents, lead automation — working while you sleep.

**3. Custom Software**
CRMs, booking systems, tools — making operations smooth.

Which one's relevant to you right now?`
  },
  {
    triggers: ['location', 'where', 'based', 'malta', 'office'],
    response: `We're based in Malta 🇲🇹 but work with clients across Europe.

Everything's remote — video calls, async updates, dashboards.

Where are you based?`
  },
  {
    triggers: ['bye', 'goodbye', 'thanks', 'thank you', 'cheers', 'that\'s all'],
    response: `Anytime! 

Before you go — try our free diagnostic: **oarcdigital.com/diagnostic**

Finds what's costing you money in 90 seconds.

Come back whenever. I'll be here 👋`
  },
  {
    triggers: ['roast', 'review', 'check my', 'look at my', 'website feedback'],
    response: `I'd love to roast your website 🔥

Drop the URL and I'll give you:
• What's working
• What's broken
• 3-5 specific fixes
• Headline alternatives

No sugarcoating. Ready?`
  }
];

export function checkInstantResponse(message: string): InstantResponseResult | null {
  const lower = message.toLowerCase().trim();
  
  if (message.length > 100) return null;
  
  for (const item of responses) {
    for (const trigger of item.triggers) {
      const wordBoundaryRegex = new RegExp(`\\b${trigger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (wordBoundaryRegex.test(lower)) {
        return {
          response: item.response,
          showPricingCTA: item.showPricingCTA || false
        };
      }
    }
  }
  
  return null;
}

export const GREETING_MESSAGES = [
  `Hey. I'm ARC.

I find what's killing your revenue and tell you exactly how to fix it.

• **Got a problem?** Tell me. I'll diagnose it in 60 seconds.
• **Not sure where to start?** Pick one of the buttons below.
• **Want to talk to a human?** Hit the call button.

What's the one thing that's not working right now?`,

  `ARC here. OARC Digital's diagnostic engine.

One question to start:

**What's your biggest business problem right now?**

• Not enough customers?
• Social media not converting?
• No platform, no automation, just chaos?

Tell me the problem. I'll tell you if we can fix it — and how.`,

  `Hey — I'm ARC.

I'm not going to ask how your day is going.

**Give me your biggest problem and I'll tell you exactly what we'd do about it.**

No sales pitch. No fluff. Just the answer.`
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[Math.floor(Math.random() * GREETING_MESSAGES.length)];
}