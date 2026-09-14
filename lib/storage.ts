import {
  type User,
  type InsertUser,
  type Lead,
  type InsertLead,
  users,
  leads,
  apiRateLimits,
} from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  consumeRateLimit(key: string, limit: number, windowMs: number): Promise<RateLimitResult>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return db.select().from(leads).orderBy(leads.createdAt);
  }

  async consumeRateLimit(key: string, limit: number, windowMs: number): Promise<RateLimitResult> {
    const now = new Date();
    const resetAt = new Date(now.getTime() + windowMs);
    // neon-http drops RETURNING rows when PostgreSQL reports an INSERT command.
    // Wrapping the atomic upsert in a write CTE makes the outer command SELECT,
    // preserving the returned counter without a race-prone second query.
    const result = await db.execute(sql`
      WITH counter AS (
        INSERT INTO ${apiRateLimits}
          (key, count, window_started_at, reset_at, updated_at)
        VALUES
          (${key}, 1, ${now}, ${resetAt}, ${now})
        ON CONFLICT (key) DO UPDATE SET
          count = CASE
            WHEN ${apiRateLimits.resetAt} <= CURRENT_TIMESTAMP THEN 1
            ELSE ${apiRateLimits.count} + 1
          END,
          window_started_at = CASE
            WHEN ${apiRateLimits.resetAt} <= CURRENT_TIMESTAMP THEN ${now}
            ELSE ${apiRateLimits.windowStartedAt}
          END,
          reset_at = CASE
            WHEN ${apiRateLimits.resetAt} <= CURRENT_TIMESTAMP THEN ${resetAt}
            ELSE ${apiRateLimits.resetAt}
          END,
          updated_at = ${now}
        RETURNING count, reset_at
      )
      SELECT count, reset_at FROM counter
    `);
    const row = result.rows[0] as { count?: number | string; reset_at?: Date | string } | undefined;
    const count = Number(row?.count);
    if (!row || !Number.isFinite(count)) {
      throw new Error("Rate limit counter did not return a row");
    }
    const parsedReset = row.reset_at instanceof Date
      ? row.reset_at.getTime()
      : new Date(row.reset_at ?? resetAt).getTime();
    const returnedReset = Number.isFinite(parsedReset) ? parsedReset : resetAt.getTime();
    return {
      allowed: count <= limit,
      retryAfterSeconds: Math.max(1, Math.ceil((returnedReset - Date.now()) / 1000)),
    };
  }
}

export const storage = new DatabaseStorage();
