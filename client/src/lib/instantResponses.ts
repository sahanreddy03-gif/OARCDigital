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
    triggers: ['hi', 'hello', 'hey', 'yo', 'hola', 'good morning', 'good afternoon', 'help', 'start'],
    response: `ARC here. Let's cut straight to it.

• **What's your biggest problem right now?**
• Too few customers? Bad content? No platform?
• Or pick a button below — I'll diagnose from there.

Tell me the industry you're in and what's broken.`
  },
  {
    triggers: ['price', 'cost', 'pricing', 'how much', 'rates', 'budget', 'expensive', 'afford', 'packages'],
    response: `Pricing depends on scope. Here's the structure:

• **Social media management** — from €297/month
• **Full creative + AI package** — from €997/month
• **Enterprise / custom builds** — from €1,997/month

Every package includes a strategy session, not just execution.

**Call Sahan directly for your quote: +356 7971 1799**

What's your industry? I'll tell you which tier makes sense.`,
    showPricingCTA: true
  },
  {
    triggers: ['services', 'what do you do', 'what do you offer', 'help with', 'offer'],
    response: `OARC does three things — and combines them:

• **Creative** — social media, content, video, branding, paid ads
• **AI & Automation** — chatbots, WhatsApp automation, AI sales agents
• **Tech platforms** — Hospitality 360 (restaurant/hotel OS), custom software

No other agency in Malta does all three.

Which area is most relevant to you right now?`
  },
  {
    triggers: ['customers', 'more customers', 'sales', 'revenue', 'grow', 'growth', 'leads'],
    response: `Most businesses that need more customers have one of three problems:

• **Visibility** — nobody knows you exist outside your regulars
• **Conversion** — people find you but don't act
• **Retention** — customers come once and don't come back

Each needs a different fix.

**What's your industry?** I'll tell you which one is killing your growth.`
  },
  {
    triggers: ['social media', 'instagram', 'tiktok', 'facebook', 'content', 'posts', 'engagement'],
    response: `Social media isn't working for most Malta businesses for one reason:

• They're posting **for themselves**, not for their audience
• Generic food photos. Generic captions. No hook. No story.
• The algorithm rewards content that makes people **stop scrolling**

**What we do differently:**
• Hook-first content strategy
• Malta-specific cultural angles
• Format testing (Reels vs carousels vs Stories)
• Competitor gap analysis — post what they're missing

Want me to tell you specifically what's wrong with your current content? Drop your Instagram handle.`
  },
  {
    triggers: ['restaurant', 'food', 'cafe', 'bar', 'hospitality', 'hotel', 'menu'],
    response: `Hospitality is our core. Here's what we built specifically for you:

**Hospitality 360** — Malta's first all-in-one restaurant and hotel platform:
• QR menus in 9+ languages (for Malta's 2.3M tourists)
• QR ordering — faster tables, fewer errors
• Google review automation — guests prompted before they leave
• Reservations, POS, inventory — all connected
• From €100/month. No upfront cost.

Plus full social media management for your brand.

**Call +356 7971 1799 to see a live demo.**

How many locations do you have?`
  },
  {
    triggers: ['real estate', 'property', 'apartment', 'villa', 'letting', 'agency'],
    response: `Real estate marketing in Malta has one problem: everyone looks the same.

Same drone footage. Same listing photos. Same "stunning sea views" captions.

**What actually converts:**
• Property video storytelling — sell the lifestyle, not the specs
• Targeted Meta ads to buyer personas (expats, investors, locals)
• Personal brand content for the agent, not just the listing
• WhatsApp automation for instant lead follow-up

**First step:** 15-minute strategy call. +356 7971 1799

How many properties are you typically listing per month?`
  },
  {
    triggers: ['igaming', 'casino', 'gambling', 'betting', 'gaming'],
    response: `iGaming is one of our highest-value verticals. Malta's regulations make creative execution critical.

**What we do for iGaming brands:**
• Compliant creative that still converts
• B2B brand strategy (operator to operator positioning)
• LinkedIn authority content for executives
• AI-powered content scaling across markets

**This needs a proper call** — iGaming work is bespoke.
+356 7971 1799 | hello@oarcdigital.com

Are you B2C (player-facing) or B2B?`
  },
  {
    triggers: ['ai', 'automation', 'chatbot', 'whatsapp', 'bot', 'automate'],
    response: `AI automation is where OARC separates from every other Malta agency.

**What we build:**
• WhatsApp automation — orders, bookings, lead qualification, follow-ups
• AI sales agents — qualify leads 24/7, book calls automatically
• Customer service bots — trained on your business, not generic
• Workflow automation — CRM, inventory, reporting, all connected

**Most businesses save 15-20 hours/week** once automation is running.

**Let's map your automation opportunities:** +356 7971 1799

What's the most repetitive thing your team does manually right now?`
  },
  {
    triggers: ['pjazza', 'live video', 'marketplace', 'live stream'],
    response: `PJAZZA is Malta's first live video marketplace — launching May 2026.

**How it works:**
• Your business goes live on video
• Customers discover you in real time
• They watch, ask questions, and buy — instantly

Think QVC meets Instagram Live, built for Malta.

**First 200 businesses get free onboarding + 6 months featured placement.**

Call now to secure your spot: +356 7971 1799`
  },
  {
    triggers: ['hospitality 360', 'h360', 'digital menu', 'qr menu', 'qr code'],
    response: `Hospitality 360 is Malta's first all-in-one operating system for restaurants, cafes, and hotels.

**One QR code. Everything your guest needs:**
• Menu in 9+ languages — no app download required
• Order and pay at the table
• Google review prompt before they leave
• Events and specials visible to every guest

**For you as the owner:**
• Reservations, POS, inventory — all connected
• Real customer data — who ordered what, when
• WhatsApp automation for returning guests

**From €100/month. Live demo available.**
Call +356 7971 1799`
  },
  {
    triggers: ['location', 'where', 'based', 'malta', 'office', 'address'],
    response: `OARC Digital — Level 1, The Brewhouse, Birkirkara CBD, Malta.

We work with businesses across Malta and internationally.

📞 +356 7971 1799
📧 hello@oarcdigital.com
🌐 oarcdigital.com

Walk-ins welcome. Or book a call — usually same day.`
  },
  {
    triggers: ['contact', 'call', 'speak', 'talk', 'meet', 'sahan', 'human'],
    response: `Talk to Sahan directly — he's the founder and handles all new client conversations personally.

📞 **+356 7971 1799** (WhatsApp or call)
📧 **hello@oarcdigital.com**
🌐 **oarcdigital.com/contact**

Usually responds within a few hours during business hours (9am–6pm Malta time).`
  },
  {
    triggers: ['roast', 'review', 'check my', 'look at my', 'website feedback', 'audit'],
    response: `Drop your website URL or Instagram handle and I'll give you a straight assessment:

• What's working
• What's costing you customers
• 3 specific fixes you can make today
• What competitors are doing that you're not

No sugarcoating. Ready?`
  },
  {
    triggers: ['bye', 'goodbye', 'thanks', 'thank you', 'cheers'],
    response: `Anytime.

Before you go — if you want a proper diagnosis of what's holding your business back:

📞 **+356 7971 1799** — call or WhatsApp Sahan directly.

Come back whenever. ARC is always here.`
  },
  {
    triggers: ['competitor', 'competition', 'beating', 'better than me', 'losing'],
    response: `Competitors beating you usually comes down to one of three things:

• **They're more visible** — better content, more consistent posting
• **They're better positioned** — clearer offer, stronger brand
• **They're faster** — automation handling what you're doing manually

**The fix depends on the gap.**

Who's beating you and what are they doing that you're not?`
  },
  {
    triggers: ['branding', 'brand', 'logo', 'identity', 'design'],
    response: `Brand is the reason people choose you over someone cheaper.

**What OARC builds:**
• Brand strategy — positioning, voice, audience definition
• Visual identity — logo, colours, typography, guidelines
• Brand content — everything looks and sounds like you
• Brand launch — new identity rolled out across all channels

**A brand that looks like it costs more — closes more.**

What stage are you at? Starting fresh or refreshing an existing brand?`
  },
  {
    triggers: ['web', 'website', 'landing page', 'site'],
    response: `Most Malta business websites have the same problem:

• Beautiful design. Zero conversion.
• No clear call to action above the fold
• Slow load time (killing SEO)
• No mobile optimisation

**What we build:**
• Conversion-first design — every page has a goal
• Fast, mobile-perfect, SEO-ready
• Integrated with your CRM/booking system
• Designed to rank, not just look good

**Drop your current URL** and I'll tell you specifically what's wrong.`
  }
];

export function checkInstantResponse(message: string): InstantResponseResult | null {
  const lower = message.toLowerCase().trim();

  for (const item of responses) {
    for (const trigger of item.triggers) {
      const escaped = trigger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const wordBoundaryRegex = new RegExp(`(^|\\s|\\b)${escaped}(\\s|\\b|$)`, 'i');
      if (wordBoundaryRegex.test(lower)) {
        return {
          response: item.response,
          showPricingCTA: item.showPricingCTA || false
        };
      }
    }
  }

  // Smart fallback for any unmatched message
  if (lower.length > 3) {
    return {
      response: `Got it. Here's my honest read:

• **Most businesses** in your situation have the same core issue — not enough of the right people seeing what they offer
• **The fix** depends on your industry, current setup, and what you've already tried
• **Best move** — 15 minutes with Sahan: he'll tell you exactly what's wrong and what we'd do

📞 **+356 7971 1799** | hello@oarcdigital.com

What industry are you in?`,
      showPricingCTA: false
    };
  }

  return null;
}

export const GREETING_MESSAGES = [
  `Hey. I'm ARC.

I find what's killing your revenue and tell you exactly how to fix it.

• **Got a problem?** Tell me. I'll diagnose it in 60 seconds.
• **Not sure where to start?** Pick one of the buttons below.
• **Want to talk to a human?** Call +356 7971 1799.

What's the one thing that's not working right now?`,

  `ARC here. OARC Digital's diagnostic engine.

**What's your biggest business problem right now?**

• Not enough customers?
• Social media not converting?
• No platform, no automation, just chaos?

Tell me the problem. I'll tell you if we can fix it — and how.`,

  `Hey — I'm ARC.

**Give me your biggest problem and I'll tell you exactly what OARC would do about it.**

No sales pitch. No fluff. Just the answer.

Or call Sahan directly: +356 7971 1799`
];

export function getRandomGreeting(): string {
  return GREETING_MESSAGES[Math.floor(Math.random() * GREETING_MESSAGES.length)];
}
