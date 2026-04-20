import JsonLd from '@/components/JsonLd';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const faqs = [
  {
    question: 'How do I respond to a negative Google review in Malta?',
    answer: 'Responding to negative Google reviews in Malta requires a calm, professional, and empathetic approach — because your response is public and visible to every potential customer who reads the review. The formula that works: acknowledge the reviewer\'s experience without admitting fault ("Thank you for taking the time to share your experience"), express genuine concern ("We\'re sorry to hear this did not meet your expectations"), take the conversation offline ("Please contact us directly at [email/phone] so we can make this right"), and avoid being defensive or arguing facts publicly. In Malta\'s tight-knit community, how you handle a negative review is often more persuasive than the review itself — a business that responds with grace and professionalism gains trust even from the complaint.',
  },
  {
    question: 'Can I remove a negative Google review about my Malta business?',
    answer: 'You can request the removal of a Google review only if it violates Google\'s review policies — which include fake reviews, spam, reviews from disgruntled ex-employees, reviews that contain personal information or inappropriate content, or reviews that are clearly about the wrong business. Google does not remove negative reviews simply because you disagree with them or believe them to be unfair. To request removal, flag the review in your Google Business Profile dashboard and select the relevant policy violation. If Google rejects the request and you have strong evidence the review is fake or violates policy, you can escalate through the Google Business Profile support channel. For genuinely fake reviews about Malta businesses, documenting the evidence and escalating persistently does sometimes result in removal.',
  },
  {
    question: 'How do I get more Google reviews for my Malta business?',
    answer: 'The most effective review generation strategies for Malta businesses are: ask at the right moment (immediately after a positive customer interaction, not days later), make it easy (send a direct link to your Google review page via WhatsApp — requiring customers to find your profile themselves loses most of them), use QR codes at physical locations (on receipts, table cards, packaging, mirrors in bathrooms), train your team to ask verbally in a natural way ("If you enjoyed your experience today, we\'d really appreciate a Google review — I can send you a quick link"), and create a systematic follow-up process. In Malta, WhatsApp follow-ups sent within 1–2 hours of a positive experience achieve the highest review conversion rates because the experience is still fresh and the barrier is minimal.',
  },
  {
    question: 'How important are reviews on TripAdvisor vs Google for Malta businesses?',
    answer: 'For Malta hospitality businesses — restaurants, hotels, bars, experience providers — both platforms are critically important but serve different audiences. Google reviews are searched by both locals and tourists and directly affect your Google Maps ranking, making them the highest-priority platform. TripAdvisor reaches primarily international tourists researching Malta before and during their visit — particularly important for businesses in Valletta, Sliema, and the tourist corridor. Booking.com reviews matter enormously for hotels specifically, as they appear directly in the booking interface. The best approach for Malta hospitality businesses is to prioritise Google reviews for local search impact, while maintaining a strong TripAdvisor presence for international tourist discovery. Consistent, well-responded-to reviews on both platforms signal professionalism and build trust.',
  },
  {
    question: 'What is online reputation management and does a small Malta business need it?',
    answer: 'Online reputation management (ORM) is the process of monitoring, influencing, and improving how your business appears across Google, social media, review platforms, and directories. For small Malta businesses, the core ORM activities are: setting up Google Alerts for your business name, regularly checking and responding to reviews across all platforms, maintaining consistent and accurate business information across directories, proactively generating new positive reviews to dilute any negative ones, and monitoring social media mentions. Even a small restaurant in Birkirkara or a hair salon in St Julian\'s benefits from basic ORM because a single viral negative review on Facebook Malta groups or a low Google rating can significantly impact walk-in traffic. The businesses most vulnerable to reputation damage are those that are not monitoring what\'s being said about them.',
  },
];

export default function ReputationManagementMalta() {
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
    headline: 'Reputation Management Malta: How to Manage Your Google Reviews',
    description: 'How Malta businesses build and protect their online reputation — responding to reviews, generating new ones, and managing what appears when customers search for them.',
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
      <JsonLd data={[faqSchema, articleSchema]} />
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#ff914d] text-sm font-semibold mb-4 uppercase tracking-wider">OARC Digital — Malta</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Reputation Management Malta: How to Manage Your Google Reviews
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              In Malta's small, interconnected community, your online reputation travels fast. Here is how to build it deliberately, protect it proactively, and recover from it quickly.
            </p>
            <Link href="/contact">
              <button className="bg-[#ff914d] hover:bg-[#e8823e] text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Get a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Online Reputation Matters More in Malta</h2>
          <p className="text-lg text-gray-700 mb-6">
            Malta is a small island with approximately 520,000 residents. Word travels fast. A poor experience at a restaurant in Valletta gets discussed in WhatsApp groups, shared in Facebook Malta communities, and referenced in conversations between people who have never met. Simultaneously, a viral positive review or a well-handled complaint response can generate new customers from across the island within days.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The digital component of Malta's word-of-mouth is Google reviews. When a Maltese resident searches for a plumber in Birkirkara, a dentist in Sliema, or a restaurant in St Julian's, Google's local results show the star rating prominently. Studies consistently show that businesses with ratings below 4.0 lose between 50–70% of potential customers to competitors with higher ratings. In Malta's competitive hospitality market particularly, the difference between a 4.2 and a 4.7 rating translates directly into table bookings.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building a Review Generation System</h2>
          <p className="text-lg text-gray-700 mb-6">
            The businesses with the strongest Google profiles in Malta did not get there by accident. They built systems — simple, repeatable processes that generate a consistent flow of new reviews from satisfied customers. Here is what works:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The WhatsApp Follow-Up Method</h3>
          <p className="text-lg text-gray-700 mb-6">
            For Malta businesses with customer phone numbers, a WhatsApp message sent 1–2 hours after a positive experience is the highest-converting review request method. The format: "Thank you for visiting [Business Name] today — we hope you enjoyed your experience! If you have a moment, a Google review would mean the world to us: [link]." Short, personal, and easy to action. A QR code shortcut to your Google review page reduces friction further — customers can scan and leave a review in under 60 seconds.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Physical Review Prompts</h3>
          <p className="text-lg text-gray-700 mb-6">
            QR codes on receipts, on table cards, on product packaging, and in bathrooms are passive review generators that work without staff effort. A simple "Love what you see? Let us know on Google" with a QR code on every receipt consistently generates additional reviews without any active asking. For Malta hospitality businesses, a well-placed prompt near the exit ("Before you leave — your Google review helps us more than you know") catches customers at the moment of peak positive sentiment.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Responding to Reviews: The Brand Signal</h2>
          <p className="text-lg text-gray-700 mb-6">
            How you respond to reviews — positive and negative — is public marketing. Every potential customer who reads a negative review also reads your response. A professional, empathetic response to a complaint demonstrates customer care more powerfully than any marketing campaign. A defensive or dismissive response amplifies the damage.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Responding to Positive Reviews</h3>
          <p className="text-lg text-gray-700 mb-6">
            Responding to positive reviews is not just politeness — it signals to Google that you are actively engaged with your profile (a ranking factor) and it creates a conversation that other readers observe. Keep responses warm, specific (reference something from their review), and human — not templated. "Thank you for your kind words about our pasta — Chef Marco will be delighted to hear you enjoyed it!" is infinitely better than "Thank you for your review. We look forward to seeing you again."
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Responding to Negative Reviews</h3>
          <p className="text-lg text-gray-700 mb-6">
            The framework for responding to negative reviews: acknowledge, empathise, take offline. Never argue facts publicly. Never be defensive. Never ignore. A negative review that receives a thoughtful, professional response often results in the reviewer updating their rating — and in Malta's community, publicly handling criticism with grace earns significant respect.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our <Link href="/services"><span className="text-[#ff914d] font-semibold hover:underline">digital marketing services</span></Link> include reputation management for Malta businesses — from review generation systems and response templates to monitoring and recovery strategies. For businesses with complex reputation challenges, our <Link href="/ai-agents"><span className="text-[#ff914d] font-semibold hover:underline">AI systems</span></Link> can automate review monitoring and draft initial responses for human approval.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Managing Your Reputation Beyond Google</h2>
          <p className="text-lg text-gray-700 mb-6">
            For Malta businesses serving tourists, TripAdvisor and Booking.com reviews are equally important. For B2B companies, LinkedIn recommendations and Clutch reviews matter. For restaurants in Valletta and Sliema, Facebook recommendations from local Malta groups carry significant weight because they come from people whose profiles are visible to friends of the reviewer.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            A comprehensive reputation management approach for Malta businesses monitors all relevant platforms, maintains a response protocol for each, and generates new reviews across the platforms most important for your specific industry and audience. The businesses with the strongest online presence in Malta consistently treat reputation management as an ongoing system, not a one-time fix.
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
