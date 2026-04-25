# OARC DIGITAL — REPLIT EXECUTION CONTRACT

This contract governs all work on oarcdigital.com. 
Read before every task. No exceptions.

## RULE 1 — STATE-FIRST PROTOCOL
Before any file change, output current state:
- Relevant file tree
- What exists vs what will be created
- Exact files to be touched
Skipping this rule = task rejected.

## RULE 2 — ONE-TASK-ONLY RULE
Execute the assigned task only. Do not start the next 
task until Sahan replies with explicit approval phrase 
(e.g., "PROCEED 80A"). Stop and report when current 
task is complete.

## RULE 3 — NO SILENT FALLBACKS
If a task can't be completed as specified:
- Document what was tried
- Document what blocked it
- Ask before improvising
Never substitute a "close enough" version without flagging.

## RULE 4 — EVIDENCE-BASED REPORTING
Every PASS requires proof:
- Schema: validator URL + screenshot
- Redirects: curl -I output
- Soft 404 fixes: before/after preview
- Canonical fixes: new <link> tag
- robots.txt: full file content paste
PASS without evidence = FAIL — fabricated.

## RULE 5 — ROLLBACK CAPABILITY MANDATORY
Before destructive changes:
- Create branch matching task ID (e.g., task-80)
- Commit before each sub-step
- Document rollback command
- Never push to main without preview review

## RULE 6 — THE 5,200-PAGE QUESTION
Before any 410s on programmatic pages:
- Sample 50 URLs to 410
- Sample 50 URLs to redirect (with targets)
- Sample 50 URLs to keep
- Cross-reference GSC top performers
Wait for explicit "EXECUTE 410 BATCH 1" approval.

## RULE 7 — PRESERVE CURRENT TRAFFIC
- Any URL with >1 click in last 6 months: do NOT 410
- Any URL with >50 impressions in last 6 months: do NOT 410
GSC export = source of truth.

## RULE 8 — QUESTIONS-FIRST EXECUTION
Before code changes that depend on missing information:
- List unanswered questions
- Wait for answers
Do not assume defaults that affect production.

## RULE 9 — TRACKING REQUIREMENT
Tracking installed BEFORE behavior changes:
- GA4 with custom events
- UTM parameters on tracked links
- Microsoft Clarity
- Baseline captured before any optimization
No optimization without baseline measurement.

## RULE 10 — SAHAN'S MANUAL WORK
Tasks Replit cannot do (Wikidata, Crunchbase, Clutch, 
Sortlist, GBP optimization, Reddit/Quora, podcast 
appearances, press outreach) must be handed off as 
numbered checklists with: exact URLs, exact data per 
field, time estimates, dependency order.

## RULE 11 — DEFINITION OF DONE
A task is DONE when:
- All sub-steps PASS with evidence per Rule 4
- Vercel preview deployed
- Lighthouse mobile ≥85 on affected pages
- No regressions in Playwright visual tests
- Sahan approved the preview URL
Anything less = INCOMPLETE.

## RULE 12 — FAILURE-TO-EXECUTE PROTOCOL
When stuck:
- Missing credentials → ask with specific list
- Ambiguous requirements → propose 2 options + tradeoffs
- Conflicting instructions → flag conflict, ask resolution
- Technical blocker → document and ask
Never silently skip. Never half-version. Stuck = ask.

## ENFORCEMENT
Every task plan file must:
1. Reference CONTRACT.md at the top
2. List which rules apply to this specific task
3. Include the approval phrase that unblocks the next task
4. Be reviewed by Sahan before execution starts
