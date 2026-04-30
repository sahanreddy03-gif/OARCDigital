import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@shared/schema";

// Lazy initialization: do NOT touch process.env at module load. Touching it at
// import time crashes `next build`'s "collect page data" phase whenever
// DATABASE_URL is unset on Vercel — which would take the entire build down
// even for the 620 static pages that never read the database.
//
// Instead, the client is built on the FIRST call to getDb() (i.e. when an API
// route actually tries to run a query at request time). Routes that may run
// without a database should still guard `process.env.DATABASE_URL` themselves
// and short-circuit with 503 before invoking storage; getDb() throws a clear
// error if those guards are missed.

type DbClient = ReturnType<typeof drizzle>;

let _db: DbClient | null = null;

export function getDb(): DbClient {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  const sql = neon(url);
  _db = drizzle(sql, { schema });
  return _db;
}

// Back-compat surface: existing call sites do `db.select()` / `db.insert()`.
// The Proxy defers all property access to getDb(), preserving that API while
// keeping initialization lazy.
export const db = new Proxy({} as DbClient, {
  get(_target, prop) {
    return Reflect.get(getDb() as object, prop);
  },
});
