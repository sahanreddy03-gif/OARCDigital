import TrustBlock from "@/components/seo/TrustBlock";

export default function PageContent() {
    return (
      <section className="py-16 md:py-24 bg-background border-t">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Stop losing bookings to voicemail and after-hours web chats
          </h1>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The booking problem is bigger than it looks</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Across our Maltese hospitality and clinic clients, the number that surprises every owner is the same: 28-42% of all booking enquiries arrive outside front-desk hours. Late evenings, Sunday mornings, the lunchtime-rush hour when reception is on a phone call. Without an answer in the first ten minutes the prospect is on the next listing, on the next Google result, in someone else's diary. The OARC AI Appointment Booker exists for exactly that gap.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              It books, confirms, reschedules and follows up across web chat, WhatsApp, SMS, and email — and where you want it to, voice. It plugs straight into your Google Calendar, Outlook, OpenTable, ResDiary, Mindbody, Acuity, Cal.com, or whatever you already use, so reception keeps a single source of truth. The first measurable outcome — usually inside two weeks — is the recapture of those after-hours enquiries.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why hospitality and clinics on the islands love it</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              A typical Sliema or St Julian's restaurant runs at 95%+ table utilisation on Friday and Saturday nights. The cost of a no-show on those nights is not the empty seat — it is the queue of walk-ins you turned away expecting to be full. Booker deployments configured with deposit capture and aggressive SMS reminders typically reduce no-shows by 28-35% within sixty days. For a forty-cover restaurant on a busy weekend, that is a four-figure recovery per Saturday.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Clinics in Mosta, Birkirkara and Floriana use the same agent pattern for a different problem: medical bookings have very specific intake requirements (insurance, referral, prior treatment) that clog reception. The agent screens the intake, fills the practice-management form, and schedules into the right consultant's calendar — leaving reception time for actual patient interactions.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How the deployment works</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Week one we audit the existing booking flow: where leads come from, the systems they hit, the human steps between enquiry and confirmed booking, and the current no-show profile. Week two we wire integrations — calendar sync, deposit capture (Stripe / Revolut Business), and the channel surfaces (web chat widget, WhatsApp Business API, SMS via Twilio or Vonage, email).
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Week three is the scripted soft launch on a single channel — usually web chat — with the human reception team copy-checking every conversation. Week four expands to all channels, and we shift to a fortnightly tuning cadence where we review the conversations that escalated to humans and tighten the script. By week six most clients are running at 80%+ self-service booking on the easy paths and human escalation only on edge cases.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pricing, ROI and Maltese-language support</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Booking Agent Lite at €690/month handles web + email for a single calendar and up to 400 bookings per month — a fit for a single-location clinic or specialty restaurant. Multichannel Booker at €1,490/month adds WhatsApp + SMS, multi-staff calendar coverage, and the full no-show recovery cadence. Hospitality Concierge at €2,900/month is the deposit-capture, table-management, bilingual EN/MT script tier built specifically for Malta restaurants and spas.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Bilingual English / Maltese is configured by default for clients with Maltese-speaking customer bases — the agent classifies each conversation by language and replies in kind. For brokerage and hospitality clients with significant Italian, French, or German enquiry volume, those languages are added during onboarding without an extra fee.
            </p>
          </div>

        <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Where it sits in your wider AI stack</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Most clients run the Booker as part of a two-agent rollout — Booker for incoming enquiries, AI Support Specialist for inbound questions and complaints. The two share the same conversation history, so a customer who books on Tuesday and asks about an allergen on Wednesday gets a connected experience. For larger operators we add the AI Voice Agent for phone overflow, which catches the calls reception cannot answer in twelve seconds.
            </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              If you are comparing against ChatGPT-style 'all-purpose' bots or platform-locked options like Calendly's AI scheduler, the OARC pitch is operational rather than feature-led: we run the agent, tune the script weekly, monitor deliverability on WhatsApp and SMS, and answer the phone in CET hours when something breaks. The agent is a software product; the value is the managed service.
            </p>
          </div>

        <div className="mt-12">
            <TrustBlock variant="visit" />
          </div>
        </div>
      </section>
    );
  }
  