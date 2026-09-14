import { createHash } from "node:crypto";
import { storage } from "@/lib/storage";

type MemoryRateLimitRecord = {
  count: number;
  resetAt: number;
};

export type AgentAccessRateLimitInput = {
  ipAddress: string;
  contact: string;
  service: string;
};

export type AgentAccessRateLimitResult = {
  allowed: boolean;
  available: boolean;
  retryAfterSeconds: number;
};

const memoryRecords = new Map<string, MemoryRateLimitRecord>();
const WINDOW_MS = 15 * 60 * 1000;
const LIMIT = 5;

function digest(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function normalise(value: string): string {
  return value.normalize("NFKC").trim().toLowerCase();
}

/**
 * Only the first platform-forwarded address is used. We deliberately do not
 * combine or trust the rest of an arbitrary comma-separated client chain.
 */
export function firstPlatformAddress(forwardedFor: string | null, realIp: string | null): string {
  const first = forwardedFor?.split(",", 1)[0]?.trim();
  return first || realIp?.trim() || "unknown";
}

function memoryConsume(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const current = memoryRecords.get(key);
  if (!current || current.resetAt <= now) {
    if (memoryRecords.size > 10_000) {
      for (const [recordKey, record] of memoryRecords) {
        if (record.resetAt <= now) memoryRecords.delete(recordKey);
      }
    }
    memoryRecords.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= LIMIT) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }
  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Production requests fail closed when the durable counter cannot be checked.
 * Local development can use the bounded in-memory fallback to keep the
 * endpoint usable without DATABASE_URL.
 */
export async function consumeAgentAccessRateLimit(
  input: AgentAccessRateLimitInput,
): Promise<AgentAccessRateLimitResult> {
  const production = process.env.NODE_ENV === "production";
  const ipKey = digest(`agent-access:ip:${normalise(input.ipAddress)}`);
  const contactServiceKey = digest(
    `agent-access:contact-service:${normalise(input.contact)}:${normalise(input.service)}`,
  );

  if (!process.env.DATABASE_URL) {
    if (production) return { allowed: false, available: false, retryAfterSeconds: 0 };
    const contactResult = memoryConsume(contactServiceKey);
    if (!contactResult.allowed) return { ...contactResult, available: true };
    const ipResult = memoryConsume(ipKey);
    return {
      allowed: ipResult.allowed,
      available: true,
      retryAfterSeconds: Math.max(contactResult.retryAfterSeconds, ipResult.retryAfterSeconds),
    };
  }

  try {
    // Check the stable contact/service key first, then the address key. Both
    // counters are individually atomic upserts, so rotating IPs cannot evade
    // the secondary limit.
    const contactResult = await storage.consumeRateLimit(contactServiceKey, LIMIT, WINDOW_MS);
    if (!contactResult.allowed) return { ...contactResult, available: true };
    const ipResult = await storage.consumeRateLimit(ipKey, LIMIT, WINDOW_MS);
    return {
      allowed: ipResult.allowed,
      available: true,
      retryAfterSeconds: Math.max(contactResult.retryAfterSeconds, ipResult.retryAfterSeconds),
    };
  } catch {
    if (production) return { allowed: false, available: false, retryAfterSeconds: 0 };
    const contactResult = memoryConsume(contactServiceKey);
    if (!contactResult.allowed) return { ...contactResult, available: true };
    const ipResult = memoryConsume(ipKey);
    return {
      allowed: ipResult.allowed,
      available: true,
      retryAfterSeconds: Math.max(contactResult.retryAfterSeconds, ipResult.retryAfterSeconds),
    };
  }
}
