/**
 * Teaches the LOC vs Function Points tradeoff at a glance.
 * Left = LOC (concrete, low-level), Right = FP (functional, high-level).
 * The middle axis labels what each metric "sees".
 */
export function LOCvsFPCompare() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 760 320" className="w-full h-auto" role="img" aria-label="LOC vs Function Points">
        {/* central axis */}
        <line x1="380" y1="40" x2="380" y2="290" stroke="#d4d8e2" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="380" y="30" textAnchor="middle" fontSize="11" fill="#5b6781" fontWeight="700" letterSpacing="2">
          COSA MISURA?
        </text>

        {/* LOC side */}
        <g>
          <rect x="20" y="50" width="320" height="50" rx="10" fill="#1d4eef" />
          <text x="180" y="78" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="18" letterSpacing="2">
            LOC
          </text>
          <text x="180" y="95" textAnchor="middle" fill="#bcd4ff" fontSize="11">
            Lines Of Code
          </text>

          {/* anchor: "vede" il codice */}
          <text x="180" y="130" textAnchor="middle" fontSize="11" fill="#5b6781" fontWeight="700" letterSpacing="2">
            VEDE IL CODICE
          </text>

          {/* code icon */}
          <rect x="60" y="140" width="240" height="125" rx="8" fill="#f6f7f9" stroke="#d4d8e2" />
          {[155, 175, 195, 215, 235].map((y, i) => (
            <rect
              key={i}
              x="78"
              y={y}
              width={[140, 90, 160, 110, 130][i]}
              height="6"
              rx="3"
              fill={i === 1 ? "#aeb5c6" : "#3a4256"}
              opacity={i === 1 ? "0.6" : "0.85"}
            />
          ))}
          <text x="180" y="285" textAnchor="middle" fontSize="12" fill="#1832a8" fontWeight="600">
            dimensionale · dipende dal linguaggio
          </text>
        </g>

        {/* FP side */}
        <g>
          <rect x="420" y="50" width="320" height="50" rx="10" fill="#163cd6" />
          <text x="580" y="78" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="18" letterSpacing="2">
            FP
          </text>
          <text x="580" y="95" textAnchor="middle" fill="#bcd4ff" fontSize="11">
            Function Points
          </text>

          <text x="580" y="130" textAnchor="middle" fontSize="11" fill="#5b6781" fontWeight="700" letterSpacing="2">
            VEDE LA FUNZIONALITÀ
          </text>

          {/* user-function visual: actor + 3 function boxes */}
          <circle cx="475" cy="195" r="14" fill="#fff" stroke="#1d4eef" strokeWidth="2" />
          <path d="M475 209 L475 233 M462 219 L488 219 M475 233 L463 253 M475 233 L487 253" stroke="#1d4eef" strokeWidth="2" strokeLinecap="round" />
          <text x="475" y="270" textAnchor="middle" fontSize="10" fill="#5b6781">utente</text>

          {[
            { x: 540, y: 165, label: "I/O" },
            { x: 620, y: 165, label: "Query" },
            { x: 680, y: 165, label: "File" },
          ].map((box, i) => (
            <g key={i}>
              <rect x={box.x} y={box.y} width="50" height="50" rx="8" fill="#d9e7ff" stroke="#1d4eef" />
              <text x={box.x + 25} y={box.y + 30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#1832a8">
                {box.label}
              </text>
              <line x1="495" y1="195" x2={box.x} y2={box.y + 25} stroke="#aeb5c6" strokeWidth="1" />
            </g>
          ))}
          <text x="580" y="285" textAnchor="middle" fontSize="12" fill="#1832a8" fontWeight="600">
            funzionale · indipendente dalla tecnologia
          </text>
        </g>
      </svg>
    </div>
  );
}
