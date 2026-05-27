export function RayleighNorden() {
  const w = 720;
  const h = 280;
  const padX = 56;
  const padY = 30;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;

  // Rayleigh: dM/dt = K/t_d² · t · e^(−t² / 2t_d²)
  // td = 10, K scaled to fit
  const td = 10;
  const max = (1 / td) * Math.exp(-0.5); // peak at t=td
  const pts: [number, number][] = [];
  for (let i = 0; i <= 35; i++) {
    const t = i;
    const v = (t / (td * td)) * Math.exp(-(t * t) / (2 * td * td));
    const x = padX + (i / 35) * innerW;
    const y = padY + innerH - (v / max) * innerH;
    pts.push([x, y]);
  }
  const path = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${path} L ${pts[pts.length - 1][0]} ${padY + innerH} L ${pts[0][0]} ${padY + innerH} Z`;

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox={`0 0 ${w} ${h + 40}`} className="w-full h-auto" role="img" aria-label="Curva Rayleigh-Norden">
        <defs>
          <linearGradient id="rn" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#356cff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#356cff" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* axes */}
        <line x1={padX} y1={padY} x2={padX} y2={h - padY} stroke="#aeb5c6" />
        <line x1={padX} y1={h - padY} x2={w - padX} y2={h - padY} stroke="#aeb5c6" />
        {/* curve */}
        <path d={area} fill="url(#rn)" />
        <path d={path} stroke="#1d4eef" strokeWidth="2.5" fill="none" />
        {/* td line */}
        {(() => {
          const xTd = padX + (td / 35) * innerW;
          return (
            <>
              <line x1={xTd} y1={padY} x2={xTd} y2={h - padY} stroke="#f59e0b" strokeDasharray="4 4" />
              <text x={xTd} y={padY - 6} textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="600">
                t_d (picco)
              </text>
            </>
          );
        })()}
        {/* labels */}
        <text x={padX - 8} y={padY - 6} textAnchor="end" fontSize="11" fill="#5b6781">dM/dt</text>
        <text x={w - padX + 14} y={h - padY + 5} textAnchor="start" fontSize="11" fill="#5b6781">t</text>
        {[5, 10, 15, 20, 25, 30, 35].map((tick) => {
          const x = padX + (tick / 35) * innerW;
          return (
            <g key={tick}>
              <line x1={x} y1={h - padY} x2={x} y2={h - padY + 4} stroke="#aeb5c6" />
              <text x={x} y={h - padY + 16} textAnchor="middle" fontSize="10" fill="#5b6781">{tick}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
