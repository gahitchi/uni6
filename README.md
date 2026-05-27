# Unità 6 — Metriche per la stima dei costi nei progetti informatici

Presentation-style deck (full-screen slide canvas, edge navigation, speaker
notes) built from the source PDF (53 pages, italiano). Tre lezioni, ~50
slide, 17 diagrammi SVG inline. Durata stimata: ≈ 60 minuti, dimensionata per
6 relatori (2 per lezione, ~10 minuti a testa).

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript strict
- Tailwind CSS 3 (token di design in `tailwind.config.ts`)
- Nessuna dipendenza runtime oltre React/Next — tutti i diagrammi sono SVG inline

## Filosofia

Le slide mostrano **solo i concetti**: i paragrafi narrativi presenti nei dati
non vengono mostrati sul canvas — diventano **note del relatore**, consultabili
in qualsiasi momento premendo `N`. Lo studente parla, le slide supportano.

Tipi di slide:
- `opener` (apertura lezione) — titolo tipografico imponente
- contenuto standard — concetti, definizioni, formule, tabelle, diagrammi
- `closer` (chiusura) — riepilogo essenziale

## Layout

```
app/                      Pagine App-router
  page.tsx                Copertina (cover slide + agenda)
  lezione/[lessonId]/[slideId]/page.tsx   Slide (52 route statiche)
  not-found.tsx · layout.tsx · globals.css
components/
  BlockRenderer.tsx       Renderizza i 13 tipi di blocco
  SlideView.tsx           Canvas della slide + pannello note
  SlideChrome.tsx         Chrome della slide (top/bottom + frecce edge)
  HomeChrome.tsx          Chrome della copertina
  SearchDialog.tsx        Indice rapido (Cmd-K / /)
  diagrams/               14 SVG inline + registry
content/
  types.ts                Schema blocchi (single source of truth)
  lesson1.ts / lesson2.ts / lesson3.ts
  unit.ts                 Aggregatore + obiettivi formativi
lib/
  navigation.ts           Indice slide, prev/next, lookup
  cn.ts
```

## Scripts

```
npm run dev       # sviluppo locale
npm run build     # build di produzione (~52 route statiche)
npm run start     # serve la build
npm run typecheck # TS check
```

## Scorciatoie

- `←` / `→` slide precedente / successiva
- `N` apri / chiudi note del relatore
- `/` o `⌘K` cerca slide per titolo
- `Home` torna alla copertina
- `esc` chiude la ricerca / le note

## Deploy su Render

Il repo contiene già `render.yaml` (Blueprint) che configura tutto.

1. Crea un repo vuoto su GitHub (es. `uni6-presentation`).
2. Dal terminale, nella cartella del progetto:
   ```bash
   git remote add origin git@github.com:<tuo-utente>/uni6-presentation.git
   git branch -M main
   git push -u origin main
   ```
3. Su [render.com](https://render.com) → **New** → **Blueprint** → seleziona il repo.
   Render leggerà `render.yaml` e provisionerà un Web Service Node sul piano free.

Il primo build dura ~2 minuti. Successive push a `main` triggherano un redeploy
automatico (`autoDeploy: true`).

**Nota sul piano free:** Render mette in stand-by i servizi inattivi da
~15 min, con cold start di ~30 s alla prima visita successiva. Per la
presentazione, apri il sito ~1 minuto prima per "svegliare" il dyno.
