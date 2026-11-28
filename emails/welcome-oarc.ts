import type { Email } from "./template";
import { OARC_ASSETS } from "./brands/oarc";

const SITE = "https://oarcdigital.com";
const BOOK = "https://cal.com/oarc-digital-srwvnv?utm_source=welcome-email&utm_medium=calcom&utm_campaign=booking";
const WHATSAPP = "https://wa.me/35679711799?text=Hi%20OARC%20Digital%2C%20I%27d%20like%20to%20talk%20about%20a%20project.";

const page = (path: string) => `${SITE}${path}?utm_source=welcome-email&utm_medium=email`;

/**
 * The welcome email a person gets after they fill in a form on the site.
 * {{firstName|there}} is swapped for their name, or "there" when we have none.
 */
export function welcomeOarc(assetBase: string = OARC_ASSETS): Email {
  return {
    subject: "We got your message. Here's what happens next.",
    preheader: "The people who do the work will reply to you. Meanwhile, see what one team can build for you.",
    blocks: [
      {
        type: "hero",
        heading: "Welcome. Let's get you *more customers.*",
        text: "Hi {{firstName|there}}, thank you for writing to OARC Digital. Your message is with us, and we are glad you got in touch.",
        button: { label: "Book a 20-minute call", url: BOOK },
        image: {
          src: `${assetBase}/hero-key.jpg`,
          alt: "A red key opening a bright doorway in a blue wall",
          width: 1232,
          height: 820,
        },
      },
      {
        type: "steps",
        heading: "Here is what happens next.",
        steps: [
          {
            title: "We read your message.",
            text: "The people who will do the work read it. You talk to them, not to a sales desk.",
          },
          {
            title: "We get back to you.",
            text: "We ask a few simple questions about your business and what you want to grow.",
          },
          {
            title: "You get a clear plan.",
            text: "What we would do, in what order, and what it costs. Then you decide.",
          },
        ],
      },
      {
        type: "cards",
        heading: "One team. Everything your brand needs.",
        intro: "No more managing five suppliers. Here is what we can do for you.",
        linkLabel: "See how",
        cards: [
          {
            image: `${assetBase}/card-branding.jpg`,
            alt: "A white bottle on a marble stand",
            title: "Branding",
            text: "Logo, identity and strategy. A brand people pay more for.",
            url: page("/services/branding"),
          },
          {
            image: `${assetBase}/card-social.jpg`,
            alt: "Coloured ribbons tied in one knot",
            title: "Social media",
            text: "We plan, film, edit and post. You run your business.",
            url: page("/services/social"),
          },
          {
            image: `${assetBase}/card-film.jpg`,
            alt: "Folded red paper on a yellow wall",
            title: "Film and video",
            text: "Films and Reels that make people act.",
            url: page("/services/video-production"),
          },
          {
            image: `${assetBase}/card-websites.jpg`,
            alt: "Light passing through a glass prism",
            title: "Websites",
            text: "Websites that turn visitors into customers.",
            url: page("/services/web-design"),
          },
          {
            image: `${assetBase}/card-seo.jpg`,
            alt: "A red ball balanced on a stone block",
            title: "SEO",
            text: "Own the Google searches that bring you customers.",
            url: page("/services/seo-services"),
          },
          {
            image: `${assetBase}/card-ads.jpg`,
            alt: "Red glass discs on yellow and blue tiles",
            title: "Paid ads",
            text: "Google, Meta and TikTok ads, managed in Malta.",
            url: page("/services/media"),
          },
        ],
      },
      {
        type: "feature",
        image: { src: `${assetBase}/feature-industry.jpg`, alt: "A red cube pouring onto a curved stone ramp under a blue sky" },
        heading: "AI built for *your industry.*",
        text: "One complete AI system for your kind of business. It answers, books, follows up and does the admin, day and night.",
        chips: [
          { label: "Hotels", url: page("/ai/hotels") },
          { label: "Restaurants", url: page("/ai/restaurants") },
          { label: "Clinics", url: page("/ai/clinics") },
          { label: "Law firms", url: page("/ai/law-firms") },
          { label: "Real estate", url: page("/ai/real-estate") },
          { label: "Tourism", url: page("/ai/tourism") },
          { label: "Education", url: page("/ai/education") },
          { label: "Casinos", url: page("/ai/casinos") },
          { label: "iGaming", url: page("/ai/igaming-operators") },
          { label: "Business admin", url: page("/ai/business-admin") },
        ],
        note: "Not listed? We build it around you.",
        link: { label: "See every AI system", url: page("/ai") },
      },
      {
        type: "cards",
        heading: "Custom systems, built around you.",
        intro: "Need something that does not exist yet? We build it for your business.",
        linkLabel: "See how",
        cards: [
          {
            image: `${assetBase}/card-ai-staff.jpg`,
            alt: "A silver hand placing a glowing cube",
            title: "AI staff",
            text: "AI employees for sales, support and bookings. They work 24/7.",
            url: page("/services/ai-staff"),
          },
          {
            image: `${assetBase}/card-ai-receptionist.jpg`,
            alt: "A red phone cord looped around a white sculpture",
            title: "AI receptionist",
            text: "Answers WhatsApp, calls, DMs and email in seconds.",
            url: page("/voice-ai-worker"),
          },
          {
            image: `${assetBase}/card-automation.jpg`,
            alt: "Blue and red shapes linked like a machine",
            title: "Automation",
            text: "We connect all your tools, so the business runs itself.",
            url: page("/services/automation"),
          },
          {
            image: `${assetBase}/card-software.jpg`,
            alt: "A red beam crossing a concrete room",
            title: "Custom software",
            text: "Apps and systems built in weeks. You own the code.",
            url: page("/services/transformation"),
          },
        ],
      },
      {
        type: "band",
        heading: "One team in Malta. *Since 2023.*",
        text: "OARC Digital is a marketing agency in Birkirkara. One team handles your brand, content, social media, ads, website and AI staff. We agree targets before we start. If we miss them, you get your money back.",
        link: { label: "Why businesses pick OARC", url: page("/blog/marketing-agency-malta") },
      },
      {
        type: "cta",
        heading: "Ready when you are.",
        text: "Pick a time that suits you. It takes 20 minutes, and you talk to the people who will do the work.",
        button: { label: "Book a 20-minute call", url: BOOK },
        secondary: { label: "Or message us on WhatsApp", url: WHATSAPP },
      },
      {
        type: "signoff",
        lines: [
          "Got a question first? Just reply to this email, or call us on [+356 7971 1799](tel:+35679711799).",
          "Talk soon,\n**The OARC Digital team**",
        ],
      },
    ],
  };
}
