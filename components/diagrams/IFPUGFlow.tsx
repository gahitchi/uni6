const phases = [
  { n: 1, title: "Pianificazione", desc: "Identificazione del tipo di conteggio" },
  { n: 2, title: "Raccolta documenti", desc: "Identificazione del confine" },
  { n: 3, title: "Inventario funzioni", desc: "Calcolo FP non pesati (UFP)" },
  { n: 4, title: "Classificazione", desc: "EI / EO / EQ / ILF / EIF" },
  { n: 5, title: "GSC & VAF", desc: "14 caratteristiche generali" },
  { n: 6, title: "Tabulazione", desc: "Calcolo finale degli FP" },
  { n: 7, title: "Convalida", desc: "Check list e revisione" },
];

export function IFPUGFlow() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="grid gap-3 md:grid-cols-7">
        {phases.map((p, idx) => (
          <div key={p.n} className="relative">
            <div className="flex h-full flex-col rounded-xl border border-accent-100 bg-gradient-to-b from-accent-50/60 to-white p-3 transition-shadow hover:shadow-glow">
              <div className="mb-2 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-600 text-xs font-bold text-white">
                  {p.n}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-700">
                  Fase
                </span>
              </div>
              <p className="text-sm font-semibold leading-tight text-ink-900">
                {p.title}
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-500">
                {p.desc}
              </p>
            </div>
            {idx < phases.length - 1 && (
              <svg
                className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 text-accent-300 md:block"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10m0 0L8 3m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
