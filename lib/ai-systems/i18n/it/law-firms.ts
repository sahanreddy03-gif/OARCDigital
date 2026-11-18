import type { AiSystemContent } from "@/lib/ai-systems/types";

// Italian twin of lib/ai-systems/law-firms.ts. Same structure, numbers, icons and sources.
const lawFirms: AiSystemContent = {
  slug: "law-firms",
  name: "Studi legali",
  barLabel: "AI per studi legali",
  business: "studio legale",
  metaTitle: "Sistema AI per Studi Legali a Malta | OARC Digital",
  metaDescription:
    "Il sistema AI per studi legali a Malta, costruito intorno al tuo studio. Archivia i documenti, segue le scadenze, prepara le bozze e fattura. Tu approvi.",
  updated: "2026-11-14",
  serviceType: "Sistema AI e automazione legale per studi legali",
  schemaDescription:
    "Un sistema di intelligenza artificiale (AI) costruito intorno a ogni studio legale a Malta. Risponde ai nuovi clienti 24 ore su 24, esegue le verifiche sui clienti, riceve e archivia ogni documento, segue le scadenze di udienze, permessi e adempimenti, prepara le bozze dai modelli dello studio, prepara domande di permesso, adempimenti societari e dichiarazioni IVA e fiscali, registra le ore e fattura. Un avvocato abilitato approva tutto. Installato e gestito dal team di OARC Digital a Malta.",
  hub: {
    title: "Studi legali",
    body: "Ogni documento del cliente archiviato. Ogni scadenza sotto controllo. Prime bozze con le parole del tuo studio. Un avvocato approva.",
    gain: "Permessi, societario, immobili, fisco e contenzioso",
  },

  proof: { line: "Attivo in 10 studi legali e contabili a Malta", short: "In 10 studi a Malta" },
  lightAreas: true,

  hero: {
    pill: "Lo installiamo per te in 72 ore",
    kicker: "Finalmente hai",
    h1Before: "Un sistema AI completo costruito intorno al",
    h1Highlight: "tuo studio legale.",
    sub: "Agenti di intelligenza artificiale (AI) addestrati sul tuo studio rispondono ai nuovi clienti, raccolgono ogni documento e tengono d’occhio ogni scadenza. Il sistema prepara le bozze dai tuoi modelli e registra le tue ore. Niente esce dallo studio senza il sì di un avvocato.",
    primaryCta: "Richiedi il mese gratuito",
    secondaryCta: "Prenota una chiamata di 20 minuti",
    note: "Primo mese gratuito. Installato e gestito dal team di OARC a Malta.",
  },

  film: {
    title: "Segui un cliente, dal primo messaggio alla tua approvazione",
    scenes: [
      {
        clock: "Martedì · 21:42",
        caption: "Un nuovo cliente scrive. Lo studio è chiuso.",
        result: "Risposta in 40 secondi",
        visual: {
          type: "chat",
          initials: "RS",
          name: "Rafael S.",
          origin: "WhatsApp · nuovo cliente",
          status: "Risposto",
          messages: [
            { from: "in", text: "Buonasera, ho bisogno di aiuto per rinnovare il mio permesso di lavoro. Scade ad aprile.", time: "21:42" },
            { from: "out", text: "Buonasera Rafael. Sì, possiamo occuparcene. Il lavoro e il datore di lavoro sono gli stessi indicati sul permesso?", time: "21:42" },
            { from: "in", text: "Sì, stesso lavoro, alla Camilleri Trading.", time: "21:44" },
          ],
          done: { before: "Pratica aperta · ", strong: "nessun conflitto di interessi", after: " · link per i documenti inviato" },
        },
      },
      {
        clock: "Martedì · 21:47",
        caption: "Invia i documenti dal telefono. Ognuno viene letto, rinominato e archiviato.",
        result: "Nessuno ha dovuto sollecitarlo",
        visual: {
          type: "rows",
          title: "R. Santos · rinnovo permesso di lavoro",
          hint: "Caricati oggi, 21:47",
          action: "tag",
          rows: [
            { badge: "PDF", title: "Passaporto", detail: "Valido fino al 2031. Il nome coincide con il contratto.", tag: "Archiviato" },
            { badge: "PDF", title: "Contratto di lavoro", detail: "Firmato da entrambe le parti. Stipendio e orario letti.", tag: "Archiviato" },
            { badge: "JPG", top: true, title: "Contratto di locazione", detail: "Foto troppo scura per essere letta. Chiesta una nuova al cliente.", tag: "Richiesto di nuovo" },
          ],
        },
      },
      {
        clock: "Mercoledì · 08:41",
        caption: "La leggi. La approvi. Solo allora parte.",
        result: "Niente esce senza il sì di un avvocato",
        visual: {
          type: "timeline",
          title: "Rinnovo permesso di lavoro · R. Santos",
          subtitle: "Il permesso scade il 30 aprile 2027",
          steps: [
            { when: "08:41", title: "L’avv. Anna approva la domanda", detail: "Due piccole modifiche. Entrambe registrate.", key: true, tag: "Approvata da un avvocato" },
            { when: "08:42", title: "Inviata", detail: "Cliente avvisato nello stesso minuto, in portoghese." },
            { when: "08:42", title: "Prossima scadenza salvata", detail: "Il prossimo rinnovo è già in agenda." },
          ],
        },
      },
    ],
  },

  dashboard: {
    title: "Tutto il tuo studio in una schermata.",
    body: "Ogni mattina: cosa è stato archiviato nella notte, cosa scade e cosa aspetta la tua firma.",
    org: "Il tuo studio",
    search: "Chiedi qualsiasi cosa… “Quali permessi scadono prima di giugno?”",
    initials: "AB",
    nav: [
      { label: "Oggi" }, { label: "Nuovi clienti", badge: "6" }, { label: "Pratiche" }, { label: "Documenti" },
      { label: "Scadenze" }, { label: "Bozze" }, { label: "Ore e fatture" }, { label: "Report" },
    ],
    greeting: "Buongiorno, Anna",
    status: "Attivo · tutto archiviato nella notte",
    kpis: [
      { label: "Documenti archiviati nella notte", value: "126", note: "Rinominati, ordinati, collegati" },
      { label: "Scadenze entro 14 giorni", value: "9", note: "Tutte assegnate" },
      { label: "Bozze che ti aspettano", value: "5", note: "Pronte da rivedere" },
      { label: "Ore non fatturate", value: "€4.300", note: "3 fatture in bozza", alert: true },
    ],
    todoTitle: "Ti aspettano oggi",
    todos: [
      { initials: "RS", title: "Permesso di lavoro in scadenza · R. Santos", detail: "Rinnovo pronto. Manca 1 documento, già chiesto al cliente.", tag: "Rivedi", on: true },
      { initials: "BH", title: "Nuovo cliente · Borg Holdings Ltd", detail: "Verifiche su identità e società completate. Lettera di incarico in bozza.", tag: "Firma" },
      { initials: "BV", title: "Udienza · Gio 09:30 · Borg c. Vella", detail: "Fascicolo creato da 214 email e 38 documenti.", tag: "Pronto" },
      { initials: "CT", title: "Dichiarazione IVA · Camilleri Trading", detail: "Cifre ricavate dalle fatture. Scade tra 6 giorni.", tag: "Controlla" },
    ],
    chartTitle: "Ore registrate questa settimana",
    bars: [
      { label: "Lun", h: 62 }, { label: "Mar", h: 74 }, { label: "Mer", h: 58 }, { label: "Gio", h: 86 }, { label: "Ven", h: 100 },
    ],
    chartFoot: { label: "Registrate senza timesheet", value: "31 h" },
    chatFloat: {
      channel: "WhatsApp · nuovo cliente",
      time: "21:42",
      incoming: "Buonasera, ho bisogno di aiuto per rinnovare il mio permesso di lavoro. Scade il mese prossimo.",
      reply: "Posso aprire la pratica oggi. Basta inviare una foto del permesso di soggiorno e del contratto.",
      receipt: "Risposta in 40 sec · pratica aperta",
    },
    alertFloat: {
      label: "Controllo scadenze · adesso",
      title: "Risposta da depositare entro 6 giorni",
      detail: "Borg c. Vella. La bozza è pronta per la revisione dell’avv. Anna.",
      tag: "Bozza pronta",
    },
  },

  worksWith: ["Outlook e Gmail", "WhatsApp", "Word ed Excel", "SharePoint e OneDrive", "Il tuo gestionale di studio", "Il tuo software di contabilità", "Archivi cartacei scansionati", "Telefonate"],

  pillars: {
    label: "Costruito intorno al tuo studio",
    title: "Il tuo studio. I tuoi documenti. Il tuo modo di lavorare.",
    items: [
      { icon: "folder", title: "Ogni documento in un unico posto", body: "Email, contratti, atti giudiziari, scansioni e foto di WhatsApp. Ordinati per cliente e per pratica, e trovati in pochi secondi." },
      { icon: "workflow", title: "Funziona dentro gli strumenti che usi", body: "I tuoi avvocati restano in Outlook, Word e nel software che conoscono. Il sistema lavora dietro di loro." },
      { icon: "scale", title: "Firma sempre un avvocato", body: "Il sistema prepara. Tu decidi. Niente arriva a un cliente, a un tribunale o a un’autorità senza il sì di un avvocato." },
    ],
  },

  agents: {
    label: "La tua segreteria AI",
    title: "Tre agenti AI. Addestrati sul tuo studio. Mai una parola di consulenza legale.",
    intro: "Chattano su WhatsApp e via email, e telefonano. Ognuno conosce i tuoi servizi, i tuoi onorari e il modo di parlare del tuo studio. Il diritto resta ai tuoi avvocati.",
    note: "Raccolgono, ricordano e prenotano. Non danno mai consulenza. Un avvocato può subentrare in qualsiasi chat o chiamata.",
    items: [
      {
        name: "Agente di accoglienza",
        title: "Risponde a ogni nuovo cliente.",
        points: [
          "Risponde su WhatsApp, via email, sul tuo sito web e al telefono in meno di un minuto, di giorno e di notte.",
          "Chiede di cosa si tratta, nella lingua del cliente, come farebbe una brava segretaria.",
          "Esegue la verifica dei conflitti di interessi e fissa il primo incontro nell’agenda dell’avvocato giusto.",
        ],
        channels: ["WhatsApp", "Chiamate vocali", "Email", "Sito web"],
        result: "Nessun cliente va da un altro studio",
      },
      {
        name: "Agente documenti",
        title: "Raccoglie ogni documento.",
        points: [
          "Invia a ogni cliente un link privato e l’elenco di cosa mandare.",
          "Legge, rinomina e archivia ogni documento nella pratica giusta.",
          "Scrive o telefona al cliente quando manca qualcosa o non si legge.",
        ],
        channels: ["Link privato", "WhatsApp", "Chiamate vocali"],
        result: "Pratiche complete, senza solleciti",
      },
      {
        name: "Agente scadenze",
        title: "Controlla ogni data.",
        points: [
          "Segue udienze, scadenze dei permessi, adempimenti e rinnovi.",
          "Avvisa l’avvocato giusto con settimane di anticipo, poi di nuovo, poi un socio.",
          "Telefona o scrive al cliente quando un permesso sta per scadere o serve una firma, e fissa l’incontro.",
        ],
        channels: ["Chiamate vocali", "WhatsApp", "Il tuo calendario"],
        result: "Niente scade a sorpresa",
      },
    ],
  },

  jobs: {
    label: "Tutto quello che fa",
    title: "Un sistema. Venti lavori fatti per te.",
    items: [
      { icon: "chat", title: "Risponde a ogni nuovo cliente, 24/7", body: "WhatsApp, email, sito web e telefono. Chiede di cosa si tratta e fissa il primo incontro.", gain: "Nessun cliente va da un altro studio" },
      { icon: "badge", title: "Esegue le verifiche sui clienti", body: "Raccoglie documento d’identità e prova di indirizzo, controlla i conflitti di interessi e prepara il fascicolo di adeguata verifica per la tua approvazione.", gain: "Nuovo cliente in un giorno, non in una settimana" },
      { icon: "inbox", title: "Riceve ogni documento", body: "I clienti caricano o inoltrano qualsiasi cosa. Il sistema lo legge, lo rinomina e lo archivia nella pratica giusta.", gain: "Basta smistare caselle di posta" },
      { icon: "search", title: "Trova tutto in pochi secondi", body: "Chiedi con parole semplici. Cerca in ogni contratto, email, lettera e scansione del tuo studio.", gain: "Ore di ricerche, sparite" },
      { icon: "pen", title: "Prepara le bozze dai tuoi modelli", body: "Lettere di incarico, accordi, contratti di locazione, procure e lettere, con le formule del tuo studio.", gain: "Prima bozza in pochi minuti" },
      { icon: "eye", title: "Controlla i contratti", body: "Legge un contratto in arrivo e segnala cosa manca o è insolito rispetto allo standard del tuo studio.", gain: "Un secondo paio di occhi su ogni pagina" },
      { icon: "clock", title: "Segue ogni scadenza", body: "Udienze, termini di deposito, scadenze dei permessi, rinnovi e dichiarazioni annuali. I promemoria partono settimane prima.", gain: "Niente panico all’ultimo minuto" },
      { icon: "plane", title: "Prepara le domande di permesso", body: "Permessi di lavoro, di soggiorno e di studio. Controlla ogni passaporto, contratto e certificato e compila i moduli.", gain: "Più domande per ogni avvocato" },
      { icon: "building", title: "Tiene le società in regola", body: "Dichiarazioni annuali, registri e delibere, preparati e ricordati prima della scadenza.", gain: "Nessuna sanzione per ritardo" },
      { icon: "receipt", title: "Prepara le dichiarazioni IVA e fiscali", body: "Ricava le cifre da fatture ed estratti conto e prepara la dichiarazione per il tuo controllo.", gain: "Il giorno della scadenza è un giorno tranquillo" },
      { icon: "file", title: "Gestisce le pratiche di immobili e veicoli", body: "Segue le date del preliminare di vendita, raccoglie i documenti e prepara i moduli di trasferimento e di registrazione.", gain: "Pratiche pulite, ogni volta" },
      { icon: "gavel", title: "Costruisce il fascicolo della causa", body: "Trasforma centinaia di email e documenti in una cronologia e in un fascicolo ordinato, ed elenca cosa manca.", gain: "Giorni di preparazione in un’ora" },
      { icon: "book", title: "Trova la norma", body: "Cerca nelle leggi di Malta e nei lavori passati del tuo studio, e mostra la fonte di ogni risposta.", gain: "La ricerca parte dalla risposta" },
      { icon: "languages", title: "Traduce", body: "Traduzioni di lavoro in maltese, inglese, italiano e altre lingue, pronte per il tuo controllo.", gain: "I clienti leggono nella loro lingua" },
      { icon: "euro", title: "Registra le ore e fattura", body: "Rileva il tempo da email, chiamate e documenti, prepara la fattura e sollecita ciò che non è stato pagato.", gain: "Fattura ogni ora che lavori" },
      { icon: "card", title: "Tiene la contabilità", body: "Abbina i pagamenti alle fatture, ordina le ricevute e tiene i registri in ordine per il tuo commercialista.", gain: "Conti sempre aggiornati" },
      { icon: "refresh", title: "Tiene aggiornati i clienti", body: "I clienti ricevono un aggiornamento chiaro a ogni passo e possono chiedere a che punto è la loro pratica, in qualsiasi momento.", gain: "Meno chiamate “ci sono novità?”" },
      { icon: "phone", title: "Telefona ai clienti e li avvisa", body: "Un agente vocale chiama i clienti per documenti mancanti, permessi in scadenza e appuntamenti.", gain: "Basta rincorrersi al telefono" },
      { icon: "trending", title: "Fa trovare il tuo studio su Google e nelle risposte AI", body: "SEO per Google, più il lavoro che aiuta ChatGPT e Gemini a consigliare il tuo studio.", gain: "I nuovi clienti trovano prima te" },
      { icon: "sun", title: "Aggiorna ogni avvocato ogni mattina", body: "Le scadenze di oggi, le bozze da rivedere, le pratiche in attesa di un cliente e il lavoro non fatturato.", gain: "Inizi la giornata sapendo tutto" },
    ],
  },

  spotlights: [
    {
      label: "Portale clienti",
      title: "Il cliente lo invia una volta. Si archivia da solo.",
      points: [
        "Ogni cliente riceve un link privato. Carica foto, PDF, scansioni o note vocali dal telefono.",
        "Il sistema legge ogni file, lo rinomina, lo archivia nella pratica giusta e avvisa l’avvocato giusto.",
        "Se manca qualcosa o non si legge, lo chiede al cliente nello stesso minuto. Tu non devi sollecitare nessuno.",
      ],
      visual: {
        type: "rows",
        title: "R. Santos · rinnovo permesso di lavoro",
        hint: "Caricati oggi, 21:47",
        action: "tag",
        rows: [
          { badge: "PDF", title: "Passaporto", detail: "Valido fino al 2031. Il nome coincide con il contratto.", tag: "Archiviato" },
          { badge: "PDF", title: "Contratto di lavoro", detail: "Firmato da entrambe le parti. Stipendio e orario letti.", tag: "Archiviato" },
          { badge: "JPG", top: true, title: "Contratto di locazione", detail: "Foto troppo scura per essere letta. Chiesta una nuova al cliente.", tag: "Richiesto di nuovo" },
          { badge: "–", title: "Assicurazione sanitaria", detail: "Non ancora inviata. Il promemoria parte domani alle 09:00.", tag: "Mancante" },
        ],
      },
    },
    {
      label: "Scadenze",
      title: "Ogni scadenza, con settimane di anticipo.",
      points: [
        "Legge le date da avvisi del tribunale, contratti, permessi e registri societari.",
        "Avvisa presto l’avvocato giusto, poi di nuovo, poi informa un socio.",
        "Prepara il lavoro prima della data. La scadenza diventa una firma, non una corsa.",
      ],
      visual: {
        type: "timeline",
        title: "Rinnovo permesso di lavoro · R. Santos",
        subtitle: "Il permesso scade il 30 aprile 2027",
        steps: [
          { when: "Giorno −90", title: "Cliente e datore di lavoro informati di cosa serve", detail: "Elenco inviato su WhatsApp in portoghese." },
          { when: "Giorno −75", title: "Documenti arrivati e controllati", detail: "5 su 6 vanno bene. Una foto chiesta di nuovo." },
          { when: "Giorno −60", title: "Domanda pronta per te", detail: "Moduli compilati. In attesa della revisione dell’avv. Anna.", key: true, tag: "Pronta da rivedere" },
          { when: "Giorno −58", title: "Inviata dopo la tua approvazione", detail: "Cliente avvisato nello stesso minuto." },
          { when: "Decisione", title: "Cliente aggiornato, prossima scadenza salvata", detail: "Il prossimo rinnovo è già in agenda." },
        ],
      },
    },
    {
      label: "Nuovi clienti",
      title: "Ogni nuovo cliente riceve risposta in pochi secondi.",
      points: [
        "Risponde su WhatsApp, via email, sul tuo sito web e al telefono, nella lingua del cliente.",
        "Chiede ciò che chiederebbe una brava segretaria. Non dà mai consulenza legale.",
        "Apre la pratica, esegue la verifica dei conflitti di interessi e fissa l’incontro.",
      ],
      visual: {
        type: "chat",
        initials: "MG",
        name: "Marco G.",
        origin: "Richiesta dal tuo sito web",
        status: "Risposto",
        messages: [
          { from: "in", text: "Buonasera. Sto comprando un appartamento a Gżira e vorrei un avvocato che controlli il preliminare di vendita.", time: "20:52" },
          { from: "out", text: "Buonasera Marco. Sì, possiamo occuparcene. C’è già una data per la firma? Il notaio è stato scelto?", time: "20:52" },
          { from: "in", text: "La firma è venerdì prossimo. Il notaio è già scelto.", time: "20:54" },
          { from: "out", text: "Ricevuto. L’avv. Anna può esaminarlo prima di allora. Andrebbe bene una chiamata domani?", time: "20:54" },
        ],
        slots: ["Mar 09:30", "Mar 16:00"],
        done: { before: "Chiamata fissata con l’avv. Anna · ", strong: "Mar 09:30", after: " · pratica aperta, nessun conflitto di interessi" },
      },
    },
    {
      label: "Bozze",
      title: "Prime bozze in pochi minuti. Con le parole del tuo studio.",
      points: [
        "Impara i tuoi modelli, le tue clausole e il modo di scrivere del tuo studio.",
        "Ogni modifica rispetto al tuo standard è evidenziata, così la revisione richiede pochi minuti.",
        "Niente viene inviato finché un avvocato non lo approva.",
      ],
      visual: {
        type: "rows",
        title: "Bozze che ti aspettano",
        hint: "Create dai tuoi modelli",
        action: "tag",
        rows: [
          { badge: "01", top: true, title: "Lettera di incarico · Borg Holdings Ltd", detail: "Onorari e oggetto dell’incarico compilati dalla prima chiamata.", tag: "Rivedi" },
          { badge: "02", title: "Contratto di locazione · negozio a Mosta", detail: "Il tuo modello. Tre clausole modificate, ognuna evidenziata.", tag: "Rivedi" },
          { badge: "03", title: "Risposta alla lettera · Vella", detail: "Costruita dalla pratica. Ogni fatto rimanda al suo documento.", tag: "Rivedi" },
          { badge: "04", title: "Procura · Santos", detail: "In due lingue. Dati presi dal passaporto.", tag: "Rivedi" },
        ],
      },
    },
    {
      label: "Chiedi qualsiasi cosa",
      title: "Chiedi come chiederesti al tuo collaboratore migliore.",
      points: [
        "Scrivi una domanda con parole semplici. La risposta arriva dai tuoi documenti, con il link al documento.",
        "Nessuna cartella in cui frugare. Nessun “chi ha quel fascicolo?”",
      ],
      visual: {
        type: "ask",
        questions: [
          { q: "Quali permessi scadono prima di giugno?", summary: "11 permessi scadono prima di giugno. Il rinnovo è già partito per tutti.", rows: [["R. Santos · permesso di lavoro", "30 apr · pronto da rivedere"], ["L. Okafor · permesso di lavoro", "12 mag · manca 1 documento"], ["P. Sharma · studio", "20 mag · in attesa della lettera della scuola"], ["D. Reyes · permesso di lavoro", "28 mag · inviato"], ["+ altri 7", "Vedi tutti"]] },
          { q: "Cosa abbiamo concordato con Borg Holdings sugli onorari?", summary: "Lettera di incarico firmata il 14 marzo. Trovata in 2 secondi.", rows: [["Tariffa oraria", "Clausola 4 della lettera firmata"], ["Fatturazione", "Mensile · pagamento a 30 giorni"], ["Tetto agli onorari", "Concordato per la fase 1"], ["Copia firmata", "Apri il documento"]] },
          { q: "Cosa scade questa settimana?", summary: "9 scadenze questa settimana. 7 sono pronte per la revisione.", rows: [["Lun · Dichiarazione IVA, Camilleri Trading", "Pronta da controllare"], ["Mar · Dichiarazione annuale, Borg Holdings", "Pronta da firmare"], ["Gio · Udienza, Borg c. Vella", "Fascicolo pronto"], ["Ven · Scade il preliminare, appartamento a Gżira", "Notaio avvisato"], ["+ altre 5", "Vedi tutte"]] },
          { q: "Quante ore non sono fatturate?", summary: "€4.300 di lavoro registrato e non ancora fatturato.", rows: [["Borg Holdings Ltd", "€1.850 · fattura in bozza"], ["Camilleri Trading", "€1.200 · fattura in bozza"], ["R. Santos", "€450 · compenso fisso, fase 2"], ["4 pratiche minori", "€800"]] },
        ],
      },
    },
  ],

  areas: {
    label: "Ogni servizio che offri",
    title: "Il lavoro di routine, fatto. In ogni area di attività.",
    intro: "Gran parte del lavoro legale è fatta di passaggi, moduli e date. Di quelli si occupa il sistema. I tuoi avvocati pensano.",
    colA: "Il tuo lavoro",
    colB: "Il sistema fa",
    colC: "Tu fai",
    items: [
      { name: "Permessi di lavoro e di soggiorno", system: "Controlla ogni documento, compila la domanda, segue la decisione e avvia ogni rinnovo con mesi di anticipo.", you: "Consigli il cliente e approvi la pratica." },
      { name: "Studenti e trasferimenti", system: "Raccoglie lettere della scuola, assicurazione e prova dei mezzi economici, e tiene aggiornato lo studente nella sua lingua.", you: "Gestisci i casi difficili." },
      { name: "Società e diritto societario", system: "Prepara i documenti di costituzione, le dichiarazioni annuali, i registri e le delibere, e controlla ogni data di deposito.", you: "Strutturi l’operazione." },
      { name: "IVA, fisco e contabilità", system: "Ordina fatture e ricevute, prepara le dichiarazioni IVA e le dichiarazioni dei redditi, e abbina i pagamenti.", you: "Controlli i numeri e firmi." },
      { name: "Immobili", system: "Segue le date del preliminare di vendita, raccoglie i documenti e tiene allineati compratore, venditore e notaio.", you: "Esamini le condizioni e tuteli il cliente." },
      { name: "Contratti e accordi", system: "Prepara le bozze dai tuoi modelli, confronta le versioni ed evidenzia ogni clausola diversa dal tuo standard.", you: "Negozi." },
      { name: "Controversie e tribunale", system: "Costruisce la cronologia e il fascicolo a partire dalla pratica, segue le udienze e prepara le lettere di routine.", you: "Discuti la causa." },
      { name: "Veicoli e immatricolazioni", system: "Prepara i moduli di trasferimento e di immatricolazione e controlla che i documenti siano completi prima dell’invio.", you: "Approvi." },
      { name: "Lavoro e selezione del personale", system: "Controlla i documenti dei lavoratori che arrivano dall’estero, prepara i contratti e tiene in ordine i fascicoli dei datori di lavoro.", you: "Consigli il datore di lavoro." },
    ],
  },

  wins: {
    label: "I tuoi clienti lo sentono per primi",
    title: "Se vincono loro, vinci tu.",
    items: [
      { title: "Una risposta stasera, non la settimana prossima.", body: "Un cliente preoccupato scrive alle 21. Riceve una risposta, l’elenco di cosa inviare e un orario per l’incontro. Smette di cercare un altro studio." },
      { title: "Basta “ci sono novità?”", body: "I clienti vedono a che punto è la loro pratica a ogni passo. Si fidano di più e ti chiamano di meno." },
      { title: "Si invia una volta sola.", body: "Il cliente carica un documento una sola volta, dal telefono. Nessuno glielo chiede di nuovo." },
    ],
  },

  live: {
    label: "Come si parte",
    h2Before: "Lo installiamo per te in",
    h2Em: "72 ore.",
    body: "Veniamo da te, colleghiamo i tuoi strumenti e configuriamo tutto. Niente di nuovo da imparare per i tuoi avvocati.",
    steps: [
      { when: "Oggi", title: "Una chiamata di 20 minuti", body: "Su come lavora il tuo studio e dove vanno a finire le ore." },
      { when: "72 ore", title: "Il tuo primo sistema è attivo", body: "Di solito: ogni nuova richiesta riceve risposta e ogni documento in arrivo viene archiviato." },
      { when: "Settimana 2", title: "I tuoi archivi collegati", body: "Clienti, pratiche, modelli e scadenze in un unico posto." },
      { when: "Ogni settimana", title: "Cresce con te", body: "Impara a conoscere il tuo studio, e parte il lavoro successivo." },
    ],
  },

  ways: {
    label: "Parti da dove vuoi",
    title: "Un solo lavoro o tutto lo studio. Scegli tu.",
    items: [
      { title: "Risolvi un solo lavoro", body: "Scegli la cosa che ti porta via più ore e automatizziamo solo quella.", example: "Esempio: raccogliere e archiviare ogni documento dei clienti." },
      { title: "Collegalo a ciò che usi", body: "Tieni il tuo gestionale di studio, Outlook e il programma di contabilità. Noi ci colleghiamo.", example: "Esempio: le ore registrate arrivano nel tuo software di fatturazione." },
      { title: "Il sistema completo", body: "Tutto quello che vedi in questa pagina, costruito intorno al tuo studio, personalizzato e seguito da noi.", example: "Esempio: accoglienza, documenti, scadenze, bozze e fatturazione in un unico posto." },
      { title: "Non hai ancora deciso?", body: "Quasi nessuno studio lo ha fatto. Guardiamo la tua settimana e ti mostriamo dove vanno le ore.", example: "Gratis. Bastano 20 minuti." },
    ],
  },

  offer: {
    label: "Offerta a tempo limitato",
    title: "Il tuo primo mese è gratuito.",
    body: "Lo installiamo in 72 ore e lo gestiamo con te per un mese. Prima vedi sul tuo studio i documenti archiviati, le scadenze rispettate e le ore che ti restituisce.",
    cta: "Richiedi il mese gratuito",
    secondaryCta: "Prenota una chiamata di 20 minuti",
    listLabel: "Cosa ottieni",
    items: [
      { strong: "Primo mese gratuito.", rest: "Lo vedi lavorare sui tuoi documenti prima di decidere." },
      { strong: "Installato per te in 72 ore.", rest: "Colleghiamo email, documenti e calendario. Tu non cambi niente." },
      { strong: "Il sistema è tuo.", rest: "Costruito intorno al tuo studio, con i tuoi modelli e il tuo modo di lavorare." },
      { strong: "Lo gestiamo noi.", rest: "Lo personalizziamo, lo seguiamo e lo miglioriamo ogni settimana." },
      { strong: "Parti in piccolo.", rest: "Prima un solo lavoro. Aggiungi il successivo solo quando il primo si è ripagato." },
    ],
  },

  calc: {
    label: "I tuoi numeri",
    title: "Quanto valgono le tue ore di lavoro amministrativo.",
    mode: "times",
    factor: 46,
    inputs: [
      { label: "Avvocati nel tuo studio", value: 6 },
      { label: "Ore amministrative perse da ognuno a settimana", value: 5 },
      { label: "Tariffa oraria media (€)", value: 120 },
    ],
    out1: "Ore che potresti recuperare ogni anno",
    out2: "Quanto valgono quelle ore alla tua tariffa",
    footnote: "Calcolo su 46 settimane lavorative l’anno. Non ogni ora risparmiata diventa un’ora fatturata, quindi cambia i numeri in base al tuo studio.",
  },

  trust: {
    label: "Decidi sempre tu",
    title: "Il sistema prepara. Un avvocato decide.",
    items: [
      { icon: "scale", title: "Un avvocato firma tutto", body: "Niente arriva a un cliente, a un tribunale o a un’autorità senza l’approvazione di un avvocato. Il sistema non dà mai consulenza legale." },
      { icon: "lock", title: "I segreti dei clienti restano segreti", body: "Il tuo studio ha il suo sistema privato. I tuoi documenti non vengono mai mescolati con quelli di un altro studio e sono trattati nel rispetto del GDPR." },
      { icon: "book", title: "Ogni risposta mostra la sua fonte", body: "Quando cita una legge, una clausola o una data, rimanda al documento da cui proviene. Per controllare bastano pochi secondi." },
      { icon: "users", title: "Un team a Malta", body: "Il team di OARC a Birkirkara lo installa, gli insegna i tuoi modelli e risponde al telefono." },
    ],
  },

  facts: {
    label: "Perché adesso",
    title: "Il lavoro legale corre contro il tempo. Ogni termine si può mancare.",
    items: [
      { n: "20 giorni", l: "Per depositare la risposta giurata in una causa civile. Il termine parte dal giorno della notifica.", src: { label: "Code of Organization and Civil Procedure, art. 158", href: "https://legislation.mt/eli/cap/12/eng" } },
      { n: "4 giorni", l: "Giorni lavorativi per inviare a Jobsplus il modulo di assunzione di ogni nuovo lavoratore.", src: { label: "Jobsplus, luglio 2025", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" } },
      { n: "5 anni", l: "Per quanto tempo vanno conservati i documenti di adeguata verifica della clientela. Ogni fascicolo deve essere rintracciabile.", src: { label: "FIAU Implementing Procedures", href: "https://fiaumalta.org/app/uploads/2025/11/27.01.2017-Implementing-Procedures-Part-I.pdf" } },
    ],
  },

  faq: [
    { q: "Che cos’è, esattamente?", a: "Un unico sistema AI costruito intorno al tuo studio legale. Risponde ai nuovi clienti, riceve e archivia ogni documento, segue ogni scadenza, prepara le bozze dai tuoi modelli, prepara domande e adempimenti, registra le ore e fattura. Il team di OARC a Malta lo installa e lo gestisce con te." },
    { q: "Dà consulenza legale?", a: "No. Prepara il lavoro. Un avvocato rivede e approva tutto prima che esca dallo studio." },
    { q: "Sostituirà i nostri avvocati o i nostri collaboratori?", a: "No. Si occupa di smistare, sollecitare, compilare moduli e preparare le prime bozze, così le tue persone dedicano il loro tempo ai clienti e al diritto." },
    { q: "I dati dei clienti restano riservati?", a: "Sì. Ogni studio ha il suo sistema privato. I tuoi documenti vengono usati solo per il tuo studio e sono trattati nel rispetto del GDPR." },
    { q: "I clienti possono caricare i documenti da soli?", a: "Sì. Ogni cliente riceve un link privato. Invia foto, PDF o scansioni dal telefono, e il sistema archivia ogni documento nella pratica giusta e avvisa l’avvocato giusto." },
    { q: "Funziona con il nostro gestionale di studio?", a: "Sì. Lo colleghiamo all’email, all’archivio documenti, al gestionale e al software di contabilità che usi già. Se un collegamento non esiste, lo costruiamo noi." },
    { q: "Conosce il diritto maltese?", a: "Lavora sulle leggi pubblicate di Malta e sui modelli e i documenti del tuo studio, e mostra la fonte di ogni risposta. I tuoi avvocati controllano tutto prima che venga usato." },
    { q: "Gli studi legali possono usare l’AI?", a: "Sì. A ottobre 2025 il CCBE, che rappresenta gli ordini e le associazioni forensi d’Europa, ha pubblicato una guida sull’AI generativa per gli avvocati. I suoi punti principali sono il segreto professionale verso il cliente, il controllo di ogni risultato e la responsabilità che resta all’avvocato. Questo sistema è costruito su queste regole." },
    { q: "Può fare una cosa sola?", a: "Sì. Molti studi partono da un solo lavoro, come raccogliere e archiviare i documenti dei clienti, e aggiungono il successivo quando il primo si è ripagato." },
    { q: "In quanto tempo è attivo?", a: "Installiamo il tuo primo sistema in 72 ore. Il resto viene collegato nelle settimane successive." },
    { q: "Gli agenti AI telefonano ai clienti?", a: "Sì. Un agente vocale chiama i clienti per documenti mancanti, permessi in scadenza e appuntamenti, e fissa l’incontro. Non dà mai consulenza legale, e un avvocato può subentrare in qualsiasi chiamata." },
    { q: "E se sbaglia qualcosa?", a: "Niente arriva a un cliente, a un tribunale o a un’autorità finché un avvocato non lo ha letto e approvato. Ogni bozza mostra le sue fonti e ogni azione viene registrata. Se qualcosa va cambiato, lo cambia il team di OARC a Malta." },
    { q: "Quanto costa?", a: "In questo momento il primo mese è gratuito. Dopo dipende dalle dimensioni del tuo studio e da cosa attivi. Chiedicelo e prepariamo un prezzo per il tuo studio." },
  ],

  cta: {
    titleBefore: "Restituisci le ore ai tuoi avvocati.",
    titleEm: "Da questa settimana.",
    body: "Richiedi il tuo primo mese gratuito. Lo installiamo per te in 72 ore.",
    button: "Richiedi il mese gratuito",
    secondary: "Prenota una chiamata di 20 minuti",
  },

  sources: [
    { label: "Code of Organization and Civil Procedure (Cap. 12)", href: "https://legislation.mt/eli/cap/12/eng" },
    { label: "Jobsplus: moduli di assunzione e di cessazione", href: "https://jobsplus.gov.mt/media/gwld3ous/submission-of-engagement-and-termination-10-07-2025.pdf" },
    { label: "FIAU Implementing Procedures, Part I", href: "https://fiaumalta.org/app/uploads/2025/11/27.01.2017-Implementing-Procedures-Part-I.pdf" },
    { label: "Guida del CCBE sull’AI generativa per gli avvocati", href: "https://eucrim.eu/news/ccbe-issues-guidance-on-generative-ai-use-in-legal-practice/" },
  ],
  related: [
    { label: "Automazione aziendale", href: "/automation" },
    { label: "Voice AI per studi legali", href: "/voice-ai-worker/legal" },
    { label: "Agente AI per l’amministrazione", href: "/services/ai-admin-agent" },
    { label: "AI per agenzie immobiliari", href: "/ai/real-estate" },
  ],
  disclaimer: "OARC Digital · Malta. OARC Digital non è uno studio legale e non fornisce consulenza legale. I nomi e le cifre nelle schermate provengono da un account dimostrativo.",
};

export default lawFirms;
