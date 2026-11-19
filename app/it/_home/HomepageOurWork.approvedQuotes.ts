// Italian translation of `homepageQuotes` from `lib/reviews/approvedQuotes.ts`.
// Same quotes, same order, same people. Only the quote text is translated;
// each `credit` (name, role, company) is exactly as in the English file.
// If a quote changes or is removed in the English file, change it here too.
export type ApprovedQuote = {
  quote: string;
  credit: string;
};

export const homepageQuotes: ApprovedQuote[] = [
  {
    quote: "Consigliamo vivamente OARC per il marketing. È facile parlare con loro e aiutano davvero.",
    credit: "Alan — Dhalia Real Estate Services",
  },
  {
    quote: "Abbiamo iniziato con un piccolo lavoro e poi ci siamo rivolti a OARC per qualche altra cosa. È stato più facile perché ci conoscevano già.",
    credit: "Steve",
  },
  {
    quote: "Avere la parte creativa, quella di marketing e quella tecnica con un solo team ci ha reso tutto molto più semplice.",
    credit: "Steve — Rent Anytime",
  },
  {
    quote: "Il lavoro ha aiutato le persone a capire che cosa facciamo. Era una cosa che prima non spiegavamo molto bene.",
    credit: "Simon — Eden Leisure Group",
  },
];
