import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const faqs = [
  {
    question: 'How do I get my Malta business to rank on Google Maps?',
    answer: 'Ranking on Google Maps (Google Business Profile) in Malta requires three things done consistently well. First, your Google Business Profile must be fully complete — every field filled in, accurate category selection, all photos uploaded, and regular posts published. Second, you need a consistent stream of genuine Google reviews — businesses with 50+ recent reviews with responses consistently rank above competitors with fewer reviews. Third, your business name, address, and phone number (NAP) must be identical across every online directory, social media profile, and your website. Inconsistencies in your NAP data send mixed signals to Google and suppress your local ranking. Malta businesses that do all three consistently within 90 days typically see significant ranking improvements.',
  },
  {
    question: 'How important are Google reviews for Malta local SEO?',
    answer: 'Google reviews are one of the top three ranking factors for local search in Malta. Beyond rankings, they directly influence whether people choose your business over a competitor. Maltese consumers — particularly for restaurants in Valletta, hotels in Sliema, and service businesses in Birkirkara — read Google reviews before making a decision. A business with 4.7 stars and 150 reviews will win the click over a competitor with 4.9 stars and 8 reviews almost every time. The volume of recent reviews signals to Google that your business is active and trusted. Building a systematic process for asking happy customers to leave a review — through follow-up messages, QR codes at the point of sale, or WhatsApp follow-ups — is one of the highest-ROI activities in local SEO.',
  },
  {
    question: 'What is NAP consistency and why does it matter for Malta businesses?',
    answer: 'NAP stands for Name, Address, Phone number — the three pieces of information that identify your business online. NAP consistency means these three fields are identical everywhere your business appears online: your website, Google Business Profile, Facebook page, TripAdvisor, Yellow Pages Malta, Tourism Malta listings, and any other directory. Even small differences — "St Julian\'s" vs "St. Julian\'s", or an old phone number on an outdated directory listing — create confusion for Google and can suppress your local ranking. For Malta businesses that have moved location, changed their trading name, or updated their phone number, auditing and correcting all online citations is an important first step in any local SEO campaign.',
  },
  {
    question: 'How does local SEO in Malta differ from regular SEO?',
    answer: 'Regular SEO (or organic SEO) focuses on ranking in the main Google search results for keywords, and the signals that matter are primarily content quality, backlinks, and technical website health. Local SEO focuses on ranking in Google\'s "local pack" (the map results shown at the top of searches with local intent) and in Google Maps directly. The ranking signals for local SEO in Malta are different: Google Business Profile optimisation, review volume and quality, NAP consistency across citations, proximity to the searcher, and local relevance signals. Both types of SEO matter for Malta businesses with physical locations — but local SEO delivers results faster and has a more direct impact on foot traffic and phone enquiries.',
  },
  {
    question: 'How long does local SEO take to show results in Malta?',
    answer: 'Local SEO in Malta typically shows meaningful results faster than organic SEO because the competition in most Maltese towns is lower than in major European cities. For Google Business Profile optimisation, businesses often see ranking improvements within 4–8 weeks of completing their profile, adding photos, and generating a batch of new reviews. For businesses in competitive categories in Sliema, St Julian\'s, or Valletta — restaurants, hotels, real estate agencies — the timeline can be 3–6 months of consistent effort. The key variables are: how well-optimised your competitors are (many Malta businesses have neglected local SEO), how many reviews you generate, and how consistently you maintain your GBP with new posts and photos.',
  },
];

export default function LocalSeoMalta() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Local SEO Malta: Rank #1 on Google Maps in Your Area',
    description: 'The complete local SEO guide for Malta businesses. Learn how to dominate Google Maps rankings, generate more reviews, and get found by local customers every day.',
    author: { '@type': 'Organization', name: 'OARC Digital', url: 'https://oarcdigital.com' },
    publisher: {
      '@type': 'Organization',
      name: 'OARC Digital',
      logo: { '@type': 'ImageObject', url: 'https://oarcdigital.com/oarc-logo.png' },
    },
    datePublished: '2025-03-01',
    dateModified: '2026-04-01',
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">OARC Digital — Malta</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Local SEO Malta: Rank #1 on Google Maps in Your Area
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              When someone in Sliema searches "best restaurant near me" or a tourist in Valletta looks for services on Google Maps, which businesses appear first? Here is how Malta businesses win that search.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Local SEO Matters More Than Ever in Malta</h2>
          <p className="text-lg text-gray-700 mb-6">
            Over 80% of consumers use Google to find local businesses before visiting or calling. In Malta, with its high smartphone penetration and tourism economy, "near me" searches are even more prevalent — tourists in particular rely almost exclusively on Google Maps to discover restaurants, shops, experiences, and services. A business that doesn't appear in the top three Google Maps results for relevant local searches is effectively invisible to a significant portion of potential customers.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The opportunity in Malta is significant: most local businesses have not invested meaningfully in local SEO. Google Business Profiles are incomplete, reviews are sparse and unresponded to, and NAP data is inconsistent across directories. This means that Malta businesses willing to invest 3–6 months in systematic local SEO work can achieve and hold top rankings with relatively modest effort compared to competitive European markets.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Google Business Profile: The Foundation of Local SEO</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your Google Business Profile (GBP) is the most important local SEO asset you have. It is free, it directly controls what appears when someone searches for your business name, and it is one of the top three ranking factors for appearing in Google Maps results. Yet the majority of Malta businesses have GBPs that are incomplete, outdated, or completely unmanaged.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">GBP Optimisation Checklist for Malta Businesses</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li><span className="font-semibold">Business name:</span> Use your exact trading name — no keyword stuffing (against Google's guidelines)</li>
            <li><span className="font-semibold">Categories:</span> Select the most specific primary category available. Add all relevant secondary categories.</li>
            <li><span className="font-semibold">Address:</span> Exact match to your website and all other online listings</li>
            <li><span className="font-semibold">Phone number:</span> Malta number, same format everywhere (+356 XXXX XXXX)</li>
            <li><span className="font-semibold">Website:</span> Link to your homepage (or relevant landing page if you have multiple locations)</li>
            <li><span className="font-semibold">Hours:</span> Accurate and updated, including public holidays and seasonal changes</li>
            <li><span className="font-semibold">Photos:</span> Minimum 20 high-quality photos — exterior, interior, team, products/menu items. Update quarterly.</li>
            <li><span className="font-semibold">Description:</span> 750 characters describing your business naturally, including your location and primary services</li>
            <li><span className="font-semibold">GBP Posts:</span> Weekly updates — offers, events, news. GBP posts signal to Google that your business is active.</li>
            <li><span className="font-semibold">Q&A:</span> Add common questions and answers proactively. These appear in your listing and help searchers.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building a Review Generation System</h2>
          <p className="text-lg text-gray-700 mb-6">
            Reviews are the most powerful local SEO ranking signal and the most powerful conversion signal for potential customers. For Malta businesses, building a systematic review generation process is the single highest-ROI local SEO activity.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The key is making it easy and timely. The best moment to ask for a review is immediately after a positive experience — when a customer expresses satisfaction at the counter, after a successful service call, or when a delivery arrives. A WhatsApp message sent an hour after a positive interaction with a direct link to your Google review page converts far better than a follow-up email sent a week later.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Review Generation Tactics for Malta Businesses</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li>QR codes on receipts, table cards, and packaging linking directly to your review page</li>
            <li>WhatsApp follow-up to customers within 2 hours of purchase or service completion</li>
            <li>Email follow-up sequence triggered by purchase or booking confirmation</li>
            <li>Staff training: teach every team member to ask satisfied customers for a review</li>
            <li>Respond to every review — positive and negative. Responding signals to Google that you are engaged and trustworthy.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Local Citations and NAP Consistency</h2>
          <p className="text-lg text-gray-700 mb-6">
            Beyond Google Business Profile, your business should appear consistently across Malta's local directories: Yellow Pages Malta, Malta Business Directory, TripAdvisor (for hospitality), Yelp, Bing Places, Apple Maps, and relevant industry directories. Each consistent citation reinforces your business's local authority in Google's eyes.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">digital marketing services</span></Link> include full local SEO management for Malta businesses — from GBP optimisation and citation building to review generation systems. Combined with our broader <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">SEO services</span></Link>, we build local dominance that compounds over time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Local Landing Pages for Multi-Location Malta Businesses</h2>
          <p className="text-lg text-gray-700 mb-6">
            For Malta businesses with multiple locations — a restaurant with branches in Valletta, Sliema, and St Julian's, or a service business covering different towns — individual location landing pages on your website are essential. A page dedicated to "OARC Digital Sliema" or "[Restaurant Name] Birkirkara" gives Google location-specific content to rank for each area, and gives potential customers a page with location-specific information (address, hours, parking, what's different about this specific location).
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Each location page should include: full address and embedded Google Map, location-specific phone number, unique content about what makes this location different, location-specific reviews or testimonials, and a clear call to action (directions, booking link, or phone number click).
          </p>

          {/* FAQ Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#ff914d] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business in Malta?</h2>
            <p className="text-lg mb-8 opacity-90">OARC Digital is Malta's first Creative + AI Systems Agency.</p>
            <Link href="/contact">
              <button className="bg-white text-[#ff914d] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                Book a Free Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
