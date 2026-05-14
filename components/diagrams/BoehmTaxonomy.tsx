export function BoehmTaxonomy() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 760 360" className="w-full h-auto" role="img" aria-label="Tassonomia di Boehm">
        <defs>
          <linearGradient id="root2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#356cff" />
            <stop offset="100%" stopColor="#163cd6" />
          </linearGradient>
        </defs>
        {/* Root */}
        <rect x="290" y="10" width="180" height="55" rx="10" fill="url(#root2)" />
        <text x="380" y="44" textAnchor="middle" fontWeight="700" fontSize="14" fill="#fff">METODI DI STIMA</text>
        {/* L1 */}
        <line x1="380" y1="65" x2="200" y2="95" stroke="#aeb5c6" />
        <line x1="380" y1="65" x2="560" y2="95" stroke="#aeb5c6" />
        <rect x="80" y="95" width="240" height="50" rx="10" fill="#d9e7ff" stroke="#1d4eef" />
        <text x="200" y="125" textAnchor="middle" fontWeight="700" fontSize="13" fill="#1832a8">Metodi basati su modelli</text>
        <rect x="440" y="95" width="240" height="50" rx="10" fill="#d9e7ff" stroke="#1d4eef" />
        <text x="560" y="125" textAnchor="middle" fontWeight="700" fontSize="13" fill="#1832a8">Metodi non basati su modelli</text>
        {/* L2 (under metodi basati) */}
        <line x1="200" y1="145" x2="105" y2="180" stroke="#aeb5c6" />
        <line x1="200" y1="145" x2="295" y2="180" stroke="#aeb5c6" />
        <rect x="20" y="180" width="170" height="45" rx="8" fill="#eef5ff" stroke="#8db8ff" />
        <text x="105" y="208" textAnchor="middle" fontWeight="600" fontSize="11" fill="#1a3084">Modelli generici</text>
        <rect x="210" y="180" width="170" height="45" rx="8" fill="#eef5ff" stroke="#8db8ff" />
        <text x="295" y="208" textAnchor="middle" fontWeight="600" fontSize="11" fill="#1a3084">Modelli specifici</text>
        {/* L3 */}
        <line x1="105" y1="225" x2="55" y2="260" stroke="#aeb5c6" />
        <line x1="105" y1="225" x2="155" y2="260" stroke="#aeb5c6" />
        <rect x="0" y="260" width="105" height="40" rx="8" fill="#ffffff" stroke="#bcd4ff" />
        <text x="52" y="285" textAnchor="middle" fontSize="11" fill="#1c2030">Proprietari</text>
        <rect x="115" y="260" width="105" height="40" rx="8" fill="#ffffff" stroke="#bcd4ff" />
        <text x="167" y="285" textAnchor="middle" fontSize="11" fill="#1c2030">Non proprietari</text>

        <line x1="295" y1="225" x2="245" y2="260" stroke="#aeb5c6" />
        <line x1="295" y1="225" x2="345" y2="260" stroke="#aeb5c6" />
        <rect x="195" y="260" width="105" height="40" rx="8" fill="#ffffff" stroke="#bcd4ff" />
        <text x="247" y="285" textAnchor="middle" fontSize="11" fill="#1c2030">Data driven</text>
        <rect x="310" y="260" width="105" height="40" rx="8" fill="#ffffff" stroke="#bcd4ff" />
        <text x="362" y="285" textAnchor="middle" fontSize="11" fill="#1c2030">Composti</text>

        <line x1="560" y1="145" x2="560" y2="260" stroke="#aeb5c6" />
        <rect x="480" y="260" width="170" height="40" rx="8" fill="#f6f7f9" stroke="#aeb5c6" />
        <text x="565" y="285" textAnchor="middle" fontSize="11" fill="#3a4256">Delphi · Parkinson · Price-to-win</text>
      </svg>
    </div>
  );
}
