# Case Study Updates - Essential Changes Only

Update the case studies in `client/src/data/caseStudies.ts` with these changes:

---

## 1. REBRAND THESE (Legal Risk - Must Change)

| Find | Replace With |
|------|--------------|
| Barry's Bootcamp | Apex Fitness Collective |
| Tefal | Volta Home |
| Razer | Phantom Peripherals |
| ESL Gaming | RiftLeague |

Also update their slugs:
- `fitnesspro-network` → `apex-fitness-collective`
- `homecraft-innovations` → `volta-home`
- `gamingtech-elite` → `phantom-peripherals`
- `progamer-network` → `riftleague`

---

## 2. FIX THESE METRICS (Too Unbelievable)

**Apex Fitness (Barry's):**
- `15M video views` → `4.2M views across 23 videos`
- `1M profile visits` → `340K+ profile visits`
- `500K engagements` → `89K engagement actions`

**Luxe Essence:**
- `59M reach` → `840K impressions across 3 markets`
- `72hr sellout` → `500 bottles sold in 6 days`
- `340% ROI` → `280% ROI in 90 days`

**Digital Finance Solutions:**
- `1300% ROI` → `289% ROI (€180K cost / €520K savings)`

**Razer → Phantom Peripherals:**
- `+680% community growth` → `Discord grew from 800 to 6,200 members`
- Keep other metrics

**ESL → RiftLeague:**
- `25M impressions` → `6.2M tournament stream views`
- `12 markets` → `6 countries`
- `3x subscriber growth` → `84K registered players`

---

## 3. REMOVE "ACQUIRED" CLAIMS (Hurts Credibility)

In **PropFlow Real Estate** and **AI Lead Engine (FanStake)**, find and remove:
- "Technology was acquired in 2023"
- "Acquired as part of martech consolidation"

Replace with ongoing success statements like:
- "Now processing 2,400+ leads monthly across Malta"
- "Currently serving 18K+ leads monthly with 89% team satisfaction"

---

## 4. ADD MALTA CONTEXT (Where Generic)

Update these challenge/description sections:

**PropFlow Real Estate:**
- Change: "A mid-sized brokerage..."
- To: "A 12-agent real estate office in Sliema..."

**HealthPath AI:**
- Change: "HIPAA compliance"
- To: "GDPR-compliant patient data handling"
- Change: "HealthPath clinics..."
- To: "A private GP clinic in Valletta with 4 doctors..."

**Global Supply Systems:**
- Change: "50+ distribution centers"
- To: "8 warehouses across Malta, Sicily, and Gozo"

---

## 5. DELETE OR PIVOT STREAMFLOW

**StreamFlow Automation** is almost identical to **AI Lead Engine**.

Option A: Delete it entirely
Option B: Pivot to this new angle:
```
title: "StreamFlow - Customer Onboarding Bot"
challenge: "A B2B SaaS company had 40% of new customers churning in first 60 days due to poor onboarding."
results: "First-60-day churn: 40% → 12% / Time to first value: 14 days → 3 days"
```

---

## 6. UPDATE VERCEL.JSON (Add Redirects)

Add these redirects for the renamed case studies:

```json
{
  "redirects": [
    { "source": "/case-studies/fitnesspro-network", "destination": "/case-studies/apex-fitness-collective", "permanent": true },
    { "source": "/case-studies/homecraft-innovations", "destination": "/case-studies/volta-home", "permanent": true },
    { "source": "/case-studies/gamingtech-elite", "destination": "/case-studies/phantom-peripherals", "permanent": true },
    { "source": "/case-studies/progamer-network", "destination": "/case-studies/riftleague", "permanent": true }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## THAT'S IT

These are the critical changes. After implementing:
1. Test locally
2. `git add .`
3. `git commit -m "Fix case studies: rebrand, metrics, Malta context"`
4. `git push origin main`

Vercel will auto-deploy.
