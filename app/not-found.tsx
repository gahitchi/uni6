import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div className="max-w-md space-y-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-700">
          404
        </p>
        <h1 className="text-3xl font-semibold text-ink-900">
          Sezione non trovata
        </h1>
        <p className="text-ink-600">
          La pagina richiesta non esiste. Torna alla panoramica per esplorare le
          sezioni dell&apos;unità.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-950"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
