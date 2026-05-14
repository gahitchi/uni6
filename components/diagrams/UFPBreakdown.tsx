export function UFPBreakdown() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 720 320" className="w-full h-auto" role="img" aria-label="Struttura del calcolo UFP">
        <defs>
          <linearGradient id="rootGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#356cff" />
            <stop offset="100%" stopColor="#1d4eef" />
          </linearGradient>
          <linearGradient id="branchGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        {/* root */}
        <g>
          <rect x="20" y="125" width="190" height="70" rx="10" fill="url(#rootGrad)" />
          <text x="115" y="158" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="13">UNADJUSTED</text>
          <text x="115" y="178" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="13">FUNCTION POINT COUNT</text>
        </g>
        {/* branches */}
        <g>
          <line x1="210" y1="160" x2="280" y2="90" stroke="#aeb5c6" strokeWidth="1.5" />
          <line x1="210" y1="160" x2="280" y2="230" stroke="#aeb5c6" strokeWidth="1.5" />
          <rect x="280" y="60" width="180" height="60" rx="10" fill="url(#branchGrad)" />
          <text x="370" y="88" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="12">1. DATA FUNCTIONS</text>
          <text x="370" y="105" textAnchor="middle" fill="#fff" fontSize="11">ILF · EIF</text>
          <rect x="280" y="200" width="180" height="60" rx="10" fill="url(#branchGrad)" />
          <text x="370" y="228" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="12">2. TRANSACTIONAL</text>
          <text x="370" y="245" textAnchor="middle" fill="#fff" fontSize="11">EI · EO · EQ</text>
        </g>
        {/* leaves data */}
        <g>
          <line x1="460" y1="90" x2="510" y2="60" stroke="#aeb5c6" strokeWidth="1" />
          <line x1="460" y1="90" x2="510" y2="120" stroke="#aeb5c6" strokeWidth="1" />
          <rect x="510" y="42" width="180" height="36" rx="8" fill="#eef5ff" stroke="#8db8ff" />
          <text x="600" y="65" textAnchor="middle" fill="#1832a8" fontWeight="600" fontSize="11">INTERNAL LOGICAL FILES — ILF</text>
          <rect x="510" y="102" width="180" height="36" rx="8" fill="#eef5ff" stroke="#8db8ff" />
          <text x="600" y="125" textAnchor="middle" fill="#1832a8" fontWeight="600" fontSize="11">EXTERNAL INTERFACE FILES — EIF</text>
        </g>
        {/* leaves transactional */}
        <g>
          <line x1="460" y1="230" x2="510" y2="180" stroke="#aeb5c6" strokeWidth="1" />
          <line x1="460" y1="230" x2="510" y2="230" stroke="#aeb5c6" strokeWidth="1" />
          <line x1="460" y1="230" x2="510" y2="280" stroke="#aeb5c6" strokeWidth="1" />
          <rect x="510" y="162" width="180" height="36" rx="8" fill="#fef3c7" stroke="#fbbf24" />
          <text x="600" y="185" textAnchor="middle" fill="#92400e" fontWeight="600" fontSize="11">EXTERNAL INPUTS — EI</text>
          <rect x="510" y="212" width="180" height="36" rx="8" fill="#fef3c7" stroke="#fbbf24" />
          <text x="600" y="235" textAnchor="middle" fill="#92400e" fontWeight="600" fontSize="11">EXTERNAL OUTPUTS — EO</text>
          <rect x="510" y="262" width="180" height="36" rx="8" fill="#fef3c7" stroke="#fbbf24" />
          <text x="600" y="285" textAnchor="middle" fill="#92400e" fontWeight="600" fontSize="11">EXTERNAL INQUIRIES — EQ</text>
        </g>
      </svg>
    </div>
  );
}
