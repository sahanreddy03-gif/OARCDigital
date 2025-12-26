interface InstantResponse {
  patterns: RegExp[];
  response: string;
}

const instantResponses: InstantResponse[] = [
  {
    patterns: [/^(hi|hello|hey|yo|sup|hiya)[\s!?.]*$/i],
    response: "Hey! 👋 I'm ARC — I help people figure out if OARC is right for them. What brings you here today?"
  },
  {
    patterns: [/what.*your.*name|who.*are.*you/i],
    response: "I'm ARC — OARC Digital's AI assistant. I can answer questions about our services, roast your website, or help you figure out if we're a good fit. What would you like to know?"
  },
  {
    patterns: [/where.*located|where.*based|where.*you|location|office/i],
    response: "We're based in Malta 🇲🇹 (EU), with teams in India and Dubai for round-the-clock coverage. Our Malta HQ handles strategy and client relationships, while our other offices power delivery and support."
  },
  {
    patterns: [/pricing|cost|how much|price|rates|quote/i],
    response: "Pricing depends on scope, but here's the ballpark: AI Employees start around €2,500/month, social media €1,500-5,000/month, web design €3,000-15,000, SEO €1,500-4,000/month. Want me to dig into a specific service?"
  },
  {
    patterns: [/contact|email|phone|call|reach|get in touch/i],
    response: "You can reach the team at hello@oarcdigital.com or call +356 7945 2344 (Malta). Want me to help you figure out what to ask them first?"
  },
  {
    patterns: [/guarantee|money.*back|refund/i],
    response: "Yep! Most of our services come with a 90-day money-back guarantee. If you're not seeing results, you get a full refund. It's our way of putting skin in the game."
  },
  {
    patterns: [/thanks|thank you|thx|cheers/i],
    response: "Anytime! 🙌 Let me know if you need anything else."
  },
  {
    patterns: [/bye|goodbye|see ya|later|cya/i],
    response: "Catch you later! Feel free to come back anytime. Good luck with everything! 👋"
  }
];

export function checkInstantResponse(message: string): string | null {
  const trimmed = message.trim();
  
  for (const item of instantResponses) {
    for (const pattern of item.patterns) {
      if (pattern.test(trimmed)) {
        return item.response;
      }
    }
  }
  
  return null;
}

export const GREETING_MESSAGES = [
  "Hey! I'm ARC — I help people figure out if OARC is right for them. What brings you here?",
  "Hi there! I'm ARC. I can answer questions, roast your website, or show you what AI can do for YOUR business. What sounds useful?",
  "Welcome! Quick heads up — I'm not going to push you to book a call until I actually understand what you need. So... what's going on?"
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[Math.floor(Math.random() * GREETING_MESSAGES.length)];
}