// Programmatic Industry Hub Pages
// SEO: OARC Digital for [Industry] in Malta


import { ArrowRight, Phone, Mail, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { maltaIndustries, industryHubSlugs } from '@/shared/seoConfig';

// Alias singular maltaIndustries slugs to the existing plural keys in the
// industries data map so the shared slug vocabulary resolves correctly.
const industrySlugAlias: Record<string, string> = {
  'restaurant': 'restaurants',
  'hotel': 'hotels',
  'real-estate': 'real-estate',
};
const resolveIndustryKey = (slug: string) => industrySlugAlias[slug] ?? slug;
import { Button } from '@/components/ui/button';
import { NAP } from "@/lib/seo/nap";

interface IndustryData {
  name: string;
  plural: string;
  description: string;
  hero: string;
  intro: string;
  pain: string[];
  services: { slug: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

const industries: Record<string, IndustryData> = {
  restaurants: {
    name: 'Restaurant',
    plural: 'Restaurants',
    description: 'the hospitality sector',
    hero: "A Malta-Based Restaurant Marketing Agency",
    intro: "We help Malta's restaurants fill tables, grow followers, and build brands that keep customers coming back. From Valletta to St. Julian's, we know what works for food businesses in Malta.",
    pain: [
      'Low footfall during off-peak hours despite good food and service',
      'No consistent social media presence — missing TikTok and Reels entirely',
      'Losing customers to competitors with better online presence and reviews',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Daily Instagram/TikTok content that drives reservations and walk-ins' },
      { slug: 'video-production', title: 'Video Production', description: 'Food reels, chef stories, and behind-the-scenes content that performs' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Logos, menus, and brand guidelines that match your restaurant\'s personality' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Meta Ads targeting hungry locals and tourists within 5km of your venue' },
      { slug: 'web-design', title: 'Website Design', description: 'Reservation-optimised websites with online menus and Google Maps integration' },
      { slug: 'ai-support-specialist', title: 'AI Customer Support', description: 'Automated WhatsApp reservation handling and FAQ responses 24/7' },
    ],
    faqs: [
      { q: 'How quickly can OARC Digital get results for my restaurant?', a: 'Most clients see measurable engagement increases within the first 30 days. Foot traffic improvements typically become visible within 60–90 days as content builds momentum.' },
      { q: 'Do you understand the Malta restaurant market?', a: 'Yes — we work with Malta-based food businesses and understand the local audience, seasonal patterns, tourist flows, and what content resonates with both locals and visitors.' },
      { q: 'Can you help with both social media and paid ads?', a: 'Absolutely. We manage both organic content and paid campaigns together for maximum impact, ensuring your brand appears consistently whether someone is scrolling or searching.' },
      { q: 'What results have you achieved for restaurant clients?', a: 'Our restaurant clients have seen an average 340% engagement increase, 2.8x reach growth, and significant improvements in direct bookings and walk-ins within the first quarter.' },
    ],
  },
  hotels: {
    name: 'Hotel',
    plural: 'Hotels',
    description: 'the hospitality and tourism sector',
    hero: "Malta's Hotel & Hospitality Marketing Specialists",
    intro: "We help Malta's hotels reduce OTA dependency, increase direct bookings, and create content that showcases your property to the right audience at the right time.",
    pain: [
      'Over-reliance on OTAs eating into margins with high commission rates',
      'Poor visual content that fails to showcase rooms and facilities properly',
      'No automated guest communication before, during, and after stays',
    ],
    services: [
      { slug: 'video-production', title: 'Video Production', description: 'Cinematic property tours, room showcases, and experience videos' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Content strategy targeting travellers planning Malta visits' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Google Ads and Meta campaigns targeting direct booking intent' },
      { slug: 'web-design', title: 'Website Design', description: 'Direct booking-optimised website with fast load times and mobile UX' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Automated outreach to corporate travel managers and group bookers' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Pre-arrival, in-stay, and post-stay email sequences that drive loyalty' },
    ],
    faqs: [
      { q: 'Can you help reduce our OTA dependency?', a: 'Yes — we focus on building direct booking channels through SEO, paid search targeting booking-intent keywords, and email marketing to past guests.' },
      { q: 'Do you work with boutique hotels as well as large chains?', a: 'We work with properties of all sizes. Boutique hotels often benefit most from strong brand storytelling and social media — areas where we excel.' },
      { q: 'Can you produce property photography and video?', a: 'Video production is one of our core services. We create professional property tours, room videos, and social content tailored for each platform.' },
      { q: 'How do you target tourists planning to visit Malta?', a: 'Through Meta interest and behaviour targeting, Google search ads, and content strategies that intercept travellers during the research phase — often 3–8 weeks before their trip.' },
    ],
  },
  cafes: {
    name: 'Cafe',
    plural: 'Cafes',
    description: 'the cafe and coffee shop sector',
    hero: "Cafe & Coffee Shop Marketing in Malta",
    intro: "Standing out in Malta's competitive cafe scene requires more than good coffee. We help independent cafes build recognisable brands, grow loyal followings, and attract new customers every week.",
    pain: [
      'Hard to stand out when every street has multiple cafes competing for the same customers',
      'No consistent Instagram or TikTok strategy — posting sporadically with no clear brand voice',
      'Low repeat customer rate and no system to bring people back regularly',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Aesthetic, consistent content that builds a recognisable cafe brand online' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Logo, color palette, and visual identity that works on cups, signage, and Instagram' },
      { slug: 'video-production', title: 'Video Production', description: 'Latte art videos, morning vibes content, and seasonal specials reels' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Hyper-local Meta ads targeting people within walking distance of your cafe' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Loyalty program emails and WhatsApp updates for regulars' },
      { slug: 'web-design', title: 'Website Design', description: 'Simple, beautiful website with menu, opening hours, and Google Maps' },
    ],
    faqs: [
      { q: 'Is social media marketing worth it for a small cafe?', a: "Absolutely — for local food businesses, Instagram and TikTok are the highest-ROI marketing channels available. We've helped cafes grow from 200 to 10,000+ followers with consistent, quality content." },
      { q: 'What type of content works best for cafes?', a: 'Behind-the-scenes preparation videos, latte art, seasonal specials, and staff personality content consistently outperform generic promotional posts.' },
      { q: 'Can you help with a loyalty scheme?', a: 'Yes — we can set up digital loyalty and automated follow-up messages through WhatsApp or email to bring regulars back more frequently.' },
      { q: 'How much content do you create per month?', a: 'Our packages start from 12 posts per month and scale up. We handle ideation, creation, captions, hashtags, and scheduling — you focus on running your cafe.' },
    ],
  },
  bars: {
    name: 'Bar & Nightlife',
    plural: 'Bars',
    description: 'the bar and nightlife sector',
    hero: "Bar & Nightlife Marketing Agency in Malta",
    intro: "Malta's bar scene is competitive. We help bars, clubs, and nightlife venues build online audiences, promote events to the right people, and create the kind of content that makes people want to be there.",
    pain: [
      'Event promotion not reaching enough people — relying on word of mouth and last-minute posts',
      'No consistent brand identity across social platforms, signage, and promotions',
      'Poor online reputation management with unresponded reviews hurting bookings',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Event promotion, atmosphere content, and community building on Instagram and TikTok' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Event-targeted Meta ads reaching nightlife audiences in Malta and visiting tourists' },
      { slug: 'video-production', title: 'Video Production', description: 'Atmosphere reels, event highlight videos, and DJ/artist promotional content' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Visual identity that works on social media, menus, merchandise, and signage' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Event reminder sequences and guest list automation via WhatsApp' },
      { slug: 'ai-support-specialist', title: 'AI Customer Support', description: '24/7 automated responses to booking enquiries and event questions' },
    ],
    faqs: [
      { q: 'How far in advance should we promote events?', a: 'For large events, 2–3 weeks is ideal. For weekly recurring events, 5–7 days of consistent promotion typically maximises attendance. We build promotional calendars around your events schedule.' },
      { q: 'Can you help manage our online reputation?', a: 'Yes — we monitor reviews across Google, TripAdvisor, and social platforms, draft responses, and help you build a system for capturing positive reviews from satisfied guests.' },
      { q: 'Do you work with seasonal venues?', a: 'Absolutely. We build content calendars around Malta\'s seasonal tourism patterns, ramping up promotion during peak summer months and building brand presence during quieter periods.' },
      { q: 'What platforms work best for bars and nightlife?', a: 'Instagram Reels and TikTok for organic reach, Meta Ads for event targeting, and WhatsApp for direct guest communication and table bookings.' },
    ],
  },
  igaming: {
    name: 'iGaming',
    plural: 'iGaming Companies',
    description: 'the iGaming and online gaming sector',
    hero: "iGaming Marketing Agency in Malta",
    intro: "Malta is Europe's iGaming hub. We work with operators, studios, and B2B suppliers to create compliant, high-converting marketing content that cuts through the noise in one of the world's most competitive sectors.",
    pain: [
      'Player acquisition costs rising as the market becomes more saturated',
      'Compliance-heavy creative production slowing down campaign output',
      'Need for multilingual content at scale for multiple regulated markets',
    ],
    services: [
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Compliant paid campaigns across permissible channels for regulated markets' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Automated B2B outreach for suppliers targeting operators and affiliates' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'LinkedIn and Twitter presence building for B2B iGaming brands' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Operator and studio branding that builds trust and differentiation' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Player retention email sequences and CRM automation workflows' },
      { slug: 'video-production', title: 'Video Production', description: 'Game trailers, explainer videos, and event content for SiGMA and beyond' },
    ],
    faqs: [
      { q: 'Do you understand iGaming compliance requirements?', a: 'Yes — we are familiar with MGA regulations, responsible gambling requirements, and the compliance constraints around iGaming advertising. All creative is produced with compliance in mind.' },
      { q: 'Can you help with B2B iGaming marketing?', a: 'Absolutely. A significant part of our iGaming work is B2B — helping suppliers, platforms, and studios reach operators and affiliates through LinkedIn, targeted email, and event marketing.' },
      { q: 'Do you attend SiGMA and other Malta iGaming events?', a: 'We create pre-event, at-event, and post-event content for iGaming companies attending SiGMA, iGaming Next, and other Malta-based industry events.' },
      { q: 'Can you produce content in multiple languages?', a: 'Yes — we support multilingual content production for European regulated markets including English, Italian, German, and other key territories.' },
    ],
  },
  fintech: {
    name: 'Fintech',
    plural: 'Fintech Companies',
    description: 'the fintech and financial services sector',
    hero: "Fintech Marketing Agency in Malta",
    intro: "Malta's fintech ecosystem is growing fast. We help fintech startups and established players build credibility, explain complex products simply, and acquire customers in competitive regulated markets.",
    pain: [
      'Building trust with new audiences unfamiliar with your brand or product',
      'Complex product features that are difficult to communicate simply and compellingly',
      'Competitive market with high customer acquisition costs and long sales cycles',
    ],
    services: [
      { slug: 'branding-services', title: 'Brand Identity', description: 'Professional fintech branding that communicates trust, innovation, and reliability' },
      { slug: 'web-design', title: 'Website Design', description: 'Conversion-focused websites that explain your product and generate qualified leads' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Lead nurturing sequences that guide prospects through long B2B sales cycles' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Automated outreach to qualified fintech decision-makers and potential partners' },
      { slug: 'video-production', title: 'Video Production', description: 'Product explainer videos and demo content that simplify complex concepts' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'B2B LinkedIn campaigns and Google Search targeting fintech decision-makers' },
    ],
    faqs: [
      { q: 'Can you market regulated financial products?', a: 'We work within the constraints of financial services advertising regulations. All content and campaigns are produced with compliance in mind, and we work alongside your compliance team.' },
      { q: 'How do you help fintech companies build trust?', a: 'Through consistent, professional branding, thought leadership content, case studies, and social proof — the foundation of fintech marketing that converts.' },
      { q: 'Do you work with early-stage fintech startups?', a: 'Yes — we have flexible packages suitable for seed-stage startups through to Series B and beyond. We understand the different needs at each growth stage.' },
      { q: 'Can you help with B2B fintech marketing?', a: 'B2B fintech is one of our specialisms. We build systems for reaching CFOs, treasurers, and technology decision-makers through LinkedIn, email automation, and targeted paid campaigns.' },
    ],
  },
  'real-estate': {
    name: 'Real Estate',
    plural: 'Real Estate Agencies',
    description: 'the real estate sector',
    hero: "Real Estate Marketing Agency in Malta",
    intro: "Malta's property market is one of Europe's most competitive. We help real estate agencies and developers generate qualified leads, showcase properties compellingly, and build the kind of brand that buyers remember.",
    pain: [
      'Property listings not getting enough views — lost in portals with no differentiation',
      'No professional video tours or virtual walkthroughs for international buyers',
      'Weak brand identity compared to larger competitors with bigger marketing budgets',
    ],
    services: [
      { slug: 'video-production', title: 'Video Production', description: 'Property tours, development showcases, and agent profile videos' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Targeted campaigns reaching buyers and investors in key source markets' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Property showcases, market insights, and lead generation via Instagram and Facebook' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Agency branding that commands premium positioning in the Malta market' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Automated follow-up for property enquiries and viewing request qualification' },
      { slug: 'web-design', title: 'Website Design', description: 'Lead-generating property websites with search, listings, and valuation tools' },
    ],
    faqs: [
      { q: 'Can you target international property buyers?', a: 'Yes — we run campaigns targeting buyers in the UK, Germany, Scandinavia, and the Middle East who are actively searching for Malta properties, using language and creative tailored to each market.' },
      { q: 'Do you produce property photography and video?', a: 'Video production is one of our core services. We create professional property walk-throughs, aerial footage, and development showcase videos that stand out from standard portal listings.' },
      { q: 'How do you generate qualified leads for real estate?', a: 'Through a combination of paid search targeting buying-intent keywords, Facebook lead gen campaigns, and retargeting sequences that nurture prospects over the typical 3–6 month property search cycle.' },
      { q: 'Can you help with new development marketing?', a: 'Yes — we build launch campaigns for new developments including branding, landing pages, paid campaigns, and social media strategies targeting both local and international buyers.' },
    ],
  },
  retail: {
    name: 'Retail',
    plural: 'Retail Businesses',
    description: 'the retail sector',
    hero: "Retail Marketing Agency in Malta",
    intro: "Malta's retail sector faces competition from both local competitors and international e-commerce. We help retailers drive foot traffic, build online presence, and create the kind of content that makes customers choose you.",
    pain: [
      'Low foot traffic despite being in good locations — people not discovering you online',
      'No e-commerce content strategy to complement the physical store experience',
      'Poor product photography and visual content losing sales to competitors with better imagery',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Product showcases, seasonal campaigns, and community building on Instagram' },
      { slug: 'video-production', title: 'Video Production', description: 'Product demos, unboxings, styling content, and promotional videos' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Product catalogue ads and local awareness campaigns driving store visits' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Retail branding that works in-store, online, and in packaging' },
      { slug: 'web-design', title: 'Website Design', description: 'E-commerce or catalogue websites with seamless product discovery' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Email sequences for new arrivals, sales, and win-back campaigns' },
    ],
    faqs: [
      { q: 'Can you help drive both online and offline sales?', a: "Yes — we create integrated campaigns that build online brand awareness and drive both e-commerce sales and physical store visits through a combination of organic content and paid advertising." },
      { q: 'Do you handle product photography?', a: 'We offer professional product video production. For photography, we work with trusted photographers in Malta and can coordinate shoots as part of a broader content package.' },
      { q: 'How do you approach seasonal retail campaigns?', a: "We build content calendars around Malta's retail calendar — Christmas, summer sales, Black Friday, Easter, and local events — ensuring you're ready with compelling content well in advance." },
      { q: 'Can you help with influencer partnerships for retail?', a: 'Yes — influencer marketing is one of our services. We identify and coordinate with relevant Malta-based creators who can showcase your products to engaged, relevant audiences.' },
    ],
  },
  fitness: {
    name: 'Fitness',
    plural: 'Fitness Businesses',
    description: 'the fitness and gym sector',
    hero: "Fitness & Gym Marketing Agency in Malta",
    intro: "Malta's fitness market is growing fast. We help gyms, personal trainers, and fitness studios acquire new members, retain existing ones, and build brands that people are proud to be part of.",
    pain: [
      'Member acquisition costs too high — depending on word of mouth and walk-ins alone',
      'No consistent social content calendar — posting ad-hoc without a strategy',
      'Low retention from digital marketing — getting signups but not keeping members',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Transformation content, workout clips, and member community building' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Member acquisition campaigns targeting fitness-interested locals in your area' },
      { slug: 'video-production', title: 'Video Production', description: 'Gym tour videos, trainer profiles, and transformation story content' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Fitness brand identity that motivates and differentiates from competitors' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Onboarding sequences, retention emails, and win-back campaigns for churned members' },
      { slug: 'ai-support-specialist', title: 'AI Customer Support', description: '24/7 automated responses to membership enquiries and class booking questions' },
    ],
    faqs: [
      { q: 'What is the best way to acquire new gym members in Malta?', a: 'A combination of hyper-local Meta advertising, referral incentive programs, and strong social proof content (transformations, member testimonials) consistently drives the lowest cost-per-acquisition for fitness businesses.' },
      { q: 'Can you help with member retention?', a: 'Yes — marketing automation is as important for retention as it is for acquisition. We build email and WhatsApp sequences that keep members engaged, motivated, and less likely to cancel.' },
      { q: 'Do you work with personal trainers as well as gyms?', a: 'Yes — we work with solo trainers, boutique studios, and large gym facilities. Packages are scaled to match your budget and growth goals.' },
      { q: 'How quickly can we see membership growth?', a: 'Paid advertising campaigns typically produce measurable leads within the first week. Building sustainable organic growth through social media usually takes 60–90 days to gain meaningful momentum.' },
    ],
  },
  wellness: {
    name: 'Wellness',
    plural: 'Wellness Businesses',
    description: 'the wellness and spa sector',
    hero: "Wellness & Spa Marketing Agency in Malta",
    intro: "Wellness is one of Malta's fastest-growing sectors. We help spas, yoga studios, therapists, and wellness centres communicate their value, attract the right clients, and build practices that thrive.",
    pain: [
      'Difficulty communicating the value of wellness services to new audiences',
      'No SEO strategy — missing clients searching for wellness services in Malta',
      'Low online booking conversion — people visit the website but don\'t book',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Calming, aspirational content that attracts wellness-minded audiences' },
      { slug: 'web-design', title: 'Website Design', description: 'Booking-optimised wellness websites with online scheduling integration' },
      { slug: 'video-production', title: 'Video Production', description: 'Studio tours, treatment showcases, and practitioner introduction videos' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Wellness branding that communicates calm, trust, and transformation' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Targeted campaigns reaching health-conscious audiences in Malta' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Booking reminders, follow-up sequences, and loyalty programme automation' },
    ],
    faqs: [
      { q: 'How do you market wellness services without being inauthentic?', a: 'We focus on storytelling, client results, and genuine brand values rather than generic wellness clichés. Authentic content consistently outperforms polished but hollow marketing in this sector.' },
      { q: 'Can you help increase online bookings?', a: "Yes — improving online booking conversion is often the fastest win for wellness businesses. We audit your booking journey, optimise your website, and run remarketing campaigns to people who've visited but haven't booked." },
      { q: 'What social platforms work best for wellness businesses?', a: 'Instagram is the primary platform for wellness, with Pinterest also valuable for certain treatments. TikTok is increasingly important for reaching younger wellness audiences.' },
      { q: 'Do you work with individual therapists or only clinics?', a: 'Both. Individual practitioners and small wellness studios are some of our most successful clients — strong personal branding often outperforms corporate wellness marketing.' },
    ],
  },
  events: {
    name: 'Events',
    plural: 'Event Companies',
    description: 'the events and entertainment sector',
    hero: "Events & Entertainment Marketing Agency in Malta",
    intro: "Malta hosts world-class events year-round. We help event organisers, promoters, and entertainment venues sell out shows, build audiences, and create the kind of pre-event buzz that makes tickets sell themselves.",
    pain: [
      'Ticket sales too dependent on one channel — no diversified promotion strategy',
      'No post-event content strategy — losing momentum between events',
      'Low social media engagement between events — audience not staying connected',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Pre-event hype building, live coverage, and post-event highlight content' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Event promotion campaigns targeting relevant audiences across Malta and beyond' },
      { slug: 'video-production', title: 'Video Production', description: 'Event trailers, highlight reels, and artist/speaker promotional content' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Event brand identity systems that work across digital and physical touchpoints' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Pre-event reminder sequences, day-of updates, and post-event follow-ups' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Automated outreach for corporate event sponsorship and B2B ticket sales' },
    ],
    faqs: [
      { q: 'How early should we start promoting an event?', a: 'For large events, 6–8 weeks is ideal for building momentum. For smaller events, 3–4 weeks. We build a phased promotion plan with announcement, countdown, and urgency phases.' },
      { q: 'Can you help sell out events through social media alone?', a: 'Social media combined with paid advertising is the most effective combination for event ticket sales. Organic content builds credibility; paid ads drive direct ticket purchases at scale.' },
      { q: 'Do you cover events on the day?', a: 'Yes — we offer event day coverage including live social media management, photo/video capture, and real-time story content that creates FOMO and builds your audience for future events.' },
      { q: 'Can you help with recurring event series?', a: 'Absolutely — recurring events benefit enormously from a professional marketing system. We build the content calendar, paid strategy, and automation that makes each event promotion smoother and more effective than the last.' },
    ],
  },
  'healthcare-clinics': {
    name: 'Healthcare Clinic',
    plural: 'Healthcare Clinics',
    description: 'the private healthcare and medical clinic sector',
    hero: "Healthcare Clinic Marketing Agency in Malta",
    intro: "Malta's private healthcare market is competitive and tightly regulated. We help clinics, dental practices, and specialist consultants build patient trust, fill appointment books, and produce content that respects both patients and the Medicines Authority's promotional rules.",
    pain: [
      'Patient acquisition stuck on word of mouth — no predictable digital intake channel',
      'Compliance fear stopping any social or paid activity, even where it is permitted',
      'Booking forms losing leads because nothing follows up automatically when a patient enquires after hours',
    ],
    services: [
      { slug: 'web-design', title: 'Website Design', description: 'Patient-first sites with clear treatment pages, transparent pricing where possible, and online booking integrated to your PMS' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Practitioner-led educational content that builds authority without breaching advertising rules' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Google Search and Meta campaigns aligned with Maltese and EU healthcare advertising standards' },
      { slug: 'ai-appointment-booker', title: 'AI Appointment Booker', description: 'After-hours WhatsApp and web-chat booking that hands qualified patients to reception in the morning' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Recall sequences, no-show reduction reminders, and post-treatment follow-up workflows' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Calm, professional clinic branding that reads correctly on signage, prescriptions, and digital channels' },
    ],
    faqs: [
      { q: 'Can you advertise a private clinic in Malta legally?', a: 'Yes — within the Medicines Authority and applicable professional-body rules. We work alongside your clinical team on every claim and never write copy that promises medical outcomes. Our standard creative review includes a compliance pass before any ad goes live.' },
      { q: 'What is the fastest way for a private clinic to grow new patient volume?', a: 'For most clinics, a combination of fast Google Search ads on high-intent treatment terms, a clean booking page, and an automated WhatsApp follow-up handles 60-70% of the gap. Social and SEO build the longer-term moat.' },
      { q: 'Do you handle multilingual content for international patients?', a: 'Yes — English, Italian, French, and German content is part of our standard delivery for clinics serving expats and medical-tourism enquiries from southern Europe.' },
      { q: 'Can you integrate with our practice management system?', a: 'Most modern PMS tools (Dentally, Cliniko, MediSoft, custom systems) expose either an API or a webhook we can route booking confirmations and patient data through. Where the system is closed, we build a Calendly or HubSpot bridge.' },
    ],
  },
  'legal-services': {
    name: 'Law Firm',
    plural: 'Law Firms',
    description: 'the legal services sector',
    hero: "Law Firm Marketing Agency in Malta",
    intro: "Malta's legal market spans corporate, gaming, fintech, citizenship, and family practice — each with very different buyers. We help firms generate qualified instructions, build partner-level thought leadership, and move beyond the directories that quietly own most legal lead flow today.",
    pain: [
      'Over-reliance on Chambers, Legal 500, and referral networks for new instructions',
      'Partner-written content sitting unpublished because there is no editorial process or distribution plan',
      'Website built like a brochure — no clear conversion path for the in-house counsel comparing three firms on a Tuesday afternoon',
    ],
    services: [
      { slug: 'web-design', title: 'Website Design', description: 'Practice-area-led websites with clear partner bios, case experience, and direct enquiry routing' },
      { slug: 'content-marketing', title: 'Content Marketing', description: 'Partner-bylined briefings on regulatory change, ghost-written and edited to your house style' },
      { slug: 'seo-services', title: 'SEO', description: 'Organic visibility on practice-area and regulator-driven search terms — MFSA, MGA, Citizenship by Naturalisation, and the like' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Outbound qualification for corporate, gaming, and fintech BD pipelines without burning associate hours' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'LinkedIn-first presence for partners, with selective Twitter/X for regulatory commentators' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Quiet, confident firm branding that survives a 30-page corporate due-diligence pack' },
    ],
    faqs: [
      { q: 'Is digital marketing actually worth it for a Malta law firm?', a: 'For corporate and regulated practice areas, yes — high-intent Google searches like "MFSA license application lawyer Malta" route directly to instruction. For private-client work, content and SEO compound over 9-12 months and often outperform any single referral source.' },
      { q: 'Will you write content the partners can defend in front of a client?', a: 'Yes. Every piece is partner-bylined, ghost-drafted, then run through your nominated reviewer before publication. We do not push generic "5 things to know" filler.' },
      { q: 'Can you help with citizenship and residency programme marketing?', a: 'We have worked on residency-by-investment and citizenship messaging within Identità and Residency Malta Agency rules. Compliance is part of the brief on day one, not an afterthought.' },
      { q: 'How do you measure return for a law firm engagement?', a: 'Qualified enquiries from your priority practice areas, attributed to the channel that delivered them, plus authority signals — backlinks won, partner mentions, speaking invitations. We share a quarterly partnership review, not a vanity-metrics dashboard.' },
    ],
  },
  'professional-services': {
    name: 'Professional Services Firm',
    plural: 'Professional Services Firms',
    description: 'the professional services sector — accounting, consulting, advisory, and corporate services',
    hero: "Professional Services Marketing Agency in Malta",
    intro: "Accounting, advisory, and corporate services firms in Malta sell expertise, not products. We build the marketing systems that let your senior team spend less time chasing leads and more time billing — without diluting the technical credibility that won the firm its reputation in the first place.",
    pain: [
      'Senior partners spending billable hours on cold outreach and proposal writing',
      'Strong technical reputation that does not translate online because the website was built five years ago for a different firm',
      'No visibility on which marketing activity actually produces fee income vs. just looks busy',
    ],
    services: [
      { slug: 'web-design', title: 'Website Design', description: 'Service-line-led website that explains complex offerings in plain English without losing the technical buyer' },
      { slug: 'seo-services', title: 'SEO', description: 'Visibility on advisory and corporate services search terms specific to Malta, EU, and offshore-structuring buyers' },
      { slug: 'content-marketing', title: 'Content Marketing', description: 'Partner-led briefings on tax change, IFRS updates, ESG, and regulatory deadlines that bring inbound enquiries' },
      { slug: 'ai-sdr-agent', title: 'AI Sales Agent', description: 'Targeted outbound to specific decision-makers in your ICP without burning principal time' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Lead nurture for the 6-12 month consideration cycle typical in professional services buying' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Refined firm branding that reads correctly on a 60-page report and on a LinkedIn banner' },
    ],
    faqs: [
      { q: 'Will marketing actually move the needle for a partner-led firm?', a: 'Yes — but only if it is built around how partners genuinely sell. We design systems that surface partner expertise (briefings, talks, panel placements) and route the resulting demand into a clean enquiry pipeline.' },
      { q: 'Do you understand the regulated side — tax advisory, audit, corporate services?', a: 'We work with firms regulated by the Malta Financial Services Authority and the Accountancy Board. Every claim is reviewed before it ships, and we do not write copy that crosses independence or solicitation rules.' },
      { q: 'Can you help with B2B pipeline for corporate services and structuring work?', a: 'B2B pipeline is one of our core deliverables. Most engagements combine LinkedIn-led outbound, a focused content programme, and a clean lead-handling workflow back into the firm.' },
      { q: 'How does pricing work for a professional services engagement?', a: 'A quarterly retainer based on scope (typically EUR 2,500-7,500 per month for a partner-led firm under 30 people). Larger engagements with multiple service lines are quoted on a per-programme basis after a discovery call.' },
    ],
  },
  construction: {
    name: 'Construction & Property Development',
    plural: 'Construction Firms',
    description: 'the construction and property development sector',
    hero: "Construction & Property Development Marketing Agency in Malta",
    intro: "Construction and property developers in Malta operate on long sales cycles, big-ticket buyers, and reputation built over years. We help developers, contractors, and finishing trades win the right work — and showcase it properly when the project is delivered.",
    pain: [
      'New developments launching with weak pre-sales because marketing started after, not before, the BCA permit cleared',
      'Site progress and finished projects under-documented — losing the storytelling asset for the next development',
      'No B2B pipeline for commercial fit-out, MEP, and main-contracting work outside the existing referral network',
    ],
    services: [
      { slug: 'video-production', title: 'Video Production', description: 'Drone-led project documentation, interior walk-throughs, and developer story films from concept through delivery' },
      { slug: 'web-design', title: 'Website Design', description: 'Development-launch microsites and main-contractor brochure sites that handle qualified buyer enquiry' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Targeted Meta and Google campaigns reaching Malta and overseas buyers actively researching property' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Build-progress content, finishing reveals, and showroom updates that keep prospects engaged through long buying cycles' },
      { slug: 'branding-services', title: 'Brand Identity', description: 'Developer and contractor branding that holds up on hoarding, on a marble lobby plaque, and on a tender document' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Buyer nurture, viewing reminders, snagging follow-up, and post-handover satisfaction tracking' },
    ],
    faqs: [
      { q: 'When should we start marketing a new development?', a: 'As soon as the planning permit and basic massing are confirmed — typically 9-12 months before practical completion. Early pre-sales reservations from a soft-launch phase often fund the construction draw and de-risk the project.' },
      { q: 'Can you produce drone footage of our site?', a: 'Yes. Our drone work is operated under Malta Civil Aviation Directorate licensing, with insurance certificates supplied to your H&S officer before any flight. We capture progress monthly so you build a full project archive at the same time.' },
      { q: 'Do you market to international property buyers?', a: 'Yes — we run campaigns into the UK, Italy, Scandinavia, and the Gulf for Malta property, with creative localised to the buyer-search behaviour in each market.' },
      { q: 'Can you help with B2B work — main-contracting, MEP, fit-out?', a: 'Yes. The B2B side is a different programme — focused outbound to architects, project managers, and developer commercial teams, plus a credentials site built for procurement, not consumer marketing.' },
    ],
  },
  'beauty-wellness': {
    name: 'Beauty Salon & Med Spa',
    plural: 'Beauty Salons & Med Spas',
    description: 'the beauty salon, aesthetic clinic, and med spa sector',
    hero: "Beauty Salon & Med Spa Marketing Agency in Malta",
    intro: "From St Julian's blowdry bars to clinical aesthetic practices in Sliema and Mosta, the Maltese beauty market is busy, visual, and unforgiving of weak content. We help salons and clinics fill columns, sell retail, and move clients up the treatment ladder without resorting to constant discounting.",
    pain: [
      'Empty mid-week appointment columns despite a packed Saturday book',
      'Heavy discounting on Groupon-style platforms attracting one-off clients who never rebook',
      'Aesthetic services sitting under-marketed because the team is unsure what is permitted to advertise under medical rules',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Treatment showcases, before-and-after content (where compliant), and client-story reels' },
      { slug: 'video-production', title: 'Video Production', description: 'Salon and clinic walk-throughs, treatment explainers, and practitioner introductions' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Hyper-local Meta and Google campaigns targeting people inside a 5km catchment around your salon' },
      { slug: 'web-design', title: 'Website Design', description: 'Booking-first websites with online deposit handling, treatment menus, and clear practitioner credentials' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Rebook reminders, retail follow-up, course-of-treatment progression, and birthday offers' },
      { slug: 'ai-appointment-booker', title: 'AI Appointment Booker', description: 'After-hours WhatsApp and Instagram DM booking that captures the client at the moment of intent' },
    ],
    faqs: [
      { q: 'Can you fill mid-week appointment slots specifically?', a: 'Yes — mid-week recovery is one of the most measurable wins we deliver. A combination of geo-targeted paid promotions for off-peak slots and an automated rebooking sequence for existing clients typically lifts mid-week occupancy by 25-40% inside 90 days.' },
      { q: 'What is permitted when advertising aesthetic and injectable treatments in Malta?', a: 'Advertising of regulated medical aesthetic treatments is governed by the Medicines Authority and applicable professional body rules. We work with your medical director on every claim and have a standard pre-publish review for injectables, laser, and prescription-grade products.' },
      { q: 'Do you handle Instagram and TikTok content production?', a: 'Yes — most salon retainers include a monthly half-day shoot with our content team, producing Reels, TikToks, treatment stills, and retail product shots from the same session.' },
      { q: 'Can you help us reduce dependence on discount platforms?', a: 'That is the core of most engagements. We rebuild your direct booking funnel, set up Google reviews properly, and run paid campaigns to your own offers — so client lifetime value is yours, not a platform commission.' },
    ],
  },
  automotive: {
    name: 'Automotive Dealer & Garage',
    plural: 'Automotive Businesses',
    description: 'the automotive sales, service, and aftermarket sector',
    hero: "Automotive Marketing Agency in Malta",
    intro: "Malta's automotive market spans new-car dealers, used-car forecourts, service garages, and specialist aftermarket trades. We help showrooms move stock, garages fill service bays, and aftermarket businesses build a customer base that comes back every season.",
    pain: [
      'Stock listings buried on aggregator sites with no direct route from buyer search to your showroom',
      'Service bay schedule under-utilised between MOT peaks and end-of-warranty work',
      'No content engine showcasing workshop quality, technician credentials, or specialist capability — losing buyers to perception of "any garage will do"',
    ],
    services: [
      { slug: 'web-design', title: 'Website Design', description: 'Inventory-led dealer sites and service-booking-first garage sites with WhatsApp routing built in' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Google Vehicle Ads, Meta inventory campaigns, and service-booking promotions targeting your local catchment' },
      { slug: 'video-production', title: 'Video Production', description: 'Used-stock walkarounds, workshop tours, technician profiles, and customer-handover films' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'New-arrival reels, build-quality content, and customer-story posts that build trust over weeks not minutes' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Service reminders, MOT follow-up, end-of-warranty trade-in campaigns, and parts retail nurture' },
      { slug: 'ai-support-specialist', title: 'AI Customer Support', description: 'Inventory enquiry handling and service-booking triage 24/7 across WhatsApp, web chat, and Instagram DMs' },
    ],
    faqs: [
      { q: 'Can you help us sell more used stock?', a: 'Yes — used-vehicle marketing benefits hugely from short-form video and clean Google Vehicle Ads. A monthly walkaround content shoot, paired with daily inventory feed updates to Google and Meta, typically lifts test-drive bookings within 60 days.' },
      { q: 'How do we fill quieter service bays?', a: 'A combination of automated service-recall reminders against your existing CRM, paired with paid promotions on lower-margin services (wheel alignment, AC regas, brake checks) is usually the fastest way to lift service-bay utilisation.' },
      { q: 'Do you work with main dealers as well as independents?', a: 'Both. For main dealers we operate within the brand co-op marketing rules and your manufacturer creative guidelines. For independents we have more creative freedom and can build a sharper local identity.' },
      { q: 'Can you handle electric-vehicle marketing specifically?', a: 'Yes. EV buyer education is a longer cycle and benefits from a content programme covering range, charging infrastructure in Malta, total-cost-of-ownership, and government incentive guidance — all of which we produce as part of an EV-focused engagement.' },
    ],
  },
  education: {
    name: 'School & Education Provider',
    plural: 'Education Providers',
    description: 'the education sector — independent schools, English-language colleges, and professional training providers',
    hero: "Education Marketing Agency in Malta",
    intro: "From independent schools to ELT colleges and professional training providers, Malta's education sector competes for attention from parents, students, and corporate buyers — often across multiple countries. We build the marketing systems that fill open-day calendars and student intakes year after year.",
    pain: [
      'Open-day registrations dropping despite strong word-of-mouth reputation',
      'International student intake too dependent on agent commissions, eating margin every term',
      'Course pages and prospectus PDFs not converting the parents and students who do reach the site',
    ],
    services: [
      { slug: 'web-design', title: 'Website Design', description: 'Parent-and-student-first websites with clear curriculum pages, fee transparency, and an open-day or course enquiry path on every page' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Google and Meta campaigns targeting parents in Malta and international students researching ELT or higher-education in southern Europe' },
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Authentic life-on-campus content, student-and-teacher voices, and event coverage that speaks to both parents and students' },
      { slug: 'video-production', title: 'Video Production', description: 'Campus tours, principal welcomes, alumni stories, and course-experience films for prospectuses and paid creative' },
      { slug: 'content-marketing', title: 'Content Marketing', description: 'Subject-area thought leadership for academic credibility and SEO around curriculum and exam-board search terms' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Open-day reminders, application-stage nurture, and re-enrolment cycles that lift conversion at every step of the funnel' },
    ],
    faqs: [
      { q: 'Can you help us reduce dependence on student-recruitment agents?', a: 'Yes — building direct channels (paid search in source markets, content in the relevant languages, automated nurture from enquiry to deposit) is one of the highest-ROI programmes for ELT and international-student providers. Most clients see direct-channel intake double inside 12 months.' },
      { q: 'Do you understand the safeguarding and child-image considerations for school marketing?', a: 'Yes. Every campaign and every piece of content goes through a safeguarding review before publication. We follow your nominated lead\'s sign-off on any image or footage involving students under 18, and we never run paid creative featuring minors without explicit parental consent on file.' },
      { q: 'Can you produce content in multiple languages?', a: 'Yes — English, Italian, French, German, and Arabic are part of our standard delivery for international-facing schools and ELT providers, with localised paid creative in each market.' },
      { q: 'How long before we see results from an education marketing engagement?', a: 'Open-day registrations typically lift inside the first 60 days from paid activity. Direct-applicant share and reduced agent dependency are 9-12 month metrics — they require sustained content and SEO investment but the compounding return is significant.' },
    ],
  },
  'nonprofits-ngos': {
    name: 'Non-Profit & NGO',
    plural: 'Non-Profits & NGOs',
    description: 'the non-profit, NGO, and registered-foundation sector',
    hero: "Non-Profit & NGO Marketing Agency in Malta",
    intro: "Malta's voluntary sector is rich and under-resourced. We work with NGOs, registered foundations, and social enterprises to grow donor bases, recruit volunteers, and tell stories that move funders — at a price point built around real charity-sector budgets.",
    pain: [
      'Donor base ageing with no consistent acquisition channel for a younger audience',
      'Strong programme work going under-told because the team has no capacity for content production',
      'Grant applications and major-donor decks competing against larger NGOs with full-time communications staff',
    ],
    services: [
      { slug: 'social-media-creative-management', title: 'Social Media Management', description: 'Programme-impact storytelling that shows real beneficiary outcomes without exploiting the people you serve' },
      { slug: 'video-production', title: 'Video Production', description: 'Beneficiary stories, programme documentaries, and appeal films produced with a charity-sector ethics framework' },
      { slug: 'web-design', title: 'Website Design', description: 'Donation-first websites with one-click giving, recurring-gift handling, and gift-aid or VO equivalent processing' },
      { slug: 'content-marketing', title: 'Content Marketing', description: 'Annual reports, impact briefings, and grant-application support written for a funder reader, not a marketing audience' },
      { slug: 'marketing-automation-suite', title: 'Marketing Automation', description: 'Donor-journey nurture, lapsed-supporter reactivation, and volunteer onboarding workflows' },
      { slug: 'paid-advertising', title: 'Paid Advertising', description: 'Google Ad Grants management, Meta cause-targeted appeals, and event-promotion campaigns within charity-sector ad rules' },
    ],
    faqs: [
      { q: 'Can a small Malta NGO actually afford agency support?', a: 'Yes — we keep a charity-sector engagement model with reduced retainers, pro-bono hours on every paid month, and a Google Ad Grants programme that brings in up to USD 10,000/month of free search advertising once approved. Most engagements pay back in lifted donations inside two quarters.' },
      { q: 'Will you help us apply for Google Ad Grants and run them properly?', a: 'Yes — we handle the application, eligibility documentation, and ongoing account management. Most NGOs underuse the grant by 70%+ because the account rules are strict; we keep yours compliant and productive.' },
      { q: 'Can you help with grant-application materials and major-donor decks?', a: 'Yes. Grant copywriting, impact reporting, and major-donor proposal design are part of our charity offer. We write to the assessor or the donor in mind, not as marketing collateral.' },
      { q: 'How do you handle ethical considerations in charity storytelling?', a: 'Every beneficiary story is told with informed consent, with the person\'s own voice where possible, and with an option to remain anonymous. We do not use poverty-tourism imagery, and we follow established sector frameworks like the Dochas Code on Images and Messages.' },
    ],
  },
};

// Source of truth for the hub slug list lives in `shared/seoConfig.ts`
// (`industryHubSlugs`) — kept in sync with the `industries` Record above.
// We re-derive locally here so generateStaticParams stays in this module
// without an extra import dance, and the assertion below catches drift
// between the Record and the shared list at module load.
const INDUSTRY_HUB_SLUGS = Object.keys(industries);

(function assertHubsInSync() {
  const recordKeys = new Set<string>(INDUSTRY_HUB_SLUGS);
  const sharedKeys = new Set<string>(industryHubSlugs);
  const missingFromShared = INDUSTRY_HUB_SLUGS.filter((s) => !sharedKeys.has(s));
  const missingFromRecord = industryHubSlugs.filter((s) => !recordKeys.has(s));
  if (missingFromShared.length || missingFromRecord.length) {
    const msg =
      `[industries] hub slug drift between app/industries/[industry]/page.tsx ` +
      `and shared/seoConfig.industryHubSlugs:\n` +
      (missingFromShared.length ? `  in Record only: ${missingFromShared.join(', ')}\n` : '') +
      (missingFromRecord.length ? `  in shared only: ${missingFromRecord.join(', ')}` : '');
    // eslint-disable-next-line no-console
    console.error(msg);
    if (process.env.NODE_ENV === 'production') throw new Error(msg);
  }
})();

const topServiceSlugs = [
  'social-media-creative-management',
  'video-production',
  'branding-services',
  'ai-sdr-agent',
  'marketing-automation-suite',
  'web-design',
  'paid-advertising',
];

export async function generateStaticParams() {
  return INDUSTRY_HUB_SLUGS.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: { params: { industry: string } }): Promise<Metadata> {
  const data = industries[resolveIndustryKey(params.industry)];
  if (!data) return { title: 'Industry Not Found | OARC Digital' };
  const title = `${data.name} Marketing Agency Malta | OARC Digital`;
  const description = `Malta's leading marketing agency for ${data.plural.toLowerCase()}. We help ${data.plural.toLowerCase()} grow with social media, video, AI, and automation. Results guaranteed. Contact OARC Digital today.`;
  const canonical = `https://oarcdigital.com/industries/${params.industry}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function IndustryHubPage({ params }: { params: { industry: string } }) {
  const industry = params.industry;
  const dataKey = resolveIndustryKey(industry);

  if (!industries[dataKey]) {
    notFound();
  }

  const data = industries[dataKey];

  return (
    <Layout>

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,145,77,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-white">{data.plural}</span>
            </div>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-semibold uppercase tracking-wider text-xs">Malta Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {data.hero}
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">{data.intro}</p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href={`tel:${NAP.phoneE164}`}>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Phone className="mr-2 w-4 h-4" /> {NAP.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { stat: '340%', label: 'Avg engagement increase' },
                { stat: '2.8x', label: 'Avg reach growth' },
                { stat: '60%', label: 'Content production time saved' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">{item.stat}</div>
                  <div className="text-sm text-zinc-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              The Challenges {data.plural} Face in Malta
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We've worked with businesses across {data.description} and we know exactly what's holding them back.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {data.pain.map((point, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-orange-500/30 transition-all">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                    <span className="text-red-400 font-bold text-lg">{i + 1}</span>
                  </div>
                  <p className="text-foreground font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How OARC Digital Helps {data.plural}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything your {data.name.toLowerCase()} needs to grow — under one roof.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((service, i) => (
                <Link key={i} href={`/services/${service.slug}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-orange-500/40 hover:-translate-y-1 transition-all cursor-pointer h-full">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-1">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <span className="text-xs text-orange-400 font-medium mt-2 inline-block">Learn more →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your {data.name} Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free 30-minute strategy call. No obligation — just a straight conversation about what's possible for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">
                  WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href={`mailto:${NAP.email}`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Mail className="mr-2 w-4 h-4" /> {NAP.email}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* All Service x Industry combos */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Explore Our Services for {data.plural}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {topServiceSlugs.map((slug) => {
                const labels: Record<string, string> = {
                  'social-media-creative-management': 'Social Media Management',
                  'video-production': 'Video Production',
                  'branding-services': 'Brand Identity',
                  'ai-sdr-agent': 'AI Sales Agent',
                  'marketing-automation-suite': 'Marketing Automation',
                  'web-design': 'Website Design',
                  'paid-advertising': 'Paid Advertising',
                };
                return (
                  <Link key={slug} href={`/services/${slug}`}>
                    <span className="px-4 py-2 rounded-full border border-border hover:border-orange-400 hover:text-orange-400 text-sm transition-all cursor-pointer">
                      {labels[slug]} for {data.plural}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Further Reading — industry-specific */}
        {(dataKey === 'restaurants' || dataKey === 'cafes' || dataKey === 'bars') && (
          <section className="py-16 bg-background border-t">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className="text-xl font-bold mb-6">Further Reading</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { href: "/blog/restaurant-marketing-malta", label: "Restaurant Marketing in Malta: What the Top Venues Do Differently", cat: "Strategy" },
                  { href: "/blog/instagram-marketing-malta", label: "Instagram Marketing in Malta: How to Actually Get Results in 2026", cat: "Social Media" },
                  { href: "/blog/tiktok-for-malta-businesses", label: "TikTok for Malta Businesses: The No-Nonsense Guide for 2026", cat: "Social Media" },
                ].map((a, i) => (
                  <Link key={i} href={a.href}>
                    <div className="p-4 rounded-xl border bg-card hover:border-orange-400 transition-colors cursor-pointer h-full">
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2 block">{a.cat}</span>
                      <p className="text-sm font-medium leading-snug">{a.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        {(dataKey === 'igaming' || dataKey === 'fintech') && (
          <section className="py-16 bg-background border-t">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className="text-xl font-bold mb-6">Further Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: "/blog/ai-marketing-malta", label: "AI Marketing in Malta: What's Actually Useful for Your Business Right Now", cat: "AI" },
                  { href: "/blog/social-media-management-cost-malta", label: "How Much Does Social Media Management Cost in Malta?", cat: "Pricing" },
                ].map((a, i) => (
                  <Link key={i} href={a.href}>
                    <div className="p-4 rounded-xl border bg-card hover:border-orange-400 transition-colors cursor-pointer h-full">
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2 block">{a.cat}</span>
                      <p className="text-sm font-medium leading-snug">{a.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
