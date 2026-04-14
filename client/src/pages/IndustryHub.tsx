// Programmatic Industry Hub Pages
// SEO: OARC Digital for [Industry] in Malta

import { useRoute } from 'wouter';
import { ArrowRight, Phone, Mail, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'wouter';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

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
    hero: "Malta's Leading Restaurant Marketing Agency",
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
};

const topServiceSlugs = [
  'social-media-creative-management',
  'video-production',
  'branding-services',
  'ai-sdr-agent',
  'marketing-automation-suite',
  'web-design',
  'paid-advertising',
];

export default function IndustryHub() {
  const [, params] = useRoute('/industries/:industry');
  const industry = params?.industry;

  if (!industry || !industries[industry]) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
            <Link href="/industries">
              <Button>View All Industries</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const data = industries[industry];
  const seoTitle = `${data.name} Marketing Agency Malta | OARC Digital`;
  const seoDescription = `Malta's leading marketing agency for ${data.plural.toLowerCase()}. We help ${data.plural.toLowerCase()} grow with social media, video, AI, and automation. Results guaranteed. Contact OARC Digital today.`;

  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`https://oarcdigital.com/industries/${industry}`}
      />

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
                <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <a href="tel:+35679711799">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Phone className="mr-2 w-4 h-4" /> +356 7971 1799
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
                <Link key={i} href={`/services/${service.slug}/${industry}`}>
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
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">
                  WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="mailto:hello@oarcdigital.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Mail className="mr-2 w-4 h-4" /> hello@oarcdigital.com
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
                  <Link key={slug} href={`/services/${slug}/${industry}`}>
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
        {(industry === 'restaurants' || industry === 'cafes' || industry === 'bars') && (
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
        {(industry === 'igaming' || industry === 'fintech') && (
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
