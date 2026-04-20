import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const faqs = [
  {
    question: 'Does email marketing still work in Malta in 2025?',
    answer: 'Yes — email marketing is one of the highest-ROI channels available to Malta businesses. While social media reach has declined (organic Facebook reach is now under 5% for most pages), email still delivers directly to your subscriber\'s inbox with no algorithm in between. Maltese consumers check email regularly throughout the day. For hospitality, retail, and B2B businesses in Valletta, Sliema, and St Julian\'s, a well-maintained email list of even 500 local subscribers consistently outperforms thousands of social media followers in terms of actual revenue generated.',
  },
  {
    question: 'What open rate should I expect for email marketing in Malta?',
    answer: 'The global average email open rate is around 20–25%. Malta businesses that segment their lists, personalise subject lines, and send at optimal times (Tuesday–Thursday mornings, 9–11am Malta time) regularly achieve 35–50% open rates. The key is list quality over quantity. A list of 500 engaged Maltese subscribers who opted in because they genuinely want your updates will always outperform a list of 5,000 purchased contacts. Industry benchmarks show hospitality businesses in Malta averaging 38% open rates with properly maintained lists.',
  },
  {
    question: 'What email marketing platforms work best for Maltese businesses?',
    answer: 'For most Malta SMBs, Mailchimp or Klaviyo are the go-to options. Mailchimp is excellent for restaurants, hotels, and local services — it\'s easy to set up, GDPR-compliant (essential for Malta under EU law), and has strong automation features. Klaviyo is better for eCommerce businesses selling online, with superior segmentation and revenue tracking. For B2B companies in Birkirkara or the CBD, ActiveCampaign offers strong CRM integration. Whatever you choose, ensure it\'s fully GDPR compliant — Malta\'s Information and Data Protection Commissioner actively enforces these rules.',
  },
  {
    question: 'How often should I email my Malta customers?',
    answer: 'This depends on your business type and the value you\'re providing. For restaurants and hospitality businesses in Malta, one email per week (typically mid-week) with a specific offer, event, or story works well without fatiguing your list. For B2B companies, bi-weekly or monthly newsletters with genuinely useful industry insights generate the best engagement. The worst mistake Malta businesses make is either emailing too rarely (subscribers forget who you are) or too frequently with nothing useful to say. Consistency and value are the two rules that override everything else.',
  },
  {
    question: 'Is GDPR a concern for email marketing in Malta?',
    answer: 'Absolutely — Malta is an EU member state and fully subject to GDPR. This means you need explicit, documented consent before emailing anyone. Pre-ticked boxes, purchased lists, and "implied consent" do not comply. Every email must have an unsubscribe link that works within two clicks. You need a privacy policy that explains how you store and use subscriber data. The good news is that GDPR compliance is straightforward to implement from the start. Malta businesses that build their lists the right way — through opt-in forms, lead magnets, and point-of-sale sign-ups — never have compliance problems.',
  },
];

export default function EmailMarketingMalta() {
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
    headline: 'Email Marketing Malta: How to Get 40%+ Open Rates',
    description: 'A complete guide to email marketing for Malta businesses. Learn how to build a quality list, write subject lines that get opened, and automate campaigns that generate revenue.',
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
        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">OARC Digital — Malta</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Email Marketing Malta: How to Get 40%+ Open Rates
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              While Malta businesses chase social media followers, the smartest operators are quietly building email lists that generate revenue on demand — without paying for reach.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Email Outperforms Social Media for Malta Businesses</h2>
          <p className="text-lg text-gray-700 mb-6">
            There is a quiet divide among Malta's most successful businesses. On one side, you have businesses chasing likes, posting daily on Instagram, and watching their organic reach continue to decline. On the other, you have restaurant owners in Valletta, retail stores in Sliema, and B2B companies in Birkirkara who built email lists two years ago and now send one email per week that generates more direct revenue than their entire social media presence combined.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Email marketing has a median ROI of €36 for every €1 spent. No paid advertising channel comes close. The reason is simple: email is the one channel where you own your audience. When Facebook changes its algorithm or Instagram decides to suppress organic content, your email list is unaffected. You have a direct line to your subscribers — no middleman, no algorithm, no bidding war.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building Your Email List in Malta: The Right Way</h2>
          <p className="text-lg text-gray-700 mb-6">
            The most common mistake Malta businesses make is treating list building as an afterthought. A form buried in the footer of your website will produce almost nothing. List building needs to be intentional, with a clear reason for someone to subscribe.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Lead Magnets That Work for Malta Businesses</h3>
          <p className="text-lg text-gray-700 mb-4">
            A lead magnet is something valuable you give away in exchange for an email address. For a restaurant in St Julian's, this might be a free dessert on your next visit. For a hotel in Sliema, it could be a local guide to hidden Malta spots that tourists love. For a B2B company in the Malta CBD, a research report on your industry gets sign-ups from exactly the decision-makers you want.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li>Hospitality: exclusive member discounts, early event access, birthday offers</li>
            <li>Retail: style guides, product care guides, first-order welcome discounts</li>
            <li>B2B: industry reports, audit templates, process checklists</li>
            <li>Services: free consultation, free audit, downloadable checklist</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Physical Sign-Up Points in Malta</h3>
          <p className="text-lg text-gray-700 mb-6">
            If you have a physical location in Qormi, Birkirkara, Valletta, or anywhere in Malta, you have an enormous advantage over pure online businesses: you can collect emails at the point of sale. A tablet at the counter with a simple sign-up form, a QR code on receipts or menus linking to an opt-in page, or a loyalty card system that requires an email address — all of these build your list with warm, engaged local customers who have already demonstrated they like what you do.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Writing Subject Lines That Get Opened</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your subject line determines whether your email gets opened or deleted. For Malta businesses, the highest-performing subject lines share common characteristics: they are specific, they create curiosity or urgency without being clickbait, and they feel personal rather than corporate.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Subject Line Formulas That Work</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-semibold text-[#ff914d]">Specific + Curiosity:</span> "The dish our Sliema regulars ask for every Friday"</li>
              <li><span className="font-semibold text-[#ff914d]">Time-Limited:</span> "This weekend only: what's new at [location]"</li>
              <li><span className="font-semibold text-[#ff914d]">Behind the Scenes:</span> "What happened when we tried this in Malta"</li>
              <li><span className="font-semibold text-[#ff914d]">Direct Offer:</span> "For our subscribers: one thing you won't see on Instagram"</li>
              <li><span className="font-semibold text-[#ff914d]">Question:</span> "Have you been to this part of Valletta yet?"</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Email Automation: Set Up Once, Earn Forever</h2>
          <p className="text-lg text-gray-700 mb-6">
            The most powerful aspect of email marketing for Malta businesses is automation. A well-designed email sequence runs without any manual effort after the initial setup. When someone subscribes, they automatically receive a welcome sequence that introduces your business, delivers their lead magnet, and guides them toward a first purchase or booking.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            For a restaurant in St Julian's, this might look like: Day 1 — welcome email with a reservation link. Day 3 — story about the restaurant's origin. Day 7 — your most popular dish and what makes it special. Day 14 — an exclusive subscriber offer. This sequence runs for every new subscriber automatically, meaning you are nurturing new customers while you sleep.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">digital marketing services</span></Link> include full email automation setup and strategy for Malta businesses. We also integrate email with your <Link href="/ai-agents"><span className="text-[#ff914d] font-semibold hover:underline">AI systems</span></Link> to personalise campaigns at scale.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">GDPR Compliance for Malta Email Marketing</h2>
          <p className="text-lg text-gray-700 mb-6">
            Malta is an EU member state, and GDPR applies in full. This means every subscriber must have given explicit, documented consent to receive marketing emails. You cannot use pre-ticked checkboxes, purchase lists, or add customers to your list without their knowledge. Every email must include a working unsubscribe link, and you must honour unsubscribe requests within 10 days.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The Malta Information and Data Protection Commissioner (IDPC) has enforcement powers including fines. The practical implication for Malta businesses is straightforward: build your list through proper opt-in mechanisms, document your consent processes, and use a reputable email platform that handles unsubscribes automatically. Do this from day one and compliance is never a problem.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Email Marketing Success</h2>
          <p className="text-lg text-gray-700 mb-4">
            The metrics that matter for Malta email marketing:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2">
            <li><span className="font-semibold">Open rate:</span> Target 35–50% for a well-maintained Malta list</li>
            <li><span className="font-semibold">Click-through rate:</span> 3–8% is excellent; measures how compelling your content is</li>
            <li><span className="font-semibold">Conversion rate:</span> Of people who clicked, how many took the desired action (booked, purchased, enquired)?</li>
            <li><span className="font-semibold">List growth rate:</span> Are you adding more subscribers than you lose each month?</li>
            <li><span className="font-semibold">Revenue per email:</span> The ultimate measure — how much direct revenue did each campaign generate?</li>
          </ul>

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
