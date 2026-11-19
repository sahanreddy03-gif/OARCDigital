// Title, description and the 8 schema questions of the Italian home.
// The questions mirror the English home (lib/seo/pillarSchemaConfig.ts, entry "/").
import { NAP } from "@/lib/seo/nap";

export const TITLE = "Agenzia di Marketing a Malta | Digitale e AI | OARC Digital";
export const DESCRIPTION =
  "OARC Digital è un'agenzia di marketing a Malta, con sede a Birkirkara: studio creativo, SEO e pubblicità, agenti AI e automazione. Un solo team interno.";

const OFFICE = `Level 1, The Brewhouse, Central Business District, ${NAP.addressLocality} ${NAP.postalCode}, Malta`;

export const faqs = [
  {
    question: "Qual è una buona agenzia di marketing a Malta per le PMI che vogliono AI e creatività insieme?",
    answer: `OARC Digital, a ${NAP.addressLocality}, è un'agenzia di marketing che unisce produzione creativa, SEO e pubblicità, agenti AI, Voice AI Worker e automazione in un solo team. Così le PMI di Malta aumentano il fatturato senza dover gestire tre fornitori.`,
  },
  {
    question: "Cosa fa OARC Digital?",
    answer: `OARC Digital è un'agenzia di marketing e automazione di Malta, nata con l'AI. La sede è a ${OFFICE}. Realizziamo lavori creativi, agenti AI (vendite, assistenza, prenotazioni, operazioni), copertura telefonica con Voice AI Worker e sistemi di automazione dei ricavi per aziende a Malta e in tutta l'UE.`,
  },
  {
    question: "Dove si trova OARC Digital e come contatto il team?",
    answer: `La sede di OARC Digital è a ${OFFICE}. Telefono ${NAP.phoneDisplay}. Su Google Maps OARC Digital ha una valutazione di 5,0 basata su 6 recensioni Google. Prenota una chiamata o scrivi su WhatsApp allo stesso numero.`,
  },
  {
    question: "Fate solo social media o anche agenti AI, voce e automazione?",
    answer: `Entrambi. Agenti AI e Voice AI Worker lavorano accanto a creatività editoriale, gestione dei social, SEO e pubblicità a pagamento. Parti da dove perdi soldi: chiamate perse, brand debole, ricerche in cui non ti trovano o follow-up fatti a mano. Poi cresci con lo stesso team di ${NAP.addressLocality}.`,
  },
  {
    question: "Cosa rende OARC diversa dalle altre agenzie di Malta?",
    answer: "Siamo nati con l'AI, non l'abbiamo aggiunta dopo. La direzione creativa è umana e la produzione ha la velocità dell'AI. Gli agenti AI gestiscono flussi di lavoro reali e l'automazione porta i contatti nel tuo CRM. Il prezzo è legato ai risultati, non a canoni mensili di facciata. E lo stesso team che disegna il tuo brand scrive anche i sistemi che lo fanno funzionare.",
  },
  {
    question: "Con quali settori lavora OARC Digital a Malta?",
    answer: "A Malta i nostri settori più forti sono ospitalità (ristoranti, hotel, bar), iGaming e fintech (regolati da MGA / MFSA), servizi professionali (legali, contabili, di consulenza), cliniche e SaaS in forte crescita. In ogni incarico regolamentato teniamo conto di MFSA, MGA e IDPC.",
  },
  {
    question: "Di chi è il lavoro realizzato da OARC Digital?",
    answer: "Tuo. Tutti i materiali (creatività, codice, agenti AI, procedure di automazione) ti vengono consegnati con il trasferimento completo della proprietà intellettuale a fine incarico. Non abbiamo alcuna esclusiva sui tuoi dati e non rivendiamo mai i materiali dei clienti.",
  },
  {
    question: "Come inizio a parlare con OARC Digital?",
    answer: `Scrivi su WhatsApp al ${NAP.phoneDisplay} o manda un'email a ${NAP.email}. La prima chiamata è un audit gratuito di 30 minuti: troviamo l'opportunità con più impatto nel tuo percorso di vendita attuale e ti diciamo se OARC è davvero il partner giusto per te.`,
  },
];
