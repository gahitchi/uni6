export function BackfiringFlow() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="grid gap-4 md:grid-cols-5 items-stretch">
        {[
          { label: "Function Points", value: "FP", sub: "stima funzionale" },
          { label: "Coefficiente LOC/FP", value: "× coeff", sub: "per linguaggio" },
          { label: "Cₜ = Cₚ + C_d + C_c", value: "Cₜ", sub: "complessità totale" },
          { label: "BAF", value: "= 0,7 + 0,05·(Cₜ−3)", sub: "fattore aggiustamento" },
          { label: "Dimensione applicazione", value: "LOC", sub: "FP · coeff · BAF" },
        ].map((step, i) => (
          <div
            key={i}
            className="relative flex flex-col rounded-xl border border-ink-200 bg-gradient-to-b from-white to-ink-50 p-4 shadow-sm"
          >
            <span className="mb-2 inline-block w-fit rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-700">
              Step {i + 1}
            </span>
            <p className="text-sm font-semibold text-ink-900 leading-tight">{step.label}</p>
            <p className="mt-2 font-serif italic text-accent-700">{step.value}</p>
            <p className="mt-1 text-xs text-ink-500">{step.sub}</p>
            {i < 4 && (
              <svg className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 text-accent-300 md:block" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10m0 0L8 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
