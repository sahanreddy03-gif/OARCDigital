/** Six distinct voice-AI products — each reads like its own company under OARC Digital */

export type DemoLine = { who: 'guest' | 'ai' | 'staff'; text: string; sub?: string };

export type VoiceUseCase = {
  id: string;
  label: string;
  headline: string;
  detail: string;
  metric: string;
  metricLabel: string;
  caller: { name: string; phone: string; tags: readonly string[] };
  transcript: string;
  subCard: { title: string; staff: string; status: 'Available' | 'Locked' | 'Unavailable' };
};

export type VoiceProductBrand = {
  slug: string;
  companyName: string;
  companyTag: string;
  path: string;
  heroImage: string;
  accent: string;
  accentLight: string;
  accentSoft: string;
  gradient: string;
  glow: string;
  eyebrow: string;
  h1: string;
  hook: string;
  ownerPain: string;
  guestGain: string;
  wedge: string;
  doctrine: string;
  metric: { value: string; label: string };
  demoScript: DemoLine[];
  useCases: VoiceUseCase[];
  faqs: { question: string; answer: string }[];
  h360Href?: string;
  related: { label: string; href: string }[];
};

const GATE = (q: string, a: string) => ({ question: q, answer: a });

export const VOICE_PRODUCTS: VoiceProductBrand[] = [
  {
    slug: 'ai-restaurant-voice-host',
    companyName: 'HOST',
    companyTag: 'Restaurant voice AI · Malta',
    path: '/services/ai-restaurant-voice-host',
    heroImage: '/voice-products/voice-host-restaurant-hero.png',
    accent: '#094413',
    accentLight: '#4ade80',
    accentSoft: 'rgba(74,222,128,0.14)',
    gradient: 'linear-gradient(165deg, #020806 0%, #0a1a12 45%, #041008 100%)',
    glow: 'radial-gradient(ellipse 80% 60% at 65% 18%, rgba(74,222,128,0.32) 0%, transparent 55%)',
    eyebrow: 'HOST · by OARC Digital',
    h1: 'The AI superhost for Malta restaurants — answers every call, books every table.',
    hook: 'Talk to book. We train the brain. You keep control.',
    ownerPain: 'Friday rush. Host is seating. Voicemail fills. Covers walk next door.',
    guestGain: 'They call at 2am — someone warm answers, books them, sends confirmation.',
    wedge: 'Not a call-centre script — OARC shadow-trains on your menu, tone, and Malta ops.',
    doctrine: 'Missed calls are empty tables. A host that learns your menu pays for itself on one Saturday.',
    metric: { value: '24/7', label: 'every call answered' },
    h360Href: '/h360/restaurant-phone-ai-malta',
    demoScript: [
      { who: 'guest', text: 'Hi — table for eight on Saturday evening?' },
      { who: 'ai', text: 'Terrace at 7:30pm is open — shall I lock it in?' },
      { who: 'guest', text: 'Yes. One guest is gluten-free.' },
      { who: 'ai', text: 'Noted. Confirmation on its way — see you Saturday.' },
      { who: 'staff', text: 'Party of 8 · Sat 19:30 · terrace · GF noted', sub: 'Staff alert · dashboard' },
    ],
    useCases: [
      { id: 'rec', label: 'AI Reception', headline: 'Every call answered — even Friday rush.', detail: 'Hours, parking, directions — warm voice, zero hold music.', metric: '24/7', metricLabel: 'line live', caller: { name: 'Marco Attard', phone: '+356 79xx', tags: ['Regular', 'Terrace'] }, transcript: 'Kitchen open till 11pm — want me to hold a table?', subCard: { title: 'Terrace check', staff: 'Host · Sandra', status: 'Available' } },
      { id: 'book', label: 'AI Bookings', headline: 'Talk. Book. Done.', detail: 'Party size, allergies — locked. No double bookings.', metric: '0', metricLabel: 'double books', caller: { name: 'Elena Vella', phone: '+356 99xx', tags: ['Party of 4'] }, transcript: 'Friday 20:15 inside — locking now. SMS sent.', subCard: { title: 'H360 BOOKING', staff: 'Fri 20:15', status: 'Locked' } },
      { id: 'vip', label: 'VIP Routing', headline: 'Regulars flagged. Managers looped in.', detail: 'Large parties, private dining, complaints — routed right.', metric: 'VIP', metricLabel: 'routing', caller: { name: 'Sarah Camilleri', phone: '+356 21xx', tags: ['Corporate', '20 covers'] }, transcript: 'Private room + wine pairing — briefing events now.', subCard: { title: 'Events', staff: 'Manager · Luca', status: 'Unavailable' } },
      { id: 'care', label: 'Guest Care', headline: 'Allergies and menu — accurate.', detail: 'Trained on your menu — not a generic FAQ.', metric: '1', metricLabel: 'brain', caller: { name: 'Keith Borg', phone: '+356 77xx', tags: ['Nut allergy'] }, transcript: 'Three mains nut-free — flagged on the booking.', subCard: { title: 'Allergy', staff: 'Kitchen', status: 'Available' } },
      { id: 'out', label: 'Follow-up', headline: 'Confirmations before service.', detail: 'Outbound SMS and calls — table released if they ghost.', metric: '−60%', metricLabel: 'no-shows', caller: { name: 'David Grech', phone: '+356 79xx', tags: ['Confirm'] }, transcript: 'Confirming tomorrow 19:30 — reply YES to hold.', subCard: { title: 'Outbound', staff: 'Auto · sent', status: 'Available' } },
    ],
    faqs: [
      GATE('What is HOST for restaurants in Malta?', 'HOST is OARC Digital\'s restaurant phone AI — answers every inbound call 24/7, books tables, handles allergies and events, escalates to staff when needed. Built for Malta operators; trained only by OARC on your menu and tone.'),
      GATE('Is this the same as H360 Voice Host?', 'Yes — HOST on OARC Digital is the commercial entry. H360 Voice Host at /h360/restaurant-phone-ai-malta is the full product page inside the restaurant stack. Same brain, same training.'),
      GATE('Will it sound robotic?', 'Tuned for latency, tone, and restaurant vocabulary — party sizes, terrace vs inside, festa hours. Weekly training on your transcripts.'),
      GATE('What if the AI cannot answer?', 'Transfers to a human with full context or pings duty manager on WhatsApp. You set the rules.'),
    ],
    related: [
      { label: 'H360 Voice Host (full product)', href: '/h360/restaurant-phone-ai-malta' },
      { label: 'H360 Bookings', href: '/h360/restaurant-booking-system-malta' },
      { label: 'AI Agents hub', href: '/ai-agents' },
    ],
  },
  {
    slug: 'ai-voice-receptionist',
    companyName: 'FRONT',
    companyTag: 'AI reception · any business',
    path: '/services/ai-voice-receptionist',
    heroImage: '/voice-products/voice-receptionist-hero.png',
    accent: '#b45309',
    accentLight: '#fbbf24',
    accentSoft: 'rgba(251,191,36,0.14)',
    gradient: 'linear-gradient(165deg, #0c0a04 0%, #1a1408 48%, #060806 100%)',
    glow: 'radial-gradient(ellipse 70% 55% at 68% 12%, rgba(251,191,36,0.28) 0%, transparent 50%)',
    eyebrow: 'FRONT · by OARC Digital',
    h1: 'AI reception that picks up every time — routes, books, remembers callers.',
    hook: 'Your front desk never goes to voicemail again.',
    ownerPain: 'Reception is on another call. The new client hangs up. You find out from a competitor\'s Instagram.',
    guestGain: 'They get a warm answer, the right department, and a confirmation — first ring.',
    wedge: 'Not a generic answering service — shadow-trained on your scripts, hours, and VIP list.',
    doctrine: 'The front desk is the front door. FRONT keeps it open 24/7 without hiring three people.',
    metric: { value: '<2s', label: 'average answer time' },
    demoScript: [
      { who: 'guest', text: 'Hi — I need to speak with someone about a quote.' },
      { who: 'ai', text: 'Happy to help. Are you an existing client or is this a new enquiry?' },
      { who: 'guest', text: 'New — office fit-out in Sliema.' },
      { who: 'ai', text: 'I\'ll book you with sales — Thursday 10am or Friday 2pm?' },
      { who: 'staff', text: 'New lead · fit-out · Thu 10:00 booked', sub: 'Sales alert · CRM logged' },
    ],
    useCases: [
      { id: 'ans', label: 'Answer', headline: 'Every ring answered.', detail: 'No hold music. No voicemail lottery.', metric: '24/7', metricLabel: 'coverage', caller: { name: 'James Cole', phone: '+356 21xx', tags: ['New lead'] }, transcript: 'Thanks for calling — how can I route you today?', subCard: { title: 'Queue', staff: '0 waiting', status: 'Available' } },
      { id: 'route', label: 'Route', headline: 'Right person, first time.', detail: 'Department rules, VIP lines, after-hours paths.', metric: '3', metricLabel: 'departments', caller: { name: 'Anna Borg', phone: '+356 99xx', tags: ['VIP', 'Member'] }, transcript: 'Connecting you to your account manager now.', subCard: { title: 'VIP route', staff: 'Account · Mark', status: 'Available' } },
      { id: 'book', label: 'Book', headline: 'Meetings locked on the calendar.', detail: 'Syncs with Google, Outlook, Cal.com.', metric: '0', metricLabel: 'double books', caller: { name: 'Paul Micallef', phone: '+356 79xx', tags: ['Meeting'] }, transcript: 'Tuesday 14:00 confirmed — invite sent.', subCard: { title: 'Calendar', staff: 'Tue 14:00', status: 'Locked' } },
      { id: 'faq', label: 'FAQ', headline: 'Hours, location, pricing basics.', detail: 'Accurate answers from your approved brain.', metric: '100%', metricLabel: 'on-script', caller: { name: 'Lisa Farrugia', phone: '+356 77xx', tags: ['FAQ'] }, transcript: 'We\'re open Mon–Sat 9–6 — Valletta office has parking behind.', subCard: { title: 'Knowledge', staff: 'Approved FAQ', status: 'Available' } },
      { id: 'esc', label: 'Escalate', headline: 'Human when it matters.', detail: 'Tone detection — transfer with full transcript.', metric: 'Full', metricLabel: 'context', caller: { name: 'Chris Vella', phone: '+356 21xx', tags: ['Urgent'] }, transcript: 'I hear this is urgent — connecting a manager now.', subCard: { title: 'Escalation', staff: 'Manager', status: 'Unavailable' } },
    ],
    faqs: [
      GATE('What is FRONT AI reception?', 'FRONT is OARC Digital\'s AI answering service for Malta businesses — answers calls, routes departments, books meetings, and escalates with full context. Trained on your scripts, not a generic call centre.'),
      GATE('Can FRONT keep our existing number?', 'Yes — forward your line or provision a Malta number. Guests dial the same number.'),
      GATE('Does it work after hours?', 'Built for 24/7 — nights, weekends, public holidays. You set who gets paged.'),
    ],
    related: [{ label: 'HOST · Restaurants', href: '/services/ai-restaurant-voice-host' }, { label: 'LINE · CSR', href: '/services/ai-voice-csr' }, { label: 'AI Agents', href: '/ai-agents' }],
  },
  {
    slug: 'ai-voice-csr',
    companyName: 'LINE',
    companyTag: 'AI customer service · voice + text',
    path: '/services/ai-voice-csr',
    heroImage: '/voice-products/voice-csr-hero.png',
    accent: '#0369a1',
    accentLight: '#38bdf8',
    accentSoft: 'rgba(56,189,248,0.14)',
    gradient: 'linear-gradient(165deg, #04080c 0%, #081018 50%, #050505 100%)',
    glow: 'radial-gradient(ellipse 70% 55% at 68% 12%, rgba(56,189,248,0.28) 0%, transparent 50%)',
    eyebrow: 'LINE · by OARC Digital',
    h1: 'AI CSR — billing, rescheduling, follow-ups, reminders. Like your best agent.',
    hook: 'Customers get answers. Your team stops drowning in repeat calls.',
    ownerPain: 'Support queue is 40 deep. Same three questions all day. Good staff quit.',
    guestGain: 'They call about a bill — resolved in two minutes, no callback tag.',
    wedge: 'Not offshore scripts — trained on your policies, tickets, and Malta compliance tone.',
    doctrine: 'Repeat questions should not burn salary. LINE handles volume; humans handle edge cases.',
    metric: { value: '96%', label: 'CSAT target on trained flows' },
    demoScript: [
      { who: 'guest', text: 'I was charged twice on my last invoice.' },
      { who: 'ai', text: 'I can see the duplicate — I\'ll raise a refund ticket now. Reference OARC-8842.' },
      { who: 'guest', text: 'How long will that take?' },
      { who: 'ai', text: 'Finance SLA is 3 business days. I\'ll SMS you when it lands.' },
      { who: 'staff', text: 'Duplicate charge · €49 · refund queued', sub: 'Finance ticket · priority' },
    ],
    useCases: [
      { id: 'bill', label: 'Billing', headline: 'Invoices and payments explained.', detail: 'Pulls from your billing system when integrated.', metric: '2 min', metricLabel: 'avg resolve', caller: { name: 'Maria Attard', phone: '+356 79xx', tags: ['Billing'] }, transcript: 'Your last payment posted Tuesday — receipt emailed.', subCard: { title: 'Billing', staff: 'Synced', status: 'Available' } },
      { id: 'sched', label: 'Reschedule', headline: 'Move appointments without phone tag.', detail: 'Calendar sync + confirmation SMS.', metric: '0', metricLabel: 'missed slots', caller: { name: 'Tom Grech', phone: '+356 99xx', tags: ['Reschedule'] }, transcript: 'Moved to Friday 11am — old slot released.', subCard: { title: 'Calendar', staff: 'Fri 11:00', status: 'Locked' } },
      { id: 'happy', label: 'Happy calls', headline: 'Post-job feedback captured.', detail: 'Drafts review-ready notes for your team.', metric: 'Auto', metricLabel: 'drafted', caller: { name: 'Jessi S.', phone: '+356 21xx', tags: ['Feedback'] }, transcript: 'Thanks — I\'ve logged your feedback for the team lead.', subCard: { title: 'CRM', staff: 'Note saved', status: 'Available' } },
      { id: 'rem', label: 'Reminders', headline: 'Outbound reminders that get answered.', detail: 'SMS + voice cadence you control.', metric: '98%', metricLabel: 'SMS open', caller: { name: 'System', phone: 'Outbound', tags: ['Reminder'] }, transcript: 'Reminder: appointment tomorrow 10am — reply YES.', subCard: { title: 'Outbound', staff: 'Sent', status: 'Available' } },
      { id: 'esc', label: 'Escalate', headline: 'Angry caller → human with context.', detail: 'Sentiment detection + warm transfer.', metric: 'Full', metricLabel: 'transcript', caller: { name: 'Angry caller', phone: '+356 77xx', tags: ['Escalation'] }, transcript: 'Let me connect a senior agent — they\'ll see everything we discussed.', subCard: { title: 'Transfer', staff: 'Senior', status: 'Unavailable' } },
    ],
    faqs: [
      GATE('What is LINE AI CSR?', 'LINE is OARC Digital\'s AI customer service agent for voice and text — handles billing questions, rescheduling, reminders, and follow-ups. Escalates with full transcript when needed.'),
      GATE('Does LINE replace my support team?', 'It removes repetitive tier-1 volume so humans focus on complex cases. You keep full dashboard control.'),
    ],
    related: [{ label: 'FRONT · Reception', href: '/services/ai-voice-receptionist' }, { label: 'RETURN · Follow-up', href: '/services/ai-voice-follow-up' }, { label: 'AI Support Specialist', href: '/services/ai-support-specialist' }],
  },
  {
    slug: 'ai-voice-dispatcher',
    companyName: 'ROUTE',
    companyTag: 'AI dispatcher · field service',
    path: '/services/ai-voice-dispatcher',
    heroImage: '/voice-products/voice-dispatcher-hero.png',
    accent: '#c2410c',
    accentLight: '#fb923c',
    accentSoft: 'rgba(251,146,60,0.14)',
    gradient: 'linear-gradient(165deg, #0c0804 0%, #1a1008 48%, #060806 100%)',
    glow: 'radial-gradient(ellipse 70% 55% at 70% 15%, rgba(251,146,60,0.28) 0%, transparent 50%)',
    eyebrow: 'ROUTE · by OARC Digital',
    h1: 'AI dispatcher — qualify jobs, assign techs, protect capacity. Like Sameday, built for Malta.',
    hook: 'High-value jobs first. Right tech. Clean data on the board.',
    ownerPain: 'Dispatcher is overwhelmed. Wrong tech sent. Job value lost on the drive.',
    guestGain: 'They call with an emergency — booked to the right slot in one conversation.',
    wedge: 'Not a call centre — trained on your service area, tags, membership, and dispatch rules.',
    doctrine: 'Dispatch is revenue routing. ROUTE prioritises margin, not just first-available.',
    metric: { value: '88%+', label: 'booking rate on qualified calls' },
    demoScript: [
      { who: 'guest', text: 'Boiler not heating — need someone today in Mosta.' },
      { who: 'ai', text: 'Member account found. Next slot is 2–4pm with Marco — shall I lock it?' },
      { who: 'guest', text: 'Yes — it\'s the unit in the spare room.' },
      { who: 'ai', text: 'Booked. Marco has your address and access notes. SMS on the way.' },
      { who: 'staff', text: 'Job #88321 · Mosta · 14:00 · Marco · member', sub: 'Dispatch board · tagged' },
    ],
    useCases: [
      { id: 'qual', label: 'Qualify', headline: 'Urgency, area, job type — scored.', detail: 'Tags membership, warranty, repeat client.', metric: 'Auto', metricLabel: 'scored', caller: { name: 'Homeowner', phone: '+356 21xx', tags: ['Emergency'] }, transcript: 'Service area confirmed — prioritising today.', subCard: { title: 'Qualify', staff: 'Score: high', status: 'Available' } },
      { id: 'cap', label: 'Capacity', headline: 'Protect the board.', detail: 'Won\'t double-book techs or oversell slots.', metric: '0', metricLabel: 'double dispatch', caller: { name: 'Caller', phone: '+356 79xx', tags: ['Slot'] }, transcript: 'Only afternoon left — morning is full.', subCard: { title: 'Capacity', staff: 'PM open', status: 'Locked' } },
      { id: 'tag', label: 'Tags', headline: 'Member · VIP · warranty flags.', detail: 'Tech sees context before arrival.', metric: '100%', metricLabel: 'tagged', caller: { name: 'Member', phone: '+356 99xx', tags: ['Member'] }, transcript: 'Member pricing applied — noted on ticket.', subCard: { title: 'Tags', staff: 'Member', status: 'Available' } },
      { id: 'sync', label: 'Sync', headline: 'Job lands on your board.', detail: 'API + Zapier to ServiceTitan-style tools.', metric: 'API', metricLabel: 'ready', caller: { name: 'System', phone: 'Board', tags: ['Sync'] }, transcript: 'Job pushed to dispatch — tech notified.', subCard: { title: 'Integration', staff: 'Live', status: 'Available' } },
      { id: 'esc', label: 'Escalate', headline: 'Complex job → human dispatcher.', detail: 'Full brief attached.', metric: 'Full', metricLabel: 'brief', caller: { name: 'Commercial', phone: '+356 21xx', tags: ['Complex'] }, transcript: 'This needs a quote visit — looping dispatch lead.', subCard: { title: 'Human', staff: 'Lead', status: 'Unavailable' } },
    ],
    faqs: [
      GATE('What is ROUTE AI dispatcher?', 'ROUTE is OARC Digital\'s AI dispatcher for field service — qualifies inbound calls, assigns technicians, manages capacity, and syncs to your job board. Built for Malta HVAC, plumbing, and trades.'),
      GATE('Does ROUTE integrate with my software?', 'Yes — API, Zapier, and direct integrations where available. We map your dispatch rules in onboarding.'),
    ],
    related: [{ label: 'CLOSE · Sales', href: '/services/ai-voice-sales' }, { label: 'LINE · CSR', href: '/services/ai-voice-csr' }, { label: 'AI Agents', href: '/ai-agents' }],
  },
  {
    slug: 'ai-voice-sales',
    companyName: 'CLOSE',
    companyTag: 'AI phone sales · memberships & plans',
    path: '/services/ai-voice-sales',
    heroImage: '/voice-products/voice-sales-hero.png',
    accent: '#a16207',
    accentLight: '#fcd34d',
    accentSoft: 'rgba(252,211,77,0.12)',
    gradient: 'linear-gradient(165deg, #0a0804 0%, #141008 50%, #060806 100%)',
    glow: 'radial-gradient(ellipse 75% 55% at 68% 12%, rgba(252,211,77,0.25) 0%, transparent 50%)',
    eyebrow: 'CLOSE · by OARC Digital',
    h1: 'AI sales on the phone — memberships, plans, upsells. Your best closer, 24/7.',
    hook: 'Inbound intent captured. Outbound follow-up relentless.',
    ownerPain: 'Leads call after hours. Nobody closes. Competitor with faster callback wins.',
    guestGain: 'They ask about pricing — get a clear answer and a signed agreement link.',
    wedge: 'Not a script reader — trained on your packages, objections, and Malta buyer tone.',
    doctrine: 'Speed-to-lead is the whole game. CLOSE answers in seconds, follows up for days.',
    metric: { value: '24/7', label: 'speed-to-lead' },
    demoScript: [
      { who: 'guest', text: 'What\'s included in the annual maintenance plan?' },
      { who: 'ai', text: 'Two visits, priority booking, 15% off parts — €890/year. Want the agreement emailed?' },
      { who: 'guest', text: 'Send it — I\'ll sign tonight.' },
      { who: 'ai', text: 'Sent to your email. I\'ll follow up tomorrow if unsigned.' },
      { who: 'staff', text: 'Plan quote · €890 · agreement sent', sub: 'Pipeline · hot lead' },
    ],
    useCases: [
      { id: 'in', label: 'Inbound', headline: 'Answer pricing calls instantly.', detail: 'Packages, financing, objections — on script.', metric: '<2s', metricLabel: 'answer', caller: { name: 'Lead', phone: '+356 79xx', tags: ['Pricing'] }, transcript: 'Happy to walk through plans — which service line?', subCard: { title: 'Pipeline', staff: 'New lead', status: 'Available' } },
      { id: 'mem', label: 'Memberships', headline: 'Sell plans on the call.', detail: 'Annual agreements, payment plans.', metric: 'Auto', metricLabel: 'agreement', caller: { name: 'Owner', phone: '+356 99xx', tags: ['Membership'] }, transcript: 'Membership saves 20% — shall I email terms?', subCard: { title: 'Agreement', staff: 'PDF sent', status: 'Locked' } },
      { id: 'up', label: 'Upsell', headline: 'Add-ons on every qualified call.', detail: 'Bundles, premium tiers, cross-sell.', metric: '+', metricLabel: 'AOV', caller: { name: 'Client', phone: '+356 21xx', tags: ['Upsell'] }, transcript: 'Premium tier includes weekend priority — interested?', subCard: { title: 'Upsell', staff: 'Offer logged', status: 'Available' } },
      { id: 'out', label: 'Outbound', headline: 'Follow Angi-style leads in minutes.', detail: 'Text + call cadence until booked or dead.', metric: 'Fast', metricLabel: 'speed-to-lead', caller: { name: 'Web lead', phone: '+356 77xx', tags: ['Speed'] }, transcript: 'Saw your enquiry — still need a quote visit?', subCard: { title: 'Outbound', staff: 'Attempt 1', status: 'Available' } },
      { id: 'crm', label: 'CRM', headline: 'Every call logged.', detail: 'HubSpot, Salesforce, Pipedrive sync.', metric: '100%', metricLabel: 'logged', caller: { name: 'System', phone: 'CRM', tags: ['Sync'] }, transcript: 'Call summary pushed to deal record.', subCard: { title: 'CRM', staff: 'Synced', status: 'Available' } },
    ],
    faqs: [
      GATE('What is CLOSE AI sales?', 'CLOSE is OARC Digital\'s AI phone sales agent — handles inbound pricing calls, sells memberships and packages, sends agreements, and runs outbound follow-up cadences.'),
      GATE('Can CLOSE negotiate payment plans?', 'Within rules you set — deposit amounts, instalments, and approval gates are configured in onboarding.'),
    ],
    related: [{ label: 'AI SDR Agent', href: '/services/ai-sdr-agent' }, { label: 'ROUTE · Dispatcher', href: '/services/ai-voice-dispatcher' }, { label: 'RETURN · Follow-up', href: '/services/ai-voice-follow-up' }],
  },
  {
    slug: 'ai-voice-follow-up',
    companyName: 'RETURN',
    companyTag: 'AI outbound · confirmations & win-back',
    path: '/services/ai-voice-follow-up',
    heroImage: '/voice-products/voice-followup-hero.png',
    accent: '#7c3aed',
    accentLight: '#c084fc',
    accentSoft: 'rgba(192,132,252,0.14)',
    gradient: 'linear-gradient(165deg, #080612 0%, #120a22 50%, #050505 100%)',
    glow: 'radial-gradient(ellipse 70% 55% at 68% 12%, rgba(192,132,252,0.28) 0%, transparent 50%)',
    eyebrow: 'RETURN · by OARC Digital',
    h1: 'AI follow-up — confirmations, no-show recovery, lapsed customer win-back.',
    hook: 'Never forget to call back. Never lose a table or job to ghosting.',
    ownerPain: 'No-shows kill Friday. Lapsed customers never get a personal nudge.',
    guestGain: 'They get a friendly reminder — reply YES and the booking holds.',
    wedge: 'Pre-built outbound campaigns — voice + SMS — tuned by OARC, controlled by you.',
    doctrine: 'The money is in the follow-up. RETURN runs the cadence your team skips when busy.',
    metric: { value: '−60%', label: 'no-shows on reminder flows' },
    demoScript: [
      { who: 'ai', text: 'Hi Marco — confirming tomorrow 19:30 for four. Reply YES to hold your table.' },
      { who: 'guest', text: 'YES' },
      { who: 'ai', text: 'Perfect — see you tomorrow. Need to change? Just call back.' },
      { who: 'staff', text: 'Confirmed · Marco · 4 covers · Fri 19:30', sub: 'No-show risk cleared' },
    ],
    useCases: [
      { id: 'conf', label: 'Confirm', headline: 'Pre-visit confirmations.', detail: 'Voice + SMS — release slot if no reply.', metric: '−60%', metricLabel: 'no-shows', caller: { name: 'Guest', phone: '+356 79xx', tags: ['Confirm'] }, transcript: 'Reply YES to hold — otherwise table releases at 18:00.', subCard: { title: 'Hold', staff: 'Until 18:00', status: 'Locked' } },
      { id: 'happy', label: 'Happy call', headline: 'Post-job feedback calls.', detail: 'Drafts review-ready summaries.', metric: 'Auto', metricLabel: 'draft', caller: { name: 'Customer', phone: '+356 99xx', tags: ['Feedback'] }, transcript: 'How was the visit? Any feedback for the team?', subCard: { title: 'Review', staff: 'Draft ready', status: 'Available' } },
      { id: 'win', label: 'Win-back', headline: 'Lapsed customers reactivated.', detail: '45-day no visit → personal offer.', metric: '94%', metricLabel: 'SMS read', caller: { name: 'Lapsed', phone: '+356 77xx', tags: ['Win-back'] }, transcript: 'We miss you — quiet night offer this Thursday?', subCard: { title: 'Campaign', staff: 'Sent', status: 'Available' } },
      { id: 'lead', label: 'Lead chase', headline: 'Angi / web leads followed in minutes.', detail: 'Relentless until booked or dead.', metric: 'Min', metricLabel: 'response', caller: { name: 'Web lead', phone: '+356 21xx', tags: ['Lead'] }, transcript: 'Still need help with your enquiry?', subCard: { title: 'Cadence', staff: 'Day 2', status: 'Available' } },
      { id: 'dash', label: 'Dashboard', headline: 'Every outbound logged.', detail: 'Approve scripts · pause campaigns.', metric: 'You', metricLabel: 'control', caller: { name: 'Owner', phone: 'Dashboard', tags: ['Control'] }, transcript: 'Campaign paused — 12 pending calls held.', subCard: { title: 'Control', staff: 'Paused', status: 'Available' } },
    ],
    faqs: [
      GATE('What is RETURN AI follow-up?', 'RETURN is OARC Digital\'s outbound voice and SMS agent — confirmations, no-show recovery, happy calls, and lapsed customer win-back. You approve scripts and see every touch in the dashboard.'),
      GATE('Can RETURN make outbound calls legally in Malta?', 'Configured with consent flows and quiet hours you set. We advise on GDPR and marketing consent during onboarding.'),
    ],
    related: [{ label: 'HOST · Restaurants', href: '/services/ai-restaurant-voice-host' }, { label: 'LINE · CSR', href: '/services/ai-voice-csr' }, { label: 'Appointment Booker', href: '/services/ai-appointment-booker' }],
  },
];

export function getVoiceBrand(slug: string): VoiceProductBrand | undefined {
  return VOICE_PRODUCTS.find((p) => p.slug === slug);
}
