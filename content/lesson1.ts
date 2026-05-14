import type { Lesson } from "./types";

export const lesson1: Lesson = {
  id: "metriche-software",
  number: 1,
  title: "Le metriche del software",
  subtitle: "Misurare prodotto, processo e qualità",
  description:
    "Definizione, tipologia e ruolo delle metriche nell'ingegneria del software. Si introducono LOC, Function Points e il metodo standard IFPUG con tutte le sue sette fasi.",
  accent: "from-accent-500 to-accent-700",
  icon: "metrics",
  slides: [
    {
      id: "generalita",
      eyebrow: "Generalità",
      title: "Perché misurare il software",
      kind: "opener",
      blocks: [
        {
          kind: "lead",
          text:
            "In un sistema informativo i costi del software sono spesso maggiori dei costi dell'hardware, e la manutenzione ha un costo superiore allo sviluppo. Servono quindi metodi oggettivi per stimare, monitorare e verificare i progetti.",
        },
        {
          kind: "paragraph",
          text:
            "Le metriche del software sono strumenti che forniscono misure quantitative del prodotto e delle sue componenti. Nascono negli anni Sessanta — anche grazie a investimenti di enti come la NASA — ed evolvono dal paradigma procedurale a quello a oggetti.",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Le metriche e il loro utilizzo rivestono particolare importanza non solo dal punto di vista del produttore, ma anche da quello dell'utilizzatore finale del software.",
        },
        {
          kind: "paragraph",
          text:
            "È necessario valutare il processo di produzione in ogni sua fase: monitorare risorse impiegate, tempi previsti e qualità del prodotto rispetto alle specifiche di pianificazione, intervenendo prontamente in caso di scostamenti significativi.",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "La valutazione del software passa per una stima a priori in fase di pianificazione, una misurazione permanente in corso d'opera, e infine una verifica a posteriori.",
        },
        {
          kind: "paragraph",
          text:
            "I metodi di misura definiti dall'ingegneria del software si basano su tre dimensioni complementari:",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Dimensione — metriche dimensionali come LOC (Lines Of Code)",
            "Funzionalità — metriche funzionali come Function Points (FPA)",
            "Complessità — metriche strutturali come il numero ciclomatico di McCabe",
          ],
        },
        {
          kind: "definition",
          term: "Numero ciclomatico",
          text:
            "Detto anche 'indice ciclomatico', è una metrica strutturale che fornisce la dimensione delle complessità del software in funzione dei possibili cammini percorribili. In pratica si vede il programma come grafo i cui nodi sono if, while, switch e ogni istruzione condizionale. Attribuito a McCabe.",
        },
      ],
    },
    {
      id: "tipologia",
      eyebrow: "Tipologia delle metriche",
      title: "Cosa misurano le metriche",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Nell'ingegneria del software le metriche servono a quantificare e qualificare i prodotti (progetti, codice, test), i processi (analisi, progettazione, codifica) e gli 'attori' del software (efficienza, produttività di un progettista).",
        },
        {
          kind: "definition",
          term: "Metriche",
          text:
            "Tecniche utilizzate per effettuare una misura che porti all'individuazione di un valore empirico e oggettivo da attribuire a una parte di un processo di sviluppo: sono quindi degli standard di misura.",
        },
        {
          kind: "paragraph",
          text:
            "Le metriche del software devono essere semplici, oggettive, valide, robuste e indipendenti dallo sviluppo tecnico e dalle scelte di implementazione, così da poter essere utilizzate per confrontare la produttività di differenti tecniche e tecnologie.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Metrica primitiva (diretta)",
            items: [
              "Misura un attributo direttamente osservabile",
              "Esempi: numero di linee di codice, tempo totale di sviluppo",
              "Nessun calcolo intermedio",
            ],
          },
          right: {
            title: "Metrica calcolata (indiretta)",
            items: [
              "Non utilizza misure dirette",
              "Viene calcolata a partire da altre metriche",
              "Esempi: produttività, densità dei difetti",
            ],
          },
        },
        {
          kind: "paragraph",
          text:
            "Le metriche descritte si applicano sia ai progetti tradizionali (decomposizione funzionale e analisi dei dati) sia ai progetti object-oriented dove funzioni e dati sono integrati. Si classificano in tre grandi gruppi:",
        },
        {
          kind: "list",
          variant: "check",
          items: [
            "Metriche di prodotto",
            "Metriche di processo",
            "Metriche di qualità",
          ],
        },
        {
          kind: "takeaway",
          text:
            "In questa lezione ci concentriamo sulle metriche di prodotto, che permettono di stimare la quantità di software da realizzare.",
        },
      ],
    },
    {
      id: "loc",
      eyebrow: "Line Of Code",
      title: "LOC — la prima metrica dimensionale",
      blocks: [
        {
          kind: "lead",
          text:
            "La metrica più semplice: contare le linee fisiche del codice sorgente. Quattro varianti diverse, stesso programma — risultati molto diversi.",
        },
        {
          kind: "diagram",
          name: "LOCDiagram",
          caption:
            "Lo stesso programma misurato con diverse varianti di LOC: totale, NCLOC, NCNB, CLOC, EXEC.",
        },
        {
          kind: "callout",
          tone: "warning",
          title: "Il problema fondamentale",
          text:
            "Il risultato dipende dallo stile e dal linguaggio: stesse funzionalità, conteggi diversi. Codice più lungo ≠ codice migliore.",
        },
        {
          kind: "takeaway",
          text:
            "Oggi il LOC è dedotto a posteriori dai Function Points via backfiring — non più stimato direttamente.",
        },
      ],
      notes: [
        "Le sigle: LOC = Lines Of Code, SLOC = Source LOC, KLOC = 1000 LOC.",
        "Le quattro varianti: NCLOC (no comment), NCNB (no comment, no blank), CLOC (solo comment), EXEC (solo eseguibili).",
        "Con LOC non si tiene conto della difficoltà del software realizzato.",
        "Si introducono coefficienti moltiplicativi per linguaggio, ma la stima preventiva è inaffidabile.",
      ],
    },
    {
      id: "function-points-intro",
      eyebrow: "Function Points",
      title: "Function Points — la misura funzionale",
      blocks: [
        {
          kind: "diagram",
          name: "LOCvsFPCompare",
        },
        {
          kind: "definition",
          term: "Function Points (FP)",
          text:
            "Misura funzionale che quantifica l'applicazione dal punto di vista dell'utente: misura le funzionalità da fornire, indipendentemente da tecnologia e implementazione.",
        },
        {
          kind: "compare",
          a: {
            label: "Pro",
            sub: "perché si usano",
            points: [
              "Misura oggettiva e comparativa",
              "Indipendente dal linguaggio",
              "Usabile in fase preventiva",
              "Standard ISO riconosciuto",
            ],
          },
          b: {
            label: "Contro",
            sub: "i limiti reali",
            points: [
              "Non misura la difficoltà algoritmica",
              "Solo I/O, non logica interna",
              "Soggettività nei pesi",
              "Adatti soprattutto a MIS",
            ],
          },
          verdict:
            "FP misurano ciò che l'utente vede; LOC misurano ciò che lo sviluppatore scrive.",
        },
        {
          kind: "paragraph",
          text:
            "A metà anni Ottanta si affermano due diversi indirizzi:",
        },
        {
          kind: "ordered",
          items: [
            "Nel 1986 nasce IFPUG (International Function Points User Group), no-profit, che aggiorna la metodologia per calcolare la mole; le unità prendono il nome di Function Points e si standardizza ISO.",
            "Charles Symons propone una metrica alternativa, Mark II Function Points.",
          ],
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Il processo per determinare la mole è detto FPA (Function Points Analysis) ed è costituito da due fasi: individuare le astrazioni significative per l'utente partendo dalle specifiche; calcolare un numero razionale (FP) che misura la mole.",
        },
        {
          kind: "table",
          caption: "Coefficienti di conversione LOC/FP per linguaggio",
          headers: ["Linguaggio", "LOC/FP"],
          rows: [
            ["Assembler", 320],
            ["C", 128],
            ["Cobol", 105],
            ["Fortran", 105],
            ["Pascal", 90],
            ["Modula 2", 71],
            ["Ada", 70],
            ["APL", 32],
            ["OO (C++ / Java)", 30],
            ["Smalltalk", 21],
            ["4GL", 20],
            ["Generatore di codice", 15],
            ["Foglio elettronico", 6],
            ["Linguaggio grafico/visuale", 4],
          ],
          highlightCols: [1],
        },
      ],
    },
    {
      id: "tipi-conteggio",
      eyebrow: "Tipi di conteggio",
      title: "Quando si applicano gli FP",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Il metodo FP viene utilizzato in fasi e situazioni diverse del ciclo di vita del progetto:",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Conteggio per un progetto di sviluppo — stima le funzioni fornite prima della realizzazione e durante lo sviluppo, fino alla consegna al cliente.",
            "Conteggio per un progetto di manutenzione — stima evolutiva di modifiche, aggiunte o cancellazioni di funzioni utente, rilasciate al termine del progetto.",
            "Conteggio per un'applicazione — misura la funzionalità di un'applicazione terminata e installata (numero di FP della baseline), aggiornato a ogni manutenzione.",
          ],
        },
      ],
    },
    {
      id: "ifpug-overview",
      eyebrow: "Metodo standard IFPUG",
      title: "Il processo IFPUG in sette fasi",
      blocks: [
        {
          kind: "lead",
          text:
            "Function Points Counting Practices Manual 4.3.1 — sette fasi rigorose, precedute dalla determinazione dei vincoli (Boundary Diagram).",
        },
        {
          kind: "journey",
          steps: [
            { label: "Pianificazione del conteggio", description: "Inserire il calcolo FP nel piano di progetto." },
            { label: "Raccolta della documentazione", description: "Requisiti, interfacce, modelli dati." },
            { label: "Inventario e UFP non pesati", description: "Identificare ILF, EIF, EI, EO, EQ." },
            { label: "Classificazione dei componenti", description: "Distinguere processi elementari." },
            { label: "GSC e VAF", description: "14 caratteristiche, fattore di aggiustamento ±35 %." },
            { label: "Tabulazione e calcolo finale", description: "Foglio di riepilogo con pesi e VAF." },
            { label: "Validazione e revisione", description: "Verifica di completezza con esperto FP." },
          ],
        },
      ],
      notes: [
        "Il manuale è il Function Points Counting Practices Manual versione 4.3.1.",
        "In Italia il GUFPI ha tradotto tutte le versioni del Manuale di Conteggio.",
        "La fase 0 — determinazione dei vincoli — produce il diagramma dei vincoli (Boundary Diagram).",
      ],
    },
    {
      id: "fase-1",
      eyebrow: "Fase 1",
      title: "Pianificazione del conteggio degli FP",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Il calcolo degli FP deve essere incluso nella pianificazione del progetto in modo che diventi una prassi standard e rientri nella pianificazione delle attività: può iniziare prima della fine dello studio di fattibilità ma deve essere documentato e aggiornato, dato che il mutamento dei requisiti può modificare gli FP stessi.",
        },
        {
          kind: "takeaway",
          text:
            "Al termine della raccolta dei requisiti è necessaria una verifica: i nuovi FP introdotti o modificati devono essere etichettati per risultare ben evidenti.",
        },
      ],
    },
    {
      id: "fase-2",
      eyebrow: "Fase 2",
      title: "Raccolta della documentazione",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Per un conteggio corretto serve la seguente documentazione, disponibile alla fine dello studio di fattibilità:",
        },
        {
          kind: "list",
          variant: "bullet",
          items: [
            "Documentazione delle esigenze oggettive percepite dagli utenti",
            "Documentazione del sistema corrente (se funzionale e da sostituire)",
            "Descrizione della struttura complessiva del sistema da realizzare",
            "Documentazione su ogni obiettivo primario del progetto",
            "Qualsiasi altra documentazione di utilità",
          ],
        },
        {
          kind: "paragraph",
          text:
            "Per la verifica successiva (dopo analisi e progetto) si consiglia di consultare:",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Documentazione utente",
            items: [
              "Formati interfacce e form di dialogo",
              "Schema dei report e tabulati di stampa",
              "Schema delle maschere di input",
              "Interfacce con altri sistemi",
            ],
          },
          right: {
            title: "Documentazione tecnica",
            items: [
              "Modelli logici dei dati",
              "Dimensione e formato dei file",
              "Opzioni presenti nei diversi menu",
            ],
          },
        },
      ],
    },
    {
      id: "fase-3",
      eyebrow: "Fase 3",
      title: "Inventario delle operazioni e calcolo degli FP non pesati",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Il calcolo degli FP è la somma di cinque componenti, dette funzioni logiche, classificate in due gruppi:",
        },
        {
          kind: "diagram",
          name: "UFPBreakdown",
          caption:
            "Struttura del conteggio degli Unadjusted Function Points: due funzioni dati e tre funzioni transazionali.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Data Function Types",
            items: [
              "Internal Logical File — ILF",
              "External Interface File — EIF",
            ],
          },
          right: {
            title: "Transactional Function Types",
            items: [
              "External Inputs — EI",
              "External Outputs — EO",
              "External Inquiries — EQ",
            ],
          },
        },
        {
          kind: "formula",
          expression: "FP = (FP non pesati) · VAF = UFP · VAF",
          label: "Function Points pesati",
        },
        {
          kind: "paragraph",
          text:
            "Il valore ottenuto è chiamato Adjusted FP. VAF è il fattore di aggiustamento, che modifica gli UFP fino al ±35%.",
        },
      ],
    },
    {
      id: "data-functions",
      eyebrow: "Data Function Types",
      title: "ILF ed EIF — gli archivi dell'applicazione",
      blocks: [
        {
          kind: "definition",
          term: "Internal Logical File — ILF",
          text:
            "Gruppo di dati logicamente collegati riconoscibile dall'utente e mantenuto/aggiornato all'interno del confine dell'applicazione.",
        },
        {
          kind: "definition",
          term: "External Interface File — EIF",
          text:
            "Gruppo di dati logicamente collegati riconoscibile dall'utente, referenziato dall'applicazione ma mantenuto/aggiornato dentro il confine di un'altra applicazione.",
        },
        {
          kind: "paragraph",
          text:
            "ILF ed EIF sono gli archivi dell'applicazione come sono visti dall'utente finale. Non sono singoli archivi ma aggregati di archivi che servono per la stessa funzionalità: nei manuali IFPUG il concetto di ILF/EIF è 'svincolato' dalla tecnologia (database relazionale o file di testo).",
        },
        {
          kind: "example",
          title: "Esempio",
          text:
            "Gli ILF di un'applicazione gestionale potrebbero chiamarsi 'anagrafica clienti' o 'anagrafica fornitori': insiemi di archivi che servono per gestire i nominativi.",
        },
        {
          kind: "paragraph",
          text:
            "Oggi gli ILF e gli EIF si analizzano dal punto di vista logico e sono composti da un'aggregazione di RET (Record Element Type): un RET è un gruppo di dati significativi per l'utente finale, che in un DB normalizzato corrisponde a una tabella. I RET sono a loro volta composti di unità elementari chiamate DET (Data Element Type), i singoli campi.",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "Prima di calcolare gli ILF/EIF il database deve essere normalizzato. Un archivio non può appartenere a più EIF, né essere conteggiato sia in EIF sia in ILF (se una RET è condivisa, si conta una sola volta).",
        },
      ],
    },
    {
      id: "transactional-functions",
      eyebrow: "Transactional Function Types",
      title: "EI, EO, EQ — le funzioni di interazione",
      blocks: [
        {
          kind: "diagram",
          name: "TransactionMap",
          caption:
            "Relazione tra utente, confine dell'applicazione, funzioni transazionali e file logici interni/esterni.",
        },
        {
          kind: "definition",
          term: "External Inputs — EI",
          text:
            "Input di dati effettuato dall'utente: funzione elementare che acquisisce ed elabora un dato esterno all'applicazione, anche proveniente da un'altra applicazione. Fonte: schemi di schermo, formati di dialogo, maschere di input.",
        },
        {
          kind: "definition",
          term: "External Outputs — EO",
          text:
            "Coincide con l'output di dati esterno all'applicazione, sia tramite report (schermo o file) sia con la creazione di file.",
        },
        {
          kind: "definition",
          term: "External Inquiries — EQ",
          text:
            "Processi elementari (query) composti da un input e un output finalizzati al reperimento di dati da file. Fonte: schemi di schermo, dialogo, maschere di input.",
        },
      ],
    },
    {
      id: "fase-4",
      eyebrow: "Fase 4",
      title: "Classificazione dei componenti",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Per distinguere tra le tre funzioni transazionali, IFPUG 4.2 indica un insieme di regole pratiche basato sul concetto di processo elementare.",
        },
        {
          kind: "definition",
          term: "Processo elementare",
          text:
            "È la più piccola unità di attività significativa per l'utente; deve essere autonoma e lasciare l'applicazione in uno stato di coerenza funzionale.",
        },
        {
          kind: "paragraph",
          text:
            "Verbi che identificano processi elementari:",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Per EI",
            items: [
              "acquisire, inserire, aggiungere",
              "inviare, importare, impostare",
              "popolare, assegnare",
              "pianificare, schedulare, cancellare",
              "modificare, aggiornare, validare",
              "memorizzare, mantenere",
            ],
          },
          right: {
            title: "Per EO / EQ",
            items: [
              "EO: calcolare, contabilizzare, fornire, stampare, visualizzare, produrre, trasmettere, esportare",
              "EQ: fornire, stampare, visualizzare, produrre, trasmettere, interrogare, ricercare, decodificare, leggere, listare",
            ],
          },
        },
        {
          kind: "table",
          caption:
            "Possibili azioni incluse nel trattamento logico (ip = intento primario, p = possibile, o = obbligatorio, v = vietato)",
          headers: ["Azione", "EI", "EO", "EQ"],
          rows: [
            ["Eseguire validazioni", "p", "p", "p"],
            ["Eseguire formule matematiche e calcoli", "p", "o*", "v"],
            ["Convertire valori equivalenti", "p", "p", "p"],
            ["Filtrare e selezionare dati", "p", "p", "p"],
            ["Analizzare condizioni", "p", "p", "p"],
            ["Aggiornare uno o più ILF", "o*/ip", "o*", "v"],
            ["Referenziare ILF/EIF", "p", "p", "o"],
            ["Reperire dati o info di controllo", "p", "p", "o"],
            ["Creare dati derivati", "p", "o*", "v"],
            ["Alterare il comportamento del sistema", "o*/ip", "o*", "v"],
            ["Preparare e presentare info esterne", "p", "o/ip", "o/ip"],
            ["Accettare dati di controllo nell'app", "o", "p", "p"],
            ["Ordinare o riorganizzare dati", "p", "p", "p"],
          ],
        },
        {
          kind: "table",
          caption: "Relazione tra attività elementari e file logici",
          headers: ["Attività elementare", "ILF", "EIF"],
          rows: [
            ["Input esterni (EI)", "Scrittura (lettura)", "(Lettura)"],
            ["Interrogazioni esterne (EQ)", "Lettura", "Lettura"],
            ["Output esterni (EO)", "Lettura (scrittura)", "Lettura"],
          ],
        },
        {
          kind: "takeaway",
          text:
            "È preferibile iniziare dalle transazioni per ricavare i file necessari (così da non trascurare nessun ILF o EIF), poi procedere con la classificazione in EI, EO, EQ.",
        },
        {
          kind: "example",
          title: "Esempio — Gestione anagrafica",
          text:
            "Un programma di gestione dati anagrafici: 1 schermata (cognome, nome, luogo/data di nascita, CF), funzioni inserimento/modifica/cancella, ricerca per scrolling, 1 file dati, 1 query, 1 prospetto di stampa con dati e età media.",
          steps: [
            "EI → 3 funzioni: inserisci, modifica, cancella",
            "EO → 1 funzione: stampa prospetto",
            "EQ → 1 funzione: scroll/visualizza dati",
            "ILF → 1 file: dati anagrafici",
            "EIF → 0 file esterni",
          ],
        },
      ],
    },
    {
      id: "complessita",
      eyebrow: "Calcolo della complessità",
      title: "DET, RET, FTR — i tre indicatori elementari",
      blocks: [
        {
          kind: "lead",
          text:
            "Non tutte le funzioni sono uguali. IFPUG le pesa con tre indicatori che traducono in punteggio numerico (3 → 15) la complessità reale.",
        },
        {
          kind: "list",
          variant: "check",
          items: [
            "DET (Data Element Type) — campo non ripetuto, riconoscibile dall'utente",
            "RET (Record Element Type) — sottogruppo di dati riconoscibili all'interno di un ILF/EIF",
            "FTR (File Type Referenced) — file logico interno (ILF) letto/mantenuto, o esterno di interfaccia (EIF) letto",
          ],
        },
        {
          kind: "table",
          caption: "Complessità EI in base a FTR/DET",
          headers: ["FTR \\ DET", "1–4", "5–15", "16+"],
          rows: [
            ["0–1", "Bassa", "Bassa", "Media"],
            ["2", "Bassa", "Media", "Alta"],
            ["3+", "Media", "Alta", "Alta"],
          ],
        },
        {
          kind: "paragraph",
          text:
            "Conversione del giudizio in valore numerico (EI): basso = 3, medio = 4, alto = 6.",
        },
        {
          kind: "table",
          caption: "Complessità EO in base a FTR/DET",
          headers: ["FTR \\ DET", "1–5", "6–19", "20+"],
          rows: [
            ["0–1", "Bassa", "Bassa", "Media"],
            ["2–3", "Bassa", "Media", "Alta"],
            ["4+", "Media", "Alta", "Alta"],
          ],
        },
        {
          kind: "paragraph",
          text:
            "Conversione (EO): basso = 4, medio = 5, alto = 7. Per EQ si usa lo stesso schema di EI/EO e poi il maggiore dei valori, come da IFPUG Counting Practices Manual.",
        },
        {
          kind: "table",
          caption: "Complessità ILF / EIF in base a RET e DET",
          headers: ["FTR \\ DET", "1–19", "20–50", "51+"],
          rows: [
            ["1", "Bassa", "Media", "Alta"],
            ["2–5", "Bassa", "Media", "Alta"],
            ["6+", "Bassa", "Media", "Alta"],
          ],
        },
        {
          kind: "table",
          caption: "Conversione in valore numerico (ILF/EIF)",
          headers: ["Complessità", "ILF", "EIF"],
          rows: [
            ["Bassa", 7, 5],
            ["Media", 10, 7],
            ["Alta", 15, 10],
          ],
        },
        {
          kind: "formula",
          expression: "UFP = Σ (i=1..5) VPᵢ",
          label: "Somma dei cinque componenti funzionali",
        },
        {
          kind: "example",
          title: "Esempio di calcolo UFP",
          text:
            "Si completa l'esempio precedente assegnando i pesi di complessità.",
          steps: [
            "3 EI con 1 FTR / 6 DET → complessità bassa, peso 3 → 3 × 3 = 9 FP",
            "1 EQ con 1 FTR / 1–5 DET → bassa, peso 3 → 1 × 3 = 3 FP",
            "1 ILF con 1 FTR / 5 DET → bassa, peso 7 → 1 × 7 = 7 FP",
            "1 EO con 1 FTR / 6 DET → bassa, peso 4 → 1 × 4 = 4 FP",
          ],
          result: "Totale UFP = 9 + 3 + 7 + 4 = 23",
        },
      ],
    },
    {
      id: "fase-5",
      eyebrow: "Fase 5",
      title: "GSC e Value Adjustment Factor (VAF)",
      blocks: [
        {
          kind: "paragraph",
          text:
            "A partire dalle fasi iniziali del calcolo degli FP si determina il VAF, che va aggiornato durante tutte le fasi del progetto, non appena emergono nuove informazioni.",
        },
        {
          kind: "paragraph",
          text:
            "Si valutano 14 caratteristiche generali del sistema (GSC). Per ciascuna, grazie alla descrizione, si stabilisce il grado di influenza (DI, Degree Influence) su scala 0–5.",
        },
        {
          kind: "table",
          caption: "Grado di influenza",
          headers: ["Grado", "Descrizione"],
          rows: [
            [0, "Ininfluente"],
            [1, "Incidenza scarsa"],
            [2, "Incidenza moderata"],
            [3, "Incidenza media"],
            [4, "Incidenza significativa"],
            [5, "Incidenza essenziale"],
          ],
        },
        {
          kind: "diagram",
          name: "GSCWheel",
          caption: "Le 14 caratteristiche generali del sistema.",
        },
        {
          kind: "table",
          caption: "Le 14 GSC e la loro descrizione",
          headers: ["#", "Caratteristica", "0 / 5"],
          rows: [
            ["1", "Comunicazione dati", "Batch / Transazionale multi-front-end"],
            ["2", "Elaborazione dati distribuita", "Nessuna / Dinamica"],
            ["3", "Prestazioni", "Nessun requisito / Time critical"],
            ["4", "Configurazione utilizzata intensamente", "Nessun vincolo / Vincoli pesanti"],
            ["5", "Tasso di transazioni", "Nessun picco / Vari picchi"],
            ["6", "Immissione dati online", "Tutto batch / > 30% online"],
            ["7", "Efficienza utente finale", "Nessun supporto / Altissima usabilità"],
            ["8", "Aggiornamento online", "Nessuno / Altissima protezione dati"],
            ["9", "Complessità dell'elaborazione", "Nulla / Calcoli complessi"],
            ["10", "Riusabilità", "Nessuna / Alta riusabilità e parametrizzazione"],
            ["11", "Facilità di installazione", "Nessuna / Strumenti dedicati"],
            ["12", "Facilità operativa", "Nessuna / Operazioni non presidiate"],
            ["13", "Installazioni multiple", "Stand alone / Molti siti eterogenei"],
            ["14", "Modificabilità", "Rigida / Strumenti per modifica facile"],
          ],
        },
        {
          kind: "formula",
          expression: "TDI = Σ (i=1..14) Fᵢ",
          label: "Total Degree Influence",
        },
        {
          kind: "formula",
          expression: "VAF = 0,65 + 0,01 · TDI",
          label: "Value Adjustment Factor",
          where: [
            { symbol: "TDI", meaning: "Somma dei 14 gradi di influenza, range 0..70" },
            { symbol: "VAF", meaning: "Compreso tra 0,65 (TDI=0) e 1,35 (TDI=70) → influenza FP del ±35%" },
          ],
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "È fondamentale applicare con cura GSC e VAF: possono pesantemente influire sul calcolo degli FP.",
        },
      ],
    },
    {
      id: "fase-6-7",
      eyebrow: "Fasi 6 & 7",
      title: "Tabulazione e validazione dei risultati",
      blocks: [
        {
          kind: "formula",
          expression: "FP = UFP · VAF = Σ (i=1..5) VPᵢ · ( 0,65 + 0,01 · Σ (i=1..14) Fᵢ )",
          label: "Formula completa degli FP aggiustati",
        },
        {
          kind: "paragraph",
          text:
            "È utile riportare i conteggi su una tabella di riepilogo (foglio di calcolo) con i conteggi per tipo e per complessità, così da automatizzare il calcolo.",
        },
        {
          kind: "table",
          caption: "Esempio finale con VAF = 1,1 (progetto di media complessità)",
          headers: ["Componente", "Basso", "Medio", "Alto", "Totale"],
          rows: [
            ["EI", "3 × 3 = 9", "0", "0", 9],
            ["EO", "1 × 4 = 4", "0", "0", 4],
            ["EQ", "1 × 3 = 3", "0", "0", 3],
            ["ILF", "1 × 7 = 7", "0", "0", 7],
            ["EIF", "0", "0", "0", 0],
            ["Totale UFP", "", "", "", 23],
            ["VAF", "", "", "", 1.1],
            ["Totale FP", "", "", "", 25.3],
          ],
        },
        {
          kind: "paragraph",
          text:
            "Fase 7 — convalida. Tutti i membri del gruppo di sviluppo verificano la completezza dell'analisi per assicurare che tutti i componenti (EI, EO, EQ, ILF, EIF) siano inclusi.",
        },
        {
          kind: "checklist",
          items: [
            "Il conteggio FP è nel piano generale del progetto?",
            "Chi esegue il calcolo è istruito a farlo?",
            "Si usa la documentazione corrente?",
            "Sono seguite le linee guida IFPUG?",
            "Sono seguite le linee guida interne?",
            "L'applicazione è calcolata dal punto di vista dell'utente?",
            "L'applicazione è calcolata dal punto di vista logico?",
            "I vincoli FP coincidono con quelli delle altre metriche?",
            "Le percentuali delle componenti rispettano le medie industriali (40% ILF, 5% EIF, 20% EI, 25% EO, 10% EQ)?",
            "La raccolta di EI/EO/EQ/ILF/EIF è stata controllata?",
            "Le risposte alle 14 GSC ricadono nel range tipico dell'organizzazione?",
            "Il calcolo è registrato in un archivio per gli FP?",
            "Le premesse sono coerenti con tutti gli altri progetti?",
            "Le premesse sono documentate?",
            "Il calcolo è stato controllato da un esperto di FP?",
          ],
        },
      ],
    },
    {
      id: "backfiring",
      eyebrow: "Correzione con backfiring",
      title: "Dalla mole in FP alla dimensione in LOC",
      blocks: [
        {
          kind: "paragraph",
          text:
            "I Function Points hanno fatto un grosso passo avanti nella misura del software: si possono usare in fase preventiva, sono indipendenti dalla tecnologia, e tramite il backfiring si ottiene il valore in LOC riutilizzabile dai modelli di costo basati su LOC.",
        },
        {
          kind: "paragraph",
          text:
            "Nel backfiring si introduce anche un coefficiente che tiene conto del contesto del progetto in termini di complessità del problema, strutture dati e codice.",
        },
        {
          kind: "table",
          caption: "Coefficiente di trasposizione LOC/FP (livelli nominali)",
          headers: ["Linguaggio", "Livello", "MIN", "MEDIA", "MAX"],
          rows: [
            ["1st Generation", 1.0, 220, 320, 500],
            ["Basic Assembly", 1.0, 200, 320, 450],
            ["Macro Assembly", 1.5, 130, 213, 300],
            ["C", 2.5, 60, 128, 170],
            ["Basic (interpretato)", 2.5, 70, 128, 165],
            ["Fortran", 3.0, 75, 107, 160],
            ["Cobol", 3.0, 65, 107, 150],
            ["C++ / Java", 6.0, 30, 53, 125],
            ["Smalltalk", 15.0, 15, 21, 40],
            ["SQL", 27.0, 7, 12, 15],
          ],
        },
        {
          kind: "diagram",
          name: "BackfiringFlow",
          caption: "Flusso del calcolo backfiring: FP → coefficiente applicazione → dimensione LOC.",
        },
        {
          kind: "formula",
          expression: "Cₜ = Cₚ + C_d + C_c",
          label: "Coefficiente totale di complessità",
          where: [
            { symbol: "Cₚ", meaning: "Complessità del problema (range 1–5): 1 = algoritmi semplici, 5 = algoritmi e calcoli complessi" },
            { symbol: "C_d", meaning: "Complessità delle strutture dati (1–5): 1 = poche variabili, 5 = molte interrelazioni" },
            { symbol: "C_c", meaning: "Complessità del codice (1–5): 1 = non procedurale, 5 = scarsamente strutturato" },
          ],
        },
        {
          kind: "formula",
          expression: "BAF = 0,7 + 0,05 · ( Cₜ − 3 )",
          label: "Backfiring Adjustment Factor",
        },
        {
          kind: "formula",
          expression: "Coefficiente applicazione = coeff(LOC/FP) · BAF",
          label: "Coefficiente effettivo dell'applicazione",
        },
        {
          kind: "formula",
          expression: "Dimensione applicazione = FP · Coefficiente applicazione",
          label: "Dimensione finale stimata in LOC",
        },
        {
          kind: "example",
          title: "Esempio — calcolo backfiring",
          text:
            "Applicazione: 45 FP, sviluppata in C++. Complessità problema: semplice; dati: struttura complessa; codice: molto strutturato. Coefficiente medio C++ = 53 LOC/FP.",
          steps: [
            "Complessità problema = 1, codice = 2, dati = 5 → Cₜ = 8",
            "BAF = 0,7 + 0,05 · (8 − 3) = 0,95",
            "Coefficiente applicazione = 53 · 0,95 = 50,35",
            "Dimensione applicazione = 45 · 50,35 = 2266 LOC",
          ],
          result: "≈ 2266 LOC stimate per l'applicazione completa",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "Il backfiring è estremamente pericoloso e può portare a stime molto distanti dal valore reale: lo stesso Capers Jones, padre della tecnica, l'ha parzialmente disconosciuta. È più difficile calcolare FP rispetto a LOC e serve esperienza per non sbagliare. Risulta usato in software standard, gestionali, applicazioni senza vincoli temporali.",
        },
        {
          kind: "takeaway",
          text:
            "Esistono metriche alternative: Early Function Points, ILF Models, Feature Points (SPR).",
        },
      ],
    },
    {
      id: "transizione",
      eyebrow: "Verso la Lezione 2",
      title: "Sappiamo quanto codice. Ora: quanto costerà?",
      kind: "transition",
      blocks: [
        {
          kind: "keypoint",
          eyebrow: "Ponte concettuale",
          text:
            "Dalle metriche di prodotto ai modelli di stima dei costi: dal cosa al quanto.",
        },
      ],
      notes: [
        "Riassumi rapidamente la lezione 1: LOC, FP, IFPUG, backfiring.",
        "Annuncia la lezione 2: COCOMO, SLIM, COBRA, Delphi.",
        "Domanda retorica: 'Se misuriamo la mole di software, possiamo prevederne i costi?'",
      ],
    },
  ],
};
