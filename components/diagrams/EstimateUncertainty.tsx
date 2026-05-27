export function EstimateUncertainty() {
  const phases = [
    "Fattibilità",
    "Requisiti",
    "Macro design",
    "Micro design",
    "Sviluppo & Test",
  ];
  const w = 720;
  const h = 280;
  const padX = 60;
  const padY = 30;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;

  const baseY = padY + innerH / 2;
  const points = phases.length;
  // Upper curve (4 → 1 multiplier of cost)
  const upper = Array.from({ length: points }, (_, i) => {
    const x = padX + (innerW / (points - 1)) * i;
    const f = 1 - i / (points - 1);
    const y = baseY - (Math.pow(f, 1.5) * innerH) / 2.2;
    return [x, y];
  });
  // Lower curve (1/4 → 1)
  const lower = Array.from({ length: points }, (_, i) => {
    const x = padX + (innerW / (points - 1)) * i;
    const f = 1 - i / (points - 1);
    const y = baseY + (Math.pow(f, 1.5) * innerH) / 2.2;
    return [x, y];
  });

  const upperPath = upper.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const lowerPath = lower.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const area = `${upperPath} L ${lower[lower.length - 1][0]} ${lower[lower.length - 1][1]} ${lower
    .slice()
    .reverse()
    .map(([x, y]) => `L ${x} ${y}`)
    .join(" ")} Z`;

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox={`0 0 ${w} ${h + 40}`} className="w-full h-auto" role="img" aria-label="Cono di incertezza">
        {/* axes */}
        <line x1={padX} y1={padY} x2={padX} y2={h - padY} stroke="#aeb5c6" />
        <line x1={padX} y1={baseY} x2={w - padX} y2={baseY} stroke="#aeb5c6" strokeDasharray="3 3" />
        <text x={w - padX} y={baseY - 8} textAnchor="end" fontSize="11" fill="#5b6781">
          stima reale
        </text>
        {/* y labels */}
        {[
          { y: padY + 10, label: "×4" },
          { y: baseY - 60, label: "×2" },
          { y: baseY, label: "×1" },
          { y: baseY + 60, label: "½" },
          { y: h - padY - 10, label: "¼" },
        ].map((t, i) => (
          <text key={i} x={padX - 10} y={t.y + 4} textAnchor="end" fontSize="11" fill="#5b6781">
            {t.label}
          </text>
        ))}
        {/* phase labels */}
        {phases.map((p, i) => {
          const x = padX + (innerW / (points - 1)) * i;
          return (
            <g key={i}>
              <line x1={x} y1={padY} x2={x} y2={h - padY} stroke="#eceef2" />
              <text x={x} y={h - padY + 18} textAnchor="middle" fontSize="11" fill="#5b6781">
                {p}
              </text>
            </g>
          );
        })}
        {/* area */}
        <path d={area} fill="rgba(53,108,255,0.10)" />
        <path d={upperPath} stroke="#356cff" strokeWidth="2" fill="none" />
        <path d={lowerPath} stroke="#356cff" strokeWidth="2" fill="none" />
      </svg>
      <p className="mt-2 text-xs text-ink-500">
        Cono di incertezza dei costi: lo scostamento si restringe man mano che il progetto matura.
      </p>
    </div>
  );
}
