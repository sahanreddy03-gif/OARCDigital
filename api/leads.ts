import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, contact, service } = req.body;

  if (!name || !contact || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Log the lead (Vercel function logs are visible in Vercel dashboard)
  console.log('NEW LEAD:', JSON.stringify({ name, contact, service, timestamp: new Date().toISOString() }));

  // If we have a webhook URL configured, fire it
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, service, source: 'ARC Chat Widget', timestamp: new Date().toISOString() })
      });
    } catch (_e) {
      // Don't fail the response if webhook fails
    }
  }

  return res.json({ success: true });
}
