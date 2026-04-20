import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, AlertTriangle, Star } from 'lucide-react';
import Link from 'next/link';

const checklist = [
  { item: 'Google Business Profile fully completed and verified', priority: 'Critical', why: 'GBP drives 40–60% of local discovery searches. An incomplete profile loses you to a competitor who filled theirs in.' },
  { item: 'Minimum 4.3 Google rating with responses to all reviews', priority: 'Critical', why: 'Maltese diners check Google reviews before any other source. A single unanswered 1-star review can cost you 10 reservations.' },
  { item: 'Instagram profile with consistent posting (4+ per week)', priority: 'High', why: 'Instagram is where Malta diners decide where to eat tonight. A dead Instagram = the restaurant might be closed.' },
  { item: 'TikTok account with at least one viral-attempt video per week', priority: 'High', why: 'TikTok drives tourist traffic specifically. A tourist who sees your pasta video at the airport will look you up when they land.' },
  { item: 'Menu on Google and website with current prices', priority: 'High', why: 'If someone cannot see your menu in 30 seconds, they move to the next result.' },
  { item: 'Facebook page active (Maltese market still uses Facebook)', priority: 'Medium', why: 'Malta has unusually high Facebook usage among the 30+ demographic. Restaurant events and promotions still perform well on Facebook Malta.' },
  { item: 'UGC strategy: encouraging and reposting customer content', priority: 'Medium', why: 'User-generated content is your most credible marketing. Create a reason for customers to tag you — a photogenic dish, a wall feature, a hashtag promotion.' },
  { item: 'Monthly content calendar planned 2 weeks ahead', priority: 'Medium', why: 'Ad-hoc posting produces inconsistent quality. Planning ahead allows you to build around seasonal events, specials, and Malta cultural moments.' },
  { item: 'Delivery platform optimization (Wolt/Bolt) with photos and descriptions', priority: 'Medium', why: 'Malta\'s delivery market has grown significantly. Your Wolt listing IS your storefront for a significant portion of younger Maltese customers.' },
  { item: 'Email or WhatsApp list for direct marketing to returning customers', priority: 'Medium', why: 'Social media reach is rented. A WhatsApp list of 200 regulars that you message once a month is an asset you own outright.' },
];

export default function RestaurantMarketingMalta() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Restaurant Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Revenue Growth · 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Restaurant Marketing in Malta: What the Top Venues Do Differently
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Malta has 3,300+ restaurants and food venues competing for 500,000 locals and 2.3 million tourists. The ones that are consistently full are not just cooking better food. They are marketing smarter.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-zinc-400">
              <span>By OARC Digital</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-bold mb-3 text-orange-700 dark:text-orange-400">The Core Truth</h2>
            <p className="text-foreground">
              In Malta, the restaurants that are always full have one thing in common: <strong>they are always visible.</strong> Not just when they launch, not just in summer — consistently, across every platform, at every touchpoint where a potential customer might be making a decision.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Malta Restaurant Market in 2026</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Malta's restaurant market is unusually saturated relative to its size. With over 3,300 venues across an island of 316 square kilometres, competition is intense and proximity means nothing — a customer in Sliema will drive to Marsaxlokk for a meal they have seen on Instagram. Physical location matters less than digital visibility in 2026.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The market also has a bifurcated audience problem: local regulars and tourists have different discovery channels, different decision triggers, and different values. Locals rely on word-of-mouth and reputation. Tourists rely on Google, TikTok, and TripAdvisor. The restaurants that figure out how to serve both audiences with their marketing are the ones that stay full year-round rather than just during tourist season.
          </p>

          <h2 className="text-2xl font-bold mb-4">Google Business Profile: The Most Underused Tool in Malta</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            When a tourist in Malta types "pizza restaurant Sliema" into Google Maps, the results they see are determined almost entirely by Google Business Profile optimization. Three factors dominate: proximity, review quantity with rating, and profile completeness.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Most Malta restaurants have a GBP that is 50–60% complete. Missing photos, outdated hours, no menu link, no posts in six months. The restaurants that rank at the top have profiles with 200+ photos, weekly posts, responses to every review (including negative ones), and a menu linked directly from the profile. This takes 2 hours to set up properly and 30 minutes per week to maintain — and it is free.
          </p>

          <h2 className="text-2xl font-bold mb-4">Review Management: The Real Revenue Driver</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Maltese diners check reviews obsessively. A restaurant with 4.2 stars and 300 reviews beats one with 4.8 stars and 12 reviews — review volume creates trust. The strategy:
          </p>
          <div className="space-y-4 mb-12">
            {[
              'Ask every table for a Google review before they leave. Train front-of-house staff to mention it naturally: "If you enjoyed your meal, we would really appreciate a Google review — it helps us more than anything."',
              'Respond to every review within 24 hours. Positive: thank them specifically for what they mentioned. Negative: acknowledge the issue, apologize sincerely, offer to make it right, invite them back.',
              'Never respond to negative reviews defensively. One defensive response can lose you 20 potential customers reading the thread.',
              'The goal for a Malta restaurant: minimum 4.3 stars with 50+ reviews. Below that, you are invisible to the best customers.',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                <Star className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Content Pillars for Malta Food Brands</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Successful Malta restaurant content rotates between four pillars. Never get stuck in one. If every post is a food photo, your feed becomes predictable and engagement drops.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { pillar: 'The Food Story', what: 'Where ingredients come from. The supplier relationship. The process behind a dish. Not just a photo — the story of how it gets made.', frequency: '30% of content' },
              { pillar: 'The People', what: 'Chef profiles. Front-of-house personalities. Regulars (with permission). The human side of the venue.', frequency: '25% of content' },
              { pillar: 'The Experience', what: 'What it feels like to be there. Atmosphere, events, busy nights, seasonal decoration. Makes people want to be present.', frequency: '25% of content' },
              { pillar: 'The Offer', what: 'Promotions, new dishes, limited specials, events. The explicit reason to come in now, not someday.', frequency: '20% of content' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <p className="font-bold text-orange-600 mb-1">{item.pillar}</p>
                <p className="text-xs text-muted-foreground font-medium mb-2">{item.frequency}</p>
                <p className="text-sm text-muted-foreground">{item.what}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Seasonal Marketing in Malta: The Calendar Every Restaurant Needs</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Malta has a predictable seasonal marketing cycle that most restaurants ignore until the week before. The businesses that plan ahead capture disproportionate attention.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold border">Period</th>
                  <th className="text-left p-3 font-semibold border">Marketing Opportunity</th>
                  <th className="text-left p-3 font-semibold border">Lead Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['February–April', 'Pre-summer positioning — tourists start planning trips. The restaurants they find now are the ones they book in July.', '6 weeks'],
                  ['May–October', 'Tourist peak — TripAdvisor and Google Maps optimisation pays off. UGC from tourists is gold.', 'Ongoing'],
                  ['June–September', 'Festa season — every village festa is a local food event. Proximity marketing and special menus.', '2 weeks per festa'],
                  ['November–December', 'Christmas season — corporate bookings, family gatherings. Christmas menus should be live by 1 November.', '6 weeks'],
                  ['January', 'Quiet period — double down on locals with loyalty offers and new menu introductions.', '2 weeks'],
                  ['Valentine\'s Day', 'Most over-marketed occasion in Malta — differentiate with anti-Valentine\'s or hyper-personal approach.', '3 weeks'],
                ].map(([period, opp, lead], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="p-3 border font-medium text-sm">{period}</td>
                    <td className="p-3 border text-sm text-muted-foreground">{opp}</td>
                    <td className="p-3 border text-sm font-mono">{lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">The 10-Point Restaurant Marketing Checklist</h2>
          <div className="space-y-4 mb-12">
            {checklist.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-semibold">{item.item}</p>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${item.priority === 'Critical' ? 'bg-red-500/20 text-red-600' : item.priority === 'High' ? 'bg-orange-500/20 text-orange-600' : 'bg-blue-500/20 text-blue-600'}`}>{item.priority}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h3 className="font-bold mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/social-media-creative-management"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Social Media Management</span></Link>
              <Link href="/services/video-production"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Video Production</span></Link>
              <Link href="/industries/restaurants"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">Restaurant Marketing Services</span></Link>
              <Link href="/blog"><span className="px-3 py-1 rounded-full border text-sm hover:border-orange-400 hover:text-orange-400 transition-all cursor-pointer">More Articles</span></Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'How much should a Malta restaurant spend on marketing?', a: '3–5% of monthly revenue is a reasonable benchmark. A restaurant turning over €30,000 per month should be spending €900–€1,500 on marketing — covering social media management, photography, and a modest paid ad budget.' },
              { q: 'Is TripAdvisor still relevant for Malta restaurants?', a: 'Yes, specifically for tourist traffic. Maltese locals use Google predominantly, but tourists from the UK, Germany, and Italy still reference TripAdvisor heavily. Maintaining a minimum 4.0 on TripAdvisor with regular responses is worth the effort.' },
              { q: 'Should I be on Wolt and Bolt even if I am a sit-down restaurant?', a: 'Depends on your location and menu. For casual restaurants in Sliema, St Julian\'s, or Valletta, delivery platforms can add 15–25% to revenue. For fine dining, it is usually not worth it — the economics and brand positioning do not align.' },
              { q: 'How do I get more customers during the quiet January–February period?', a: 'Focus on locals with loyalty-driven offers: a regular\'s discount, a new winter menu launched with a tasting event, a "bring a friend" promotion. This is also the ideal time to invest in content — fewer distractions mean more creative bandwidth.' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Get a Free Restaurant Marketing Audit</h2>
            <p className="text-white/90 mb-6">We will review your current social media, Google presence, and review profile and tell you exactly what to fix. No charge, no pressure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/35679711799" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="font-bold">WhatsApp Us Now <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">Book a Call</Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}
