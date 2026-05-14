const characteristics = [
  { name: "Funzionalità", subs: ["Adeguatezza", "Accuratezza", "Interoperabilità", "Sicurezza", "Aderenza"] },
  { name: "Affidabilità", subs: ["Maturità", "Tolleranza ai guasti", "Recuperabilità", "Aderenza"] },
  { name: "Usabilità", subs: ["Comprensibilità", "Apprendibilità", "Operabilità", "Attrattività", "Aderenza"] },
  { name: "Efficienza", subs: ["Comportamento rispetto al tempo", "Utilizzo delle risorse", "Aderenza"] },
  { name: "Manutenibilità", subs: ["Analizzabilità", "Modificabilità", "Testabilità", "Aderenza"] },
  { name: "Portabilità", subs: ["Adattabilità", "Installabilità", "Coesistenza", "Sostituibilità", "Aderenza"] },
];

export function ISO9126Tree() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="mb-6 flex justify-center">
        <div className="rounded-xl bg-gradient-to-r from-accent-600 to-accent-700 px-6 py-3 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-wider opacity-80">ISO/IEC 9126</p>
          <p className="text-base font-bold">Qualità interna ed esterna</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-6">
        {characteristics.map((c) => (
          <div
            key={c.name}
            className="flex flex-col rounded-xl border border-emerald-200 bg-emerald-50/50 overflow-hidden"
          >
            <div className="bg-emerald-500 px-3 py-2 text-center">
              <p className="text-sm font-bold text-white">{c.name}</p>
            </div>
            <ul className="flex-1 space-y-1 p-3 text-xs">
              {c.subs.map((s) => (
                <li key={s} className="flex items-start gap-1.5 text-emerald-900/80">
                  <span className="mt-1 h-1 w-1 rounded-full bg-emerald-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
