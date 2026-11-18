import type { AiSystemContent } from "@/lib/ai-systems/types";

// Italian twin of lib/ai-systems/real-estate.ts (/it/ai/real-estate).
// Same structure, numbers, icons and source links as the English file.

const realEstateIt: AiSystemContent = {
  slug: "real-estate",
  name: "Agenzie immobiliari",
  barLabel: "AI immobiliare",
  business: "agenzia immobiliare",
  metaTitle: "Sistema AI per Agenzie Immobiliari a Malta | OARC Digital",
  metaDescription:
    "Il sistema AI costruito intorno alla tua agenzia immobiliare a Malta. Risponde a ogni richiesta 24/7, trova proprietari pronti a vendere e segue i contratti.",
  updated: "2026-11-14",
  serviceType: "Sistema AI e automazione per agenzie immobiliari di vendita e affitto",
  schemaDescription:
    "Un sistema AI costruito intorno a ogni agenzia immobiliare di vendita o affitto a Malta. Risponde a ogni richiesta 24/7, qualifica i contatti, fissa le visite, segue i contratti d'affitto e i termini di preavviso, trova proprietari pronti a vendere o affittare, scrive gli annunci, gestisce i rinnovi e si occupa di riparazioni, canoni e documenti. Configurato e gestito dal team di OARC Digital a Malta.",
  hub: {
    title: "Agenzie immobiliari",
    body: "Ogni richiesta ha risposta in meno di un minuto. Ogni contratto è seguito. Ogni mattina, una lista di proprietari pronti a vendere o affittare.",
    gain: "Vendite, affitti e gestione immobili",
  },

  proof: { line: "Attivo in 8 agenzie immobiliari a Malta", short: "In 8 agenzie a Malta" },

  hero: {
    pill: "Lo configuriamo noi per te in 72 ore",
    kicker: "Finalmente hai",
    h1Before: "Un sistema AI completo costruito intorno",
    h1Highlight: "alla tua agenzia immobiliare.",
    sub: "Agenti di intelligenza artificiale (AI) formati sulla tua agenzia rispondono, chiamano e ricontattano ogni cliente interessato. Il sistema segue ogni contratto d'affitto, trova proprietari pronti a vendere o affittare e si occupa dei documenti. I tuoi agenti mostrano le case e chiudono gli affari.",
    primaryCta: "Richiedi il tuo mese gratuito",
    secondaryCta: "Prenota una chiamata di 20 minuti",
    note: "Primo mese gratuito. Configurato e gestito dal team OARC a Malta.",
  },

  film: {
    title: "Guardalo al lavoro: una notte, una mattina",
    scenes: [
      {
        clock: "Domenica · 23:14",
        caption: "Un inquilino chiede di un appartamento. Il tuo ufficio è chiuso.",
        result: "Risposta in 38 secondi. Visita fissata.",
        visual: {
          type: "chat",
          initials: "SK",
          name: "Sofia K.",
          origin: "WhatsApp · nuova richiesta",
          status: "Risposto",
          messages: [
            { from: "in", text: "Ciao! L'appartamento con 2 camere a Sliema è ancora libero dal 1° dicembre? Il mio budget è 1.400 €.", time: "23:14" },
            { from: "out", text: "Ciao Sofia, sì, è libero. Posso mostrartelo giovedì alle 18:00 o sabato alle 11:00. Quando preferisci?", time: "23:14" },
            { from: "in", text: "Giovedì alle 18:00, grazie.", time: "23:16" },
          ],
          done: { before: "Visita fissata con Daniel · ", strong: "gio 18:00", after: " · promemoria a entrambi" },
        },
      },
      {
        clock: "Lunedì · 10:02",
        caption: "Un contatto del mese scorso non si è più fatto sentire. Il tuo agente AI lo chiama.",
        result: "Di nuovo tra le tue trattative",
        visual: {
          type: "chat",
          initials: "JR",
          name: "James R.",
          origin: "Chiamata vocale · 1 min 40 sec",
          status: "Chiamato",
          messages: [
            { from: "out", text: "Ciao James, sono l'assistente AI della tua agenzia. Avevi chiesto degli appartamenti con 2 camere a Sliema. Stai ancora cercando?", time: "10:02" },
            { from: "in", text: "Sì, ma il mio budget è salito a 1.800 €.", time: "10:02" },
            { from: "out", text: "Allora ne ho tre nuovi. Maria può mostrartene due mercoledì alle 17:30?", time: "10:03" },
          ],
          done: { before: "Visita fissata con Maria · ", strong: "mer 17:30", after: " · note salvate" },
        },
      },
      {
        clock: "Martedì · 07:30",
        caption: "I tuoi agenti aprono una sola lista: quali proprietari chiamare per primi, e perché.",
        result: "4 proprietari pronti a vendere o affittare",
        visual: {
          type: "rows",
          title: "Lista chiamate di oggi",
          hint: "In ordine, dal più pronto",
          action: "call",
          rows: [
            { badge: "92", top: true, title: "Robert C. · 3 camere a Sliema", detail: "Comprato nel 2016. Il mese scorso ha chiesto una valutazione." },
            { badge: "88", title: "Proprietario su Facebook Marketplace · 2 camere a Gżira", detail: "Si fa pubblicità da solo da domenica. Ancora nessuna agenzia." },
            { badge: "84", title: "Anna V. · 2 camere a Msida", detail: "Il contratto del suo inquilino scade tra 90 giorni." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Tutta la tua agenzia in una schermata.",
    body: "Ogni mattina: cosa è arrivato di notte, cosa aspetta te e chi chiamare per primo.",
    org: "La tua agenzia",
    search: "Chiedi qualsiasi cosa… “Quali contratti scadono a marzo?”",
    initials: "MA",
    nav: [
      { label: "Oggi" }, { label: "Richieste", badge: "23" }, { label: "Contratti" }, { label: "Proprietari" },
      { label: "Annunci" }, { label: "Visite" }, { label: "Canoni e riparazioni" }, { label: "Report" },
    ],
    greeting: "Buongiorno, Maria",
    status: "Attivo · tutto controllato durante la notte",
    kpis: [
      { label: "Richieste con risposta", value: "23", note: "Tutte entro un minuto" },
      { label: "Contratti in scadenza entro 90 giorni", value: "11", note: "Proprietari e inquilini già sentiti" },
      { label: "Proprietari pronti a vendere o affittare", value: "4", note: "Nella lista chiamate di oggi" },
      { label: "Canoni in ritardo", value: "1.950 €", note: "2 solleciti inviati", alert: true },
    ],
    todoTitle: "Oggi tocca a te",
    todos: [
      { initials: "JP", title: "Inquilino in uscita · App. 7, St Julian's", detail: "Annuncio online da stamattina. Inviato a 9 persone che stavano già cercando.", tag: "Pubblicato", on: true },
      { initials: "RC", title: "Proprietario che potrebbe vendere · 3 camere a Sliema", detail: "Comprato nel 2016, il mese scorso ha chiesto una valutazione.", tag: "Chiama oggi" },
      { initials: "LK", title: "Visita · gio 18:00 · monolocale a Gżira", detail: "Fissata su WhatsApp alle 23:14. Promemoria a entrambi.", tag: "Fissata" },
      { initials: "DM", title: "Perdita segnalata · 2 camere a Msida", detail: "Idraulico prenotato per le 10:00. Inquilino e proprietario avvisati.", tag: "Gestito" },
    ],
    chartTitle: "Richieste di questa settimana",
    bars: [
      { label: "Lun", h: 46 }, { label: "Mar", h: 58 }, { label: "Mer", h: 40 }, { label: "Gio", h: 72 },
      { label: "Ven", h: 64 }, { label: "Sab", h: 88 }, { label: "Dom", h: 100 },
    ],
    chartFoot: { label: "Prima risposta, in media", value: "38 sec" },
    chatFloat: {
      channel: "WhatsApp · nuova richiesta",
      time: "23:14",
      incoming: "Ciao, l'appartamento con 2 camere a Sliema è ancora libero da dicembre?",
      reply: "Sì, è libero. Posso mostrartelo gio 18:00 o sab 11:00. Quando preferisci?",
      receipt: "Risposta in 38 sec · visita fissata",
    },
    alertFloat: {
      label: "Radar contratti · adesso",
      title: "Inquilino in uscita a marzo",
      detail: "App. 7, St Julian's · 1.450 €. Pubblicato prima che lo sappia chiunque altro.",
      tag: "Pubblicato · inviato a 9",
    },
  },

  worksWith: ["WhatsApp", "Gmail e Outlook", "Telefonate", "Excel e Google Sheets", "Il tuo CRM", "Portali immobiliari", "Facebook e Instagram"],

  pillars: {
    label: "Costruito intorno a te",
    title: "La tua agenzia. I tuoi dati. Il tuo modo di lavorare.",
    items: [
      { icon: "network", title: "Collega tutti i tuoi dati", body: "Contratti, annunci, clienti, WhatsApp, email e fogli di calcolo. Un solo posto, sempre aggiornato." },
      { icon: "workflow", title: "Lavora dentro il tuo metodo", body: "I tuoi agenti tengono gli strumenti che conoscono. Il sistema lavora dietro le quinte e consegna loro il lavoro già pronto." },
      { icon: "trending", title: "Cresce con te", body: "Ogni settimana conosce meglio la tua agenzia. Parti da un compito e aggiungi il successivo quando il primo si è ripagato." },
    ],
  },

  agents: {
    label: "La tua squadra vendite AI",
    title: "Tre agenti AI. Formati sulla tua agenzia. Al lavoro su ogni contatto.",
    intro: "Scrivono su WhatsApp e telefonano. Ognuno conosce i tuoi annunci, i tuoi prezzi e il modo di parlare della tua agenzia.",
    note: "Passano la mano al tuo agente appena serve una persona, e il tuo agente può subentrare in qualsiasi chat o chiamata.",
    items: [
      {
        name: "Agente contatti",
        title: "Non perde nessun contatto.",
        points: [
          "Risponde su WhatsApp, portali, sito web, Facebook e Instagram in meno di un minuto.",
          "Tiene d'occhio Facebook, Instagram e i marketplace per trovare proprietari e immobili che ancora non hai.",
          "Chiede budget, date ed esigenze di permesso di soggiorno, poi ti passa chi è pronto.",
        ],
        channels: ["WhatsApp", "Portali", "Facebook e Instagram", "Sito web"],
        result: "Nessun contatto perso",
      },
      {
        name: "Agente follow-up",
        title: "Non lascia cadere nessuno.",
        points: [
          "Scrive e chiama ogni contatto finché dice sì, no o non ancora.",
          "Ricorda cosa cercava ogni persona e torna da lei quando esce la casa giusta.",
          "Ricorda ai clienti visite, documenti e scadenze dei contratti.",
        ],
        channels: ["Chiamate vocali", "WhatsApp", "Email"],
        result: "I vecchi contatti diventano visite",
      },
      {
        name: "Agente vendite",
        title: "Porta fino all'accordo.",
        points: [
          "Richiama in pochi minuti i contatti più caldi e fissa la visita o la valutazione nell'agenda del tuo agente.",
          "Invia i prossimi passi, sollecita i documenti e tiene aggiornate entrambe le parti.",
          "Dice al tuo agente esattamente chi è pronto a firmare oggi.",
        ],
        channels: ["Chiamate vocali", "WhatsApp", "Il tuo calendario"],
        result: "I tuoi agenti chiudono e basta",
      },
    ],
  },

  jobs: {
    label: "Tutto quello che fa",
    title: "Un sistema. Diciannove compiti fatti per te.",
    items: [
      { icon: "chat", title: "Risponde a ogni richiesta, 24/7", body: "WhatsApp, portali, sito web, Facebook e telefono. Nella lingua del cliente.", gain: "Nessun contatto si raffredda" },
      { icon: "filter", title: "Qualifica ogni contatto", body: "Budget, data di ingresso, chi si trasferisce, permesso di soggiorno. I più caldi vanno subito al tuo agente.", gain: "Gli agenti parlano solo con chi è pronto" },
      { icon: "calendar", title: "Fissa ogni visita", body: "Trova l'orario, lo conferma, lo ricorda a entrambi e lo sposta se i piani cambiano.", gain: "Meno appuntamenti saltati" },
      { icon: "clock", title: "Sa quali appartamenti si liberano", body: "Segue ogni scadenza di contratto e il termine di preavviso di 3 mesi, e sente in anticipo inquilino e proprietario.", gain: "L'immobile lo hai tu per primo" },
      { icon: "userPlus", title: "Trova proprietari pronti a vendere o affittare", body: "Ogni mattina una lista di chiamate in ordine, con il motivo per cui ogni proprietario potrebbe muoversi.", gain: "Più immobili dei tuoi concorrenti" },
      { icon: "refresh", title: "Risveglia i vecchi contatti", body: "Scrive a chi ha chiesto in passato, a inquilini e acquirenti, con qualcosa adatto a loro oggi.", gain: "Affari da chi conosci già" },
      { icon: "phone", title: "Chiama i tuoi contatti", body: "Un agente vocale telefona ai contatti nuovi e a quelli fermi, risponde con i tuoi annunci e fissa la visita.", gain: "Contatti raggiunti in pochi minuti" },
      { icon: "search", title: "Tiene d'occhio Facebook, Instagram e Marketplace", body: "Scova i proprietari che si fanno pubblicità da soli e gli immobili che ancora non hai.", gain: "Immobili che ai concorrenti sfuggono" },
      { icon: "trending", title: "Ti fa trovare su Google e nelle risposte AI", body: "SEO per Google, più il lavoro che aiuta ChatGPT e Gemini a consigliare la tua agenzia.", gain: "Più persone trovano prima te" },
      { icon: "link", title: "Abbina ogni nuovo annuncio", body: "Appena un appartamento è online, arriva a tutti quelli che ne cercano uno simile.", gain: "Affittato prima della pubblicità" },
      { icon: "pen", title: "Scrive i tuoi annunci", body: "Descrizioni nello stile della tua agenzia, in inglese e nelle lingue dei tuoi clienti.", gain: "Annunci pronti in pochi minuti" },
      { icon: "image", title: "Fa vendere foto e pubblicità", body: "Migliora le foto, arreda le stanze vuote e crea pubblicità e brevi video per ogni immobile.", gain: "Più clic, più visite" },
      { icon: "euro", title: "Valuta un immobile in pochi minuti", body: "Un report di prezzo chiaro, basato sui prezzi reali della zona: all'incontro arrivi preparato.", gain: "L'incarico è tuo" },
      { icon: "repeat", title: "Gestisce rinnovi e adeguamenti del canone", body: "Chiede con mesi di anticipo, prepara il rinnovo e propone un adeguamento entro il limite di legge.", gain: "Tieni ogni buon inquilino" },
      { icon: "wrench", title: "Gestisce le riparazioni", body: "Raccoglie la richiesta, dà la precedenza alle emergenze, prenota il tecnico e aggiorna tutti.", gain: "Inquilini sereni, proprietari contenti" },
      { icon: "card", title: "Sollecita canoni e fatture", body: "Promemoria gentili prima della scadenza, decisi dopo, e fatture inviate in tempo.", gain: "Incassi puntuali" },
      { icon: "file", title: "Si occupa dei documenti", body: "Contratti, registrazione entro il limite di 30 giorni, date del preliminare di vendita e verifiche sui clienti.", gain: "Nessuna scadenza persa" },
      { icon: "chart", title: "Fa il report a ogni proprietario", body: "Un report mensile di tutto ciò che è stato fatto per il suo immobile, inviato senza che nessuno lo scriva.", gain: "I proprietari restano con te" },
      { icon: "sun", title: "Ti aggiorna ogni mattina", body: "Cosa si è mosso nella notte: nuovi annunci, cambi di prezzo, nuovi progetti e chi chiamare per primo.", gain: "Sempre un passo avanti" },
    ],
  },

  spotlights: [
    {
      label: "Richieste",
      title: "Ogni richiesta ha risposta in pochi secondi. Giorno e notte.",
      points: [
        "Risponde su WhatsApp, portali, sito web e telefono, nella lingua del cliente.",
        "Fa le domande giuste: budget, data di ingresso, chi si trasferisce e permesso di soggiorno.",
        "Fissa la visita, manda i promemoria e continua a seguire il cliente fino alla firma.",
      ],
      visual: {
        type: "chat",
        initials: "SK",
        name: "Sofia K.",
        origin: "Richiesta da un portale immobiliare",
        status: "Risposto",
        messages: [
          { from: "in", text: "Ciao! Cerco un appartamento con 2 camere a Sliema o Gżira dal 1° dicembre, budget intorno a 1.400 €.", time: "23:14" },
          { from: "out", text: "Ciao Sofia, ne ho due adatti. In quanti vi trasferite? E ti serve il contratto per il permesso di soggiorno?", time: "23:14" },
          { from: "in", text: "Siamo in 2. Sì, per il mio permesso.", time: "23:16" },
          { from: "out", text: "Perfetto. Posso mostrarteli entrambi giovedì. Che orario preferisci?", time: "23:16" },
        ],
        slots: ["gio 18:00", "sab 11:00"],
        done: { before: "Visita fissata con Daniel · ", strong: "gio 18:00", after: " · promemoria a entrambi" },
      },
    },
    {
      label: "Proprietari e annunci",
      title: "Il tuo prossimo incarico è già nel tuo telefono.",
      points: [
        "Ogni mattina dà ai tuoi agenti una lista di chiamate in ordine: i proprietari che potrebbero vendere o affittare, con il motivo.",
        "Individua ex acquirenti che potrebbero vendere, contratti in scadenza e nuovi progetti in attesa di permesso.",
        "Prepara la valutazione, così il tuo agente si presenta con il prezzo giusto.",
      ],
      visual: {
        type: "rows",
        title: "Lista chiamate di oggi",
        hint: "In ordine, dal più pronto",
        action: "call",
        rows: [
          { badge: "92", top: true, title: "Robert C. · 3 camere a Sliema", detail: "Comprato nel 2016. Il mese scorso ha chiesto una valutazione." },
          { badge: "84", title: "Anna V. · 2 camere a Msida", detail: "Il contratto del suo inquilino scade tra 90 giorni. Non ha ancora detto se rinnova." },
          { badge: "77", title: "Mark B. · villa a Swieqi", detail: "Vive all'estero. Ha aperto i tuoi ultimi due report ai proprietari." },
          { badge: "71", title: "Nuovo progetto · Gżira", detail: "Domanda di permesso per 8 appartamenti presentata questa settimana." },
        ],
      },
    },
    {
      label: "Contratti e rinnovi",
      title: "Mai più una scadenza di contratto persa.",
      points: [
        "Segue ogni scadenza di contratto e il termine di preavviso di 3 mesi del proprietario.",
        "Sente inquilino e proprietario con mesi di anticipo e prepara il rinnovo.",
        "Se l'inquilino va via, l'appartamento va online lo stesso giorno e arriva a chi sta già cercando.",
      ],
      visual: {
        type: "timeline",
        title: "App. 7, St Julian's · 2 camere · 1.450 €",
        subtitle: "Il contratto scade il 28 febbraio 2027",
        steps: [
          { when: "Giorno −120", title: "Domanda al proprietario: rinnovare, rivedere il canone o riprendersi l'appartamento?", detail: "Inviata su WhatsApp nella lingua del proprietario." },
          { when: "Giorno −120", title: "Domanda all'inquilino: resti o vai via?", detail: "Risposta: va via a marzo." },
          { when: "Giorno −119", title: "Pubblicato prima che lo sappia chiunque altro", detail: "Foto prenotate. Inviato a 9 persone che stavano già cercando.", key: true, tag: "Pubblicato · inviato a 9" },
          { when: "Giorno −90", title: "Termine di preavviso del proprietario", detail: "Rispettato. Niente si rinnova per sbaglio." },
          { when: "Giorno +30", title: "Nuovo contratto registrato in tempo", detail: "Entro il limite di 30 giorni. Fattura inviata." },
        ],
      },
    },
    {
      label: "Chiedi qualsiasi cosa",
      title: "Chiediglielo come lo chiederesti al tuo agente migliore.",
      points: [
        "Scrivi o pronuncia una domanda con parole semplici. La risposta arriva dai tuoi dati.",
        "Nessun report da costruire, nessun foglio di calcolo da setacciare.",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Quali contratti scadono a marzo?", summary: "A marzo scadono 7 contratti. I proprietari sono già stati sentiti per tutti.", rows: [["App. 7, St Julian's", "Inquilino in uscita · pubblicato"], ["App. 3, Sliema", "Rinnova +3%"], ["App. 12, Msida", "Il proprietario decide"], ["Monolocale 2, Gżira", "Rinnova"], ["+ altri 3", "Vedi tutti"]] },
          { q: "Chi ha chiesto di un 2 camere a Sliema?", summary: "14 persone negli ultimi 30 giorni. 9 stanno ancora cercando.", rows: [["Sofia K.", "1.400 € · dal 1° dic"], ["James R.", "1.600 € · da gen"], ["Ana P. e Luca M.", "1.300 € · serve il permesso"], ["Tomasz W.", "1.500 € · da feb"], ["+ altri 10", "Vedi tutti"]] },
          { q: "Quali proprietari non sentiamo da tempo?", summary: "23 proprietari non hanno avuto contatti da 6 mesi. Un messaggio per risentirli è pronto da inviare.", rows: [["Mark B.", "Villa a Swieqi · 8 mesi"], ["Carmen F.", "2 camere a Birkirkara · 7 mesi"], ["Paul Z.", "3 camere a Mellieħa · 6 mesi"], ["Rita G.", "Monolocale a Sliema · 6 mesi"], ["+ altri 19", "Vedi tutti"]] },
          { q: "Com'è andato ogni agente questa settimana?", summary: "52 visite fissate, 9 affitti conclusi, 3 nuovi incarichi presi.", rows: [["Daniel", "18 visite · 4 affitti"], ["Maria", "15 visite · 3 affitti · 2 incarichi"], ["Kurt", "12 visite · 2 affitti · 1 incarico"], ["Turno di notte (il sistema)", "41 richieste con risposta"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Ogni tipo di immobile",
    title: "Vendite, affitti, commerciale. Tutto.",
    intro: "Qualunque cosa tu abbia in portafoglio, il sistema rincorre e i tuoi agenti chiudono.",
    colA: "Il tuo lavoro",
    colB: "Cosa fa il sistema",
    colC: "Cosa fa il tuo agente",
    items: [
      { name: "Affitti lunghi", system: "Risponde alle richieste, fissa le visite, segue ogni scadenza e ogni termine di preavviso, prepara i rinnovi, registra il contratto e sollecita i canoni.", you: "Mostra l'appartamento e fa firmare l'inquilino." },
      { name: "Vendite", system: "Trova proprietari pronti a vendere, prepara la valutazione, abbina gli acquirenti, ricontatta dopo ogni visita e segue le date del preliminare di vendita.", you: "Prende l'incarico e chiude la vendita." },
      { name: "Affitti brevi", system: "Risponde agli ospiti nella loro lingua, gestisce i messaggi di check-in, prenota pulizie e riparazioni e comunica gli incassi al proprietario.", you: "Fa crescere il numero di case che gestisci." },
      { name: "Commerciale", system: "Segue durata dei contratti, date di recesso e adeguamenti del canone per negozi e uffici, e ti dice chi cerca spazi.", you: "Negozia le condizioni." },
      { name: "Nuove costruzioni", system: "Raccoglie ogni richiesta da pubblicità e sito web, invia piantine e prezzi e tiene aggiornati gli acquirenti fino alle chiavi.", you: "Incontra gli acquirenti seri." },
      { name: "Gestione immobili", system: "Raccoglie le richieste di riparazione, prenota i tecnici, incassa i canoni e manda a ogni proprietario un report mensile.", you: "Tiene i proprietari per anni." },
    ],
  },

  wins: {
    label: "I tuoi clienti lo sentono per primi",
    title: "Se vincono loro, vinci tu.",
    items: [
      { title: "Una risposta in meno di un minuto.", body: "Domenica alle 23, un inquilino chiede di un appartamento. Riceve una risposta e un orario per la visita. La tua agenzia è quella che ricorda." },
      { title: "Proprietari sempre informati.", body: "Ogni proprietario riceve un report mensile senza chiederlo. Smette di chiamare per controllare. E smette anche di guardarsi intorno." },
      { title: "La casa giusta, per primi.", body: "Acquirenti e inquilini sanno di una casa adatta appena viene inserita. Molti affari si chiudono prima che esca l'annuncio." },
    ],
  },

  live: {
    label: "Come si parte",
    h2Before: "Lo configuriamo noi per te in",
    h2Em: "72 ore.",
    body: "Arriviamo, colleghiamo i tuoi strumenti e configuriamo tutto. Per i tuoi agenti, niente di nuovo da imparare.",
    steps: [
      { when: "Oggi", title: "Una chiamata di 20 minuti", body: "Su come lavora la tua agenzia e dove perde tempo e affari." },
      { when: "72 ore", title: "Il tuo primo sistema è attivo", body: "Ogni richiesta su WhatsApp e sito web ha risposta, 24/7." },
      { when: "Settimana 2", title: "Tutti i tuoi dati collegati", body: "Contratti, annunci, proprietari e clienti in un solo posto." },
      { when: "Ogni settimana", title: "Cresce con te", body: "Impara di più, e parte il compito successivo." },
    ],
  },

  ways: {
    label: "Parti da dove vuoi",
    title: "Un compito o tutta l'agenzia. Scegli tu.",
    items: [
      { title: "Sistema un compito", body: "Scegli la cosa che ti costa di più e automatizziamo solo quella.", example: "Esempio: rispondere di notte a ogni richiesta su WhatsApp." },
      { title: "Collegalo a ciò che usi", body: "Tieni il tuo CRM, i tuoi portali e il tuo sito web. Ci colleghiamo noi.", example: "Esempio: i nuovi contatti dai portali entrano nel tuo CRM, già qualificati." },
      { title: "Il sistema completo", body: "Tutto quello che vedi in questa pagina, costruito intorno alla tua agenzia, personalizzato e seguito da noi.", example: "Esempio: richieste, contratti, proprietari, canoni e report in un solo posto." },
      { title: "Non sei ancora sicuro?", body: "Quasi nessuna agenzia lo è. Guardiamo la tua settimana e ti mostriamo dove perdi soldi.", example: "Gratis. Bastano 20 minuti." },
    ],
  },

  offer: {
    label: "Offerta a tempo limitato",
    title: "Il primo mese è gratuito.",
    body: "Lo configuriamo in 72 ore e lo gestiamo con te per un mese. Prima vedi sulla tua agenzia i contatti, le visite e le ore che fa risparmiare.",
    cta: "Richiedi il tuo mese gratuito",
    secondaryCta: "Prenota una chiamata di 20 minuti",
    listLabel: "Cosa ottieni",
    items: [
      { strong: "Primo mese gratuito.", rest: "Lo vedi lavorare sui tuoi contatti prima di decidere." },
      { strong: "Configurato per te in 72 ore.", rest: "Colleghiamo WhatsApp, sito web e caselle email. Tu non cambi nulla." },
      { strong: "Niente di nuovo da imparare.", rest: "Funziona con WhatsApp, email e CRM che usi già." },
      { strong: "Costruito per te, gestito da noi.", rest: "Lo personalizziamo sulla tua agenzia e lo seguiamo ogni settimana." },
      { strong: "Parti in piccolo.", rest: "Prima un compito. Aggiungi il successivo solo quando il primo si è ripagato." },
    ],
  },

  calc: {
    label: "I tuoi numeri",
    title: "Inserisci i tuoi numeri.",
    mode: "percent",
    inputs: [
      { label: "Contratti d'affitto che gestisci", value: 150 },
      { label: "Inquilini che vanno via ogni anno (%)", value: 40, max: 100 },
      { label: "Canone mensile medio (€)", value: 1200 },
    ],
    out1: "Appartamenti da riaffittare ogni anno",
    out2: "Provvigioni d'affitto in gioco se arrivi per primo",
    footnote: "Ipotesi: una mensilità di provvigione per ogni affitto, metà da ciascuna parte, come si usa a Malta.",
  },

  trust: {
    label: "Decidi sempre tu",
    title: "Il sistema lavora. Le decisioni le prendi tu.",
    items: [
      { icon: "eye", title: "Una persona approva ciò che conta", body: "Prezzi, contratti e offerte non partono mai senza il sì del tuo agente." },
      { icon: "lock", title: "I tuoi dati restano tuoi", body: "Sono usati solo per la tua agenzia e trattati secondo il GDPR. Se vai via, li porti con te." },
      { icon: "users", title: "Un team a Malta", body: "Il team OARC a Birkirkara lo configura, lo gestisce con te e risponde al telefono." },
      { icon: "check", title: "Mostra quello che fa", body: "Ogni messaggio e ogni azione vengono registrati: puoi sempre vedere cosa ha fatto e perché." },
    ],
  },

  facts: {
    label: "Perché adesso",
    title: "L'agenzia più veloce prende l'appartamento.",
    items: [
      { n: "70.589", l: "Contratti d'affitto a Malta. Ognuno ha una scadenza.", src: { label: "Dati della Housing Authority, primo semestre 2025 (BusinessNow)", href: "https://businessnow.mt/more-than-70000-active-rental-contracts-with-the-housing-authority-in-the-first-half-of-2025/" } },
      { n: "3 mesi", l: "Il preavviso che il proprietario deve dare. Se lo salta, il contratto si rinnova per un anno.", src: { label: "Private Residential Leases Act (legge maltese sugli affitti), Cap. 604", href: "https://legislation.mt/eli/cap/604/eng" } },
      { n: "68%", l: "Delle richieste dal sito web alle grandi agenzie USA è rimasto senza risposta entro 24 ore.", src: { label: "Studio Pied Piper, 2026", href: "https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents" } },
    ],
  },

  faq: [
    { q: "Che cos'è, esattamente?", a: "Un unico sistema AI costruito intorno alla tua agenzia. Risponde a ogni richiesta, fissa le visite, segue ogni contratto, trova proprietari pronti a vendere o affittare, scrive i tuoi annunci, gestisce riparazioni e canoni e si occupa dei documenti. Il team OARC a Malta lo configura e lo gestisce con te." },
    { q: "Sostituirà i miei agenti?", a: "No. Fa i solleciti, il lavoro d'ufficio e il turno di notte, così i tuoi agenti passano la giornata tra visite, proprietari e chiusure." },
    { q: "I miei agenti devono imparare un nuovo software?", a: "No. Funziona con WhatsApp, email, fogli di calcolo e CRM che usi già." },
    { q: "Può fare una cosa sola?", a: "Sì. Molte agenzie partono da un solo compito, per esempio rispondere di notte a ogni richiesta, e aggiungono il successivo quando il primo si è ripagato." },
    { q: "Funziona con il nostro CRM e con i portali immobiliari?", a: "Sì. Lo colleghiamo al CRM, ai portali, al sito web e alle caselle email che hai già. Se per qualcosa non c'è un collegamento pronto, lo costruiamo noi." },
    { q: "In quanto tempo è attivo?", a: "Configuriamo il tuo primo sistema in 72 ore: di solito risponde a ogni richiesta su WhatsApp e sito web. Il resto viene collegato nelle settimane successive." },
    { q: "Gli agenti AI telefonano davvero alle persone?", a: "Sì. Un agente vocale chiama i contatti nuovi e quelli fermi, risponde con i tuoi annunci e fissa la visita nell'agenda del tuo agente. Il tuo agente può subentrare in qualsiasi chiamata." },
    { q: "Può trovare contatti su Facebook e Instagram?", a: "Sì. Risponde alle richieste che arrivano da Facebook e Instagram e tiene d'occhio gli annunci pubblici su Facebook Marketplace e sui portali, per trovare i proprietari che si fanno pubblicità da soli." },
    { q: "Da quale numero risponde?", a: "Dal tuo. Risponde dal numero WhatsApp, dall'email e dal sito web della tua agenzia, così i clienti continuano a parlare con la tua agenzia." },
    { q: "E se sbaglia qualcosa?", a: "Ogni messaggio e ogni azione vengono registrati, così vedi cosa ha fatto e perché. Prezzi, contratti e offerte non partono mai senza il sì del tuo agente. Se c'è qualcosa da cambiare, lo cambia il team OARC a Malta." },
    { q: "Che fine fanno i nostri dati?", a: "Restano tuoi, sono usati solo per la tua agenzia e trattati secondo il GDPR. Se vai via, li porti con te." },
    { q: "Quanto costa?", a: "In questo momento il primo mese è gratuito. Dopo dipende dalle dimensioni della tua agenzia e da cosa attivi. Chiedicelo e facciamo il prezzo per la tua agenzia." },
    { q: "Entro quando un proprietario a Malta deve comunicare che non rinnova il contratto?", a: "Per un affitto lungo, almeno tre mesi prima della scadenza, con lettera raccomandata. Altrimenti il contratto si rinnova per un altro anno." },
    { q: "Quanto tempo c'è per registrare un contratto d'affitto a Malta?", a: "30 giorni dall'inizio del contratto. La tariffa della Housing Authority è di 10 € se registri in tempo e di 120 € se sei in ritardo. Un contratto non registrato non è valido." },
    { q: "Di quanto può aumentare l'affitto ogni anno a Malta?", a: "Per un contratto lungo di affitto residenziale privato, l'aumento annuo non può superare la variazione dell'indice ufficiale dei prezzi degli immobili (Property Price Index) e non può mai superare il 5%." },
  ],

  cta: {
    titleBefore: "Il tuo prossimo cliente scrive stasera.",
    titleEm: "Fatti trovare con un agente pronto.",
    body: "Richiedi il tuo primo mese gratuito. Lo configuriamo noi per te in 72 ore.",
    button: "Richiedi il tuo mese gratuito",
    secondary: "Prenota una chiamata di 20 minuti",
  },

  sources: [
    { label: "BusinessNow: 70.589 contratti d'affitto", href: "https://businessnow.mt/more-than-70000-active-rental-contracts-with-the-housing-authority-in-the-first-half-of-2025/" },
    { label: "Private Residential Leases Act (Cap. 604)", href: "https://legislation.mt/eli/cap/604/eng" },
    { label: "Housing Authority: registrazione dei contratti, 30 giorni", href: "https://rentregistration.mt/notice/" },
    { label: "Studio Pied Piper, riportato da Florida Realtors", href: "https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents" },
  ],
  related: [
    { label: "Marketing immobiliare a Malta", href: "/industries/real-estate" },
    { label: "Agente immobiliare AI", href: "/services/ai-real-estate-agent" },
    { label: "AI vocale per il settore immobiliare", href: "/voice-ai-worker/real-estate" },
    { label: "AI per studi legali", href: "/ai/law-firms" },
  ],
  disclaimer: "OARC Digital · Malta. Nomi e cifre nelle schermate provengono da un account demo. Questa pagina è informativa, non è consulenza legale.",
};

export default realEstateIt;
