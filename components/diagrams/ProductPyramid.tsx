export function ProductPyramid() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 600 360" className="w-full h-auto" role="img" aria-label="Tre macrofasi del software">
        <defs>
          <linearGradient id="t1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#356cff" />
            <stop offset="100%" stopColor="#1832a8" />
          </linearGradient>
        </defs>
        {/* triangle outline */}
        <polygon points="300,40 540,320 60,320" fill="none" stroke="#356cff" strokeWidth="2.5" />

        {/* Top vertex - Product Revision */}
        <circle cx="300" cy="40" r="14" fill="url(#t1)" />
        <text x="300" y="18" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1c2030">Product Revision</text>
        <text x="300" y="78" textAnchor="middle" fontSize="11" fill="#1c2030">Manutenibilità · Flessibilità · Testabilità</text>

        {/* Bottom right - Product Transition */}
        <circle cx="540" cy="320" r="14" fill="url(#t1)" />
        <text x="540" y="345" textAnchor="end" fontWeight="700" fontSize="14" fill="#1c2030">Product Transition</text>
        <text x="540" y="305" textAnchor="end" fontSize="11" fill="#1c2030">Portabilità · Interoperabilità · Riusabilità</text>

        {/* Bottom left - Product Operations */}
        <circle cx="60" cy="320" r="14" fill="url(#t1)" />
        <text x="60" y="345" textAnchor="start" fontWeight="700" fontSize="14" fill="#1c2030">Product Operations</text>
        <text x="60" y="305" textAnchor="start" fontSize="11" fill="#1c2030">Correttezza · Affidabilità · Efficienza · Integrità · Usabilità</text>

        {/* Center */}
        <text x="300" y="200" textAnchor="middle" fontWeight="800" fontSize="16" fill="#1c2030">11 FATTORI</text>
        <text x="300" y="220" textAnchor="middle" fontSize="11" fill="#1c2030">McCall (1977) · Boehm (1978)</text>
      </svg>
    </div>
  );
}
