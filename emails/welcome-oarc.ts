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
          src: `${assetBase}/hero-malta.jpg`,
          alt: "The Grand Harbour in Malta, seen from Valletta",
          width: 1232,
          height: 720,
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
        intro: "No more managing five suppliers. Here is what we can build for you.",
        linkLabel: "See how",
        cards: [
          {
            image: `${assetBase}/card-branding.jpg`,
            alt: "A white embossed brand box on marble",
            title: "Branding",
            text: "Logo, identity and strategy. A brand people pay more for.",
            url: page("/services/branding"),
          },
          {
            image: `${assetBase}/card-ai.jpg`,
            alt: "A hotel reception desk lit in blue",
            title: "AI staff",
            text: "AI for sales, support and bookings. It works 24/7.",
            url: page("/services/ai-staff"),
          },
          {
            image: `${assetBase}/card-social.jpg`,
            alt: "A creator filming a cooking video",
            title: "Social media",
            text: "We plan, film, edit and post. You run your business.",
            url: page("/services/social"),
          },
          {
            image: `${assetBase}/card-film.jpg`,
            alt: "A film studio with cameras and lights",
            title: "Film and video",
            text: "Films and Reels that make people act.",
            url: page("/services/video-production"),
          },
          {
            image: `${assetBase}/card-websites.jpg`,
            alt: "A laptop showing a website, with Malta behind it",
            title: "Websites",
            text: "Websites that turn visitors into customers.",
            url: page("/services/web-design"),
          },
          {
            image: `${assetBase}/card-seo.jpg`,
            alt: "A map and a magnifying glass on a desk",
            title: "SEO",
            text: "Own the Google searches that bring you customers.",
            url: page("/services/seo-services"),
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
