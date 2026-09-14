---
name: Neon atomic returning
description: How to return an atomic PostgreSQL counter update reliably through this project's Neon HTTP transport.
---

For atomic upserts that must return the updated value, wrap `INSERT ... ON CONFLICT ... RETURNING` in a write CTE and make the outer statement a `SELECT`.

**Why:** In this environment, neon-http can report a successful `INSERT` and affected row while returning an empty `rows` array. Drizzle's insert query builder showed the same behavior. A separate read introduces a visibility/race gap. The write-CTE form reports a `SELECT` command and returns the committed row in the same atomic statement.

**How to apply:** Use this pattern for durable counters and similar write-and-decide operations. Keep the update and decision inputs parameterized, and test the actual limit boundary rather than only the successful path.