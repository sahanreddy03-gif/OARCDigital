# OARC Digital — SEO Phrase Blocklist (source of truth)

This is the human-editable source list. The runtime TypeScript module at
`lib/seo/phraseBlocklist.ts` parses this file at module-load time, so the
two never drift. To add or remove a phrase: edit this file, commit, and
re-run `npx tsx scripts/audit-framework.ts` to confirm.

## Format

- One phrase per line, inside a fenced `phrases` code block below.
- Blank lines and lines starting with `#` are ignored.
- Phrases are matched case-insensitively, whitespace-collapsed, with
  whole-word boundaries on both sides.
- Removing a phrase is a deliberate decision (e.g. it was a false
  positive on a real product term). Note the reason in the commit msg.

## Notes

- `AI-powered` is intentionally NOT on this list — OARC's tagline
  literally is "AI-powered marketing", banning it would fail the audit
  on essentially every page on an AI agency site.
- `next-generation` IS banned. If a real product needs it (e.g.
  "next-generation firewall" as a vendor product name), quote it as a
  proper noun and the audit will still flag — fix at the copy level.
- `ecosystem` is intentionally NOT on this list — phrases like "Malta
  business ecosystem" or "AWS ecosystem" are legitimate product/market
  language. Ban it and the audit fails on real engineering copy.
- `synergy` is banned (consultant-speak; no honest engineering use).

## Phrases

```phrases
dive into
deep dive into
in today's fast-paced world
in today's digital landscape
in today's competitive market
in the realm of
unlock the power of
unleash the power of
harness the power of
leverage cutting-edge
leverage the power of
revolutionize
revolutionise
game-changer
game changer
in this article we will explore
in this article, we will explore
in this post we will explore
look no further
are you tired of
the world of digital
navigate the complexities
in conclusion
to sum up
embark on a journey
supercharge your
next-level
best-in-class
world-class solutions
transformative experience
seamless integration
robust solution
cutting-edge technology
state-of-the-art
tailored to your unique
tailored to meet your unique
elevate your business
elevate your brand
take your business to the next level
delve into
embrace the future
stay ahead of the curve
malta's leading
drive revenue
next-generation
synergy
synergies
leverage the
leverage our
leverage their
unlock potential
unlock your potential
drive results
driving results
transform your business
revolutionary
industry-leading
empower your
empower businesses
boost your
ai-powered solutions
```
