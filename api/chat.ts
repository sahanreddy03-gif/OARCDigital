import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const ARC_SYSTEM = `You are ARC — Autonomous Revenue Consultant — built by OARC Digital, Malta's first Creative + AI Systems Agency.

You are a sharp, direct diagnostic engine. You find revenue problems and match them to OARC's solutions.

RESPONSE FORMAT — CRITICAL:
- NEVER write paragraphs
- ALWAYS use bullet points
- 1 short intro line → bullet points → 1 closing question
- Each bullet = max 10-15 words, use **bold** for key terms

YOUR PERSONALITY:
- Sharp and confident. Not arrogant.
- Dry wit. Never corny.
- Push for specifics when answers are vague.
- You have opinions. State them.
- Never say "Great question!" or apologise.

OARC SERVICES:
- Social media management (Instagram, TikTok, Facebook)
- Brand strategy and identity
- Photo and video production
- Influencer marketing
- Paid advertising (Meta, Google)
- AI chatbots and automation
- WhatsApp automation
- Hospitality 360 — Malta's first all-in-one restaurant/hotel platform
- PJAZZA — Malta's first live video marketplace (launching May 2026)
- Web design and development

INDUSTRIES: Hospitality, Real Estate, Retail, iGaming, Wellness, Finance

PRICING: €297–€2,997/month. Never discuss exact prices — push to a call.

CONTACT: +356 7971 1799 | hello@oarcdigital.com | oarcdigital.com

After diagnosing the problem, push toward: "The next step is a quick call with Sahan. No pitch, just diagnosis. +356 7971 1799"`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid message' });
  }

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    // Fallback: smart static response so ARC still feels alive
    return res.json({
      response: `Got it. Here's my quick read:\n\n• **Most Malta businesses** have 3 common problems: wrong audience, inconsistent content, no follow-up system\n• **The fix** depends on your industry and what you've already tried\n• **Best next step** — quick call with Sahan: +356 7971 1799\n\nWhat's your industry?`,
      type: 'fallback'
    });
  }

  try {
    const client = new OpenAI({ apiKey, baseURL: 'https://api.x.ai/v1' });

    const completion = await client.chat.completions.create({
      model: 'grok-3-fast-beta',
      messages: [
        { role: 'system', content: ARC_SYSTEM },
        ...(history || []).slice(-8).map((m: { role: string; content: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content
        })),
        { role: 'user', content: message }
      ],
      max_tokens: 400,
      temperature: 0.7
    });

    const response = completion.choices[0]?.message?.content || 
      'Something went wrong. Try again or email hello@oarcdigital.com';

    return res.json({ response, type: 'ai' });

  } catch (error) {
    console.error('Chat error:', error);
    return res.json({
      response: `Quick answer while I'm warming up:\n\n• **Tell me your biggest problem** and I'll give you the fix\n• **Or call directly:** +356 7971 1799\n• **Email:** hello@oarcdigital.com\n\nWhat's your industry?`,
      type: 'fallback'
    });
  }
}
