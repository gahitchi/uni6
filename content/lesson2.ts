import type { Lesson } from "./types";

export const lesson2: Lesson = {
  id: "valutazione-costi",
  number: 2,
  title: "La valutazione dei costi di un progetto informatico",
  subtitle: "Tempi, sforzo, modelli COCOMO, SLIM, COBRA, Delphi",
  description:
    "Come si stimano i costi di un progetto software: i fattori che li influenzano, la classificazione di Boehm dei metodi di stima, i modelli proprietari e non, i metodi data-driven, composti e non basati su modelli.",
  accent: "from-violet-500 to-indigo-700",
  icon: "cost",
  slides: [
    {
      id: "generalita",
      eyebrow: "Generalità",
      title: "Cosa significa stimare i costi del software",
      kind: "opener",
      blocks: [
        {
          kind: "lead",
          text:
            "La stima dei costi del software è parte essenziale della pianificazione progettuale e si focalizza su tre aspetti: tempo, lavoro e persone.",
        },
        {
          kind: "ordered",
          items: [
            "Quanto tempo durerà lo sviluppo del sistema",
            "Quanto lavoro richiederà in termini di anni-uomo (MY) o mesi-uomo (MM)",
            "Quante persone vi parteciperanno",
          ],
        },
        {
          kind: "paragraph",
          text:
            "Tempo, lavoro e persone sono fra loro strettamente legati. La voce principale di costo è lo sforzo, inteso come quantità di lavoro da eseguire. L'accuratezza della stima dipende dalla quantità di informazioni attendibili sul prodotto finale.",
        },
        {
          kind: "formula",
          expression: "Costo = (costo unitario) · impegno = (costo unitario) · costante · lavoro",
          label: "Relazione di base",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "Nelle prime fasi del ciclo di vita del software si registra un forte scostamento tra costi effettivamente sostenuti e costi preventivati: la stima diventa accurata solo man mano che la progettazione si stabilizza.",
        },
        {
          kind: "diagram",
          name: "EstimateUncertainty",
          caption:
            "Cono di incertezza: lo scostamento tra costi preventivati ed effettivi si riduce avanzando nelle fasi.",
        },
        {
          kind: "callout",
          tone: "info",
          title: "Costo di manutenzione",
          text:
            "Il costo di manutenzione del software è sempre maggiore del costo di sviluppo: per sistemi a lunga vita può arrivare a 10 volte il costo di sviluppo.",
        },
        {
          kind: "quote",
          text: "Una stima accurata dei costi di sviluppo del software può dare alle organizzazioni software un vantaggio competitivo.",
        },
        {
          kind: "definition",
          term: "Barry W. Boehm",
          text:
            "Ingegnere informatico statunitense, nato nel 1935. Precursore e principale teorico degli studi sui costi del software. La sua classificazione è alla base della tassonomia di tutti i metodi di stima.",
        },
      ],
    },
    {
      id: "perche-stimare",
      eyebrow: "Stima dei costi",
      title: "Perché stimare i costi del software",
      blocks: [
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Stipulare contratti di sviluppo sensati per costruttore e acquirente",
            "Prevedere tempi di sviluppo ragionevoli (rilevante per il time-to-market)",
            "Dimensionare il team di sviluppo (team sottodimensionato → ritardi e bassa qualità; team troppo affollato → consumo improduttivo del tempo)",
          ],
        },
        {
          kind: "definition",
          term: "Time-to-market",
          text:
            "Il tempo che passa tra il momento in cui l'impresa riceve un input dal mercato e il momento in cui essa reagisce.",
        },
        {
          kind: "callout",
          tone: "info",
          title: "Prima legge di Parkinson",
          text: "Il lavoro si espande fino a occupare tutto il tempo disponibile: più è il tempo e più il lavoro sembra importante e impegnativo.",
        },
        {
          kind: "callout",
          tone: "info",
          title: "Legge di Boyle-Mariotte (rivisitata per il DP)",
          text:
            "Le attività del DP si comportano come molecole di un gas inerte: in certe condizioni di temperatura (di progetto) e di pressione (management) tendono a occupare tutto lo spazio a disposizione.",
        },
        {
          kind: "paragraph",
          text:
            "Sono molteplici i fattori che partecipano alla formazione del costo di sviluppo: il principale è il costo del personale, perciò le metriche si concentrano sullo sforzo. Principali fattori che influenzano lo sforzo:",
        },
        {
          kind: "list",
          variant: "check",
          items: [
            "Dimensione del software",
            "Fattori umani — specializzazione ed esperienza",
            "Complessità dell'applicazione",
            "Stabilità dei requisiti",
            "Prestazioni e vincoli non funzionali richiesti",
            "Ambiente di sviluppo",
          ],
        },
      ],
    },
    {
      id: "dimensioni",
      eyebrow: "Le dimensioni del software",
      title: "Misure interne vs misure esterne",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Il fattore che maggiormente influenza i costi è la dimensione dell'applicazione, valutabile in due modi:",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Dimensione interna (strutturale)",
            items: [
              "Misurata in LOC (e varianti)",
              "Vantaggi: definibile, misurabile, interpretabile",
              "Utilizzata in molti modelli esistenti",
              "Presente in archivi storici",
            ],
          },
          right: {
            title: "Dimensione esterna (funzionale)",
            items: [
              "Misurata con Function Points",
              "Vantaggi: misura la funzionalità, indipendente dal linguaggio",
              "Migliore in fasi iniziali",
              "Standard riconosciuto",
            ],
          },
        },
        {
          kind: "callout",
          tone: "warning",
          title: "Ogni misura ha i suoi limiti",
          text:
            "Come visto nella Lezione 1: il LOC non ha una definizione univoca e dipende da linguaggio e stile; gli FP soffrono di soggettività nel conteggio e rendono al meglio nei MIS. La scelta dipende dalla fase del progetto e dai dati storici disponibili.",
        },
        {
          kind: "takeaway",
          text:
            "Esiste una buona correlazione tra misure interne ed esterne: il rapporto dipende dal linguaggio. Tale relazione è la base del backfiring.",
        },
      ],
    },
    {
      id: "schema-boehm",
      eyebrow: "Schema di classificazione",
      title: "Quale metodo scegliere?",
      blocks: [
        {
          kind: "lead",
          text:
            "Boehm offre una tassonomia teorica — ma la domanda pratica è: dato il mio progetto, quale metodo applico?",
        },
        {
          kind: "diagram",
          name: "EstimationDecisionTree",
          caption: "Albero decisionale dei metodi di stima dei costi.",
        },
        {
          kind: "diagram",
          name: "BoehmTaxonomy",
          caption: "Tassonomia originale di Boehm (vista categoriale).",
        },
      ],
      notes: [
        "L'albero decisionale è una semplificazione operativa — il libro presenta la tassonomia Boehm originale.",
        "Metodi basati su modelli: proprietari (SLIM) vs non proprietari (COCOMO).",
        "Metodi data-driven: statistici o machine learning (alberi di classificazione, CART, OSR).",
        "Metodi composti: ibridi esperti + dati (COBRA).",
        "Metodi non basati su modelli: Delphi (consenso esperti), Parkinson e Price-to-win (rischiosi).",
        "Machine Learning: algoritmi che imparano da esempi.",
      ],
    },
    {
      id: "putnam-slim",
      eyebrow: "Metodi proprietari",
      title: "Putnam e SLIM",
      blocks: [
        {
          kind: "paragraph",
          text:
            "I modelli proprietari sono scatole nere: l'algoritmo non è noto. La credibilità si basa sull'affidabilità del costruttore. Difficili da accettare, ma resi popolari da SLIM (Software Lifecycle Management) di Putnam, da applicare a progetti superiori a 70.000 linee di codice.",
        },
        {
          kind: "paragraph",
          text:
            "Il modello è espresso da due equazioni che legano sforzo e pianificazione:",
        },
        {
          kind: "ordered",
          items: [
            "Equazione software — lo sforzo è proporzionale al cubo della dimensione e inversamente proporzionale alla quarta potenza del tempo di sviluppo.",
            "Equazione manodopera-accumulo — lo sforzo è proporzionale al cubo del tempo di sviluppo.",
          ],
        },
        {
          kind: "diagram",
          name: "RayleighNorden",
          caption:
            "Curva di Rayleigh-Norden: andamento delle risorse necessarie nel corso del progetto (verificato su circa 200 progetti reali).",
        },
        {
          kind: "formula",
          expression: "dM / dt = K / t_d² · t · e^( −t² / 2t_d² )",
          label: "Curva di Rayleigh-Norden (dM/dt rispetto al tempo)",
          where: [
            { symbol: "t_d", meaning: "Mese in cui lo sforzo ha intensità massima (fine codifica)" },
            { symbol: "K", meaning: "Sforzo totale in mesi-uomo" },
          ],
        },
        {
          kind: "formula",
          expression: "S = C_k · K^(1/3) · t_d^(4/3)",
          label: "Relazione tra sforzo e tempo di sviluppo",
          where: [
            { symbol: "C_k", meaning: "Costante di stato della tecnologia (valore tra 610 e 57314)" },
          ],
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "Considerando un prodotto fissato, la dimensione è costante: K = costante / t_d^4. Modeste variazioni nel tempo di sviluppo causano notevoli differenze nello sforzo. Accorciare anche poco il tempo dilata enormemente lo sforzo.",
        },
        {
          kind: "takeaway",
          text:
            "Un risultato significativo del modello Putnam è la relazione tra tempo e sforzo di sviluppo, che vale anche per il SLIM (i cui dettagli rimangono proprietari).",
        },
      ],
    },
    {
      id: "cocomo-overview",
      eyebrow: "COCOMO",
      title: "COCOMO — Constructive Cost Model",
      blocks: [
        {
          kind: "lead",
          text:
            "Boehm, primi anni Ottanta. Stesso software, modi diversi: lo sforzo dipende fortemente dal tipo di applicazione.",
        },
        {
          kind: "diagram",
          name: "COCOMOEffortCurve",
          caption: "Sforzo (mesi-persona) in funzione della dimensione (KLOC), per i tre modi.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Per tipo di applicazione",
            items: [
              "Organic — semplice, dimensioni limitate",
              "Semi-detached — complessità media",
              "Embedded — vincoli stringenti, real-time",
            ],
          },
          right: {
            title: "Per livello di raffinamento",
            items: [
              "Modello base — formula a una variabile",
              "Modello intermedio — 15 cost driver",
              "COCOMO II — 17 EM + 5 scale factor",
            ],
          },
        },
        {
          kind: "callout",
          tone: "warning",
          title: "Ipotesi di applicabilità",
          text:
            "Ciclo a cascata in 4 fasi, requisiti stabili, mese-persona di 19 giorni (152 h).",
        },
      ],
      notes: [
        "COCOMO è uno dei più consolidati modelli per la stima dei costi del software.",
        "Si applica solo se sono rispettate alcune ipotesi: ciclo a cascata, requisiti stabili.",
        "Mese-persona convenzionale: 19 giorni × 8 ore = 152 ore di lavoro.",
        "Si basa su LOC o FP; permette anche una stima preventiva a range.",
      ],
    },
    {
      id: "cocomo-base",
      eyebrow: "COCOMO base",
      title: "Il modello più semplice",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Variabile indipendente: dimensione S in KLOC. Si calcola lo sforzo M in mesi-persona, da cui si ricava il tempo di sviluppo T in mesi.",
        },
        {
          kind: "formula",
          expression: "M = a · S^b      T = c · M^d",
          label: "Formule COCOMO base",
          where: [
            { symbol: "a", meaning: "Riferimento al lavoro misurato in migliaia di SLOC" },
            { symbol: "b", meaning: "Presenza o meno di economie di scala" },
            { symbol: "c, d", meaning: "Coefficienti correttivi per la difficoltà dell'applicazione" },
          ],
        },
        {
          kind: "table",
          caption: "Parametri COCOMO base per tipo di applicazione",
          headers: ["Tipo", "a", "b", "c", "d"],
          rows: [
            ["Semplice", 2.4, 1.05, 2.5, 0.38],
            ["Intermedia", 3.0, 1.12, 2.5, 0.35],
            ["Complessa", 3.6, 1.2, 2.5, 0.32],
          ],
        },
        {
          kind: "takeaway",
          text:
            "Il modello base fornisce anche la ripartizione di sforzo e tempo tra le diverse fasi del progetto, in base a percentuali dipendenti dalla dimensione.",
        },
      ],
    },
    {
      id: "cocomo-intermedio",
      eyebrow: "COCOMO intermedio",
      title: "Cost drivers e fattori di aggiustamento",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Il COCOMO intermedio introduce 15 fattori correttivi (cost drivers) per categorie di attributi: prodotto, calcolatore, personale, progetto. Ogni fattore ha un moltiplicatore.",
        },
        {
          kind: "example",
          title: "Esempio — complessità del prodotto",
          text: "Tra gli attributi del prodotto, la complessità viene valutata come:",
          steps: [
            "molto bassa → 0,7",
            "bassa → 0,85",
            "nominale → 1",
            "alta → 1,15",
            "molto alta → 1,3",
            "extra alta → 1,6",
          ],
        },
        {
          kind: "formula",
          expression: "M_nom = a · S^b      con a tipico = 2,94",
          label: "Sforzo nominale COCOMO intermedio",
        },
        {
          kind: "formula",
          expression: "m = ∏ (i=1..15) Cᵢ      M = M_nom · m = 2,94 · S^b · ∏ Cᵢ",
          label: "Formula finale dello sforzo",
        },
        {
          kind: "table",
          caption: "I 15 cost drivers COCOMO intermedio",
          headers: ["Cost driver", "Very low", "Low", "Nominal", "High", "Very high", "Extra high"],
          rows: [
            ["ACAP — Analyst Capability", 1.46, 1.19, 1.0, 0.86, 0.71, "–"],
            ["AEXP — Applications Experience", 1.29, 1.13, 1.0, 0.91, 0.82, "–"],
            ["CPLX — Product Complexity", 0.7, 0.85, 1.0, 1.15, 1.3, 1.65],
            ["DATA — Database Size", "–", 0.94, 1.0, 1.08, 1.16, "–"],
            ["LEXP — Language Experience", 1.14, 1.07, 1.0, 0.95, "–", "–"],
            ["MCDP — Modern Programming Practices", 1.24, 1.1, 1.0, 0.91, 0.82, "–"],
            ["PCAP — Programmer Capability", 1.42, 1.17, 1.0, 0.86, 0.7, "–"],
            ["RELY — Required Software Reliability", 0.75, 0.88, 1.0, 1.15, 1.4, "–"],
            ["SCED — Required Development Schedule", 1.23, 1.08, 1.0, 1.04, 1.1, "–"],
            ["STOR — Main Storage Constraint", "–", "–", 1.0, 1.06, 1.21, 1.56],
            ["TIME — Execution Time Constraint", "–", "–", 1.0, 1.11, 1.3, 1.66],
            ["TOOL — Use of Software Tools", 1.24, 1.1, 1.0, 0.91, 0.83, "–"],
            ["TURN — Computer Turnaround Time", "–", 0.87, 1.0, 1.07, 1.15, "–"],
            ["VEXP — Virtual Machine Experience", 1.21, 1.1, 1.0, 0.9, "–", "–"],
            ["VIRT — Virtual Machine Volatility", "–", 0.87, 1.0, 1.15, 1.3, "–"],
          ],
        },
      ],
    },
    {
      id: "cocomo-avanzato",
      eyebrow: "COCOMO avanzato (COCOMO II)",
      title: "Tre livelli per tre momenti del ciclo di vita",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Pubblicato in COCOMO I (1981) e poi COCOMO II (anni Novanta), il modello avanzato definisce tre tipologie di software e tre livelli di modello, ciascuno utilizzato in un diverso momento del ciclo di vita.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Tipologie di software",
            items: [
              "End-User Programming — programmi piccoli e flessibili (> 98% del mercato, non gestiti)",
              "Application Composition — applicazioni diversificate ad hoc",
              "Application Generators & Composition Aids — Prepackaged, Systems Integration",
            ],
          },
          right: {
            title: "Tre livelli COCOMO",
            items: [
              "Application Composition — usa Object Points, fase di prototipazione/GUI",
              "Early Design — usa Function Points, linguaggio e 7 cost drivers",
              "Post-Architecture — usa LOC, FP, linguaggio, 17 cost drivers + 5 scale factors",
            ],
          },
        },
        {
          kind: "formula",
          expression: "b = 0,91 + 0,01 · Σ (i=1..5) Wᵢ",
          label: "Esponente di diseconomia di scala (Early Design / Post-Architecture)",
        },
        {
          kind: "paragraph",
          text: "I cinque scale factors sono:",
        },
        {
          kind: "ordered",
          items: [
            "PREC — Precedentedness: il progetto ha precedenti noti?",
            "FLEX — Development Flexibility: quanto sono flessibili le specifiche?",
            "RESL — Architecture/Risk Resolution: in che misura sono trattati i rischi?",
            "TEAM — Team Cohesion: coesione tra gli attori",
            "PMAT — Process Maturity: maturità del processo (CMM)",
          ],
        },
        {
          kind: "table",
          caption: "Scale factors — valori qualitativi",
          headers: ["Scale factor (Wᵢ)", "Very low", "Low", "Nominal", "High", "Very high", "Extra high"],
          rows: [
            ["PREC", "Throughly unprecedented", "Largely unprecedented", "Somewhat unprecedented", "Generally familiar", "Largely familiar", "Throughly familiar"],
            ["FLEX", "Rigorous", "Occasional relaxation", "Some relaxation", "General conformity", "Some conformity", "General goals"],
            ["RESL", "Little (20%)", "Some (40%)", "Often (60%)", "Generally (75%)", "Mostly (90%)", "Full (100%)"],
            ["TEAM", "Very difficult", "Some difficult", "Basically cooperative", "Largely cooperative", "Highly cooperative", "Seamless"],
            ["PMAT", "media pesata risposte 'Sì' al CMM Maturity Questionnaire", "", "", "", "", ""],
          ],
        },
        {
          kind: "table",
          caption: "Scale factors — traduzione numerica",
          headers: ["Wᵢ", "Molto basso", "Basso", "Medio", "Alto", "Molto alto", "Estremamente alto"],
          rows: [
            ["PREC", 6, 5, 4, 2, 1, 0],
            ["FLEX", 5, 4, 3, 2, 1, 0],
            ["RESL", 7, 6, 4, 3, 1, 0],
            ["TEAM", 5, 4, 3, 2, 1, 0],
            ["PMAT", 8, 6, 4, 3, 1, 0],
          ],
        },
        {
          kind: "example",
          title: "Esempio — anagrafica web di un comune",
          text:
            "Nuova procedura per anagrafica della popolazione di un grande comune, web-like, da un'azienda esperta in pubblica amministrazione, ad alto standard qualitativo.",
          steps: [
            "PREC = 1 (progetto con numerosi precedenti)",
            "FLEX = 3 (specifiche rigorosamente definite ma libertà di interfaccia)",
            "RESL = 1 (rischi prevedibili e trattabili)",
            "TEAM = 3 (primo progetto insieme)",
            "PMAT = 5 (basata sull'esperienza)",
            "Σ = 13 → b = 0,91 + 0,01 · 13 = 1,04",
          ],
          result: "b ≈ 1 → diseconomie di scala praticamente assenti",
        },
      ],
    },
    {
      id: "cmm",
      eyebrow: "CMM",
      title: "Capability Maturity Model — cinque livelli di processo",
      blocks: [
        {
          kind: "definition",
          term: "CMM",
          text:
            "Capability Maturity Model — SEI (Software Engineering Institute). Misura capability (adeguatezza) e maturity (consolidamento) del processo.",
        },
        {
          kind: "journey",
          steps: [
            { label: "Iniziale", description: "Assenza di regole. Il successo dipende dall'individuo." },
            { label: "Ripetibile", description: "Processi principali definiti. Costi e tempi controllabili." },
            { label: "Definito", description: "Processo organizzativo documentato e standardizzato." },
            { label: "Gestito", description: "Misure dettagliate per ogni processo." },
            { label: "Ottimizzato", description: "Miglioramento continuo basato su dati e innovazione." },
          ],
        },
        {
          kind: "stat",
          value: "85",
          unit: "%",
          label: "delle organizzazioni IT italiane è al livello 1 o sotto",
          context: "Meno dell'1 % raggiunge il livello 4. Fonte: rilevazione storica nel testo.",
        },
      ],
    },
    {
      id: "cocomo-fattori-m",
      eyebrow: "Fattori di aggiustamento m",
      title: "Effort Multipliers (EM)",
      blocks: [
        {
          kind: "paragraph",
          text:
            "I moltiplicatori di sforzo (EM) sono divisi in 4 categorie (4P: Prodotto, Piattaforma, Personale, Progetto). Ogni voce ha 5/6 livelli di influenza (molto basso → extra alto). Nominale = 1.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Numero di EM per modello",
            items: [
              "Application Composition: 1 (fisso)",
              "Early Design: 7 fattori",
              "Post-Architecture: 17 fattori",
            ],
          },
          right: {
            title: "Formule per il calcolo",
            items: [
              "Early Design: M = M_nom · ∏ (t=1..7) EMᵢ",
              "Post-Architecture: M = M_nom · ∏ (t=1..17) EMᵢ",
            ],
          },
        },
        {
          kind: "formula",
          expression: "M = M_nom · m = 2,94 · S^b · ∏ᵢ EMᵢ",
          label: "Formula generale per lo sforzo (mesi-persona)",
        },
        {
          kind: "takeaway",
          text:
            "Man mano che si acquisisce esperienza su un campione più grande di progetti, si affinano i parametri: campioni omogenei → risultati più attendibili.",
        },
      ],
    },
    {
      id: "data-driven",
      eyebrow: "Metodi data-driven",
      title: "Modelli statistici e di machine learning",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Sono stati sviluppati molti altri modelli che, da approcci diversi, stimano i costi. Tutti usano come base lo sforzo a partire da KDSI (Kilo Delivered Source Instructions), cioè le linee di codice 'consegnate' al cliente.",
        },
        {
          kind: "formula",
          expression: "Sforzo = 5,288 · KDSI^1,047      (se KDSI ≥ 10)",
          label: "Modello di Doty (1)",
        },
        {
          kind: "formula",
          expression: "Sforzo = 2,06 · KDSI^1,047 · ( ∏ 14 moltiplicatori )      (se KDSI < 10)",
          label: "Modello di Doty (2)",
        },
        {
          kind: "formula",
          expression: "Sforzo = 5,2 · KDSI^0,91",
          label: "Modello di Walston-Felix (IBM): somma pesata di 29 cost drivers",
        },
        {
          kind: "formula",
          expression: "Sforzo = 5,5 + 0,73 · KDSI^1,16",
          label: "Modello di Bailey-Basili",
        },
        {
          kind: "takeaway",
          text:
            "I modelli data-driven sono abbastanza simili: l'esponente è in tutti vicino all'unità. In generale si costruiscono modelli con tecniche statistiche (regressione, regressione robusta) o machine learning.",
        },
      ],
    },
    {
      id: "classification-trees",
      eyebrow: "Machine Learning",
      title: "Alberi di classificazione e Optimized Set Reduction",
      blocks: [
        {
          kind: "journey",
          intro:
            "Gli alberi di classificazione sono la tecnica di machine learning più usata: la variabile di costo viene categorizzata e predetta a partire dai fattori di costo.",
          steps: [
            { label: "Radice", description: "Si parte da un unico nodo associato a tutti i dati." },
            { label: "Split migliore", description: "Si sceglie il fattore di costo i cui valori predicono meglio le categorie di costo." },
            { label: "Nodi figli", description: "Ogni sotto-insieme diventa un nodo figlio, con la propria distribuzione." },
            { label: "Ricorsione", description: "Si ripete finché la distribuzione è polarizzata o le osservazioni scendono sotto una soglia." },
          ],
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Obiettivo di ogni split: rendere la distribuzione più omogenea, cioè far emergere in ciascun nodo un valore dominante della variabile di costo.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "CART",
            items: [
              "Classification And Regression Tree",
              "Discretizza i fattori continui per usarli nell'albero",
            ],
          },
          right: {
            title: "OSR",
            items: [
              "Optimized Set Reduction",
              "Costruisce una gerarchia di nodi, non necessariamente un albero",
            ],
          },
        },
      ],
      notes: [
        "La versione originaria degli alberi di classificazione lavora solo su dati discreti: la variabile costo va prima categorizzata.",
        "Lo split ricorsivo si ferma quando il nodo è completamente polarizzato o ha troppe poche osservazioni.",
        "CART estende il metodo ai fattori continui discretizzandoli; OSR rilassa il vincolo ad albero costruendo una gerarchia di nodi.",
      ],
    },
    {
      id: "cobra",
      eyebrow: "Metodi composti",
      title: "COBRA",
      blocks: [
        {
          kind: "definition",
          term: "COBRA",
          text:
            "COst estimation Benchmarking and Risk Assessment — metodo ibrido che combina approcci algoritmici ed empirici. La produttività viene stimata attraverso due componenti.",
        },
        {
          kind: "ordered",
          items: [
            "Modello causale che genera una stima dell'overhead dei costi, basato su fattori locali acquisiti dagli esperti",
            "Componente data-driven che usa progetti passati ritenuti simili per individuare la relazione tra overhead e produttività",
          ],
        },
        {
          kind: "paragraph",
          text:
            "Con COBRA è possibile:",
        },
        {
          kind: "list",
          variant: "check",
          items: [
            "Valutare l'incertezza di una predizione",
            "Effettuare predizioni puntuali per produttività o sforzo",
            "Effettuare benchmarking di un progetto",
            "Effettuare analisi e valutazione dei rischi",
          ],
        },
        {
          kind: "twoColumn",
          left: {
            title: "Vantaggi",
            items: [
              "Applicabilità in ambienti con pochi dati",
              "Modellazione esplicita della conoscenza riutilizzabile",
              "Maggior facilità di accettazione",
            ],
          },
          right: {
            title: "Svantaggi",
            items: [
              "Necessità di esperti disponibili",
              "Difficoltà nella raccolta di conoscenze",
            ],
          },
        },
      ],
    },
    {
      id: "analogia",
      eyebrow: "Stima per analogia",
      title: "Identificare progetti simili al nuovo",
      blocks: [
        {
          kind: "paragraph",
          text:
            "L'idea principale è identificare progetti già completati simili al nuovo. Bisogna selezionare:",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Caratteristiche rilevanti dei progetti (fattori di costo)",
            "Funzioni adeguate di similarità o distanza",
            "Numero di progetti analoghi da prendere in considerazione",
          ],
        },
        {
          kind: "paragraph",
          text:
            "Sono state definite molte funzioni di distanza, tipo euclidee, con pesi differenziati o normalizzati. Possono tener conto delle scale di misura (nominale, ordinale, intervallare, proporzionale).",
        },
        {
          kind: "table",
          caption: "Esempio di stima per analogia",
          headers: ["Attributo", "Nuovo progetto", "Progetto 1", "Progetto 2"],
          rows: [
            ["Categoria", "Tempo reale", "Tempo reale", "Simulatori"],
            ["Linguaggio", "C", "C", "C"],
            ["Dimensione team", 10, 10, 9],
            ["Dimensione sistema", 150, 200, 175],
            ["Sforzo", "?", 1000, 950],
            ["Similarità", "—", "80%", "75%"],
          ],
        },
        {
          kind: "paragraph",
          text:
            "Prima stima: il valore di sforzo del progetto più simile (1000) o la media pesata dei due simili.",
        },
        {
          kind: "example",
          title: "Aggiustamenti",
          text:
            "I criteri possono essere oggettivi (es. dimensione 75% → sforzo 75% di 1000 = 750) oppure soggettivi (esperto: +50% funzionalità, −15% per riuso team, −10% per riuso codice).",
          steps: [
            "Caso differenze indipendenti: M = 1000 · (1 + 0,5 − 0,15 − 0,10) = 1250",
            "Caso differenze concorrenti: M = 1000 · 1,5 · 0,85 · 0,9 = 1147,5",
          ],
          result:
            "Risultati fortemente dipendenti dall'esperto. Per ovviare si utilizza Delphi (gruppi di esperti).",
        },
      ],
    },
    {
      id: "delphi",
      eyebrow: "Metodi non basati su modelli",
      title: "Il metodo Delphi",
      blocks: [
        {
          kind: "paragraph",
          text:
            "La Rand Corporation ha introdotto il metodo Delphi dal 1948. Si fonda sull'osservazione che una stima basata su un solo esperto è influenzata dalla persona: per ovviare si usano gruppi di esperti. Scopo: giungere al consenso del gruppo.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Delphi Standard",
            items: [
              "Coordinatore distribuisce a ciascun esperto la descrizione del problema",
              "Esperti rispondono in modo anonimo (solo via coordinatore)",
              "Coordinatore riassume risposte con giustificazioni",
              "Riassunto inviato a tutti, chiede ragioni delle differenze e la stima 'centrale'",
              "Processo iterato per quanto necessario",
            ],
          },
          right: {
            title: "Delphi Wideband",
            items: [
              "Coordinatore fornisce specifica e modulo di stima",
              "Organizza una riunione tra esperti",
              "Esperti compilano in modo anonimo",
              "Coordinatore riassume; invia riassunto senza chiedere ragioni",
              "Nuova riunione per discutere le differenze più marcate",
              "Processo iterato",
            ],
          },
        },
      ],
    },
    {
      id: "altri-metodi",
      eyebrow: "Altri metodi non basati su modelli",
      title: "Parkinson e Price-to-win",
      blocks: [
        {
          kind: "twoColumn",
          left: {
            title: "Stima alla Parkinson",
            items: [
              "Un progetto consumerà tutto il budget a disposizione",
              "Se la stima è una sovrastima, porta ad aggiungere funzionalità solo 'di abbellimento'",
              "Consumo inutile di risorse",
              "Prescinde totalmente dall'applicazione e dall'ambiente",
              "Tende a far impiegare metodi di sviluppo scadenti",
            ],
          },
          right: {
            title: "Stima Price-to-win",
            items: [
              "Usata per aggiudicarsi una gara o un contratto",
              "Effettiva utile per aggiudicarsi gare",
              "Porta a problemi di processo (difficoltà di rispettare i tempi)",
              "Problemi di prodotto (qualità inferiore)",
              "Può provocare danni di immagine",
            ],
          },
        },
      ],
    },
    {
      id: "conclusioni",
      eyebrow: "Conclusioni",
      title: "Stima dei costi: limiti e prospettive",
      kind: "closer",
      blocks: [
        {
          kind: "lead",
          text:
            "Il problema della stima dei costi del software è di grande importanza economica sia per costruttori sia per acquirenti. La difficoltà nasce dal fatto che lo sviluppo del software è basato soprattutto sulle risorse umane.",
        },
        {
          kind: "paragraph",
          text:
            "I progetti software tendono a diversificarsi l'uno dall'altro, per cui non sembra possibile arrivare a leggi di grande affidabilità e precisione matematica.",
        },
        {
          kind: "takeaway",
          text:
            "Esiste un 'corpus di conoscenze iniziali' che permetterà in futuro di estendere le proposte esistenti a tipologie di applicazioni diverse. Le applicazioni web costituiscono probabilmente il nuovo settore applicativo più importante.",
        },
        {
          kind: "quote",
          text:
            "Si ringrazia il prof. Sandro Morasca — Università degli Studi dell'Insubria di Como — per la collaborazione nella stesura di questa Lezione.",
        },
      ],
    },
    {
      id: "transizione",
      eyebrow: "Verso la Lezione 3",
      title: "Sappiamo stimare. Ma stiamo costruendo qualcosa di buono?",
      kind: "transition",
      blocks: [
        {
          kind: "keypoint",
          eyebrow: "Ponte concettuale",
          text:
            "Misurare lo sforzo non basta — serve un modello per misurare la qualità del software prodotto.",
        },
      ],
      notes: [
        "Sintesi rapida: COCOMO, SLIM, COBRA, Delphi.",
        "Limite comune: tutti questi metodi stimano i costi, non la qualità del risultato.",
        "Annuncia la lezione 3: McCall-Boehm, ISO/IEC 9126, qualità in uso.",
      ],
    },
  ],
};
