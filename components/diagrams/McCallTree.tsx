export function McCallTree() {
  // Linear left-to-right flow (matches the caption: Fattori → Criteri → Metriche).
  // Replaces the old L-shaped layout whose connector had a visible gap.
  const W = 210;
  const Y = 58;
  const H = 64;
  const boxes = [
    { x: 20, fill: "url(#mc1)", t1: "Fattori (11)", t2: "vista utente", sub: "#bcd4ff" },
    { x: 275, fill: "#356cff", t1: "Criteri (23)", t2: "vista sviluppatore", sub: "#bcd4ff" },
    { x: 530, fill: "#5a92ff", t1: "Metriche (290+)", t2: "misure quantitative", sub: "#dbeafe" },
  ];
  const links = [
    { x1: 230, x2: 273, label: "è dipendente da", lx: 251 },
    { x1: 485, x2: 528, label: "si misura tramite", lx: 506 },
  ];
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 760 165" className="w-full h-auto" role="img" aria-label="Architettura McCall-Boehm a tre livelli">
        <defs>
          <linearGradient id="mc1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1d4eef" />
            <stop offset="100%" stopColor="#163cd6" />
          </linearGradient>
          <marker id="mcArrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="#aeb5c6" />
          </marker>
        </defs>
        {links.map((c, i) => (
          <g key={i}>
            <line
              x1={c.x1}
              y1={Y + H / 2}
              x2={c.x2}
              y2={Y + H / 2}
              stroke="#aeb5c6"
              strokeWidth="2"
              markerEnd="url(#mcArrow)"
            />
            <text x={c.lx} y={Y - 14} textAnchor="middle" fontSize="10.5" fill="#5b6781">
              {c.label}
            </text>
          </g>
        ))}
        {boxes.map((b) => (
          <g key={b.t1}>
            <rect x={b.x} y={Y} width={W} height={H} rx="12" fill={b.fill} />
            <text x={b.x + W / 2} y={Y + 27} textAnchor="middle" fontWeight="700" fontSize="13" fill="#fff">
              {b.t1}
            </text>
            <text x={b.x + W / 2} y={Y + 47} textAnchor="middle" fontSize="11" fill={b.sub}>
              {b.t2}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
