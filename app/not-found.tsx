import Link from "next/link";

export default function NotFound() {
  return (
    <div className="deck-bg relative grid min-h-screen place-items-center px-4 py-10">
      <main className="slide-canvas relative w-full max-w-xl overflow-hidden rounded-3xl border border-ink-200 bg-white px-8 py-12 md:px-14 md:py-16 text-center">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-100/25 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-col items-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-700">
            Errore 404
          </p>
          <span className="eyebrow-rule mx-auto" aria-hidden />
          <h1 className="mt-5 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.028em] text-ink-900">
            Sezione non trovata
          </h1>
          <p className="mt-4 max-w-sm text-[15.5px] leading-relaxed text-ink-600">
            La pagina richiesta non esiste. Torna alla copertina per esplorare
            le sezioni dell&apos;unità.
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-ink-900 px-6 py-3 text-[14px] font-semibold text-white shadow-card transition-all hover:bg-ink-950 hover:shadow-glow"
          >
            Torna alla copertina
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
