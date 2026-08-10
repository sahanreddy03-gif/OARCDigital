---
name: OARC design system colors
description: Authoritative color/font palette from OARC Design Sheet v2 — used for all modals and department cards.
---

## Fonts (three only — no additions)
- Bricolage Grotesque 800 (ExtraBold) — all headlines
- Instrument Serif italic 400 — one accent word per headline, ink only (never colored)
- Space Mono 400/700 — labels, stats, kickers

## Grounds (backgrounds)
- Ivory `#F2EFE9` — default page, studio posts
- Noir `#0E0D0C` — money/drama posts
- Graphite `#0B0C0D` — AI/machine posts (monochrome world)
- White `#F5F5F3` — clean product posts
- Racing Ground `#0E5A3A` — occasional green statement

## Accents
- Crimson `#C8102E` — the only red; money, urgency, CTA
- Racing Green `#0E5A3A` — creative/results; metallic block is its signature
- Racing Ink `#0C1F13` — near-black green for body text on green-mood posts

## Tints (dark grounds only, small doses)
- Rose `#F2A9B4` — crimson's survival tint on dark
- Mint `#8FD6AE` — racing green's survival tint on dark
- Executive Blue `#2E5BE6` — interactive buttons ONLY (≤2% surface)

## Dead (never use)
Arctic `#3EC6FF`, any purple/violet, any gradient, Gold, Cognac, Navy, Scarlet `#E02B20`, Orange-red `#E8482B`, Light green `#6FE59C`, colored italic (crimson/green/rose on italic), extra fonts

## World mapping → modal colors
| World | Use case | bg | text | accent |
|---|---|---|---|---|
| A — Ivory + Crimson | Growth, Sales, Enquiries | `#F2EFE9` | `#0E0D0C` | `#C8102E` |
| C — Noir + Crimson | Drama/money modals | `#0E0D0C` | `#F2EFE9` | `#C8102E` / Rose tint |
| D — Graphite mono | AI/machine modals | `#0B0C0D` | `#F5F5F3` | `#F5F5F3` (white only) |
| B — Bone + Green | Creative/brand modals | `#F2EFE9` | `#0C1F13` | `#0E5A3A` |

## AI Staff modal specifically
- bg: `#0B0C0D` (graphite), card: `#131415`
- accent `--vi`: `#F5F5F3` (white), `--vi2`: `rgba(245,245,243,.9)`
- glow: `rgba(245,245,243,.3)`, fill: `rgba(245,245,243,.08)`
- Font: Schibsted Grotesk (loaded via Google Fonts link) + Space Mono

**Why:** Design sheet World D "Graphite — the machine — monochrome only, accent = WHITE".
