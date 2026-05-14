export function TransactionMap() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 720 380" className="w-full h-auto" role="img" aria-label="Mappa delle transazioni IFPUG">
        <defs>
          <linearGradient id="userDomain" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#bcd4ff" />
            <stop offset="100%" stopColor="#8db8ff" />
          </linearGradient>
        </defs>
        {/* User domain */}
        <rect x="40" y="30" width="640" height="50" rx="10" fill="url(#userDomain)" stroke="#356cff" strokeWidth="1.5" />
        <text x="360" y="60" textAnchor="middle" fontWeight="700" fontSize="14" fill="#11131d">DOMINIO UTENTE</text>

        {/* Transaction boxes */}
        <g transform="translate(0,120)">
          <rect x="120" y="0" width="120" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="180" y="35" textAnchor="middle" fontWeight="700" fontSize="14" fill="#92400e">EI</text>
          <rect x="300" y="0" width="120" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="360" y="35" textAnchor="middle" fontWeight="700" fontSize="14" fill="#92400e">EO</text>
          <rect x="480" y="0" width="120" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="540" y="35" textAnchor="middle" fontWeight="700" fontSize="14" fill="#92400e">EQ</text>
        </g>

        {/* Connector to user */}
        <g stroke="#aeb5c6" strokeWidth="1.2">
          <line x1="180" y1="80" x2="180" y2="120" />
          <line x1="360" y1="80" x2="360" y2="120" />
          <line x1="540" y1="80" x2="540" y2="120" />
        </g>

        {/* Boundary box */}
        <rect x="40" y="220" width="400" height="130" rx="14" fill="#f6f7f9" stroke="#7e88a1" strokeWidth="1.2" strokeDasharray="6 5" />
        <text x="240" y="345" textAnchor="middle" fontSize="11" fill="#5b6781">Confine delle attività</text>

        {/* ILF inside boundary */}
        <rect x="100" y="245" width="160" height="60" rx="10" fill="#dbeafe" stroke="#1d4eef" strokeWidth="1.5" />
        <text x="180" y="280" textAnchor="middle" fontWeight="700" fontSize="14" fill="#163cd6">ILF</text>

        {/* EIF outside boundary */}
        <rect x="500" y="245" width="160" height="60" rx="10" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
        <text x="580" y="280" textAnchor="middle" fontWeight="700" fontSize="14" fill="#831843" >EIF</text>
        <text x="580" y="345" textAnchor="middle" fontSize="11" fill="#5b6781">Altre attività e/o applicazioni</text>

        {/* lines transaction->ilf/eif */}
        <g stroke="#aeb5c6" strokeWidth="1.2" strokeDasharray="4 4">
          <line x1="180" y1="180" x2="180" y2="245" />
          <line x1="360" y1="180" x2="360" y2="245" />
          <line x1="360" y1="245" x2="260" y2="245" />
          <line x1="540" y1="180" x2="540" y2="245" />
          <line x1="540" y1="245" x2="500" y2="245" />
        </g>
      </svg>
    </div>
  );
}
