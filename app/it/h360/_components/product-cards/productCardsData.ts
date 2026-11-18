/**
 * Prodotti H360 in italiano.
 * Ordine, indirizzi, colori e nomi dei prodotti (tab) arrivano dal file inglese: qui cambia
 * solo il testo. Una scheda senza traduzione resta in inglese invece di sparire.
 */
import { PRODUCT_CARDS as EN_CARDS } from '@/app/h360/_components/product-cards/productCardsData';
import type { ProductCardData } from '@/app/h360/_components/product-cards/productCardsData';

export type {
  BrainProductId,
  ProductCardData,
  ProductVisualId,
} from '@/app/h360/_components/product-cards/productCardsData';

type CardText = Pick<ProductCardData, 'entry' | 'headline' | 'wedge' | 'guestGain' | 'result'>;

const TEXT: Record<string, CardText> = {
  'google-visibility': {
    entry: 'La tua scheda Google è vecchia. La gente cerca e non ti trova.',
    headline: 'Compari per primo su Google Maps a Malta.',
    wedge: 'Non solo foto: SEO + AEO + ricerca AI + parole chiave scritte da copywriter + dati ARC. I post sulla scheda Google sono solo la punta.',
    guestGain: 'Ha fame ed è in zona: ti trova su Maps ed entra.',
    result: '847 ricerche → 37 chiamate questa settimana',
  },
  'voice-ai': {
    entry: 'Il telefono squilla durante il servizio. La segreteria si riempie. I coperti vanno dal vicino.',
    headline: "L'AI risponde a ogni chiamata: prenota i tavoli, impara il tuo menu, non dorme mai.",
    wedge: 'Non un copione da call center: OARC addestra un cervello per i ristoranti di Malta. Controlli tutto dalla dashboard. Passa a una persona quando conta.',
    guestGain: 'Chiama alle 2 di notte: una voce gentile risponde, prenota e manda la conferma.',
    result: '24/7 · zero chiamate di prenotazione perse',
  },
  'google-reviews': {
    entry: 'I concorrenti hanno 200 recensioni. Tu ne hai 12.',
    headline: 'Trasformiamo ogni cliente in una buona recensione su Google: momento giusto, strategia su misura e automazione intelligente.',
    wedge: 'Niente POS. Niente terminale Sunday. Un QR sul tavolo: un tocco e la recensione è fatta.',
    guestGain: 'Si fida di te prima ancora di sedersi: le recensioni lo hanno già convinto.',
    result: '3× più recensioni in 90 giorni',
  },
  social: {
    entry: 'Foto brutte. Nessun post. Nessun annuncio. Online i concorrenti fanno più bella figura.',
    headline: 'Video, post social e annunci a pagamento: facciamo tutto noi.',
    wedge: 'Non i soliti post da agenzia: contenuti pronti per il tuo ristorante ogni settimana, più gli annunci a pagamento.',
    guestGain: 'Vede i tuoi piatti come sono davvero e prenota da te prima che da un concorrente.',
    result: "Immagine professionale online senza ingaggiare un'agenzia",
  },
  website: {
    entry: 'Senza sito web, la tua storia la racconta TripAdvisor.',
    headline: 'Il tuo menu online in 10 minuti. Google ti trova.',
    wedge: 'Non un fai-da-te con Wix: un vero sito per ristoranti, fatto per Google e per chi passa davanti.',
    guestGain: 'Menu, orari e indicazioni nella sua lingua, prima ancora di arrivare.',
    result: '1 visitatore su 5 entra dalla porta',
  },
  'venue-360': {
    entry: 'Menu su carta. Cucina a urla. Il titolare lo scopre troppo tardi.',
    headline: 'Menu digitale. Schermo in cucina. Dashboard del titolare. Tutto automatico.',
    wedge: 'Non dodici strumenti che non si parlano: menu, cucina e titolare in un solo sistema.',
    guestGain: 'Piatti più veloci, meno errori: esce contento e torna.',
    result: "Menu · Cucina · Titolare: un'unica fonte di verità",
  },
  booking: {
    entry: 'Chiamate perse durante il servizio = tavoli vuoti stasera.',
    headline: 'I clienti prenotano dal telefono. Tu vedi chi arriva.',
    wedge: 'Non le commissioni a coperto di OpenTable: sostituisce il quaderno, blocca gli orari, niente doppie prenotazioni.',
    guestGain: 'Prenota alle 2 di notte da Instagram, senza rincorrerti al telefono durante il servizio.',
    result: 'Chi arriva stasera: lo vedi sul telefono',
  },
  order: {
    entry: 'Wolt si prende il 30% di ogni ordine.',
    headline: 'Tieni il 100% di ogni ordine. Zero commissioni.',
    wedge: 'Né Wolt né Bolt: inquadri, ordini, la cucina lo stampa. Non serve un POS.',
    guestGain: 'Ordina dal tavolo, senza sbracciarsi per chiamare il cameriere.',
    result: 'Ti restano €52, non €36.40',
  },
  pay: {
    entry: 'I clienti aspettano il conto per 15 minuti.',
    headline: 'I clienti pagano dal tavolo in pochi secondi.',
    wedge: 'Non terminali Sunday da €250: un cartoncino con il QR sul tavolo. Tutto qui.',
    guestGain: 'Paga quando vuole e se ne va senza aspettare il conto per 15 minuti.',
    result: 'Tavoli più veloci · il margine resta tutto a te',
  },
  stamp: {
    entry: 'Le tessere a timbri di carta si perdono. Il personale dimentica di timbrare.',
    headline: "Mangia 8 volte, l'8ª è gratis. In automatico.",
    wedge: 'Niente tessere di carta né personale che scansiona telefoni: i timbri si accreditano da soli.',
    guestGain: "Il pasto gratis sa di premio meritato: va a caccia dell'ultimo timbro.",
    result: '8º pasto gratis · zero attriti',
  },
  pass: {
    entry: "Nessuno scarica l'app di un ristorante.",
    headline: 'La carta fedeltà nel wallet del telefono.',
    wedge: "Non l'app di un solo ristorante: Apple Wallet e Google Wallet, premi a ogni visita.",
    guestGain: 'La carta fedeltà è già sul suo telefono: niente da scaricare.',
    result: 'I clienti tornano, senza scaricare app',
  },
  send: {
    entry: 'I clienti vengono una volta, poi ti dimenticano.',
    headline: 'Fai tornare i clienti con WhatsApp.',
    wedge: 'Non invii di massa uguali per tutti: messaggi intelligenti che trasformano chi viene la prima volta in cliente fisso.',
    guestGain: 'Un WhatsApp personale, non spam.',
    result: 'Maria ordina di nuovo → diventa cliente fissa',
  },
  text: {
    entry: 'Un cliente smette di venire. Non sai come raggiungerlo.',
    headline: 'Scrivi ai clienti che non vengono più.',
    wedge: 'Nessuna lista di numeri da caricare: il cliente dà il consenso con il wallet pass. SMS che legge davvero.',
    guestGain: "Un SMS breve che apre, non l'ennesima email ignorata.",
    result: 'Messaggi di richiamo → prenotano di nuovo',
  },
  event: {
    entry: 'Musica dal vivo venerdì: lo sanno solo in 12.',
    headline: "Riempi la sala la sera dell'evento.",
    wedge: 'Non le commissioni di Eventbrite né la copertura di Facebook: conferme, promemoria, tetto ai posti.',
    guestGain: 'Un solo link: vede la serata, conferma e riceve il promemoria.',
    result: '60% di no-show in meno',
  },
  analytics: {
    entry: 'Niente POS? Non sai quanto hai incassato oggi.',
    headline: "Scrivi il totale di oggi. Vedi l'andamento.",
    wedge: 'Nessuna integrazione con il POS: ci basta «Oggi ho incassato €1200».',
    guestGain: 'Serate più lisce: hai scorte e personale giusti perché lo avevi previsto.',
    result: 'Andamento costruito da un solo numero a chiusura',
  },
  recipe: {
    entry: 'Pensi che la pasta ti dia il 70% di margine. Non è così.',
    headline: 'Vedi il guadagno vero su ogni piatto.',
    wedge: 'Non strumenti americani da $199/mese: inserisci gli ingredienti una volta e vedi il vero food cost.',
    guestGain: 'Prezzi giusti in menu: non stai coprendo un piatto in perdita.',
    result: 'Elimina i piatti che ti fanno perdere soldi',
  },
  inventory: {
    entry: 'Finisci la mozzarella a metà servizio.',
    headline: 'Mai più senza il tuo piatto più venduto.',
    wedge: 'Non un software di magazzino da $169/mese: 3 domande a chiusura, 30 secondi.',
    guestGain: 'Il suo piatto preferito è in menu, non finito a metà servizio.',
    result: 'Ti diciamo cosa ordinare domani',
  },
  staff: {
    entry: 'Chi lavora sabato? Scorri WhatsApp.',
    headline: 'I turni del personale su WhatsApp. Sì o no.',
    wedge: "Non un'app per i turni da €3 a dipendente: turni su WhatsApp, confermati con un tocco.",
    guestGain: "Servizio più veloce: in sala c'è la squadra giusta.",
    result: 'Sostituzione per malattia trovata in pochi minuti',
  },
  'floor-plan': {
    entry: 'Chi accoglie non sa quale tavolo è libero.',
    headline: 'Ogni tavolo su una mappa. Verde libero. Rosso occupato.',
    wedge: 'Non un software per i tavoli da €200/mese: mappa della sala in tempo reale, un tocco per far accomodare.',
    guestGain: 'Si siede prima: meno attesa alla porta in un venerdì pieno.',
    result: 'Tavoli che girano più in fretta, senza prezzi da grande azienda',
  },
};

export const PRODUCT_CARDS: ProductCardData[] = EN_CARDS.map((card) => ({
  ...card,
  ...TEXT[card.id],
}));
