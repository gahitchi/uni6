/**
 * Where errors are introduced across the project lifecycle.
 * Visualizes the source-PDF stat (campione di 100 progetti) as a
 * horizontal bar chart sized by percentage.
 */
const phases = [
  { name: "Requisiti", pct: 3, color: "#bcd4ff" },
  { name: "Analisi e progettazione", pct: 7, color: "#8db8ff" },
  { name: "Codifica & test unitario", pct: 53, color: "#1d4eef" },
  { name: "Test di integrazione", pct: 21, color: "#356cff" },
  { name: "Test di sistema", pct: 11, color: "#5a92ff" },
  { name: "Esercizio", pct: 5, color: "#bcd4ff" },
];

export function ErrorPhaseTimeline() {
  const total = phases.reduce((s, p) => s + p.pct, 0);
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-700">
          Distribuzione errori per fase
        </p>
        <p className="text-[11px] text-ink-500">
          fonte: campione di 100 progetti
        </p>
      </div>

      {/* Composite bar */}
      <div className="mt-4 flex h-10 overflow-hidden rounded-xl border border-ink-200">
        {phases.map((p, i) => (
          <div
            key={p.name}
            className="relative flex items-center justify-center text-[11px] font-bold text-white"
            style={{ width: `${(p.pct / total) * 100}%`, backgroundColor: p.color }}
          >
            {p.pct >= 8 && <span>{p.pct}%</span>}
          </div>
        ))}
      </div>

      {/* Phase labels with their bars */}
      <ul className="mt-5 space-y-2.5">
        {phases.map((p) => (
          <li key={p.name} className="flex items-center gap-3">
            <span
              className="h-3 w-3 flex-shrink-0 rounded-sm"
              style={{ backgroundColor: p.color }}
            />
            <span className="flex-1 text-[14px] text-ink-700">{p.name}</span>
            <div className="hidden md:block h-2 w-40 overflow-hidden rounded-full bg-ink-100">
              <div
                className="h-full rounded-full"
                style={{ width: `${(p.pct / 53) * 100}%`, backgroundColor: p.color }}
              />
            </div>
            <span className="w-10 text-right text-[14px] font-semibold tabular-nums text-ink-900">
              {p.pct}%
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[13px] leading-relaxed text-ink-600">
        <span className="font-semibold text-accent-700">→ </span>
        Il grosso degli errori emerge in <strong>codifica e test</strong> (74 %),
        ma continua a manifestarsi anche dopo il rilascio, almeno nei primi
        <strong> 18 mesi</strong> di attività.
      </p>
    </div>
  );
}
