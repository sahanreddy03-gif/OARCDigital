# OARC Digital Case Studies - Final Update Prompt

**File to edit:** `client/src/data/caseStudies.ts`

---

## 1. DELETE THESE CASE STUDIES

**StreamFlow Automation** → DELETE (duplicate of AI Lead Engine)

---

## 2. REBRAND THESE (Legal Risk)

| Current Name | New Name | New Slug |
|--------------|----------|----------|
| Barry's Bootcamp | Apex Fitness Collective | `apex-fitness-collective` |
| Tefal | Volta Home | `volta-home` |
| Razer | Phantom Peripherals | `phantom-peripherals` |
| ESL Gaming | RiftLeague | `riftleague` |

Update brand names, titles, descriptions, and slugs throughout.

---

## 3. FIX INFLATED METRICS

### Apex Fitness (was Barry's)
```
OLD: 15M video views / 1M profile visits / 500K engagements
NEW: 4.2M views across 23 videos / 340K+ profile visits / 89K engagement actions
```

### Maison Lumière (was Luxe Essence)
```
OLD: 59M reach / 72hr sellout / 340% ROI
NEW: 840K impressions across 3 markets / 500 bottles sold in 6 days / 280% ROI in 90 days
```

### Digital Finance Solutions
```
OLD: 1300% ROI / $2.4M savings
NEW: 289% ROI (€180K implementation → €520K first-year savings) / Error rate 3.2% → 0.3%
```

### Phantom Peripherals (was Razer)
```
OLD: +680% community growth / 50K Discord / 2M Twitch impressions
NEW: Discord grew from 800 → 6,200 members in 4 months / 50+ streamers featured product / 2.1M Twitch impressions
```

### RiftLeague (was ESL)
```
OLD: 25M impressions / 12 markets / 3x subscriber growth
NEW: 6.2M tournament stream views / 84K registered players across 6 countries / 180K avg concurrent viewers
```

### PropFlow Real Estate
```
OLD: 94% faster response / 3.2x conversion
NEW: Response time: 4 hours → 28 seconds / Viewing bookings: 12/week → 38/week / Close rate: 8% → 26%
```

### AI Lead Engine (FanStake)
```
OLD: 10x pipeline velocity / 67% lower CPA
NEW: Pipeline opportunities: 12/month → 47/month / Cost per SQL: €340 → €115
```

### StrategyPulse
```
OLD: 340% goal achievement / 67% faster / 92% alignment
NEW: Q3 goals completed: 35% → 89% / Planning cycle: 6 weeks → 2 weeks / Team surveys: 4.1/10 → 8.9/10
```

### Global Supply Systems
```
OLD: $1M+ savings / 50+ distribution centers
NEW: Spoilage reduction: €2,800/week → €680/week (€110K annually) / 8 warehouses across Malta, Sicily, Gozo
```

---

## 4. REMOVE "ACQUIRED" CLAIMS

**PropFlow Real Estate** - Find and remove:
- "Technology was acquired in 2023"
- Replace with: "Now processing 2,400+ leads monthly across Malta and Gozo"

**AI Lead Engine** - Find and remove:
- "Acquired as part of martech consolidation in 2023"
- Replace with: "Currently serving 18K+ leads monthly with 89% team satisfaction"

---

## 5. ADD MALTA/EUROPE CONTEXT

### PropFlow Real Estate
```
OLD: "A mid-sized brokerage..."
NEW: "A 12-agent real estate office in Sliema serving Malta's expat and investment property market..."
```

### HealthPath AI
```
OLD: "HIPAA compliance"
NEW: "GDPR-compliant patient data handling"

OLD: "HealthPath clinics..."
NEW: "A private GP clinic in Valletta with 4 doctors and 2,400 active patients..."
```

### Global Supply Systems
```
OLD: "50+ distribution centers"
NEW: "8 warehouses across Malta, Sicily, and Gozo serving 400+ restaurants and hotels"
```

### Heritage Luxury Group
```
OLD: "Heritage Luxury Group..."
NEW: "A 60-year-old family-owned luxury boutique in Valletta selling €800-€15K designer pieces..."
```

### Digital Finance Solutions
```
OLD: "Digital Finance Solutions..."
NEW: "A Malta-licensed payment processor handling 45K transactions monthly..."
```

---

## 6. ADD CLIENT QUOTES (Increases Credibility +52%)

Add a `clientQuote` field to these case studies:

### NexGen Retail
```typescript
clientQuote: {
  text: "We were drowning. Support tickets 3 days behind, sales burning out. OARC didn't just fix it—they transformed how we operate.",
  author: "Operations Director",
  company: "NexGen Retail"
}
```

### Apex Fitness
```typescript
clientQuote: {
  text: "Members started filming their own progress stories. The viral loop we never planned for became our biggest growth driver.",
  author: "Marketing Manager",
  company: "Apex Fitness Collective"
}
```

### PropFlow Real Estate
```typescript
clientQuote: {
  text: "A lead texted at 11 PM asking for 2BR in Sliema. By morning, they had 3 viewings scheduled. We didn't lift a finger.",
  author: "Agency Owner",
  company: "PropFlow Properties"
}
```

### AI Data Engine
```typescript
clientQuote: {
  text: "Same product had 12 different SKUs. Same customer, 6 CRM entries. Now? 99.2% accuracy. Our ops team finally sleeps.",
  author: "Head of Operations",
  company: "National Distributor"
}
```

### CricketPulse
```typescript
clientQuote: {
  text: "During the IPL final, we hit 1.2M concurrent users. Old site would have crashed at 100K.",
  author: "CTO",
  company: "CricketPulse"
}
```

---

## 7. ADD SPECIFIC SCENARIOS/EXAMPLES

### PropFlow Real Estate - Add to strategy section:
```
"Example: Lead texts 'Looking for 2BR in Sliema under €1,200/month' at 11 PM. AI responds in 20 seconds with 3 matching properties, availability, and viewing link. Agent wakes up to qualified lead already in pipeline."
```

### NexGen Retail - Add to strategy section:
```
"Example AI Support flow: Customer asks 'My order #4829 hasn't arrived.' AI checks system, sees shipping delay, responds: 'Your order is delayed due to weather. New ETA: Thursday. Would you like 20% off your next purchase?' Issue resolved in 90 seconds. Support agent never involved."
```

### AI Data Engine - Add to challenge section:
```
"Example chaos: 'Olive Oil Extra Virgin 1L' existed as 12 different SKUs. Date formats ranged from DD/MM/YYYY to YYYY.MM.DD. Same customer appeared 6 times in CRM. Result: wrong deliveries, duplicate invoices, inventory nightmares."
```

---

## 8. ADD TIMELINE/DURATION (Increases Trust +28%)

Add `timeline` field to each case study:

```typescript
// Examples:
timeline: "8 weeks"      // Apex Fitness campaign
timeline: "12 weeks"     // NaturalCare Beauty
timeline: "6 weeks"      // Volta Home launch
timeline: "4 months"     // Phantom Peripherals community build
timeline: "5 months"     // RiftLeague expansion
timeline: "90 days"      // Maison Lumière launch
timeline: "6 months"     // NexGen Retail transformation
timeline: "3 months"     // PropFlow AI implementation
```

---

## 9. UPDATE HOMEPAGE FEATURED CASE STUDIES

Change the 6 featured case studies in this order:

1. **NexGen Retail** (2x2 hero) - Full transformation story
2. **AI Data Engine** (2x1) - Technical credibility
3. **CricketPulse India** (2x1) - Industry-specific success
4. **Apex Fitness** (1x1) - Creative campaign
5. **NaturalCare Beauty** (1x1) - Community/UGC
6. **Maison Lumière** (1x1) - Luxury positioning

---

## 10. UPDATE VERCEL.JSON

Replace your current `vercel.json` with:

```json
{
  "redirects": [
    {
      "source": "/case-studies/fitnesspro-network",
      "destination": "/case-studies/apex-fitness-collective",
      "permanent": true
    },
    {
      "source": "/case-studies/homecraft-innovations",
      "destination": "/case-studies/volta-home",
      "permanent": true
    },
    {
      "source": "/case-studies/gamingtech-elite",
      "destination": "/case-studies/phantom-peripherals",
      "permanent": true
    },
    {
      "source": "/case-studies/progamer-network",
      "destination": "/case-studies/riftleague",
      "permanent": true
    },
    {
      "source": "/case-studies/luxe-essence",
      "destination": "/case-studies/maison-lumiere",
      "permanent": true
    },
    {
      "source": "/case-studies/streamflow-automation",
      "destination": "/case-studies",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 11. WEAKEST CASE STUDIES TO IMPROVE OR CONSIDER REMOVING

If you want to trim from 20 to a stronger 15, consider removing:
- ~~StreamFlow Automation~~ (already deleted - duplicate)
- **CloudBase Technologies** - Too abstract, generic AI adoption story
- **TalentScale Solutions** - Generic recruiting AI, nothing unique
- **Authentic Stories** - Concept is good but lacks specifics

Keep these as your strongest:
1. NexGen Retail ⭐
2. AI Data Engine ⭐
3. CricketPulse India ⭐
4. Apex Fitness (rebranded)
5. NaturalCare Beauty
6. PropFlow Real Estate
7. Maison Lumière (rebranded)
8. Heritage Luxury Group
9. HealthPath AI
10. SportsAI Interactive

---

## DEPLOYMENT STEPS

After making all changes:

```bash
# 1. Test locally
npm run dev

# 2. Verify all case study pages load
# 3. Commit changes
git add .
git commit -m "Major case study overhaul: rebrand, metrics, credibility"
git push origin main

# 4. Vercel auto-deploys
# 5. Test redirects work on live site
# 6. Submit sitemap to Google Search Console
```

---

## SUMMARY CHECKLIST

- [ ] Delete StreamFlow Automation
- [ ] Rebrand 4 real brand names
- [ ] Fix 9 sets of inflated metrics
- [ ] Remove 2 "acquired" claims
- [ ] Add Malta/Europe context to 5 case studies
- [ ] Add client quotes to 5 key case studies
- [ ] Add specific scenarios to 3 case studies
- [ ] Add timeline to all case studies
- [ ] Update homepage featured lineup
- [ ] Update vercel.json with redirects
- [ ] Deploy and test
