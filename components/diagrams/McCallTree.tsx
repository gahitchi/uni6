export function McCallTree() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 720 280" className="w-full h-auto" role="img" aria-label="Architettura McCall-Boehm">
        <defs>
          <linearGradient id="mc1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1d4eef" />
            <stop offset="100%" stopColor="#163cd6" />
          </linearGradient>
        </defs>
        {/* connecting lines */}
        <line x1="120" y1="80" x2="360" y2="80" stroke="#d4d8e2" strokeWidth="2" />
        <line x1="360" y1="80" x2="360" y2="140" stroke="#d4d8e2" strokeWidth="2" />
        <line x1="360" y1="200" x2="600" y2="200" stroke="#d4d8e2" strokeWidth="2" />

        {/* level 1 - Fattori */}
        <rect x="20" y="55" width="200" height="50" rx="10" fill="url(#mc1)" />
        <text x="120" y="78" textAnchor="middle" fontWeight="700" fontSize="13" fill="#fff">Fattori (11)</text>
        <text x="120" y="96" textAnchor="middle" fontSize="11" fill="#bcd4ff">vista utente</text>

        {/* level 2 - Criteri */}
        <rect x="260" y="55" width="200" height="50" rx="10" fill="#356cff" />
        <text x="360" y="78" textAnchor="middle" fontWeight="700" fontSize="13" fill="#fff">Criteri (23)</text>
        <text x="360" y="96" textAnchor="middle" fontSize="11" fill="#bcd4ff">vista sviluppatore</text>

        {/* level 3 - Metriche */}
        <rect x="500" y="170" width="200" height="50" rx="10" fill="#5a92ff" />
        <text x="600" y="193" textAnchor="middle" fontWeight="700" fontSize="13" fill="#fff">Metriche (290+)</text>
        <text x="600" y="211" textAnchor="middle" fontSize="11" fill="#dbeafe">misure quantitative</text>

        {/* arrows */}
        <text x="240" y="40" fontSize="11" fill="#5b6781">è dipendente da</text>
        <text x="240" y="138" fontSize="11" fill="#5b6781">si misura tramite</text>
      </svg>
    </div>
  );
}
