import type { Lesson } from "./types";

export const lesson3: Lesson = {
  id: "qualita-software",
  number: 3,
  title: "La valutazione della qualità del software",
  subtitle: "McCall, Boehm, ISO/IEC 9126 e oltre",
  description:
    "Modelli per la valutazione della qualità del software: dal modello a fattori-criteri-metriche di McCall, all'aggiornamento gerarchico di Boehm, fino alle norme ISO/IEC 9126, ISO 25000 e ISO/IEC 15504 (SPICE).",
  accent: "from-emerald-500 to-teal-700",
  icon: "quality",
  slides: [
    {
      id: "generalita",
      eyebrow: "Generalità",
      title: "Cosa intendiamo per qualità del software",
      kind: "opener",
      blocks: [
        {
          kind: "lead",
          text:
            "Con qualità ci si riferisce all'insieme degli attributi che caratterizzano la 'bontà' di un prodotto. L'obiettivo di ogni produttore è migliorare la qualità, cioè ottenere un prodotto che rispetti le specifiche e soddisfi le aspettative dell'utente.",
        },
        {
          kind: "paragraph",
          text:
            "I soggetti coinvolti hanno punti di vista diversi: utilizzatori e committenti si aspettano efficienza, usabilità, affidabilità; gli sviluppatori riusabilità, comprensibilità, testabilità e manutenibilità.",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "La difficoltà di raccogliere requisiti e identificare attributi porta allo sviluppo di software di scarsa qualità: un'ottima documentazione dei requisiti è essenziale, perché è difficile realizzare bene qualcosa se non è chiaro cosa si deve fare.",
        },
        {
          kind: "paragraph",
          text:
            "Occorre identificare gli attributi e le specifiche funzionali e includere nei requisiti tutti gli aspetti di qualità essenziali (usabilità, manutenibilità, affidabilità).",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "La qualità del prodotto è influenzata anche dalla qualità del processo di produzione: caratteristiche come comprensibilità e riusabilità sono garantite da 'come' viene realizzato il software.",
        },
        {
          kind: "paragraph",
          text:
            "Dagli anni Settanta è nata la necessità di standardizzare i modelli di qualità: in questa lezione analizziamo due tappe fondamentali.",
        },
        {
          kind: "ordered",
          items: [
            "Modello di McCall (1977), ancora attuale",
            "Norma ISO/IEC 9126 — Software Engineering – Product quality (1991, rivista 2001, confluita nel 2005 nella ISO 25000)",
          ],
        },
      ],
    },
    {
      id: "mccall-boehm",
      eyebrow: "Struttura del modello",
      title: "McCall-Boehm — fattori, criteri, metriche",
      blocks: [
        {
          kind: "definition",
          term: "Prodotto software",
          text:
            "L'insieme di programmi, procedure, regole, documenti pertinenti all'utilizzo di un sistema informatico.",
        },
        {
          kind: "definition",
          term: "Qualità del software",
          text:
            "L'insieme delle caratteristiche che incidono sulla capacità del prodotto di soddisfare requisiti espliciti o impliciti (definizione vicina a ISO 8402, vocabolario ISO 9000).",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "Il grado di possesso che il software ha di questi attributi può essere valutato su una scala di riferimento, facendo ricorso a metriche e meccanismi di rating.",
        },
        {
          kind: "paragraph",
          text:
            "I primi modelli di qualità del software furono sviluppati negli anni Settanta da McCall (Factor-Criteria Model, 1977) e da Boehm (1978) e hanno un'architettura a tre livelli:",
        },
        {
          kind: "diagram",
          name: "McCallTree",
          caption: "Architettura a tre livelli: Fattori (utente) → Criteri (sviluppatore) → Metriche.",
        },
        {
          kind: "ordered",
          items: [
            "Fattori — descrivono il software da un punto di vista esterno (utente). McCall ne individua 11.",
            "Criteri — descrivono gli elementi su cui agiscono gli sviluppatori per soddisfare i fattori. McCall ne descrive 23.",
            "Metriche — controllano che i criteri corrispondano ai fattori specificati.",
          ],
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "Nel modello di McCall sono introdotti auditors e addetti alle verifiche che utilizzano fattori e criteri per stimare la qualità del software.",
        },
      ],
    },
    {
      id: "boehm-gerarchia",
      eyebrow: "Modello di Boehm",
      title: "Gerarchia con 11 fattori e 23 criteri",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Boehm modifica il modello di McCall (1977) suggerendo una visione gerarchica e un approccio top-down: nella parte alta gli attributi visti dal committente, in basso quelli visti dal produttore. Da attributi più generici si definiscono sottoattributi fino agli attributi semplici, e infine alle metriche.",
        },
        {
          kind: "paragraph",
          text:
            "La qualità per l'utente coincide con l'utilità generale, derivata da tre domande:",
        },
        {
          kind: "ordered",
          items: [
            "How well can I use it as-is? → usabilità, servizio",
            "How easy is it to maintain? → manutenibilità",
            "Can I use it if I change my environment? → portabilità, migrazione",
          ],
        },
        {
          kind: "paragraph",
          text:
            "Gli 11 fattori dei requisiti utente sono suddivisi in tre macrofasi del ciclo di vita:",
        },
        {
          kind: "diagram",
          name: "ProductPyramid",
          caption:
            "Le tre macrofasi: Product Operations, Product Revision, Product Transition.",
        },
        {
          kind: "callout",
          tone: "info",
          title: "L'idea di Boehm",
          text:
            "Rispetto a McCall, Boehm dispone gli attributi in una gerarchia top-down: in alto la vista del committente (utilità d'uso), in basso quella del produttore, scendendo dagli attributi generali ai sottoattributi semplici fino alle metriche misurabili.",
        },
      ],
    },
    {
      id: "fattori-dettaglio-1",
      eyebrow: "Fattori di qualità",
      title: "Correttezza, Affidabilità, Efficienza",
      blocks: [
        {
          kind: "definition",
          term: "Correttezza (Does it what I want?)",
          text:
            "Grado di adesione agli standard definiti nel processo produttivo e nel dominio applicativo. Funzione di tracciabilità, coerenza e completezza.",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Tracciabilità — reperibilità delle specifiche all'interno del codice o in esercizio; collegare requisiti ai componenti che li implementano",
            "Coerenza — uniformità delle tecniche utilizzate nei diversi componenti per passare dai requisiti al software",
            "Completezza — soddisfa tutti i requisiti e implementa tutte le funzionalità richieste",
          ],
        },
        {
          kind: "definition",
          term: "Affidabilità (Does it do accurately all of the time?)",
          text:
            "Capacità del software di svolgere correttamente il suo compito nel tempo, eseguendo le sue funzioni senza insuccessi. Funzione di tolleranza all'errore, coerenza, accuratezza, semplicità.",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Tolleranza all'errore — grado di affidabilità in presenza di condizioni non standard",
            "Accuratezza — precisione dei calcoli e dei risultati in output",
            "Semplicità — implementazione delle funzioni in maniera chiara e comprensibile",
          ],
        },
        {
          kind: "definition",
          term: "Efficienza (Will it run on my hardware as well as it can?)",
          text:
            "Svolgere il compito con minor spreco di risorse (tempi di elaborazione, comunicazione, memoria).",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Efficienza di esecuzione — tempo impiegato per svolgere il compito",
            "Efficienza di memorizzazione — spazio occupato in memoria dai dati",
          ],
        },
      ],
    },
    {
      id: "fattori-dettaglio-2",
      eyebrow: "Fattori di qualità",
      title: "Integrità, Usabilità, Manutenibilità",
      blocks: [
        {
          kind: "definition",
          term: "Integrità (Is it secure?)",
          text:
            "Livello di capacità del software di operare senza insuccessi dovuti ad accessi non autorizzati a codice o dati. Funzione di controllo e revisione degli accessi.",
        },
        {
          kind: "definition",
          term: "Usabilità (Can I run it?)",
          text:
            "Sforzo necessario per usare il software, dall'addestramento all'esecuzione (familiarizzazione, preparazione input, esecuzione, interpretazione output). Funzione di operabilità, addestramento, comunicabilità.",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Operabilità — semplicità delle operazioni e controllo dell'esecuzione",
            "Addestramento — familiarizzazione e transizione dal vecchio ambiente",
            "Comunicabilità — agevole assimilazione di input e output utili (HCI)",
          ],
        },
        {
          kind: "definition",
          term: "Manutenibilità (Can I fix it?)",
          text:
            "Sforzo per trovare e correggere un errore dopo il rilascio in esercizio. Funzione di coerenza, semplicità, concisione, modularità, autodocumentazione.",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Concisione — quantità di codice necessaria per adempiere a una funzione",
            "Modularità — grado di indipendenza dei vari moduli",
            "Autodocumentazione — capacità del codice di spiegare le funzioni implementate",
          ],
        },
      ],
    },
    {
      id: "fattori-dettaglio-3",
      eyebrow: "Fattori di qualità",
      title: "Flessibilità, Testabilità, Portabilità, Interoperabilità, Riusabilità",
      blocks: [
        {
          kind: "definition",
          term: "Flessibilità (Can I change it?)",
          text:
            "Facilità nell'assolvere i compiti e soddisfare i requisiti anche in caso di cambiamento degli obiettivi, delle funzioni o dei dati. Funzione di generalità ed espandibilità.",
        },
        {
          kind: "definition",
          term: "Testabilità (Can I test it?)",
          text:
            "Facilità di effettuare un testing sull'applicazione. Funzione della strumentazione (facilità con cui si può monitorare il funzionamento e verificare possibili errori).",
        },
        {
          kind: "definition",
          term: "Portabilità (Will I be able to use it on another machine?)",
          text:
            "Capacità di adattamento per operare su nuovi ambienti di lavoro. Funzione di modularità, autodocumentazione, indipendenza dalla macchina, indipendenza dal software.",
        },
        {
          kind: "list",
          variant: "arrow",
          items: [
            "Indipendenza dalla macchina — indipendenza dalla piattaforma hardware",
            "Indipendenza dal software — indipendenza dal sistema operativo, driver, utility",
          ],
        },
        {
          kind: "definition",
          term: "Interoperabilità (Will I be able to interface it with another system?)",
          text:
            "Sforzo necessario per accoppiare (integrare) il software di un sistema con quello di un altro. Funzione di modularità, standard di comunicazione, standard dei dati.",
        },
        {
          kind: "definition",
          term: "Riusabilità (Will I be able to reuse some of the software?)",
          text:
            "Possibilità di riutilizzare il software o parte di esso in modo semplice. Legata a modularità, portabilità, flessibilità.",
        },
      ],
    },
    {
      id: "interazione",
      eyebrow: "Interazione tra fattori",
      title: "Sinergia e conflitto tra i fattori di qualità",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Alcuni fattori di qualità operano in sinergia, altri in conflitto: la matrice di interazione evidenzia questi vincoli da considerare in fase di definizione dei requisiti.",
        },
        {
          kind: "diagram",
          name: "FactorMatrix",
          caption:
            "Matrice di interazione tra fattori (S = sinergia, C = conflitto).",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "Queste 'interferenze' sono da tenere in alta considerazione in sede di definizione dei requisiti di qualità e di sviluppo di un sistema software.",
        },
        {
          kind: "paragraph",
          text:
            "McCall completa il quadro con un numero enorme di metriche: 25 per le specifiche, 108 per la progettazione, 157 per la codifica. Boehm modifica il modello riducendole a 15 sottocaratteristiche misurabili al quarto livello.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Limiti dei modelli McCall-Boehm",
            items: [
              "Caratteristiche e sottocaratteristiche non sempre indipendenti",
              "Correlazione non sempre perfettamente lineare",
              "Manca legame esplicito tra modello qualitativo e 'come' fare buon software",
            ],
          },
          right: {
            title: "Punti di forza",
            items: [
              "Visione strutturata della qualità",
              "Riferimento per tutte le norme successive",
              "Distinzione utente / sviluppatore chiara",
            ],
          },
        },
      ],
    },
    {
      id: "iso-9126",
      eyebrow: "ISO/IEC 9126",
      title: "Il riferimento ISO per la qualità del software",
      blocks: [
        {
          kind: "paragraph",
          text:
            "La norma ISO 9126, scritta in collaborazione con IEC, è conosciuta come Software Engineering – Product Quality. Pubblicata nel 1991, modificata tra 2001 e 2004, è confluita in ISO 25000 (norma 25010) senza modifiche sostanziali. Applicabile a qualsiasi tipo di software custom (ad hoc) o COTS.",
        },
        {
          kind: "definition",
          term: "IEC",
          text:
            "International Electrotechnical Commission — organo internazionale che definisce gli standard nel settore delle tecnologie dell'informazione e della comunicazione.",
        },
        {
          kind: "definition",
          term: "COTS",
          text:
            "Commercial Off The Shelf — software sviluppato non per un dato utente ma per un uso diffuso (es. app per smartphone).",
        },
        {
          kind: "callout",
          tone: "info",
          text:
            "La ISO 9126 si usa per definire i requisiti di qualità e le modalità di misurazione, ma NON prevede una certificazione del prodotto finale.",
        },
        {
          kind: "paragraph",
          text:
            "La famiglia di norme ISO per la qualità del software comprende:",
        },
        {
          kind: "list",
          variant: "bullet",
          items: [
            "ISO/IEC 9126-1 — 6 caratteristiche di qualità e 27 sottocaratteristiche (3 technical report: 9126-2, 3, 4)",
            "ISO/IEC 9241 — qualità di un software 'usabile'",
            "ISO 12119 — qualità di un software COTS",
            "ISO 25000 — confluita la 25010, sostanzialmente immutata",
            "ISO/IEC 15504 — 9 documenti per la valutazione dei processi di sviluppo",
            "ISO 14598 — guida alla valutazione della qualità del software",
          ],
        },
      ],
    },
    {
      id: "iso-9126-contenuti",
      eyebrow: "Contenuti della norma",
      title: "Qualità interna, esterna e in uso",
      blocks: [
        {
          kind: "paragraph",
          text: "La 9126 definisce tre tipologie di qualità:",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Qualità interna",
            items: [
              "Misurata direttamente sul codice sorgente",
              "Rappresenta le proprietà intrinseche del prodotto",
              "Soddisfa i requisiti dell'utente e le specifiche tecniche",
            ],
          },
          right: {
            title: "Qualità esterna / in uso",
            items: [
              "Esterna — prestazioni considerate come 'scatola chiusa' (black box)",
              "In uso — quanto percepisce l'utilizzatore di come il prodotto lo soddisfa",
              "La qualità percepita dal committente deve essere il primo obiettivo dello sviluppatore",
            ],
          },
        },
        {
          kind: "twoColumn",
          left: {
            title: "Fattori interni",
            items: [
              "Verificabilità",
              "Manutenibilità",
              "Riparabilità",
              "Evolvibilità",
              "Riusabilità",
              "Portabilità",
              "Leggibilità",
              "Modularità",
            ],
          },
          right: {
            title: "Fattori esterni",
            items: [
              "Correttezza",
              "Affidabilità",
              "Apprendibilità",
              "Robustezza",
              "Efficienza",
              "Usabilità",
            ],
          },
        },
        {
          kind: "diagram",
          name: "ISO9126Tree",
          caption:
            "ISO/IEC 9126: 6 caratteristiche di qualità interna ed esterna con relative sottocaratteristiche.",
        },
      ],
    },
    {
      id: "iso-percezione",
      eyebrow: "Percezione della qualità",
      title: "Quattro punti di vista sulla qualità",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Le caratteristiche di qualità sono percepite in modo diverso dai vari soggetti del team: l'utente è più interessato alla qualità in uso, lo sviluppatore alla qualità interna, il gestore agli aspetti di installazione/configurazione, il committente alla qualità globale.",
        },
        {
          kind: "table",
          caption: "Percezione della qualità per soggetto",
          headers: ["", "Utente", "Sviluppatore", "Gestore", "Committente"],
          rows: [
            ["Funzionalità", "Alta", "Bassa", "Bassa", "Media"],
            ["Affidabilità", "Media", "Media", "Alta", "Media"],
            ["Usabilità", "Alta", "Bassa", "Media", "Media"],
            ["Efficienza", "Media", "Media", "Alta", "Media"],
            ["Manutenibilità", "Bassa", "Alta", "Media", "Media"],
            ["Portabilità", "Bassa", "Alta", "Alta", "Media"],
          ],
        },
        {
          kind: "diagram",
          name: "QualityInUse",
          caption: "Le quattro caratteristiche della qualità in uso.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Qualità in uso",
            items: [
              "Efficacia — raggiungimento degli obiettivi in modo preciso e accurato",
              "Produttività — efficienza nell'impiego delle risorse da parte dell'utente",
              "Sicurezza — garantire un livello di rischio minimo per utilizzatori e dati",
              "Soddisfazione — obiettivo principale per l'utilizzatore",
            ],
          },
          right: {
            title: "Relazione tra livelli di qualità",
            items: [
              "Qualità dei processi → Influenza → Qualità interna",
              "Qualità interna → Influenza → Qualità esterna",
              "Qualità esterna → Influenza → Qualità in uso",
              "E viceversa nelle dipendenze",
            ],
          },
        },
      ],
    },
    {
      id: "errori",
      eyebrow: "Errori, difetti, malfunzionamenti",
      title: "Le tre categorie di problemi del codice",
      blocks: [
        {
          kind: "compare",
          a: {
            label: "Errore → Difetto",
            sub: "causa umana → traccia nel codice",
            points: [
              "Error: commesso da una persona",
              "Documentazione, codice, dati, procedure",
              "Fault / Defect: porzione di codice difettosa",
              "Caratteristica fisica osservabile",
            ],
          },
          b: {
            label: "Failure",
            sub: "manifestazione in esercizio",
            points: [
              "Conseguenza del difetto in run-time",
              "Può non verificarsi subito",
              "Anche dopo anni (es. millennium bug)",
              "Visibile all'utente",
            ],
          },
          verdict:
            "Un errore (umano) genera un difetto (nel codice) che, in certe condizioni d'uso, produce un malfunzionamento (failure).",
        },
        {
          kind: "diagram",
          name: "ErrorPhaseTimeline",
        },
      ],
      notes: [
        "Un errore (error) è commesso da un essere umano: in codice, documentazione, dati o procedure.",
        "Un difetto (fault/defect) è una caratteristica fisica del codice o della documentazione.",
        "Un malfunzionamento (failure) è la conseguenza che si manifesta in esercizio.",
        "Il fallimento può manifestarsi anche dopo anni: il classico esempio è il millennium bug.",
        "La soluzione ottimale è ridurre gli errori in fase di sviluppo per produrre codice di qualità.",
      ],
    },
    {
      id: "cause-errori",
      eyebrow: "Cause degli errori",
      title: "Otto fonti tipiche di problemi",
      blocks: [
        {
          kind: "list",
          variant: "bullet",
          items: [
            "Requisiti difettosi — requisiti errati, incompleti, mancanti o inutili",
            "Incomprensioni cliente-sviluppatore — divergenze sui requisiti, mancato aggiornamento della documentazione, cambiamenti richiesti dal cliente",
            "Deviazioni deliberate dai requisiti — riutilizzo di funzionalità senza revisione, omissione per motivi di tempo o denaro",
            "Errori di progetto — scrittura del codice (logica, run-time), definizione del processo, valutazione delle condizioni al contorno",
            "Non aderenza agli standard di codifica e documentazione — uso di moduli standard con moduli non standard, riutilizzo di codice o sostituzione del programmatore",
            "Test e collaudo affrettati — scarsità di risorse (tempo, soldi) che porta al sacrificio delle operazioni di test",
            "Errori nelle procedure — sistemi complessi con errori nella sequenza delle attività",
            "Errori di documentazione — sviluppatori che non gradiscono documentare; omissioni, descrizioni parziali, errori",
          ],
        },
        {
          kind: "takeaway",
          text:
            "Le norme non garantiscono codice esente da errori, ma la loro adozione in ogni fase aiuta a migliorare il prodotto e riduce i tempi di manutenzione. La qualità è un investimento che porta benefici a utenti e sviluppatori.",
        },
      ],
    },
    {
      id: "spice",
      eyebrow: "ISO/IEC 15504 (SPICE)",
      title: "Valutazione del processo di sviluppo",
      blocks: [
        {
          kind: "paragraph",
          text:
            "Recentemente si è consolidata l'idea di concentrarsi sul processo di sviluppo: 'un buon processo darà luogo a un buon prodotto'. Il processo è scomposto in sottoprocessi, ciascuno valutato in termini di process capability.",
        },
        {
          kind: "definition",
          term: "Process capability",
          text:
            "La capacità di un processo di raggiungere l'obiettivo prefissato (ISO/IEC 15504-9).",
        },
        {
          kind: "paragraph",
          text:
            "Per i processi software è stata definita la norma ISO/IEC 15504, conosciuta come SPICE (Software Process Improvement and Capability Determination), insieme di 9 documenti rilasciati tra 2004 e 2011.",
        },
        {
          kind: "callout",
          tone: "warning",
          text:
            "La norma deriva dai processi dello standard ISO/IEC 12207 e dai modelli di maturità come il CMM già descritto.",
        },
        {
          kind: "list",
          variant: "check",
          items: [
            "Base comune per la comprensione del proprio processo e per migliorarlo",
            "Risultati presentabili in modo singolo e sufficientemente dettagliato",
            "Identificazione rapida di punti di forza e debolezza",
            "Indicazione del livello di maturità di ogni singolo processo",
          ],
        },
      ],
    },
    {
      id: "conclusioni",
      eyebrow: "Conclusioni",
      title: "Tre elementi per migliorare la qualità",
      kind: "closer",
      blocks: [
        {
          kind: "keypoint",
          eyebrow: "Il filo conduttore dell'unità",
          text:
            "Misurare → Stimare → Certificare. Tre passi della stessa disciplina.",
        },
        {
          kind: "ordered",
          items: [
            "Competenza delle persone",
            "Processi maturi",
            "Metriche, metodi, tecniche e strumenti a supporto",
          ],
        },
        {
          kind: "paragraph",
          text:
            "È importante ottenere una certificazione serie ISO, che porta numerosi vantaggi:",
        },
        {
          kind: "list",
          variant: "check",
          items: [
            "Assicurare che i dati siano affidabili e di alta qualità",
            "Assicurare che il software rispetti i requisiti funzionali",
            "Migliorare la documentazione e il manuale d'uso (con diminuzione dei costi)",
            "Ottenere riconoscimento formale e credibilità di fronte al mercato",
            "Contribuire alla sicurezza delle applicazioni mission critical e life critical (salvaguardando rischi su ambiente, economia, salute)",
          ],
        },
        {
          kind: "quote",
          text:
            "La qualità è proprio un investimento che porta benefici per tutti: all'utente, allo sviluppatore, all'organizzazione.",
        },
      ],
    },
    {
      id: "grazie",
      eyebrow: "Fine della presentazione",
      title: "Grazie per l'attenzione",
      kind: "closer",
      blocks: [
        {
          kind: "lead",
          text:
            "Unità 6 — Metriche per la stima dei costi nei progetti informatici. Dalle metriche del software ai modelli di stima e alle norme ISO per la qualità.",
        },
        {
          kind: "twoColumn",
          left: {
            title: "Domande?",
            items: [
              "Function Points e backfiring",
              "COCOMO base / intermedio / II",
              "Modello McCall-Boehm",
              "ISO/IEC 9126 e qualità in uso",
            ],
          },
          right: {
            title: "Riferimenti",
            items: [
              "Albrecht, A. (1979) — Function Points",
              "Boehm, B. (1981) — COCOMO",
              "ISO/IEC 9126 → ISO 25010",
              "SEI — Capability Maturity Model",
              "IFPUG Counting Practices Manual 4.3.1",
            ],
          },
        },
      ],
      notes: [
        "Chiudere ringraziando la classe e il docente per l'attenzione.",
        "Lasciare spazio alle domande, possibilmente su Function Points, COCOMO, ISO 9126.",
        "Se possibile, ricordare il link tra metriche → costi → qualità come filo conduttore dell'unità.",
      ],
    },
  ],
};
