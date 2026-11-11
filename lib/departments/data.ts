import type { DeptSeo } from "./types";

/**
 * Search layer for each department page. The body copy is the owner's own
 * department content (components/DepartmentDetailModal.tsx). Rules used here:
 * keyword in title, description, breadcrumb and the summary sentence once each;
 * answer-first FAQs in plain words; no prices, guarantees or numbers that the
 * owner has not confirmed.
 */

const UPDATED = "November 2026";

const R = {
  growth: { label: "Get more customers", href: "/services/growth" },
  aiStaff: { label: "Hire an AI employee", href: "/services/ai-staff" },
  enquiries: { label: "Answer every enquiry in seconds", href: "/services/enquiries" },
  sales: { label: "Close more sales", href: "/services/sales" },
  social: { label: "Win on social media", href: "/services/social" },
  media: { label: "Ads that pay for themselves", href: "/services/media" },
  creative: { label: "Look like the biggest brand in your market", href: "/services/creative" },
  brand: { label: "Build a brand people pay more for", href: "/services/brand" },
  reputation: { label: "Get famous in Malta", href: "/services/reputation" },
  clarity: { label: "Know what's actually working", href: "/services/clarity" },
  operations: { label: "Get 10+ hours back every week", href: "/services/operations" },
  automation: { label: "Let your business run itself", href: "/services/automation" },
  transformation: { label: "Custom software, built for you", href: "/services/transformation" },
  h360: { label: "Run your restaurant on one system", href: "/h360" },
  why: { label: "Why OARC, not another agency", href: "/why-oarc" },
  tom: { label: "Hear Tom, our AI receptionist", href: "/voice-ai-worker" },
};

const RAW: Record<string, DeptSeo> = {
  growth: {
    dept: "Growth",
    path: "/services/growth",
    title: "Growth Marketing Malta | Digital Marketing Services | OARC",
    description:
      "Digital marketing services in Malta that bring more customers. One award-winning team runs SEO, Google Maps, ads, video, fast replies and repeat business. Free Growth Check.",
    keyword: "Growth marketing",
    answer:
      "OARC Digital is an award-winning growth marketing agency in Birkirkara, Malta. Our digital marketing services cover the whole journey: SEO and Google Maps, social and paid ads, video, your website, fast replies and repeat sales, with one team and one number to judge us on: more customers.",
    bestFor:
      "Best for Malta restaurants, clinics, shops, property agents, gaming brands and service businesses that want more enquiries, bookings and repeat customers.",
    faqs: [
      { question: "What do digital marketing services in Malta include?", answer: "SEO and Google Maps, social and paid ads, video and content, your website, fast replies and repeat sales. OARC runs them together as one journey, so more of the right customers enquire and book." },
      { question: "How much do digital marketing services cost in Malta?", answer: "It depends on which of the 6 steps you need, so we don't guess. After the free Growth Check you get one clear monthly price in writing before anything starts. We work month-to-month, so you are never locked in." },
      { question: "So what do you actually do all month?", answer: "We run the 6 steps: get you found, reach new people, give them a reason to care, win the comparison, reply fast and bring buyers back. At month end you get one number: more customers." },
      { question: "I already have someone posting for me. Why isn't that enough?", answer: "Posts are 1 step out of 6. If people like the post but can't find your price, or nobody answers their message, the sale is still lost." },
      { question: "How do you measure growth without vanity metrics?", answer: "Enquiries, booked calls, booked tables and qualified pipeline, agreed up front. We do not sell likes as success." },
      { question: "How fast will I see more customers?", answer: "The first fixes go in first: fast replies and your Google profile. Ads and content take longer to build. We agree the target with you before we start, so you know exactly what we are aiming for." },
      { question: "What is inside the free Growth Check?", answer: "6 checks, one for each step of the journey, on a 20-minute call. You leave with a 1-page scorecard, the weakest step and 3 fixes you can do yourself. It is yours even if you never hire us." },
      { question: "How do I get more customers for my business in Malta?", answer: "Fix the step you are missing. Show up first on Google and Maps, reach people who look like your best buyers, give them a reason to care, make your price, reviews and recent work easy to find, answer every message in minutes, and ask happy customers to come back and bring a friend." },
      { question: "Why do you show prices when my competitors hide theirs?", answer: "Because buyers check the price first. If yours is the only one they can see, you are the easy choice." },
      { question: "Most of my customers aren't searching for me. Now what?", answer: "That is the Reach team's job. We build audiences from the people who already paid you and put you in front of people who look just like them." },
      { question: "Is someone really going to answer my customers at 3am?", answer: "Yes. Tom, our AI receptionist, replies in seconds, 24/7, and passes anything tricky to your team." },
      { question: "Will my business show up in ChatGPT and Google's AI answers?", answer: "That is part of step 1. We work the pages, reviews and mentions those answers are built from, so you are the one they name." },
      { question: "Where do restaurants start?", answer: "Usually with H360, our restaurant system, plus this growth plan for offers and local demand." },
      { question: "Do I keep my accounts and ads if I leave?", answer: "Yes. Your accounts, ads, content and data stay yours." },
      { question: "Which businesses in Malta do you work with?", answer: "Restaurants, bars, clinics, gyms, shops, property agents, iGaming brands and local service businesses. More than 20 brands trust us, from BrewDog to Kreta." },
    ],
    leak: [
      { question: "When someone searches for what you sell near you, do you show up first?", step: "They find you", fix: "Get your Google listing, your reviews and your key pages working, so you are the one they find." },
      { question: "Do your ads reach people who look like your best customers?", step: "You find them", fix: "Build audiences from the people who already paid you, then aim your ads at people just like them." },
      { question: "Would a stranger watching your last video know why you're different?", step: "They like you", fix: "Tell your story on video: who you are, why you do it, what you stand for." },
      { question: "Can a buyer see your price, recent work and reviews in 1 minute?", step: "They pick you", fix: "Put a clear price, recent work, real reviews and a straight answer where buyers look first." },
      { question: "Does every enquiry get an answer in under 5 minutes, even at night?", step: "You stay close", fix: "Answer every enquiry in seconds, any hour, and stay in front until they are ready." },
      { question: "Do your customers get a reason to come back and bring a friend?", step: "They come back", fix: "Ask for the review at the sale, time the next offer and set up the referral." },
    ],
    offer: {
      name: "The free Growth Check",
      line: "We check all 6 steps in your business and show you which one is losing you customers.",
      checks: [
        "Find: where you show up on Google, Maps and in AI answers for 3 searches your customers type.",
        "Reach: who your ads and posts are actually reaching.",
        "Like: your last 5 posts or videos, through a stranger's eyes.",
        "Pick: the 4-point check. Price, recent work, reviews, a straight answer. Ticked or blank.",
        "Stay close: we message your business as a customer and time the reply.",
        "Come back: how you ask for reviews, repeat sales and referrals today.",
      ],
    },
    related: [R.enquiries, R.sales, R.media, R.social, R.reputation, R.tom],
    updated: UPDATED,
  },

  sales: {
    dept: "Sales",
    path: "/services/sales",
    title: "Sales Systems Malta | Close More Sales | OARC",
    description:
      "Close more sales in Malta. One team owns your whole sale: strategy, content that closes, your brand and one system you keep that answers and books every lead.",
    keyword: "Sales systems",
    answer:
      "OARC Digital builds and runs sales systems for Malta businesses. One team owns the whole sale, from the first reply to the signed deal: strategy, content that closes, how you show up, and one system you keep that answers, qualifies and books every lead.",
    bestFor:
      "Best for Malta businesses that get enquiries but lose too many of them: property agents, clinics, B2B services, events and high-ticket local businesses.",
    faqs: [
      { question: "What is a sales system?", answer: "A sales system is the set of steps and tools that turns an enquiry into a paying customer: fast replies, clear qualifying questions, follow-up that does not stop after one try, and a calendar that fills itself. We build it for you and you keep it." },
      { question: "How fast should I reply to a new lead?", answer: "Within five minutes. Research on lead response shows the odds of qualifying a lead drop sharply after the first five minutes, and about 30% of leads are never contacted at all. Being the first to reply is often the whole game." },
      { question: "Can AI answer and book my leads?", answer: "Yes. Tom, our AI receptionist, answers on WhatsApp, phone, Instagram and email in seconds, asks your qualifying questions and books straight into your calendar. Anything tricky goes to a person on your team." },
      { question: "Do you replace my sales team?", answer: "No. We make your team faster and better. The system handles first replies, booking and reminders, so your people spend their time on the calls that close." },
      { question: "How do you measure success?", answer: "By booked calls and closed revenue, not activity. We agree the number with you at the start and report on it every month." },
    ],
    intro: {
      lead: "Sales systems in Malta.",
      punch: "We help you close more sales.",
      promise: "We reply to every lead, follow up and book the calls. You get more of your enquiries turning into paying customers.",
      weDo: ["Reply to every new lead in seconds", "Follow up until they answer", "Write the messages, quotes and content that help you close", "Track every lead in one system", "Book calls straight into your calendar"],
      youGet: ["More enquiries that become customers", "No lead forgotten", "A fuller calendar", "A sales system you keep", "One number every month: booked calls and closed sales"],
    },
    offer: {
      name: "The free Lost-Sales Check",
      line: "We go through your sale like a buyer and show you where the deals are dying.",
      checks: [
        "We enquire as a customer and time your first reply.",
        "We count how many times you follow up before you give up.",
        "We read your quote or proposal the way a buyer does.",
        "We check what a buyer finds when they look you up.",
        "We map where leads sit and go cold.",
      ],
    },
    related: [R.enquiries, R.growth, R.aiStaff, R.clarity, R.tom],
    updated: UPDATED,
  },

  media: {
    dept: "Media",
    path: "/services/media",
    title: "Paid Media Malta | Ads That Pay for Themselves | OARC",
    description:
      "Paid ads in Malta that pay for themselves. Meta, Google and TikTok ads with creative that converts, tested in small flights and scaled only when they win.",
    keyword: "Paid media",
    answer:
      "OARC Digital runs paid media for Malta businesses on Meta, Google, TikTok and more. We test the right channels and creative in small flights, scale only what wins, and every euro of ad spend goes to the platforms, never to us.",
    bestFor:
      "Best for Malta businesses ready to spend on ads that want sales and bookings, not just cheap clicks.",
    faqs: [
      { question: "How much should a small business in Malta spend on ads?", answer: "Start small enough to test and big enough to learn: enough budget for a few ads per channel to get real results. We start with short test flights, keep the winners and cut the rest, then scale the budget only when the numbers prove it." },
      { question: "Which is better for Malta: Facebook ads or Google ads?", answer: "It depends on how people buy from you. Google Ads catches people already searching, which suits urgent services. Meta and TikTok reach people before they search, which suits restaurants, events, retail and brands. Most businesses do best with both, in the right mix." },
      { question: "Why are my ads not working?", answer: "Usually it is the creative, not the targeting. Nielsen found about half of an ad's sales lift comes from the creative itself. Weak hooks, the wrong offer or a slow landing page waste spend. We fix the ad and the page together." },
      { question: "Does the ad budget go to you?", answer: "No. Every euro of ad spend goes straight to Meta, Google or TikTok from your own account. Our fee is separate, so you always see exactly what the ads cost." },
      { question: "Do you make the ads too?", answer: "Yes. Our creative team makes the videos, images and copy, so the people buying the media and the people making the ads work as one team." },
    ],
    intro: {
      lead: "Paid ads in Malta.",
      punch: "Ads that pay for themselves.",
      promise: "We plan, make and run your ads on Google, Facebook, Instagram and TikTok. You get sales and bookings, not just clicks.",
      weDo: ["Pick the right platforms for your business", "Make the videos, images and words for your ads", "Test small before spending big", "Stop what doesn't work and grow what does", "Track every sale back to the ad"],
      youGet: ["More sales and bookings from your ad money", "No budget wasted on ads that don't work", "Your ad money goes straight to the platform, never through us", "A clear report of what each euro did"],
    },
    offer: {
      name: "The free Ad-Waste Check",
      line: "We open your ad accounts with you and show you which euros work and which don't.",
      checks: [
        "Where your budget went in the last 30 days.",
        "Which ads bring enquiries and which only bring clicks.",
        "The first 3 seconds of your ads: would a stranger stop?",
        "The page your ads send people to.",
        "Your tracking: are sales and enquiries being counted at all?",
      ],
    },
    related: [R.creative, R.growth, R.social, R.clarity, R.sales],
    updated: UPDATED,
  },

  social: {
    dept: "Social",
    path: "/services/social",
    title: "Social Media Strategy Malta | Win on Social Media | OARC",
    description:
      "Win on social media in Malta. Strategy, video, every platform and the numbers behind it, delivered by one team. You touch none of it.",
    keyword: "Social media",
    answer:
      "OARC Digital runs social media for Malta businesses end to end: the strategy, the story, the video, every platform and the numbers behind it, delivered by one team who does this all day, so you touch none of it.",
    bestFor:
      "Best for Malta restaurants, venues, retail, hospitality and personal brands whose customers spend time on Instagram, TikTok and Facebook.",
    faqs: [
      { question: "What does a social media agency in Malta do?", answer: "It plans what to post, makes the photos and videos, posts on every platform, replies to comments and messages, runs ads when needed and reports what is working. OARC does all of it as one team." },
      { question: "Which social media platforms matter most in Malta?", answer: "Facebook and Instagram still reach the most people in Malta, TikTok is growing fast with younger customers, and LinkedIn matters for B2B. We pick the platforms where your customers already are, not every platform at once." },
      { question: "How often should my business post on social media?", answer: "Consistently enough to stay in people's feeds, usually several times a week, with short videos doing most of the work. Quality and consistency beat volume." },
      { question: "Do you make the videos and photos?", answer: "Yes. Our studio shoots and edits the videos, reels and photos, so your feed looks like the biggest brand in your market." },
      { question: "How do I know if social media is working?", answer: "We track what matters to the business: messages, bookings, sales and followers who buy, not just likes. You get a clear monthly answer on what worked and what we change next." },
    ],
    intro: {
      lead: "Social media management in Malta.",
      punch: "We do all of it for you.",
      promise: "We plan, film, edit, post and reply. You get social media that brings messages and customers, and you touch none of it.",
      weDo: ["Plan what to post each month", "Film and edit your videos and photos", "Post on every platform", "Reply to comments and messages", "Tell you what worked"],
      youGet: ["A feed that looks like the biggest brand in your market", "More messages and bookings from social media", "Your time back", "A clear answer every month on what worked"],
    },
    offer: {
      name: "The free Social Check",
      line: "We look at your social the way a new customer does and show you what to fix first.",
      checks: [
        "Your last 9 posts, through a stranger's eyes.",
        "Your bio and link: can someone book or buy in 2 taps?",
        "How fast your DMs and comments get an answer.",
        "What your 3 closest competitors post, side by side with you.",
        "Which of your posts brought messages, not just likes.",
      ],
    },
    related: [R.creative, R.media, R.reputation, R.growth, R.brand],
    updated: UPDATED,
  },

  clarity: {
    dept: "Clarity",
    path: "/services/clarity",
    title: "Marketing Analytics Malta | Know What's Working | OARC",
    description:
      "Know what's actually working in your marketing. Analytics for Malta businesses that hands you one straight answer: what makes money, what wastes it, what to do next.",
    keyword: "Marketing analytics",
    answer:
      "OARC Digital gives Malta businesses marketing analytics that end in a decision, not a dashboard: one straight answer on what is making you money, what is wasting it, and what to do next.",
    bestFor:
      "Best for Malta business owners spending on marketing who cannot say which channel actually brings customers.",
    faqs: [
      { question: "How do I know which marketing is actually working?", answer: "Track every enquiry and sale back to where it came from: Google, ads, social, referrals or walk-ins. We set up the tracking, check it is correct, and turn it into one simple answer each month." },
      { question: "What should a small business track in marketing?", answer: "Three things first: how many enquiries you get, where they came from, and how many became paying customers. Likes and reach come after that." },
      { question: "Do I need Google Analytics?", answer: "Yes, or a similar tool, set up properly with conversions tracked. Many Malta websites have analytics installed but not measuring enquiries or sales, so the numbers mislead. We fix that first." },
      { question: "Can you show me where I'm wasting money?", answer: "Yes. We compare cost against customers for every channel and campaign, so you can see what to cut and where to put the money instead." },
      { question: "Will I get a dashboard?", answer: "You get the answer first, in plain words, and the dashboard behind it if you want to check the numbers yourself." },
    ],
    intro: {
      lead: "Marketing analytics in Malta.",
      punch: "Know what's actually working.",
      promise: "We track where your customers come from. You get one straight answer: what makes you money, what wastes it and what to do next.",
      weDo: ["Set up your tracking properly", "Track every enquiry and sale back to where it came from", "Work out what each channel costs you per customer", "Tell you what to cut and what to grow"],
      youGet: ["One clear answer every month", "No more guessing", "Money moved from what is wasted to what works", "The numbers behind it, if you want to check"],
    },
    offer: {
      name: "The free What's-Working Check",
      line: "We check your numbers and tell you, in plain words, what brings customers and what wastes money.",
      checks: [
        "Is your tracking installed, and is it counting enquiries and sales?",
        "Where your last 20 customers really came from.",
        "What each channel costs you per customer.",
        "The 1 thing to cut.",
        "The 1 thing to double.",
      ],
    },
    related: [R.media, R.growth, R.sales, R.operations, R.why],
    updated: UPDATED,
  },

  aiStaff: {
    dept: "AI Staff",
    path: "/services/ai-staff",
    title: "AI Staff Malta | Hire AI Employees | OARC",
    description:
      "Hire an AI employee in Malta. AI staff for phone and WhatsApp support, sales, booking and research, trained on your business and live in about a week.",
    keyword: "AI staff",
    answer:
      "OARC Digital builds AI employees for Malta businesses: AI staff for voice support, sales, customer concierge and competitor research, trained on your business, plugged into your systems and working under your control with your data protected.",
    bestFor:
      "Best for Malta businesses that miss calls and messages, answer the same questions all day, or need help without hiring another person.",
    faqs: [
      { question: "What is an AI employee?", answer: "An AI employee is software trained on your business that does a real job, like answering calls and WhatsApp messages, booking appointments or following up leads. It works 24/7 and passes anything it cannot handle to your team." },
      { question: "Can an AI answer my business phone calls?", answer: "Yes. Tom, our AI receptionist, answers calls and messages in seconds, day or night, in English, Maltese and Italian. He answers questions, books people in and hands tricky calls to a person." },
      { question: "Is my customer data safe with AI staff?", answer: "Yes. Your AI staff work under your control, with your data protected and only the access they need. You decide what they can see and do." },
      { question: "How long does it take to set up AI staff?", answer: "About a week for a standard AI employee, trained on your business and connected to your tools. Bigger custom builds take longer, and we tell you the timeline before we start." },
      { question: "Will AI staff replace my team?", answer: "No. They take the repetitive work, like the same questions and late-night messages, so your people can focus on customers and the work that needs a human." },
    ],
    intro: {
      lead: "AI staff in Malta.",
      punch: "Hire an AI employee.",
      promise: "We build AI employees trained on your business. They answer calls and messages, book customers and follow up leads, day and night.",
      weDo: ["Find the job an AI employee should take first", "Train it on your business", "Connect it to your phone, WhatsApp and tools", "Keep it under your control, with your data protected", "Pass anything tricky to your team"],
      youGet: ["Every call and message answered", "Bookings while you sleep", "Your team free for the work that needs a person", "Help without hiring another person"],
    },
    offer: {
      name: "The free AI-Employee Check",
      line: "We find the 1 job in your business an AI employee should take first, and show you it working.",
      checks: [
        "We call and message your business after hours and time the answer.",
        "We list the 5 questions your team answers most.",
        "We pick the 1 job an AI employee should take first.",
        "We show which of your tools it plugs into.",
        "A live demo with Tom, our AI receptionist.",
      ],
    },
    related: [R.tom, R.enquiries, R.automation, R.operations, R.sales],
    updated: UPDATED,
  },

  creative: {
    dept: "Creative",
    path: "/services/creative",
    title: "Creative Agency Malta — Make Us Look Like a Billion | OARC",
    description:
      "Creative agency in Malta that makes you look like the biggest brand in your market: big ideas, social content, films and ad creative that converts.",
    keyword: "Creative agency",
    answer:
      "OARC Digital is a creative agency in Malta that makes a business of any size look like the category leader: big ideas and campaigns, an always-on social and content studio, films, ad creative that converts, and a system that keeps it all on brand.",
    bestFor:
      "Best for Malta brands that want to look premium, be remembered and charge more for the same product.",
    faqs: [
      { question: "What does a creative agency do?", answer: "A creative agency comes up with the ideas and makes the work people see: campaigns, videos, photos, social content, ads and brand design. OARC makes all of it with one team." },
      { question: "Can you make a small business look like a big brand?", answer: "Yes. Buyers judge you in seconds. A sharp idea, a distinctive look and enough good content to be everywhere make a small business read as the leader in its market." },
      { question: "Do you shoot videos and photos in Malta?", answer: "Yes. Our studio shoots and edits films, reels, product and food photography and ad videos across Malta and Gozo." },
      { question: "Do I own the creative you make?", answer: "Yes. The designs, videos and files we make for you are yours to keep and use." },
    ],
    intro: {
      lead: "Creative agency in Malta.",
      punch: "We make you look like the biggest brand in your market.",
      promise: "We come up with the ideas and make the ads, videos, photos and designs. You get a business that looks like the leader.",
      weDo: ["Come up with the idea", "Film your videos and take your photos", "Design your ads and social content", "Keep everything looking like one brand"],
      youGet: ["A look people remember", "Ads that get noticed", "Content for every platform", "Files that are yours to keep"],
    },
    offer: {
      name: "The free Brand-Look Check",
      line: "We put you next to your competitors and show you, honestly, who looks like the leader.",
      checks: [
        "The 5-second test on your website and your feed.",
        "You and 3 competitors, side by side.",
        "Your last ad: what works and what doesn't.",
        "Where your look breaks: different logos, colours or tone.",
        "The 1 idea we would make first.",
      ],
    },
    related: [R.brand, R.social, R.media, R.reputation, R.growth],
    updated: UPDATED,
  },

  operations: {
    dept: "Operations",
    path: "/services/operations",
    title: "Operations Help Malta | Get 10+ Hours Back Every Week | OARC",
    description:
      "Get hours back every week. We find the repetitive jobs in your Malta business (answering, booking, chasing, data entry, reports) and make them run themselves.",
    keyword: "Business operations",
    answer:
      "OARC Digital takes repetitive work off Malta business owners. We find the jobs that eat your week, like answering, booking, chasing, data entry and reporting, take them off you and build them to run themselves.",
    bestFor:
      "Best for Malta owners and managers who spend evenings on admin, chasing and copy-paste instead of running the business.",
    faqs: [
      { question: "What tasks can I take off my plate?", answer: "Answering common questions, booking and rescheduling, sending reminders, chasing payments, copying data between tools and building weekly reports are the usual first wins." },
      { question: "How many hours can I save each week?", answer: "It depends on the business. We measure the hours your team spends on each repetitive job first, then show you what we can take off before we build anything." },
      { question: "Do I need new software?", answer: "Usually not. We connect and automate the tools you already use, and only suggest something new when it clearly saves time or money." },
      { question: "Is this automation or people?", answer: "Both. Our people find the work and design the fix; automation and AI staff do the repetitive part; your team keeps the decisions." },
    ],
    intro: {
      lead: "Business operations help in Malta.",
      punch: "Get hours back every week.",
      promise: "We find the jobs that repeat every week and make them run themselves. You get your time back.",
      weDo: ["List the jobs that eat your week", "Take them off you", "Set them up to run themselves", "Connect the tools you already use"],
      youGet: ["Hours back every week", "Fewer mistakes", "No more evenings on admin", "A business that does not depend on you remembering everything"],
    },
    offer: {
      name: "The free Time-Back Check",
      line: "We find the hours hiding in your week and show you which ones you can get back.",
      checks: [
        "We list the jobs that repeat every week.",
        "We put a time on each one.",
        "We mark which can run themselves.",
        "We check which tools you already pay for could do it.",
        "The first job to take off your plate.",
      ],
    },
    related: [R.automation, R.aiStaff, R.enquiries, R.transformation, R.clarity],
    updated: UPDATED,
  },

  automation: {
    dept: "Automation",
    path: "/services/automation",
    title: "Business Automation Malta | Let Your Business Run Itself | OARC",
    description:
      "Business automation for Malta: connect your tools, let the busywork trigger itself and let AI handle the routine calls, running 24/7 while you watch it work.",
    keyword: "Business automation",
    answer:
      "OARC Digital builds business automation for Malta companies: your tools connected, the busywork triggering itself and the routine calls handled by AI, running 24/7, so the business needs fewer hands to run.",
    bestFor:
      "Best for Malta businesses that copy data between tools, follow up by hand or rely on one person remembering everything.",
    faqs: [
      { question: "What is business automation?", answer: "Business automation means software does the repeatable steps for you: when a lead comes in, it is logged, answered, followed up and booked without anyone copying and pasting." },
      { question: "What can I automate in a small business?", answer: "Lead replies and follow-ups, bookings and reminders, invoices and payment chasers, moving data between your CRM, email and spreadsheets, and weekly reports." },
      { question: "Which tools do you connect?", answer: "Common ones include WhatsApp, Gmail and Outlook, Google Sheets, CRMs, booking systems, accounting tools and your website forms. If it has a way in, we can usually connect it." },
      { question: "What happens if an automation breaks?", answer: "We monitor it, fix it and tell you. Anything unusual is flagged to a person instead of failing silently." },
    ],
    intro: {
      lead: "Business automation in Malta.",
      punch: "Let your business run itself.",
      promise: "We connect your tools so the routine work happens by itself. You get a business that needs fewer hands to run.",
      weDo: ["Map how work moves through your business", "Connect your tools", "Automate replies, bookings, reminders and reports", "Watch it, and fix it if anything breaks"],
      youGet: ["No more copy and paste", "Nothing forgotten", "Work done day and night", "Fewer hands needed"],
    },
    offer: {
      name: "The free Automation Check",
      line: "We follow one lead through your business and show you every step a machine should be doing.",
      checks: [
        "We map how a lead moves through your tools.",
        "We find every copy-and-paste step.",
        "We find where things depend on one person remembering.",
        "We check which of your tools can talk to each other.",
        "The first automation worth building.",
      ],
    },
    related: [R.operations, R.aiStaff, R.enquiries, R.transformation, R.tom],
    updated: UPDATED,
  },

  transformation: {
    dept: "Transformation",
    path: "/services/transformation",
    title: "Custom Software & Digital Transformation Malta | OARC",
    description:
      "Custom software built for your Malta business. A real product and engineering team that replaces spreadsheets and WhatsApp chaos, live in weeks and yours to keep.",
    keyword: "Custom software",
    answer:
      "OARC Digital designs and builds custom software for Malta businesses that run on spreadsheets, WhatsApp and duct tape: a real product and engineering team, live in weeks, and the software is yours to keep.",
    bestFor:
      "Best for growing Malta businesses whose work no longer fits off-the-shelf tools or a pile of spreadsheets.",
    faqs: [
      { question: "When does a business need custom software?", answer: "When off-the-shelf tools no longer fit how you work, when your team copies the same data between spreadsheets, or when the business depends on one person remembering everything." },
      { question: "How long does custom software take to build?", answer: "A first working version usually goes live in weeks, not months. We release the most useful part first and build the rest on top." },
      { question: "Do I own the software?", answer: "Yes. The software, the code and the data are yours to keep." },
      { question: "Do I have to replace my current tools?", answer: "No. We connect to what already works and replace only what is holding you back." },
    ],
    intro: {
      lead: "Custom software in Malta.",
      punch: "Built for your business.",
      promise: "We design and build software around how you work. You get one system instead of spreadsheets and WhatsApp chats, and it is yours to keep.",
      weDo: ["Look at how your business really runs", "Design the system with you", "Build the most useful part first", "Connect it to the tools you keep"],
      youGet: ["One system instead of 10 spreadsheets", "A first working version in weeks", "Software, code and data that are yours"],
    },
    offer: {
      name: "The free Software Check",
      line: "We look at how your business really runs and tell you what's worth building, and what isn't.",
      checks: [
        "The spreadsheets and chats your business runs on today.",
        "Where the same data gets typed twice.",
        "What off-the-shelf tools can't do for you.",
        "The smallest first version worth building.",
        "A straight view on time and effort before you commit.",
      ],
    },
    related: [R.automation, R.operations, R.aiStaff, R.h360, R.why],
    updated: UPDATED,
  },

  reputation: {
    dept: "Reputation",
    path: "/services/reputation",
    title: "Reputation Management Malta | Get Famous in Malta | OARC",
    description:
      "Get famous in Malta. Reputation management that makes people know you before you say a word: videos, press, reviews, the right people talking and being everywhere they look.",
    keyword: "Reputation management",
    answer:
      "OARC Digital builds reputations for Malta businesses so people know you before you say a word and pick you because of it: we make the videos, get you in the news, get the right people talking and put you everywhere they look.",
    bestFor:
      "Best for Malta founders, venues and brands that want to be the name people mention first.",
    faqs: [
      { question: "What is reputation management?", answer: "Reputation management shapes what people find and feel when they look you up: your reviews, press, videos and what others say about you. Done well, people choose you before they compare prices." },
      { question: "How do I get more Google reviews in Malta?", answer: "Ask every happy customer at the right moment, make it one tap to leave a review, and reply to every review, good or bad. We set up the asking so it happens every time." },
      { question: "How do I deal with a bad review?", answer: "Reply quickly, calmly and publicly, fix the problem if it is real, and keep collecting honest reviews from happy customers so one bad review is a small part of the picture." },
      { question: "Can you get my business in the news in Malta?", answer: "We find the story worth telling and take it to the right journalists, podcasts and creators. We cannot promise coverage, but a real story told well gets picked up." },
    ],
    intro: {
      lead: "Reputation management in Malta.",
      punch: "Get famous in Malta.",
      promise: "We make the videos, get you reviews and press, and get the right people talking. You get known before you say a word.",
      weDo: ["Get you more Google reviews", "Make videos people share", "Take your story to press and creators", "Put you everywhere your customers look"],
      youGet: ["People who know your name", "More 5-star reviews", "Customers who pick you before they compare prices"],
    },
    offer: {
      name: "The free Reputation Check",
      line: "We look you up the way a customer does and show you what they find.",
      checks: [
        "What shows up when someone googles your name.",
        "Your reviews: how many, how good, how recent, and who replied.",
        "What ChatGPT and Google's AI say about you.",
        "Who is talking about you: press, creators, customers.",
        "The story about you that's worth telling.",
      ],
    },
    related: [R.creative, R.social, R.brand, R.growth, R.clarity],
    updated: UPDATED,
  },

  brand: {
    dept: "Brand",
    path: "/services/brand",
    title: "Brand Strategy Malta | Build a Brand People Pay More For | OARC",
    description:
      "Build a brand people pay more for. Brand strategy, identity, content and campaigns for Malta businesses: one team for everything customers see, hear and feel.",
    keyword: "Brand strategy",
    answer:
      "OARC Digital is one team for the entire creative world of a Malta business: brand strategy, identity, content, product and campaigns, so every image, film, word, screen, sign and space makes people feel something and choose you.",
    bestFor:
      "Best for Malta businesses launching, rebranding or tired of competing on price.",
    faqs: [
      { question: "What is brand strategy?", answer: "Brand strategy decides who you are for, what you stand for and why people should pick you, then makes everything you show the world say the same thing." },
      { question: "Why do strong brands charge more?", answer: "People pay for what they trust and remember. McKinsey found strongly branded companies outperform their markets. A clear, distinctive brand makes the same product feel worth more." },
      { question: "Do I need a rebrand?", answer: "Not always. Often the brand is fine and the problem is that it is used differently everywhere. We check first and only rebuild what is holding you back." },
      { question: "What does a brand identity include?", answer: "Your name and logo, colours, type, photography style, tone of voice and the rules that keep them consistent on every screen, sign and post." },
    ],
    intro: {
      lead: "Brand strategy in Malta.",
      punch: "Build a brand people pay more for.",
      promise: "We work out who you are for and make everything you show say the same thing. You get a brand people trust, remember and pay more for.",
      weDo: ["Work out who you are for and why they should pick you", "Design your logo, colours and style", "Write how you sound", "Make it the same everywhere"],
      youGet: ["A brand people remember", "The same look on every screen, sign and post", "A reason to charge more"],
    },
    offer: {
      name: "The free Brand Check",
      line: "We test whether a stranger gets you in 5 seconds, and show you what to fix if they don't.",
      checks: [
        "Can a stranger say what you do in 5 seconds?",
        "Does everything you show look like one company?",
        "Where you sit on price next to your competitors.",
        "What your customers say about you, next to what you say.",
        "What to keep and what to fix.",
      ],
    },
    related: [R.creative, R.reputation, R.social, R.growth, R.why],
    updated: UPDATED,
  },

  enquiries: {
    dept: "Enquiries",
    path: "/services/enquiries",
    title: "Enquiry Automation Malta | Answer Every Enquiry in Seconds | OARC",
    description:
      "Answer every enquiry in seconds. One AI across WhatsApp, phone, DMs and email that answers, qualifies, books and follows up, with every lead tracked in one pipeline.",
    keyword: "Enquiry automation",
    answer:
      "OARC Digital turns enquiries into money for Malta businesses: every enquiry answered in about four seconds, qualified, booked and chased until paid, by one AI across WhatsApp, phone, DMs and email, with every lead tracked in one pipeline.",
    bestFor:
      "Best for Malta businesses that get messages on many channels and lose leads when nobody answers fast enough.",
    faqs: [
      { question: "How can I answer every customer enquiry fast?", answer: "Put one AI receptionist on every channel. Tom answers WhatsApp, calls, Instagram and Facebook messages and email in seconds, 24/7, and books people straight into your calendar." },
      { question: "Can AI reply to WhatsApp messages for my business?", answer: "Yes. Tom replies on WhatsApp in seconds, in English, Maltese and Italian, answers common questions, qualifies the lead and books it, and hands anything tricky to your team." },
      { question: "Why does reply speed matter so much?", answer: "Buyers often go with whoever answers first. Lead response research shows you are many times more likely to qualify a lead answered within five minutes than one answered after thirty." },
      { question: "Will customers know they are talking to AI?", answer: "Yes, we are open about it. Most people care far more about getting a fast, correct answer at 11pm than about who typed it." },
      { question: "Where do all the leads go?", answer: "Into one pipeline you can see, so every enquiry from every channel is tracked from first message to paid." },
    ],
    intro: {
      lead: "Enquiry automation in Malta.",
      punch: "Answer every enquiry in seconds.",
      promise: "One AI answers your WhatsApp, calls, DMs and emails in seconds. You get every enquiry answered, booked and followed up.",
      weDo: ["Put one AI on WhatsApp, phone, Instagram, Facebook and email", "Answer in seconds, in English, Maltese and Italian", "Book customers straight into your calendar", "Follow up until they answer", "Track every lead in one place"],
      youGet: ["No missed enquiry", "More bookings", "Every lead in one list", "Replies at 3am without extra staff"],
    },
    offer: {
      name: "The free Missed-Enquiry Check",
      line: "We contact your business on every channel, as a customer, and show you who never got an answer.",
      checks: [
        "We message you on WhatsApp, Instagram and email, and we call.",
        "We time every reply.",
        "We try again after hours.",
        "We check where enquiries arrive and where they get lost.",
        "We show you what Tom would have answered, and how fast.",
      ],
    },
    related: [R.tom, R.aiStaff, R.sales, R.automation, R.growth],
    updated: UPDATED,
  },
};

/**
 * Questions every owner asks on every page: price, lock-in, what the free check is, where we
 * work. Added once here so the page and its FAQ schema always match. Pages that already
 * answer them in their own words (12+ questions) are left alone.
 */
function withShared(d: DeptSeo): DeptSeo {
  if (d.faqs.length >= 12) return d;
  const what = d.keyword.toLowerCase();
  const check = d.offer.name.replace(/^The /, "the ");
  return {
    ...d,
    faqs: [
      ...d.faqs,
      {
        question: `How much does ${what} cost in Malta?`,
        answer: `It depends on what needs fixing, so we don't guess. After ${check} you get one clear price in writing before anything starts. We work month-to-month, so you are never locked in.`,
      },
      {
        question: `What is ${check}?`,
        answer: `A free 20-minute call. ${d.offer.line} You leave with a 1-page scorecard, the biggest problem and 3 fixes you can do yourself. It is yours even if you never hire us.`,
      },
      {
        question: "Is there a contract or a lock-in?",
        answer: "No lock-in. We work month-to-month, and your accounts, content and data stay yours.",
      },
      {
        question: "Do you work with businesses all over Malta and Gozo?",
        answer: "Yes. We are based in Birkirkara and work with businesses across Malta and Gozo.",
      },
    ],
  };
}

export const DEPARTMENTS: Record<string, DeptSeo> = Object.fromEntries(
  Object.entries(RAW).map(([key, d]) => [key, withShared(d)]),
);
