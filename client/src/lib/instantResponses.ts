interface InstantResponseItem {
  triggers: string[];
  response: string;
}

const responses: InstantResponseItem[] = [
  {
    triggers: ['hi', 'hello', 'hey', 'yo', 'hola', 'good morning', 'good afternoon'],
    response: `Hey! I'm ARC 👋

I can:
• 🔥 Roast your website (for free)
• 📅 Create a content calendar
• 🧮 Calculate your ROI
• 💬 Answer questions about OARC

What sounds useful?`
  },
  {
    triggers: ['price', 'cost', 'pricing', 'how much', 'rates', 'budget', 'expensive', 'afford'],
    response: `Straight answer on pricing:

📱 **Social Media & Marketing**: €2,500-5,000/month
🤖 **AI Automation**: €3,000-8,000 setup + monthly
💻 **Custom Development**: €5,000-25,000+

But real talk — the better question is: what's the problem costing you?

What are you trying to solve?`
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

export function checkInstantResponse(message: string): string | null {
  const lower = message.toLowerCase().trim();
  
  if (message.length > 100) return null;
  
  for (const item of responses) {
    for (const trigger of item.triggers) {
      if (lower.includes(trigger) || lower === trigger) {
        return item.response;
      }
    }
  }
  
  return null;
}

export const GREETING_MESSAGES = [
  `Hey! I'm ARC 👋

I can:
• 🔥 Roast your website (for free)
• 📅 Create a content calendar
• 🧮 Calculate your ROI
• 💬 Answer questions about OARC

What sounds useful?`
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[Math.floor(Math.random() * GREETING_MESSAGES.length)];
}