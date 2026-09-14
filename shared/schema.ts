import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  service: text("service").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

// Durable, privacy-preserving counters for side-effecting public endpoints.
// `key` is a one-way digest; raw IP addresses and contact details are never
// persisted in this table.
export const apiRateLimits = pgTable("api_rate_limits", {
  key: varchar("key", { length: 128 }).primaryKey(),
  count: integer("count").notNull().default(0),
  windowStartedAt: timestamp("window_started_at").notNull(),
  resetAt: timestamp("reset_at").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type ApiRateLimit = typeof apiRateLimits.$inferSelect;
