import type { AiSystemContent } from "@/lib/ai-systems/types";

// Italian twin of lib/ai-systems/hotels.ts (/it/ai/hotels).
// Same structure, same numbers, same icons, same source links. Amounts are written the
// Italian way: a dot for thousands, a comma for cents (€2.140, €1,50).
const hotels: AiSystemContent = {
  slug: "hotels",
  name: "Hotel",
  barLabel: "AI per hotel",
  business: "hotel",
  metaTitle: "Sistema AI per Hotel a Malta | Automazione | OARC Digital",
  metaDescription:
    "Il sistema AI per hotel a Malta, costruito intorno al tuo. Risponde a ogni ospite 24 ore su 24, porta prenotazioni dirette e prepara i preventivi. Decidi tu.",
  updated: "2026-11-16",
  serviceType: "Sistema AI e automazione per hotel e guest house",
  schemaDescription:
    "Un sistema AI costruito intorno a ogni hotel, guest house e residence di Malta. Risponde agli ospiti 24 ore su 24 in chat e al telefono, trasforma le richieste in prenotazioni dirette, prepara i preventivi per gruppi ed eventi, organizza gli arrivi, vende gli extra scelti dall'hotel, chiede una recensione a ogni ospite e prepara le risposte, e sbriga il lavoro d'ufficio, come il contributo ambientale. Il direttore dell'hotel decide ogni tariffa, sconto, rimborso ed eccezione. Configurato e gestito dal team di OARC Digital a Malta.",
  hub: {
    title: "Hotel e guest house",
    body: "Ogni ospite riceve risposta in meno di un minuto. Più prenotazioni dirette. Preventivi per gruppi in giornata. Decide il tuo direttore.",
    gain: "Hotel, guest house e residence",
  },

  lightAreas: true,

  hero: {
    pill: "Lo configuriamo noi per te in 72 ore",
    kicker: "Finalmente hai",
    h1Before: "Un sistema AI completo costruito intorno",
    h1Highlight: "al tuo hotel.",
    sub: "Agenti di intelligenza artificiale (AI) addestrati sul tuo hotel a Malta rispondono a ogni ospite, giorno e notte, e lo fanno prenotare da te. Il sistema prepara i preventivi per i gruppi, organizza gli arrivi e cura le tue recensioni. Tariffe, rimborsi ed eccezioni restano al tuo direttore.",
    primaryCta: "Richiedi il tuo mese gratuito",
    secondaryCta: "Prenota una chiamata di 20 minuti",
    note: "Primo mese gratuito. Configurato e gestito dal team di OARC a Malta.",
  },

  film: {
    title: "Segui un gruppo per un matrimonio, dal primo messaggio al tuo sì",
    scenes: [
      {
        clock: "Giovedì · 22:50",
        caption: "Una wedding planner scrive quando il tuo ufficio commerciale è chiuso da ore.",
        result: "Risposta in 45 secondi",
        visual: {
          type: "chat",
          initials: "GR",
          name: "Giulia R.",
          origin: "WhatsApp · richiesta per un gruppo",
          status: "Risposto",
          messages: [
            { from: "in", text: "Ciao! Sto organizzando un matrimonio a Mdina. Avete 18 camere dal 14 al 17 maggio e una cena per 40 persone il 14?", time: "22:50" },
            { from: "out", text: "Congratulazioni, Giulia. Sì: 18 camere sono libere, 6 con vista mare, e la terrazza è libera il 14.", time: "22:50" },
            { from: "in", text: "Perfetto. Potete fare il 15% di sconto se le prendiamo tutte e 18?", time: "22:52" },
          ],
          done: { before: "18 camere bloccate · ", strong: "15% girato a Mark", after: " · preventivo entro le 10:00" },
        },
      },
      {
        clock: "Giovedì · 22:53",
        caption: "Il preventivo si compila da solo, dal tuo listino e dal menù eventi.",
        result: "Bozza pronta in 3 minuti",
        visual: {
          type: "rows",
          title: "Preventivo gruppo · Giulia R. · matrimonio",
          hint: "Dalle tue tariffe, 22:53",
          action: "tag",
          rows: [
            { badge: "18", title: "Camere · dal 14 al 17 maggio", detail: "18 camere per 3 notti alla tua tariffa gruppi di maggio.", tag: "Calcolato" },
            { badge: "40", title: "Cena di benvenuto · terrazza", detail: "Menù B dalla tua proposta eventi, 14 maggio alle 20:00.", tag: "Calcolato" },
            { badge: "15%", top: true, title: "Sconto richiesto", detail: "Il tuo limite per i gruppi è il 10%. Solo Mark può andare oltre.", tag: "Decide Mark" },
          ],
        },
      },
      {
        clock: "Venerdì · 08:40",
        caption: "Mark decide il prezzo. Solo allora parte il preventivo.",
        result: "Preventivo inviato prima delle 09:00",
        visual: {
          type: "timeline",
          title: "Gruppo matrimonio · 18 camere · 3 notti",
          subtitle: "Dal 14 al 17 maggio 2027 · €10.980",
          steps: [
            { when: "08:40", title: "Mark approva il preventivo", detail: "10%, non 15%. Aggiunge un drink di benvenuto in omaggio.", key: true, tag: "Approvato dal tuo direttore" },
            { when: "08:41", title: "Inviato in italiano", detail: "Con il link per la caparra. Camere bloccate per 7 giorni." },
            { when: "08:41", title: "Follow-up programmato", detail: "Nessuna risposta entro martedì? L'agente chiama Giulia." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Tutto il tuo hotel in una sola schermata.",
    body: "Ogni mattina: chi arriva oggi, cosa è arrivato nella notte e cosa aspetta il tuo sì.",
    org: "Il tuo hotel",
    search: "Chiedi qualsiasi cosa… «Quanto siamo pieni il prossimo weekend?»",
    initials: "MC",
    nav: [
      { label: "Oggi" }, { label: "Richieste", badge: "17" }, { label: "Arrivi" }, { label: "Gruppi ed eventi" },
      { label: "Richieste in soggiorno" }, { label: "Recensioni" }, { label: "Back office" }, { label: "Report" },
    ],
    greeting: "Buongiorno, Mark",
    status: "Attivo · ogni ospite ha avuto risposta stanotte",
    kpis: [
      { label: "Prenotazioni dirette stanotte", value: "6", note: "€2.140 · nessuna commissione" },
      { label: "Arrivi di oggi", value: "31", note: "26 con check-in online" },
      { label: "Preventivi che ti aspettano", value: "3", note: "Pronti per il tuo sì" },
      { label: "Caparre non pagate", value: "€1.860", note: "3 solleciti inviati", alert: true },
    ],
    todoTitle: "Oggi servi tu",
    todos: [
      { initials: "GR", title: "Gruppo matrimonio · 18 camere · maggio", detail: "Preventivo pronto. La planner chiede il 15%. Il tuo limite è il 10%.", tag: "Decidi", on: true },
      { initials: "TH", title: "Recensione 2 stelle · Tom H. · Camera 214", detail: "Rumore dal bar. Risposta pronta, l'offerta aspetta te.", tag: "Approva" },
      { initials: "LK", title: "Late check-out · Lena K. · Camera 305", detail: "Chiede le 16:00. La tua regola si ferma alle 14:00.", tag: "Scegli tu" },
      { initials: "EC", title: "Contributo ambientale · ottobre", detail: "€4.218 su 2.812 notti di adulti. Pronto da dichiarare e versare.", tag: "Controlla" },
    ],
    chartTitle: "Prenotazioni dirette questa settimana",
    bars: [
      { label: "Lun", h: 52 }, { label: "Mar", h: 46 }, { label: "Mer", h: 61 }, { label: "Gio", h: 58 },
      { label: "Ven", h: 74 }, { label: "Sab", h: 83 }, { label: "Dom", h: 100 },
    ],
    chartFoot: { label: "Commissioni risparmiate", value: "€1.960" },
    chatFloat: {
      channel: "WhatsApp · nuovo ospite",
      time: "01:52",
      incoming: "Ciao, avete una camera per 2 notti da venerdì? Due adulti.",
      reply: "Sì. Una doppia con colazione costa €138 a notte, prenotando da noi. La blocco?",
      receipt: "Risposta in 40 sec · prenotazione diretta",
    },
    alertFloat: {
      label: "Allerta recensioni · adesso",
      title: "Recensione da 2 stelle su Google",
      detail: "Tom H., camera 214: rumore dal bar. Risposta pronta per Mark.",
      tag: "Risposta pronta",
    },
  },

  worksWith: ["Il tuo PMS", "Il tuo channel manager", "Il tuo booking engine", "WhatsApp", "Outlook e Gmail", "Telefonate", "Google Business Profile", "Instagram e Facebook"],

  pillars: {
    label: "Costruito intorno al tuo hotel",
    title: "Il tuo hotel. I tuoi ospiti. Il tuo modo di lavorare.",
    items: [
      { icon: "network", title: "Ogni ospite in un'unica conversazione", body: "WhatsApp, email, telefonate, messaggi dai portali e recensioni. Una sola storia per ospite, dalla prima domanda al check-out." },
      { icon: "workflow", title: "Lavora con il tuo PMS, senza scavalcarlo", body: "La reception tiene i sistemi che conosce. Il sistema lavora dietro il banco e consegna quello che è pronto." },
      { icon: "check", title: "Le tue regole, la tua decisione", body: "Fa i prezzi dal tuo listino e dalle regole della casa. Tutto quello che ne esce va al tuo direttore." },
    ],
  },

  agents: {
    label: "La tua reception AI",
    title: "Tre agenti AI. Addestrati sul tuo hotel. Svegli alle 3 di notte.",
    intro: "Chattano su WhatsApp, via email e sul tuo sito web, rispondono al telefono e fanno chiamate. Ognuno conosce le tue camere, le tue tariffe e le regole della casa. Prezzi ed eccezioni restano al tuo team.",
    note: "Rispondono, prenotano e ricordano. Non offrono mai un prezzo, uno sconto o un rimborso fuori dalle tue regole. Una persona può prendere in mano qualsiasi chat o chiamata.",
    items: [
      {
        name: "Agente prenotazioni",
        title: "Trasforma le domande in prenotazioni dirette.",
        points: [
          "Risponde su WhatsApp, via email, sul tuo sito web e al telefono in meno di un minuto, giorno e notte.",
          "Controlla la disponibilità, comunica la tua tariffa diretta e invia il tuo link di prenotazione.",
          "Raccoglie le richieste per gruppi ed eventi e prepara il preventivo per il tuo direttore.",
        ],
        channels: ["WhatsApp", "Chiamate vocali", "Email", "Sito web"],
        result: "Nessuna richiesta aspetta il mattino",
      },
      {
        name: "Agente ospiti",
        title: "Segue ogni ospite, dalla prenotazione al check-out.",
        points: [
          "Chiede l'orario di arrivo, propone il transfer e raccoglie i dati per il check-in prima che l'ospite atterri.",
          "Propone gli extra che scegli tu, al momento giusto, nella lingua dell'ospite.",
          "Passa ogni richiesta al team giusto e mette in linea una persona quando l'ospite ne ha bisogno.",
        ],
        channels: ["WhatsApp", "Chiamate vocali", "SMS", "Email"],
        result: "Ospiti a posto prima dell'arrivo",
      },
      {
        name: "Agente recensioni",
        title: "Ti porta più recensioni e più ospiti che tornano.",
        points: [
          "Chiede una recensione a ogni ospite dopo il check-out.",
          "Individua in giornata un ospite scontento e prepara la risposta per il tuo direttore.",
          "Invita a tornare chi è già stato da te, con un'offerta che approvi tu, se ha accettato di ricevere tue notizie.",
        ],
        channels: ["Email", "WhatsApp", "Chiamate vocali"],
        result: "Problemi intercettati, bei soggiorni raccontati",
      },
    ],
  },

  jobs: {
    label: "Tutto quello che fa",
    title: "Un sistema. Diciannove compiti, dal primo messaggio al check-out.",
    items: [
      { icon: "chat", title: "Risponde a ogni ospite, 24 ore su 24", body: "WhatsApp, email, sito web, Instagram e telefono. Nella lingua dell'ospite, in meno di un minuto.", gain: "Nessuna prenotazione persa per una risposta lenta" },
      { icon: "euro", title: "Trasforma le richieste in prenotazioni dirette", body: "Controlla la disponibilità, comunica la tua tariffa diretta e invia il tuo link di prenotazione. L'ospite prenota da te.", gain: "Nessuna commissione ai portali" },
      { icon: "users", title: "Prepara preventivi per gruppi, matrimoni ed eventi", body: "Controlla le camere, costruisce il preventivo dalle tue tariffe e dal menù eventi e lo invia quando il tuo direttore dice sì.", gain: "Preventivi inviati in giornata" },
      { icon: "phone", title: "Risponde al telefono", body: "Un agente vocale risponde di notte e nell'ora di punta del check-in. Risponde, prenota e passa le chiamate al tuo team.", gain: "Nessuna chiamata finisce in segreteria" },
      { icon: "chart", title: "Vende gli extra prima dell'arrivo", body: "Upgrade, colazione, transfer, spa e late check-out, proposti qualche giorno prima dell'arrivo.", gain: "Ogni soggiorno vale di più" },
      { icon: "plane", title: "Invia ogni messaggio prima dell'arrivo", body: "Orario di arrivo, indicazioni, parcheggio, transfer e il contributo ambientale spiegato, nella lingua dell'ospite.", gain: "Nessuna sorpresa alla reception" },
      { icon: "badge", title: "Chiude il check-in prima dell'arrivo", body: "Raccoglie online nomi, dati del passaporto e orari di arrivo e compila la tua scheda di registrazione.", gain: "Nessuna coda alla reception" },
      { icon: "inbox", title: "Gestisce le richieste durante il soggiorno", body: "Asciugamani, un taxi, un tavolo per cena, un check-out più tardi. Ogni richiesta arriva al team giusto.", gain: "L'ospite chiede una volta sola" },
      { icon: "pen", title: "Chiede una recensione a ogni ospite", body: "Dopo il check-out ogni ospite riceve un grazie e un link per recensirti su Google.", gain: "Più recensioni, ogni settimana" },
      { icon: "shield", title: "Intercetta subito le recensioni negative", body: "Individua in giornata un ospite scontento o una recensione bassa, prepara la risposta e avvisa il tuo direttore.", gain: "Risolto prima che si diffonda" },
      { icon: "refresh", title: "Rivende le camere cancellate", body: "Quando una camera si libera, la propone agli ospiti che avevano chiesto quelle date e non avevano trovato posto.", gain: "Meno notti vuote" },
      { icon: "link", title: "Risponde ai messaggi dei portali", body: "Le domande degli ospiti che arrivano dai portali di prenotazione ricevono una risposta rapida, basata sulle tue informazioni.", gain: "Nessun messaggio resta in attesa" },
      { icon: "card", title: "Sollecita caparre e saldi", body: "Invia i link di pagamento, ricorda la scadenza agli ospiti e ti mostra cosa resta da incassare.", gain: "Incassi prima dell'arrivo" },
      { icon: "receipt", title: "Calcola il contributo ambientale", body: "Conta le notti di ogni ospite adulto, applica il tetto, lo mette in una riga a parte sul conto e tiene pronti i totali.", gain: "Niente conti a mano" },
      { icon: "building", title: "Gestisce i check-in degli appartamenti", body: "Codici della porta, regole della casa, pulizie tra un soggiorno e l'altro e promemoria per il check-out, inviati in tempo per ogni unità.", gain: "Meno lavoro d'ufficio per appartamento" },
      { icon: "repeat", title: "Fa tornare chi è già stato da te", body: "Offerte per la camera e le date preferite, inviate agli ospiti passati che hanno accettato di ricevere tue notizie.", gain: "Ospiti che tornano e prenotano da te" },
      { icon: "calendar", title: "Tiene d'occhio ogni data importante", body: "Rinnovi delle licenze, date dei contratti, date di rilascio degli allotment e tariffe della prossima stagione.", gain: "Niente scade a sorpresa" },
      { icon: "trending", title: "Ti fa trovare su Google e nelle risposte delle AI", body: "SEO per Google, più il lavoro che aiuta ChatGPT e Gemini a consigliare il tuo hotel.", gain: "Gli ospiti trovano prima te" },
      { icon: "sun", title: "Aggiorna il tuo direttore ogni mattina", body: "Arrivi, partenze, VIP, reclami aperti, preventivi in attesa e messaggi senza risposta.", gain: "Inizi la giornata sapendo tutto" },
    ],
  },

  spotlights: [
    {
      label: "Prenotazioni dirette",
      title: "Chiedono a mezzanotte. Prenotano da te.",
      points: [
        "Risponde su WhatsApp, via email, sul tuo sito web e su Instagram, nella lingua dell'ospite.",
        "Controlla la disponibilità, comunica la tua tariffa diretta e propone gli extra che scegli tu.",
        "Invia il tuo link di prenotazione. L'ospite prenota da te e nessuna commissione va a un portale.",
      ],
      visual: {
        type: "chat",
        initials: "LB",
        name: "Luca B.",
        origin: "Chat del sito · nuovo ospite",
        status: "Prenotato",
        messages: [
          { from: "in", text: "Ciao! Avete una doppia per 2 notti dal 23 aprile? Vista mare, se possibile.", time: "23:58" },
          { from: "out", text: "Ciao Luca, sì. La nostra tariffa diretta vista mare è €156 a notte con colazione. La blocco?", time: "23:58" },
          { from: "in", text: "Sì, grazie. Potete anche venire a prenderci in aeroporto?", time: "00:01" },
        ],
        slots: ["Auto · €30", "Minivan · €45"],
        done: { before: "Prenotazione diretta · ", strong: "€342 con transfer", after: " · nessuna commissione ai portali" },
      },
    },
    {
      label: "Prima dell'arrivo",
      title: "Ogni ospite a posto prima di atterrare.",
      points: [
        "Una settimana prima chiede l'orario di arrivo e propone un transfer.",
        "Raccoglie online i dati per il check-in, così alla reception resta solo da consegnare la chiave.",
        "Qualche giorno prima dell'arrivo propone gli upgrade e gli extra che scegli tu.",
      ],
      visual: {
        type: "timeline",
        title: "Emma e James W. · 3 notti",
        subtitle: "Arrivo il 18 aprile · Camera 312",
        steps: [
          { when: "Giorno −7", title: "Chiesto l'orario di arrivo", detail: "Atterrano alle 21:35. Transfer dall'aeroporto prenotato, €35." },
          { when: "Giorno −5", title: "Check-in fatto online", detail: "Nomi, passaporti e firma raccolti." },
          { when: "Giorno −3", title: "Proposto l'upgrade vista mare", detail: "€25 in più a notte. Hanno detto sì.", key: true, tag: "+€75 di extra venduti" },
          { when: "Giorno −1", title: "Inviati gli ultimi dettagli", detail: "Indicazioni, parcheggio e contributo ambientale spiegato." },
          { when: "Arrivo", title: "Chiave pronta alla reception", detail: "Niente moduli, niente coda. Subito in camera con vista mare." },
        ],
      },
    },
    {
      label: "Recensioni",
      title: "Una recensione negativa intercettata prima di colazione.",
      points: [
        "Legge ogni nuova recensione appena arriva e segnala per prime al tuo direttore quelle negative.",
        "Prepara ogni risposta con la voce del tuo hotel. Qualsiasi offerta all'ospite aspetta il sì del tuo direttore.",
        "Dopo il check-out ogni ospite riceve un grazie e un link per lasciare una recensione.",
      ],
      visual: {
        type: "rows",
        title: "Nuove recensioni · stamattina",
        hint: "Controllate alle 06:00",
        action: "tag",
        rows: [
          { badge: "2★", top: true, title: "Tom H. · Camera 214", detail: "Rumore dal bar fino a tardi. Risposta e offerta pronte.", tag: "Per Mark" },
          { badge: "4★", title: "Karl M. · Camera 330", detail: "Wifi lento al piano 3. Risposta pronta, manutenzione avvisata.", tag: "Da rivedere" },
          { badge: "5★", title: "Sophie L. · Camera 118", detail: "Ha adorato la colazione e la piscina. Grazie inviato.", tag: "Risposto" },
          { badge: "5★", title: "Rita e Joe C. · Camera 405", detail: "Soggiorno per l'anniversario. Risposta pronta in maltese.", tag: "Da rivedere" },
        ],
      },
    },
    {
      label: "Cancellazioni",
      title: "Una camera si libera. Venti minuti dopo è di nuovo venduta.",
      points: [
        "Quando una prenotazione viene cancellata, trova gli ospiti che avevano chiesto quelle date e non avevano trovato posto.",
        "Li chiama o scrive loro, comunica la tua tariffa e invia il link di prenotazione.",
        "Il tuo team vede chi ha preso la camera e a quale tariffa.",
      ],
      visual: {
        type: "chat",
        initials: "MF",
        name: "Maria F.",
        origin: "Chiamata vocale · 1 min 30 sec",
        status: "Chiamata",
        messages: [
          { from: "out", text: "Salve Maria, sono l'assistente AI dell'hotel. Si è appena liberata una camera dal 2 al 4 maggio. Interessa ancora?", time: "16:04" },
          { from: "in", text: "Sì! Ce n'è una con vista mare?", time: "16:04" },
          { from: "out", text: "Sì: vista mare a €148 a notte, oppure con balcone a €165. Quale delle due?", time: "16:05" },
        ],
        slots: ["Vista mare · €148", "Balcone · €165"],
        done: { before: "Camera rivenduta · ", strong: "€330 per 2 notti", after: " · pagata alle 16:20" },
      },
    },
    {
      label: "Chiedi qualsiasi cosa",
      title: "Chiedi come chiederesti al tuo portiere di notte.",
      points: [
        "Scrivi una domanda con parole semplici. La risposta arriva dalle tue prenotazioni, tariffe e messaggi.",
        "Nessun report da estrarre. Nessuna schermata del PMS in cui cercare.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Quanto siamo pieni il prossimo weekend?", summary: "Venerdì siamo all'86% e sabato al 94%. Restano 14 notti camera da vendere.", rows: [["Venerdì", "62 camere su 72 · 10 libere"], ["Sabato", "68 camere su 72 · 4 libere"], ["Prenotazioni dirette", "39 notti camera su 130"], ["Lista d'attesa", "3 ospiti hanno chiesto il sabato"]] },
          { q: "Quali preventivi per gruppi sono ancora aperti?", summary: "4 preventivi aperti, per €46.650. 3 aspettano il tuo sì.", rows: [["Matrimonio · 18 camere · maggio", "Aspetta te · chiesto il 15%"], ["Conferenza · 30 camere · aprile", "Aspetta te"], ["Scuola di lingue · 24 camere · febbraio", "Aspetta te"], ["Borg Holdings · 10 camere · marzo", "Inviato · follow-up martedì"]] },
          { q: "Quanto contributo ambientale abbiamo addebitato a ottobre?", summary: "€4.218 su 2.812 notti di adulti. Il report è pronto.", rows: [["Notti di adulti addebitate", "2.812 × €1,50"], ["Ospiti al tetto di €22,50", "6 soggiorni lunghi"], ["Pagato al check-out", "€4.083"], ["Ancora da incassare", "€135 · 9 ospiti in casa"]] },
          { q: "Di cosa si sono lamentati gli ospiti questo mese?", summary: "12 reclami. Il rumore dal bar è il più frequente.", rows: [["Rumore dal bar", "5 · camere sulla terrazza"], ["Wifi lento al piano 3", "3 · risolto il 14 novembre"], ["Coda a colazione alle 09:00", "2"], ["Camera troppo calda", "2"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Ogni parte del tuo hotel",
    title: "Camere, gruppi, ristorante, spa. Tutto.",
    intro: "Qualunque cosa tu venda, il sistema pensa a risposte, promemoria e moduli. Il tuo team pensa all'accoglienza.",
    colA: "Il tuo lavoro",
    colB: "Il sistema fa",
    colC: "Tu fai",
    items: [
      { name: "Camere e prenotazioni dirette", system: "Risponde a ogni richiesta, comunica la tua tariffa diretta, invia il link di prenotazione e conferma la caparra.", you: "Fissi le tariffe e le regole." },
      { name: "Gruppi, matrimoni ed eventi", system: "Controlla le camere, costruisce il preventivo dal tuo listino e dal menù eventi e segue il cliente finché arriva la caparra.", you: "Approvi il prezzo." },
      { name: "Aziende e conferenze", system: "Tiene traccia di tariffe a contratto e blocchi di camere, sollecita le rooming list e invia la fattura all'azienda giusta.", you: "Conquisti il cliente." },
      { name: "Tour operator e allotment", system: "Tiene d'occhio le date di rilascio degli allotment e i termini dei contratti e ti dice quali camere tornano in vendita.", you: "Negozi il contratto." },
      { name: "Ristorante e bar", system: "Prende le prenotazioni dei tavoli da ospiti e clienti esterni e passa alla cucina le note sulle esigenze alimentari.", you: "Gestisci la sala." },
      { name: "Spa, piscina ed extra", system: "Propone trattamenti, ingressi giornalieri e transfer prima dell'arrivo e li inserisce nell'agenda giusta.", you: "Scegli cosa vendere." },
      { name: "Residence e affitti brevi", system: "Invia i codici della porta e le regole della casa, prenota le pulizie tra un soggiorno e l'altro e controlla che ogni unità sia pronta.", you: "Aggiungi altre unità." },
      { name: "Boutique hotel e guest house", system: "Dà a un piccolo team un ufficio prenotazioni che non chiude mai: risposte, prenotazioni, arrivi e recensioni.", you: "Mantieni il tocco personale." },
    ],
  },

  wins: {
    label: "I tuoi ospiti lo sentono per primi",
    title: "Se vincono loro, vinci tu.",
    items: [
      { title: "Una risposta a mezzanotte.", body: "Una coppia chiede una camera poco prima di mezzanotte. In un minuto riceve un prezzo e un link per prenotare. Prenota da te, non dall'hotel accanto." },
      { title: "Subito in camera.", body: "I dati per il check-in sono pronti prima dell'atterraggio. Ritirano una chiave, non un modulo." },
      { title: "Ascoltati in giornata.", body: "Un ospite si lamenta del rumore. Il tuo direttore lo sa a colazione e lo sposta in una camera tranquilla prima di pranzo. Torna a casa con una storia migliore." },
    ],
  },

  live: {
    label: "Come si parte",
    h2Before: "Lo configuriamo noi per te in",
    h2Em: "72 ore.",
    body: "Veniamo noi, colleghiamo i tuoi sistemi e configuriamo tutto. Niente di nuovo da imparare per il tuo team.",
    steps: [
      { when: "Oggi", title: "Una chiamata di 20 minuti", body: "Su come lavora il tuo hotel e dove si perdono prenotazioni e ore." },
      { when: "72 ore", title: "Il tuo primo sistema è attivo", body: "Di solito: ogni richiesta su WhatsApp, email e sito web riceve risposta, giorno e notte." },
      { when: "Settimana 2", title: "I tuoi sistemi collegati", body: "Camere, tariffe, prenotazioni e messaggi degli ospiti in un unico posto." },
      { when: "Ogni settimana", title: "Cresce con te", body: "Impara il tuo hotel e parte il compito successivo." },
    ],
  },

  ways: {
    label: "Parti da dove vuoi",
    title: "Un solo compito o tutto l'hotel. Scegli tu.",
    items: [
      { title: "Sistema una cosa sola", body: "Scegli la cosa che ti costa di più e automatizziamo solo quella.", example: "Esempio: rispondere di notte a ogni richiesta su WhatsApp e sul sito web." },
      { title: "Collegati a quello che usi", body: "Tieni PMS, channel manager e booking engine. Ci colleghiamo noi.", example: "Esempio: le prenotazioni dirette entrano nel tuo PMS con la caparra annotata." },
      { title: "Il sistema completo", body: "Tutto quello che vedi in questa pagina, costruito intorno al tuo hotel, personalizzato e seguito da noi.", example: "Esempio: richieste, gruppi, arrivi, recensioni e back office in un unico posto." },
      { title: "Non sei ancora sicuro?", body: "Quasi nessun hotel lo è. Guardiamo la tua settimana e ti mostriamo dove si perdono prenotazioni e ore.", example: "Gratis. Bastano 20 minuti." },
    ],
  },

  offer: {
    label: "Offerta a tempo limitato",
    title: "Il tuo primo mese è gratuito.",
    body: "Lo configuriamo in 72 ore e lo gestiamo con te per un mese. Prima vedi, nel tuo hotel, gli ospiti che ricevono risposta, le prenotazioni dirette e le ore che ti restituisce.",
    cta: "Richiedi il tuo mese gratuito",
    secondaryCta: "Prenota una chiamata di 20 minuti",
    listLabel: "Cosa ottieni",
    items: [
      { strong: "Primo mese gratuito.", rest: "Guardalo lavorare con i tuoi ospiti prima di decidere." },
      { strong: "Configurato per te in 72 ore.", rest: "Colleghiamo WhatsApp, caselle email e sistema di prenotazione. Tu non cambi niente." },
      { strong: "È il tuo sistema.", rest: "Costruito intorno al tuo hotel, con le tue camere, le tue tariffe e le regole della casa." },
      { strong: "Gestito da noi.", rest: "Lo seguiamo e lo miglioriamo ogni settimana, in alta e in bassa stagione." },
      { strong: "Parti in piccolo.", rest: "Prima un solo compito, come le richieste notturne. Aggiungi il successivo quando il primo si è ripagato." },
    ],
  },

  calc: {
    label: "I tuoi numeri",
    title: "Le commissioni che potresti tenerti.",
    mode: "percent",
    inputs: [
      { label: "Prenotazioni all'anno dai portali", value: 1500 },
      { label: "Quota che potresti portare sul diretto (%)", value: 10, max: 100 },
      { label: "Commissione su una prenotazione media (€)", value: 70 },
    ],
    out1: "Prenotazioni che potrebbero arrivare dirette ogni anno",
    out2: "Commissioni che ti terresti",
    footnote: "Si assume che una prenotazione diretta non paghi commissioni ai portali. Non tutti gli ospiti cambieranno canale: adatta i numeri al tuo hotel.",
  },

  trust: {
    label: "Resti tu al comando",
    title: "Il sistema prepara. Il tuo direttore decide.",
    items: [
      { icon: "scale", title: "Prezzi solo dalle tue regole", body: "Non offre mai un prezzo, uno sconto o un rimborso che non hai stabilito tu. Eccezioni e reclami vanno a una persona." },
      { icon: "lock", title: "I dati degli ospiti restano privati", body: "Il tuo hotel ha il suo sistema privato. I dati degli ospiti servono solo al tuo hotel e sono trattati secondo il GDPR." },
      { icon: "eye", title: "Ogni parola è registrata", body: "Ogni messaggio, chiamata e prenotazione viene registrato, così puoi sempre vedere cosa è stato detto e fatto." },
      { icon: "users", title: "Un team a Malta", body: "Il team di OARC a Birkirkara lo configura, gli insegna le tue camere, le tue tariffe e le regole della casa, e risponde al telefono." },
    ],
  },

  facts: {
    label: "Perché adesso",
    title: "Nuove regole nel 2026. Arrivano tutte sulla tua scrivania.",
    items: [
      { n: "€1,50", l: "Contributo ambientale a notte per ogni ospite dai 18 anni in su, dal 1º luglio 2026. Va sul conto come riga a parte.", src: { label: "Malta Tourism Authority: contributo ambientale", href: "https://mta.com.mt/environmental-contribution/" } },
      { n: "€22,50", l: "Il massimo che un ospite paga per visita. Non è soggetto a IVA né a commissioni.", src: { label: "Malta Tourism Authority: contributo ambientale", href: "https://mta.com.mt/environmental-contribution/" } },
      { n: "Giugno 2026", l: "Nuove regole sulle strutture ricettive (Tourism Accommodation Regulations) in vigore dal 15 giugno. Gli standard degli hotel seguono ora i criteri 2025-2030.", src: { label: "Circolare MTA sul Legal Notice 92 del 2026", href: "https://mta.com.mt/notices/circular-tourism-accommodation-2026-collective.pdf" } },
    ],
  },

  faq: [
    { q: "Che cos'è, esattamente?", a: "Un unico sistema AI costruito intorno al tuo hotel. Risponde a ogni ospite, trasforma le richieste in prenotazioni dirette, prepara i preventivi per gruppi ed eventi, organizza gli arrivi, vende gli extra che scegli tu, cura le tue recensioni e sbriga il back office. Il team di OARC a Malta lo configura e lo gestisce con te." },
    { q: "Fissa i prezzi o concede rimborsi?", a: "No. Comunica solo le tue tariffe e le tue offerte. Sconti, rimborsi, eccezioni e reclami vanno sempre al tuo direttore o alla reception." },
    { q: "Dà consulenza legale o fiscale?", a: "No. Calcola importi come il contributo ambientale dalle tue prenotazioni e li tiene in ordine. Il tuo direttore o il tuo commercialista li controlla e decide." },
    { q: "Sostituirà i receptionist o l'ufficio prenotazioni?", a: "No. Si prende le domande ripetitive, i messaggi notturni e la compilazione dei moduli, così la reception può dedicarsi agli ospiti che ha davanti." },
    { q: "I dati degli ospiti restano privati?", a: "Sì. Ogni hotel ha il suo sistema privato. I dati degli ospiti servono solo al tuo hotel e sono trattati secondo il GDPR." },
    { q: "Funziona con il nostro PMS e il nostro channel manager?", a: "Sì. Lo colleghiamo al PMS, al channel manager, al booking engine e alle caselle email che usi già. Se un collegamento non esiste, lo costruiamo noi." },
    { q: "Porterà davvero più prenotazioni dirette?", a: "Risponde in fretta a ogni ospite, comunica la tua tariffa diretta e invia il tuo link di prenotazione, così meno persone finiscono su un portale mentre aspettano. Non può impedire agli ospiti di usare i portali, e le tue tariffe e il tuo sito web contano sempre." },
    { q: "Può fare una cosa sola?", a: "Sì. Puoi partire da un solo compito, come rispondere a ogni richiesta di notte, e aggiungere il successivo quando il primo si è ripagato." },
    { q: "In quanto tempo è attivo?", a: "Configuriamo il tuo primo sistema in 72 ore: di solito risponde a ogni richiesta su WhatsApp, email e sito web. Il resto viene collegato nelle settimane successive." },
    { q: "Gli agenti AI chiamano gli ospiti?", a: "Sì. Un agente vocale risponde al tuo telefono e chiama gli ospiti per orari di arrivo, caparre non pagate e camere che si sono liberate. Non offre mai un prezzo fuori dalle tue regole, e il tuo team può prendere in mano qualsiasi chiamata." },
    { q: "E se sbaglia qualcosa?", a: "Risponde solo in base alle tue camere, alle tue tariffe e alle regole della casa, e passa al tuo team tutto ciò di cui non è sicuro. Ogni messaggio e ogni chiamata vengono registrati, così puoi vedere cosa è stato detto. Se qualcosa va cambiato, lo cambia il team di OARC a Malta." },
    { q: "Quanto costa?", a: "In questo momento il primo mese è gratuito. Poi dipende dalle dimensioni del tuo hotel e da cosa attivi. Chiedicelo e facciamo il prezzo per il tuo hotel." },
    { q: "A quanto ammonta il contributo ambientale a Malta?", a: "Dal 1º luglio 2026, €1,50 a notte per ogni ospite che ha almeno 18 anni all'inizio della visita, fino a €22,50 a persona per visita. Il tetto vale anche per una visita divisa tra Malta e Gozo. Va addebitato a parte rispetto alla tariffa della camera, come riga a sé sulla fattura o sulla ricevuta, e non è soggetto a IVA né a commissioni." },
    { q: "Chi gestisce il contributo ambientale a Malta?", a: "L'autorità responsabile è la Malta Tourism Authority. Una parte del lavoro operativo e di coordinamento è stata delegata alla Malta Hotels and Restaurants Association (MHRA). Agli hotel, e ai siti e agli agenti che prendono prenotazioni, può essere chiesto di lavorare con la MHRA per riscuoterlo, dichiararlo e versarlo." },
    { q: "Cosa sono le nuove Tourism Accommodation Regulations di Malta?", a: "È il Legal Notice 92 del 2026, in vigore dal 15 giugno 2026. Riunisce quattro vecchi regolamenti in uno solo e riguarda hotel, guest house, ostelli e affitti brevi. Gli standard degli hotel seguono ora i criteri Hotel Stars Union 2025-2030, e dagli hotel esistenti ci si aspetta che inizino ad adeguarsi." },
  ],

  cta: {
    titleBefore: "Tieniti gli ospiti che chiedono prima a te.",
    titleEm: "E le commissioni.",
    body: "Richiedi il tuo primo mese gratuito. Lo configuriamo noi per te in 72 ore.",
    button: "Richiedi il tuo mese gratuito",
    secondary: "Prenota una chiamata di 20 minuti",
  },

  sources: [
    { label: "Malta Tourism Authority: contributo ambientale", href: "https://mta.com.mt/environmental-contribution/" },
    { label: "Circolare MTA: Tourism Accommodation Regulations, 2026", href: "https://mta.com.mt/notices/circular-tourism-accommodation-2026-collective.pdf" },
    { label: "Legal Notice 92 del 2026 (legislation.mt)", href: "https://legislation.mt/eli/ln/2026/92/eng" },
  ],
  related: [
    { label: "Marketing per hotel a Malta", href: "/industries/hotels" },
    { label: "Voice AI per l'ospitalità", href: "/voice-ai-worker/hospitality" },
    { label: "Prenotazioni dirette o portali", href: "/aeo/hotel-marketing-malta" },
    { label: "AI per ristoranti", href: "/ai/restaurants" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital non è un consulente fiscale e non fornisce consulenza legale o fiscale. Nomi e cifre nelle schermate provengono da un account demo.",
};

export default hotels;
