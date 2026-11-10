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

export const DEPARTMENTS: Record<string, DeptSeo> = {
  growth: {
    dept: "Growth",
    path: "/services/growth",
    title: "Growth Marketing Agency Malta | Get More Customers | OARC",
    description:
      "Get more customers in Malta. One award-winning team runs the whole journey: Google and Maps, social ads, video, follow-up and repeat business. Rated 5.0 on Google.",
    keyword: "Growth marketing",
    answer:
      "OARC Digital is an award-winning growth marketing agency in Birkirkara, Malta. We get you more customers by running the whole journey, from the moment a stranger finds you to the day they come back, with one team and one number to judge us on: more customers.",
    bestFor:
      "Best for Malta restaurants, clinics, shops, property agents, gaming brands and service businesses that want more enquiries, bookings and repeat customers.",
    faqs: [
      { question: "What does a growth marketing agency do?", answer: "A growth marketing agency gets you more customers, not just more likes. It runs every step that turns a stranger into a regular: being found on Google, reaching new people with ads, content that makes them care, a page that wins the comparison, fast replies and repeat sales. OARC runs all six steps with one team." },
      { question: "How do I get more customers for my business in Malta?", answer: "Fix the steps you are missing. Show up first on Google and Maps, reach people who look like your best buyers, give them a reason to care, make your price, reviews and recent work easy to find, answer every message in minutes, and ask happy customers to come back and refer a friend." },
      { question: "How is growth marketing different from a normal marketing agency?", answer: "A normal agency usually does one piece, like social posts or ads, and reports on likes or clicks. Growth marketing owns the whole journey and is judged on one number: more customers. If one step breaks, the rest never happen, so we run all of them together." },
      { question: "How fast will I see more customers?", answer: "Quick wins, like answering every enquiry in seconds and fixing your Google profile, often show within weeks. Ads and content build over the first few months. We agree the targets with you before we start, so you know exactly what we are aiming for." },
      { question: "Which businesses in Malta do you work with?", answer: "Restaurants, bars, clinics, gyms, shops, property agents, iGaming brands and local service businesses. More than 20 brands trust us, from BrewDog to Kreta." },
      { question: "Do I need to change my website or tools?", answer: "Usually not. We work with what you have: your Google profile, social accounts, website and booking system. If something is losing you customers, we show you why and fix it first." },
    ],
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
    related: [R.tom, R.aiStaff, R.sales, R.automation, R.growth],
    updated: UPDATED,
  },
};
