const items = [
  "Comunicazione dati",
  "Elaborazione distribuita",
  "Prestazioni",
  "Configurazione intensa",
  "Tasso transazioni",
  "Immissione online",
  "Efficienza utente",
  "Aggiornamento online",
  "Complessità elaborazione",
  "Riusabilità",
  "Facilità installazione",
  "Facilità operativa",
  "Installazioni multiple",
  "Modificabilità",
];

export function GSCWheel() {
  const cx = 220;
  const cy = 220;
  const radius = 165;
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
        <svg viewBox="0 0 440 440" className="w-full max-w-[360px]" role="img" aria-label="Le 14 GSC">
          <circle cx={cx} cy={cy} r={radius + 30} fill="#f1f5ff" />
          <circle cx={cx} cy={cy} r={radius} fill="white" stroke="#d4d8e2" />
          <circle cx={cx} cy={cy} r={70} fill="#1d4eef" />
          <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontWeight="700" fontSize="14">14 GSC</text>
          <text x={cx} y={cy + 14} textAnchor="middle" fill="#bcd4ff" fontSize="11">→ VAF</text>
          {items.map((label, i) => {
            const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={22} fill="#fef3c7" stroke="#f59e0b" />
                <text x={x} y={y + 4} textAnchor="middle" fontWeight="700" fontSize="12" fill="#92400e">{i + 1}</text>
              </g>
            );
          })}
        </svg>
        <ol className="grid gap-1.5 text-sm md:grid-cols-2">
          {items.map((label, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-accent-100 text-[10px] font-bold text-accent-700">
                {i + 1}
              </span>
              <span className="text-ink-700">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
