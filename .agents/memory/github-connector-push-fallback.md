---
name: GitHub connector push fallback
description: Safe repository sync when Replit's GitHub connector works but Git CLI HTTPS credentials are rejected
---

The GitHub connector's OAuth credential and Git's stored HTTPS credential are separate. Reauthorizing the connector may leave `git push` unable to authenticate.

**Why:** Repeated CLI retries do not repair a stale Git credential, while the authenticated connector can still create Git objects and update refs safely.

**How to apply:** For a public repository, fetch remote history anonymously, merge normally, and validate the result. Use the connector's Git Data API to create exact blobs, trees, and commits, verify their hashes, then update the branch only when its current SHA matches the expected parent. Never force-push over a branch that moved.