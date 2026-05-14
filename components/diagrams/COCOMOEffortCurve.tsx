/**
 * Visualizes how COCOMO effort scales with project size, showing the
 * three modes diverging. Teaches *why* the exponent b matters.
 * x = KLOC (project size), y = effort (mesi-persona)
 *
 *   organic     M = 2.4  · S^1.05
 *   semi        M = 3.0  · S^1.12
 *   embedded    M = 3.6  · S^1.20
 */
export function COCOMOEffortCurve() {
  const w = 760;
  const h = 360;
  const padX = 60;
  const padY = 40;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;

  const maxKLOC = 120;
  // compute peak effort to scale y
  const eMax = 3.6 * Math.pow(maxKLOC, 1.2);

  const modes = [
    { name: "Organic", color: "#356cff", a: 2.4, b: 1.05 },
    { name: "Semi-detached", color: "#1d4eef", a: 3.0, b: 1.12 },
    { name: "Embedded", color: "#1832a8", a: 3.6, b: 1.2 },
  ];

  const path = (a: number, b: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const kloc = (i / 60) * maxKLOC;
      const eff = a * Math.pow(Math.max(kloc, 0.1), b);
      const x = padX + (kloc / maxKLOC) * innerW;
      const y = padY + innerH - (eff / eMax) * innerH;
      pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(" ");
  };

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label="Curve di sforzo COCOMO per i tre modi">
        {/* grid */}
        {[0.25, 0.5, 0.75].map((t, i) => (
          <line
            key={i}
            x1={padX}
            y1={padY + innerH * t}
            x2={w - padX}
            y2={padY + innerH * t}
            stroke="#eceef2"
          />
        ))}
        {/* axes */}
        <line x1={padX} y1={padY} x2={padX} y2={h - padY} stroke="#aeb5c6" strokeWidth="1.5" />
        <line x1={padX} y1={h - padY} x2={w - padX} y2={h - padY} stroke="#aeb5c6" strokeWidth="1.5" />

        {/* x labels */}
        {[20, 40, 60, 80, 100, 120].map((tick) => {
          const x = padX + (tick / maxKLOC) * innerW;
          return (
            <g key={tick}>
              <line x1={x} y1={h - padY} x2={x} y2={h - padY + 4} stroke="#aeb5c6" />
              <text x={x} y={h - padY + 18} textAnchor="middle" fontSize="11" fill="#5b6781">
                {tick}
              </text>
            </g>
          );
        })}
        <text x={w - padX} y={h - padY + 35} textAnchor="end" fontSize="11" fill="#5b6781" fontWeight="600">
          dimensione (KLOC)
        </text>
        <text x={padX - 10} y={padY + 5} textAnchor="end" fontSize="11" fill="#5b6781" fontWeight="600">
          sforzo (MM)
        </text>

        {/* curves */}
        {modes.map((m, i) => (
          <path key={m.name} d={path(m.a, m.b)} fill="none" stroke={m.color} strokeWidth={i === 2 ? 3 : 2.5} />
        ))}

        {/* end-of-curve labels */}
        {modes.map((m, i) => {
          const eff = m.a * Math.pow(maxKLOC, m.b);
          const x = padX + innerW;
          const y = padY + innerH - (eff / eMax) * innerH;
          return (
            <g key={m.name}>
              <circle cx={x} cy={y} r="4" fill={m.color} />
              <text x={x + 8} y={y + 4} fontSize="12" fontWeight="700" fill={m.color}>
                {m.name}
              </text>
              <text x={x + 8} y={y + 18} fontSize="10" fill="#5b6781">
                b = {m.b}
              </text>
            </g>
          );
        })}

        {/* annotation: at 60 KLOC, see the spread */}
        <g>
          <line x1={padX + (60 / maxKLOC) * innerW} y1={padY} x2={padX + (60 / maxKLOC) * innerW} y2={h - padY} stroke="#aeb5c6" strokeDasharray="3 4" />
          <text x={padX + (60 / maxKLOC) * innerW + 6} y={padY + 14} fontSize="10" fill="#3a4256">
            stesso software, 60 KLOC →
          </text>
          {modes.map((m, i) => {
            const eff = m.a * Math.pow(60, m.b);
            const x = padX + (60 / maxKLOC) * innerW;
            const y = padY + innerH - (eff / eMax) * innerH;
            return (
              <g key={`anchor-${i}`}>
                <circle cx={x} cy={y} r="3" fill="#fff" stroke={m.color} strokeWidth="2" />
                <text x={x + 6} y={y - 4} fontSize="10" fill={m.color} fontWeight="700">
                  {Math.round(eff)} MM
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
