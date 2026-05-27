export function ProductPyramid() {
  // Three macro-phases as stacked, full-width tiers — each tier has the whole
  // width for its factor list, so the labels never collide (the old triangle
  // crammed long factor strings into the two bottom corners and they overlapped).
  const tiers = [
    {
      name: "Product Revision",
      factors: "Manutenibilità · Flessibilità · Testabilità",
      x: 170,
      w: 340,
    },
    {
      name: "Product Transition",
      factors: "Portabilità · Interoperabilità · Riusabilità",
      x: 95,
      w: 490,
    },
    {
      name: "Product Operations",
      factors: "Correttezza · Affidabilità · Efficienza · Integrità · Usabilità",
      x: 20,
      w: 640,
    },
  ];
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 680 320" className="w-full h-auto" role="img" aria-label="Tre macrofasi del software e gli 11 fattori di qualità">
        <text x="340" y="22" textAnchor="middle" fontWeight="800" fontSize="15" fill="#1c2030">
          11 fattori di qualità
        </text>
        <text x="340" y="42" textAnchor="middle" fontSize="11" fill="#5b6781">
          McCall (1977) · Boehm (1978)
        </text>
        {tiers.map((t, i) => {
          const y = 66 + i * 82;
          return (
            <g key={t.name}>
              <rect
                x={t.x}
                y={y}
                width={t.w}
                height={68}
                rx="12"
                fill="#eef5ff"
                stroke="#8db8ff"
              />
              <text x={t.x + 22} y={y + 28} fontWeight="700" fontSize="14" fill="#1832a8">
                {t.name}
              </text>
              <text x={t.x + 22} y={y + 50} fontSize="12.5" fill="#1c2030">
                {t.factors}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
