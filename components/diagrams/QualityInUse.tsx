const items = [
  {
    title: "Efficacia",
    desc: "Raggiungimento degli obiettivi prefissati in modo preciso e accurato",
    icon: "🎯",
  },
  {
    title: "Produttività",
    desc: "Efficienza nell'impiego delle risorse da parte dell'utente",
    icon: "⚙️",
  },
  {
    title: "Sicurezza",
    desc: "Garantisce un livello di rischio minimo per utenti e dati",
    icon: "🛡️",
  },
  {
    title: "Soddisfazione",
    desc: "Obiettivo principale per l'utilizzatore",
    icon: "✨",
  },
];

export function QualityInUse() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="mb-5 flex justify-center">
        <div className="rounded-xl border border-accent-200 bg-accent-50 px-5 py-2">
          <p className="text-sm font-bold text-accent-800">Qualità in uso</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {items.map((i) => (
          <div
            key={i.title}
            className="flex flex-col items-start gap-2 rounded-xl border border-ink-200 bg-gradient-to-b from-white to-ink-50 p-4 transition-shadow hover:shadow-card"
          >
            <span className="text-2xl">{i.icon}</span>
            <p className="font-semibold text-ink-900">{i.title}</p>
            <p className="text-xs leading-relaxed text-ink-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
