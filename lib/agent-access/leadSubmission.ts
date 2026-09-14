import type { InsertLead, Lead } from "@shared/schema";
import { storage } from "@/lib/storage";
import { z } from "zod";

export const enquiryRequestSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
    email: z.string().trim().email().max(320).optional(),
    contact: z.string().trim().min(3).max(320).optional(),
    company: z.string().trim().max(160).optional(),
    service: z.string().trim().min(1).max(80),
    theme: z.string().trim().max(160).optional(),
    message: z.string().trim().max(4000).optional(),
    source: z.string().trim().max(120).optional(),
    website: z.string().max(200).optional(),
  })
  .refine((value) => Boolean(value.email || value.contact), {
    message: "An email or other contact is required",
    path: ["email"],
  });

export type LeadSubmission = {
  name: string;
  contact: string;
  service: string;
  source?: string;
  transcript?: string;
  company?: string;
  theme?: string;
  message?: string;
  subject?: string;
};

async function notifyFormspree(payload: LeadSubmission): Promise<boolean> {
  const response = await fetch("https://formspree.io/f/xblnedyl", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _replyto: payload.contact,
      _subject: payload.subject ?? `New OARC enquiry — ${payload.name} (${payload.service})`,
      name: payload.name,
      contact: payload.contact,
      company: payload.company ?? "",
      service: payload.service,
      theme: payload.theme ?? "",
      source: payload.source ?? "ARC Chat",
      transcript: payload.transcript ?? "",
      message:
        payload.message ??
        `New OARC enquiry — ${payload.name} | Interest: ${payload.service}` +
          (payload.theme ? ` | Theme: ${payload.theme}` : "") +
          (payload.transcript ? `\n\n--- Context ---\n${payload.transcript}` : ""),
    }),
  });

  // Deliberately log only an operational status. Contact details and message
  // content must never enter application logs.
  if (!response.ok) console.error("Formspree notification returned non-2xx", response.status);
  return response.ok;
}

export async function submitLead(payload: LeadSubmission): Promise<{
  emailed: boolean;
  lead: Lead | null;
}> {
  const emailed = await notifyFormspree(payload);
  let lead: Lead | null = null;

  // Email delivery remains the primary path. Database persistence is only the
  // existing best-effort secondary store and is never a competing lead system.
  if (process.env.DATABASE_URL) {
    try {
      const insertLead: InsertLead = {
        name: payload.name,
        contact: payload.contact,
        service: payload.service,
      };
      lead = await storage.createLead(insertLead);
    } catch {
      console.error("Lead database write failed");
    }
  }

  return { emailed, lead };
}
