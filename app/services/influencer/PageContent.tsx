"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  Sparkles,
  Trophy,
  UtensilsCrossed,
  Dice5,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";
import RelatedLinks from "@/components/RelatedLinks";

const heroImage = "/attached_assets/Biolage-influencer-marketing-agency-socially-powerful_1763243258630.jpg";
const localCreatorImg =
  "/attached_assets/stock_images/influencer_marketing_3b6f7762.jpg";
const onPropertyImg =
  "/attached_assets/stock_images/influencer_content_c_71663437.jpg";
const reportingImg =
  "/attached_assets/stock_images/social_media_influen_3c07c2fc.jpg";

const malteseCreatorFAQs: FAQItem[] = [
  {
    question:
      "Why work with Maltese creators instead of import influencers from London or Milan?",
    answer:
      "Local recognition. A creator who is genuinely known on the islands lands better with buyers in Sliema, St Julian's, Valletta and Gozo than a flown-in macro influencer. They already eat at the restaurants you compete with, drink at the same beach clubs, and their followers convert into actual table bookings or hotel stays — not vanity reach from an audience that will never visit Malta.",
  },
  {
    question: "Which creator categories does the network cover?",
    answer:
      "Five working categories: hospitality (hotel, restaurant, beach club and venue creators), lifestyle (fashion, beauty, wellness, family), sport and fitness, food and beverage, and entertainment (DJ, music, nightlife). We deliberately avoid categories where we lack real Maltese depth — politics, hard news commentary and finance influencers are not on the roster.",
  },
  {
    question: "Will you name specific creators in the proposal?",
    answer:
      "Not in the public proposal. The first conversation discusses category, audience size and budget. Once the brief is signed and an NDA is in place, you receive a shortlist of named Maltese creators with audience demographics, engagement history and past brand partnerships. This protects creator pricing and the brands they have worked with.",
  },
  {
    question: "Can you run an iGaming influencer campaign in Malta?",
    answer:
      "Yes — for MGA-licensed operators only, and only for creators whose audience is 18+ and whose content is reviewable against MGA marketing rules and platform policy. We refuse work for unlicensed operators and never run player-acquisition creative that breaches responsible-gaming guidelines or hides the affiliate relationship.",
  },
  {
    question: "How do you measure whether a Malta creator campaign worked?",
    answer:
      "Three reporting layers tied to your business, not just to the post. Creator-level — reach, completion, save and share rate per piece of content. Campaign-level — UTMs, discount codes, QR menu scans and form fills attributable to the campaign window. Business-level — bookings, table covers, hotel nights, deposits or sign-ups in the week after the post versus the prior baseline.",
  },
  {
    question: "How is this different from /services/influencer-marketing?",
    answer:
      "/services/influencer-marketing is the generic strategy and programme offer for any market. /services/influencer is specifically the Malta-local creator network: Maltese creators only, hospitality / lifestyle / iGaming focus, and reporting that ties back to revenue on the islands.",
  },
  {
    question: "What is the minimum campaign size?",
    answer:
      "The Local Launch Campaign at €3,900 is the floor. Below that, contract management, payments and reporting eat too much of the brief to leave anything meaningful for the creators themselves.",
  },
  {
    question: "Who owns the content after the campaign ends?",
    answer:
      "Each contract spells it out. The default for the Always-On pod and Ambassador programmes is 90-day to 12-month paid usage rights for the brand on Meta and TikTok, plus permanent organic re-share rights with the original credit.",
  },
];

const categories = [
  {
    key: "hospitality",
    icon: Hotel,
    eyebrow: "Category 01 — Hospitality",
    title: "Hotels, restaurants, beach clubs and venues",
    body:
      "The bulk of our Maltese creator work sits here. Sliema seafront hotels launching a refurbished rooftop, St Julian's restaurants opening for the season, Mellieha beach clubs ramping for July and August, Valletta wine bars working a weekday cover problem. We brief creators with the booking engine, the actual ADR by weekday, and the table covers we need to move — then build content that makes a viewer pick up the phone or open the booking page that same evening, not bookmark it for next year.",
  },
  {
    key: "lifestyle",
    icon: Sparkles,
    eyebrow: "Category 02 — Lifestyle",
    title: "Fashion, beauty, wellness and family",
    body:
      "Fashion drops at Plaza Sliema and The Point, beauty launches stocked through Maltese pharmacy chains, wellness studios in Ta' Xbiex and Birkirkara, family brands selling through Smart Supermarkets and Pavi. Maltese lifestyle creators have tight, loyal audiences — usually 8k-60k followers — that buy on local recommendation. We pair brands with creators whose audience demographics actually match the buyer, not whichever creator is currently topping the like-counts.",
  },
  {
    key: "sport-fitness",
    icon: Trophy,
    eyebrow: "Category 03 — Sport & Fitness",
    title: "Gyms, padel clubs, water sports and supplement brands",
    body:
      "Maltese sport content punches above its weight — padel grew from one club to over a dozen across the islands in three years, water sport creators in Mellieha and Cirkewwa pick up European audiences, and gym creators in Marsa and Birkirkara drive real membership sign-ups. We help sport and fitness brands work with creators who actually train at the venues, not paid-day appearances that the audience can smell within a single reel.",
  },
  {
    key: "food-beverage",
    icon: UtensilsCrossed,
    eyebrow: "Category 04 — Food & Beverage",
    title: "Restaurants, food brands and Maltese drinks",
    body:
      "Food creators are the most over-sold category in Malta — every restaurant has been pitched a free-meal-for-a-post deal a hundred times. We rebuild the brief: paid placements with proper deliverables, multiple covers per shoot, a content rights window that lets the restaurant re-use the asset on Meta and TikTok, and a clear reporting line back to table bookings. Same for retail food brands — Maltese pasta, Gozo cheese, local olive oil, craft beer.",
  },
  {
    key: "igaming",
    icon: Dice5,
    eyebrow: "Category 05 — iGaming (MGA-licensed only)",
    title: "Casino, sportsbook and operator brand work",
    body:
      "Strictly for MGA-licensed operators, strictly within MGA marketing rules. Audience age verification, no underage-adjacent creators, responsible-gaming creative review at the storyboard stage, and a written compliance trail per post. We turn down more iGaming creator briefs than we accept — the ones we run are usually brand awareness around sponsorships, not direct player acquisition through deposits.",
  },
];

export default function Influencer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Speakable JSON-LD for the H1 + first paragraph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://oarcdigital.com/services/influencer",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["[data-speakable]"],
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="While competitors post, our clients close — Malta-local creator network for hospitality, lifestyle and iGaming brands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55"></div>
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="relative z-10 px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#c4ff4d]/15 border border-[#c4ff4d]/40 text-[#c4ff4d] text-xs font-semibold uppercase tracking-wider">
            Malta-only · Hospitality · Lifestyle · iGaming
          </div>
          <h1
            data-speakable
            data-testid="heading-influencer"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Maltese creators,{" "}
            <span className="italic" style={{ color: "#c4ff4d" }}>
              briefed for bookings
            </span>
          </h1>
          <p
            data-speakable
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl"
          >
            A working network of Malta-based creators briefed for hospitality,
            lifestyle, sport, food and MGA-licensed iGaming brands. We source,
            contract and report on creators whose audiences actually live on the
            islands — and whose posts move table covers, room nights and
            deposits the same week.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button
                className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
                data-testid="button-hero-cta"
              >
                Book your Malta creator brief
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
                </div>
              </button>
            </Link>
            <Link href="/services/influencer-marketing">
              <button
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur text-white border border-white/30 rounded-full pl-8 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                data-testid="link-generic-influencer"
              >
                Looking for the generic offer?
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-black" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder voice — why local */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="max-w-5xl mx-auto relative">
            <div className="text-xs uppercase tracking-wider mb-3 text-[#6b9b12] font-semibold">
              From Sahan Reddy, founder
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              Why a local creator network beats a global one in Malta
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#1a2e29]/85">
              <p>
                Most influencer briefs we inherit in Malta have the same
                problem. The brand wants the biggest follower count it can
                afford, the agency books a creator from London, Berlin or
                Milan, the post goes out to a few hundred thousand people who
                will never set foot on the island, and the restaurant or the
                hotel or the gym wonders why the bookings line on Monday
                morning looks identical to the week before. Reach is not the
                product. Recognition on a 27-by-15 kilometre island is the
                product.
              </p>
              <p>
                Malta is small enough that a creator with 12,000 engaged local
                followers will out-perform a 400,000-follower visiting macro
                every single time on metrics that pay the bills — covers,
                stays, deposits, padel court bookings, supplement subscriptions.
                The audience already knows the streets the creator films on,
                they recognise the staff in the back of the shot, they recall
                the venue from a friend's Saturday night a fortnight ago. That
                familiarity is the whole game.
              </p>
              <p>
                We built the OARC Digital Maltese creator network for exactly
                that reason. It is a working roster, refreshed quarterly,
                across hospitality, lifestyle, sport, food and entertainment
                creators who actually live on the islands and have a paying
                audience here. We brief them like a media buy — clear
                deliverables, fair pricing, contracted usage rights, and a
                reporting line that goes back to the booking engine, the EPOS
                cover count or the deposit dashboard.
              </p>
              <p>
                That same discipline is why we treat iGaming creator work as a
                separate compliance lane and why we turn down the majority of
                food-creator briefs that arrive with the words "free meal in
                exchange for a post". The roster only works if both sides — the
                brand and the creator — feel fairly treated, otherwise the
                next campaign stalls before it starts.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Image block — local creators on location */}
      <ScrollReveal delay={120}>
        <section className="relative py-14 px-4 overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-3xl overflow-hidden glow-lime-subtle order-2 lg:order-1">
                <img
                  src={localCreatorImg}
                  alt="Maltese hospitality creator filming on-property content for a Sliema seafront hotel"
                  className="w-full h-[460px] object-cover"
                  data-testid="img-local-creator"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-xs uppercase tracking-wider mb-3 text-[#6b9b12] font-semibold">
                  How the roster is built
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-black mb-5">
                  A vetted Maltese roster, refreshed every quarter
                </h2>
                <div className="space-y-4 text-base text-[#1a2e29]/85">
                  <p>
                    Every creator on the roster has been through a four-step
                    intake. We pull a 90-day audience report, check the
                    locality split (we want the majority of followers to be
                    Malta-resident, not Maltese-diaspora), review the last six
                    paid partnerships for tone and disclosure, and meet the
                    creator in person at our Birkirkara base or on a venue
                    shoot.
                  </p>
                  <p>
                    The roster is refreshed quarterly. Creators whose audience
                    is drifting off-island, whose engagement has collapsed, or
                    who have taken on category-conflicting brand work get
                    rotated out. New entrants are added the same way — usually
                    through introductions from existing creators we already
                    trust on the network.
                  </p>
                  <p>
                    None of that roster is published. Brands receive a named
                    shortlist after the brief is signed and an NDA is in
                    place, with audience data, partnership history and
                    indicative pricing per creator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5 categories */}
      <section className="py-14 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-sm uppercase tracking-wider mb-3 text-[#6b9b12] font-semibold">
              Five creator categories
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              The Maltese creator network, by category
            </h2>
            <p className="text-base text-[#1a2e29]/70 mt-3 max-w-3xl">
              We do not name individual creators on a public page — that
              protects their pricing and the brands they have worked with.
              Here are the five working categories the roster covers, with
              who each one tends to fit best.
            </p>
          </div>
          <div className="space-y-10">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.key} delay={idx * 80}>
                  <div
                    id={cat.key}
                    className="rounded-3xl bg-white border border-zinc-200 p-8 md:p-10"
                    data-testid={`section-category-${cat.key}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#c4ff4d]" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-[#6b9b12] font-semibold">
                        {cat.eyebrow}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
                      {cat.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#1a2e29]/85">
                      {cat.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How a campaign works */}
      <ScrollReveal>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              How a Maltese creator campaign actually works
            </h2>
            <p className="text-base md:text-lg text-[#1a2e29]/80 mb-8">
              No mystery process. Here is the same six-step flow we run for a
              hospitality launch in St Julian's, a fashion drop at Plaza
              Sliema, or a padel club push out of Marsa.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg text-[#1a2e29]/85">
              <li>
                <strong className="text-black">Brief intake</strong> — a
                60-minute call covering the moment you are activating around
                (launch week, season opening, new menu, sponsorship), the
                business outcome you need (covers, stays, sign-ups, deposits)
                and the budget envelope. Output: a one-page brief signed by
                both sides.
              </li>
              <li>
                <strong className="text-black">Shortlist</strong> — three to
                eight named Maltese creators per category, each with audience
                size, locality split, last-six partnerships and indicative
                pricing. You pick the ones you want; we negotiate the deals.
              </li>
              <li>
                <strong className="text-black">Contracts and payment</strong>
                {" — "}EUR-denominated contracts covering deliverables, usage
                rights, exclusivity window, disclosure language and payment
                terms. Creators are paid on agreed milestones; brands receive
                a single consolidated invoice from OARC Digital.
              </li>
              <li>
                <strong className="text-black">Production</strong> — content
                is filmed on-property where it makes sense (hospitality,
                fitness, retail) or supplied as a flat fee for in-feed
                organic where it does not. Hospitality shoots usually run
                weekday off-peak so the venue is filmable without disrupting
                covers.
              </li>
              <li>
                <strong className="text-black">Compliance review</strong> —
                every post is reviewed against ASA Malta rules and platform
                policy before publication. iGaming posts get an additional
                MGA marketing-rules check. Disclosure language is non-negotiable.
              </li>
              <li>
                <strong className="text-black">Reporting</strong> — a single
                report per campaign tying creator-level engagement to
                campaign-level traffic (UTMs, codes, QR scans) and to
                business-level revenue (covers, room nights, sign-ups,
                deposits) versus the prior baseline. No screenshots of
                Instagram analytics presented as a result.
              </li>
            </ol>
          </div>
        </section>
      </ScrollReveal>

      {/* Sample partnership flow */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs uppercase tracking-wider mb-3 text-[#6b9b12] font-semibold">
                  Sample partnership — anonymised
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-black mb-5">
                  Sliema seafront hotel, summer rooftop relaunch
                </h2>
                <div className="space-y-4 text-base text-[#1a2e29]/85">
                  <p>
                    A 4-star Sliema seafront hotel reopened a refurbished
                    rooftop bar at the start of June. Direct bookings into
                    the rooftop drinks slot were running 18% of total
                    capacity. Goal: lift that to 35% across July and August
                    using local recognition rather than discounting.
                  </p>
                  <p>
                    Roster: four hospitality creators (15k-45k engaged Malta
                    followers each), one food-and-drink creator known for
                    bartender-led content, and one lifestyle creator
                    overlapping with the hotel's 28-40 demographic. Two
                    on-property shoot evenings produced 14 pieces of content,
                    rolled out across an eight-week window with paid
                    amplification on Meta whitelisted from creator handles.
                  </p>
                  <p>
                    Outcome by end of August: rooftop direct booking share at
                    34% of capacity (vs the 35% target), table-bookings
                    enquiries via Instagram DM up 4x on the same window the
                    previous year, and three of the four hospitality creators
                    re-contracted into the Always-On pod for the autumn
                    season. No discounting was used at any point.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden glow-lime-subtle">
                <img
                  src={onPropertyImg}
                  alt="On-property creator shoot for a Sliema seafront hotel rooftop relaunch"
                  className="w-full h-[460px] object-cover"
                  data-testid="img-sample-partnership"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What every engagement ships with */}
      <ScrollReveal>
        <section className="py-14 px-4 bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
              What every Maltese creator engagement ships with
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Named creator shortlist with audience locality split (Malta-resident vs diaspora)",
                "EUR-denominated contracts with clear deliverables, usage rights and exclusivity",
                "ASA Malta and EU disclosure language enforced on every post",
                "MGA marketing-rules compliance review for any iGaming-adjacent work",
                "On-property shoot scheduling around hospitality off-peak windows",
                "Paid usage rights on Meta and TikTok for the agreed window (default 90 days)",
                "Single consolidated invoice from OARC Digital — no chasing individual creators",
                "Reporting tied to bookings, covers, deposits or sign-ups — not just reach",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-zinc-200"
                  data-testid={`feature-row-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#6b9b12] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-[#1a2e29]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Reporting block */}
      <ScrollReveal>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-3xl overflow-hidden glow-lime-subtle">
                <img
                  src={reportingImg}
                  alt="Maltese influencer campaign reporting tied to booking-engine and EPOS data"
                  className="w-full h-[440px] object-cover"
                  data-testid="img-reporting"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-3 text-[#6b9b12] font-semibold">
                  Reporting that ties back to revenue
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-black mb-5">
                  Three layers, one report — no Instagram screenshots
                </h2>
                <div className="space-y-4 text-base text-[#1a2e29]/85">
                  <p>
                    Most influencer reporting in Malta arrives as a screenshot
                    of Instagram insights pasted into a slide. That is not a
                    result, that is a vanity metric in slightly more formal
                    clothing. Our reports are built in three layers, with the
                    business layer at the top and the platform metrics at the
                    bottom — opposite to the agency norm.
                  </p>
                  <p>
                    Layer one is business outcomes — covers booked, room
                    nights sold, padel courts reserved, deposits taken, sign-ups
                    completed in the eight-day window after each post versus
                    the prior eight-day baseline. Layer two is campaign
                    attribution — UTM-tagged clicks, discount-code redemptions,
                    QR-menu scans, form fills. Layer three is creator-level
                    engagement — saves, shares, completion rate and audience
                    overlap with your existing customer base.
                  </p>
                  <p>
                    The same report goes to the marketing lead, the operations
                    lead and the finance lead. Each one finds the layer they
                    care about without having to ask for a different deck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Cross-links */}
      <section className="py-14 px-4 bg-[#FAFAF6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Pair this with the rest of the OARC stack
          </h2>
          <p className="text-base text-[#1a2e29]/70 mb-8 max-w-2xl">
            Maltese creator work compounds when it is paired with the right
            paid amplification, the right industry hub and the right local
            social management. Here is where to go next.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                href: "/services/influencer-marketing",
                label: "Generic influencer marketing (any market)",
              },
              {
                href: "/industries/hotels",
                label: "Hospitality hub — Hotels",
              },
              {
                href: "/industries/restaurants",
                label: "Hospitality hub — Restaurants",
              },
              { href: "/industries/igaming", label: "iGaming hub — Malta" },
              {
                href: "/services/social-media-creative-management",
                label: "Local social management for creators' content",
              },
              {
                href: "/services/paid-advertising",
                label: "Paid amplification of creator content",
              },
              {
                href: "/aeo/influencer-marketing-malta",
                label: "Influencer marketing Malta — discovery page",
              },
              {
                href: "/aeo/social-media-agency-malta",
                label: "Social media agency Malta",
              },
              { href: "/creative", label: "Pillar — full creative stack" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-[#1a2e29] hover-elevate active-elevate-2"
                data-testid={`link-cross-${l.href.replace(/[^a-z0-9]+/gi, "-")}`}
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related links from internal link graph */}
      <div className="max-w-6xl mx-auto px-4">
        <RelatedLinks slug="/services/influencer" />
      </div>

      {/* FAQ */}
      <FAQSection
        faqs={malteseCreatorFAQs}
        title="Malta Influencer Marketing FAQ"
        subtitle="The questions Maltese hospitality, lifestyle and iGaming brands ask before signing a creator brief."
        schemaId="faq-services-influencer-malta"
      />

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c4ff4d]/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to brief Maltese creators properly?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Tell us the moment you are activating around — opening, season,
            launch, sponsorship — and the rough budget. We will come back
            inside two business days with a category recommendation and a
            named shortlist scope.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
              data-testid="button-final-cta"
            >
              Book your Malta creator brief
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
