import Link from "next/link";
import { unit } from "@/content/unit";
import { buildSlideIndex } from "@/lib/navigation";
import { HomeChrome } from "@/components/HomeChrome";

const lessonIcons: Record<string, React.ReactElement> = {
  metrics: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 19V5m0 14h16M8 15v-4m4 4V8m4 7v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  cost: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7v10M9 9.5c0-1 .8-1.5 3-1.5s3 .5 3 1.8c0 2.6-6 1.6-6 4.4 0 1.3 1 1.8 3 1.8s3-.5 3-1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function HomePage() {
  const totalSlides = buildSlideIndex().length;
  const firstSlide = unit.lessons[0].slides[0];

  return (
    <div className="deck-bg relative min-h-screen overflow-x-hidden">
      <HomeChrome totalSlides={totalSlides} />

      <main className="mx-auto flex max-w-[1280px] items-center px-3 py-6 md:px-6 md:py-10">
        <div className="min-w-0 flex-1">
          {/* Cover slide */}
          <section className="slide-canvas relative mx-auto w-full overflow-hidden rounded-3xl border border-ink-200 border-t-[3px] border-t-accent-600 bg-white px-7 py-10 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <div
              className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-100/30 blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
              <div className="space-y-7">
                <div className="flex flex-col">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-700">
                    Unità {unit.number} · Presentazione
                  </p>
                  <span className="eyebrow-rule" aria-hidden />
                </div>

                <h1 className="text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.0] tracking-[-0.035em] text-ink-900">
                  <span className="gradient-text">Metriche</span> per la stima
                  <br className="hidden md:inline" />
                  dei costi nei progetti
                  <br className="hidden md:inline" />
                  informatici
                </h1>

                <p className="max-w-xl text-lg leading-[1.55] text-ink-600">
                  {unit.subtitle}. Dal LOC ai Function Points, dal modello
                  COCOMO alla norma ISO/IEC 9126.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/lezione/${unit.lessons[0].id}/${firstSlide.id}`}
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-ink-900 px-6 py-3 text-[15px] font-semibold text-white shadow-card transition-all hover:bg-ink-950 hover:shadow-glow"
                  >
                    Avvia la presentazione
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                  <a
                    href="#agenda"
                    className="inline-flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-5 py-3 text-[14px] font-semibold text-ink-700 transition-colors hover:border-ink-300"
                  >
                    Vai all&apos;agenda
                  </a>
                </div>
              </div>

              <aside className="rounded-2xl border border-ink-200/70 bg-white/70 p-5 backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent-700">
                  Scheda della presentazione
                </p>
                <dl className="mt-4 divide-y divide-ink-100/70">
                  <Row k="Lezioni" v={String(unit.lessons.length)} />
                  <Row k="Slide" v={String(totalSlides)} />
                  <Row k="Durata" v="≈ 45 minuti" />
                  <Row k="Lingua" v="Italiano" />
                </dl>
                <p className="mt-5 text-[12px] leading-relaxed text-ink-500">
                  Premi <Kbd>N</Kbd> durante una slide per visualizzare le note
                  del relatore.
                </p>
              </aside>
            </div>
          </section>

          {/* Agenda — 3 lessons */}
          <section id="agenda" className="mt-10 scroll-mt-20 md:mt-14">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-700">
                  Agenda
                </p>
                <h2 className="mt-1 text-[26px] md:text-[32px] font-semibold tracking-[-0.015em] text-ink-900">
                  Le tre parti della presentazione
                </h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {unit.lessons.map((lesson, idx) => (
                <Link
                  key={lesson.id}
                  href={`/lezione/${lesson.id}/${lesson.slides[0].id}`}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-accent-400 hover:shadow-card"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-ink-200 bg-ink-50 text-ink-700">
                      {lessonIcons[lesson.icon]}
                    </div>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-accent-200 bg-accent-50 text-[12px] font-bold tabular-nums text-accent-700">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-700">
                      Parte {idx + 1}
                    </p>
                    <h3 className="text-[18px] font-semibold leading-snug tracking-[-0.012em] text-ink-900">
                      {lesson.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-ink-600">
                      {lesson.subtitle}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-3">
                    <span className="text-[12px] text-ink-500">
                      {lesson.slides.length} slide
                    </span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-accent-700">
                      Apri
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Concepts strip — dark band, like a section divider */}
          <section className="mt-10 md:mt-14">
            <div className="rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-7 md:p-10 text-ink-50 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-400">
                Argomenti coperti
              </p>
              <h2 className="mt-2 text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] text-white">
                Concetti e modelli della presentazione
              </h2>
              <div className="mt-6 grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "LOC · SLOC · KLOC",
                  "Function Points · UFP",
                  "IFPUG 4.3.1",
                  "ILF · EIF · EI · EO · EQ",
                  "DET · RET · FTR",
                  "GSC · VAF · TDI",
                  "Backfiring · BAF",
                  "COCOMO base/intermedio/II",
                  "SLIM · Rayleigh-Norden",
                  "Walston-Felix · Bailey-Basili",
                  "COBRA · Delphi",
                  "McCall · Boehm · ISO 9126",
                  "ISO/IEC 15504 (SPICE)",
                  "Errori · Difetti · Failure",
                  "CMM · Process Maturity",
                  "Qualità in uso",
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-ink-700/60 bg-ink-800/40 px-3 py-2 text-[12px] text-ink-100/90"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <footer className="mt-12 border-t border-ink-100 pt-5 pb-8 text-[12px] text-ink-500">
            <p>
              Unità 6 — Metriche per la stima dei costi nei progetti informatici.
              Materiale didattico tratto dal capitolo originale (Hoepli).
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 text-[14px]">
      <dt className="text-ink-500">{k}</dt>
      <dd className="font-semibold tabular-nums text-ink-900">{v}</dd>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="mx-0.5 inline-block rounded border border-ink-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-ink-700">
      {children}
    </kbd>
  );
}
