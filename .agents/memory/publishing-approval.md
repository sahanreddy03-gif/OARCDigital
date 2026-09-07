---
name: Publishing requires explicit approval
description: Guardrail for any action that could create or change a public OARC deployment.
---

Do not publish, deploy, promote to production, create a duplicate public deployment, replace the live site, or unpublish an existing deployment unless the user clearly approves that exact action at that time.

**Why:** A previous publishing action caused costly duplicate-deployment problems. The user requires private editing and verification to remain separate from public release actions.

**How to apply:** Editing, local testing, and preview validation are allowed when requested. Before any public deployment change, explain exactly what will go live or offline and wait for explicit approval. Never interpret a request to fix, test, save, push code, or prepare a preview as permission to publish.