/**
 * Decision tree teaching *which* cost-estimation method to choose,
 * based on situation. Turns the Boehm taxonomy from a static category
 * tree into an actionable choice flow.
 */
export function EstimationDecisionTree() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <svg viewBox="0 0 760 420" className="w-full h-auto" role="img" aria-label="Albero decisionale dei metodi di stima">
        {/* Q1 — root */}
        <rect x="280" y="10" width="200" height="50" rx="10" fill="#1d4eef" />
        <text x="380" y="34" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="13">
          Ho dati storici?
        </text>
        <text x="380" y="50" textAnchor="middle" fill="#bcd4ff" fontSize="11">
          (progetti simili documentati)
        </text>

        {/* branch labels */}
        <text x="180" y="78" textAnchor="middle" fontSize="11" fill="#5b6781" fontWeight="700">
          Sì
        </text>
        <text x="580" y="78" textAnchor="middle" fontSize="11" fill="#5b6781" fontWeight="700">
          No
        </text>

        <line x1="340" y1="60" x2="180" y2="90" stroke="#aeb5c6" strokeWidth="1.5" />
        <line x1="420" y1="60" x2="580" y2="90" stroke="#aeb5c6" strokeWidth="1.5" />

        {/* Q2 left — modelli */}
        <rect x="80" y="90" width="200" height="50" rx="10" fill="#d9e7ff" stroke="#1d4eef" />
        <text x="180" y="114" textAnchor="middle" fill="#1832a8" fontWeight="700" fontSize="12">
          Requisiti stabili?
        </text>
        <text x="180" y="130" textAnchor="middle" fill="#3a4256" fontSize="10">
          progetto già delineato
        </text>

        {/* Q2 right — esperti */}
        <rect x="480" y="90" width="200" height="50" rx="10" fill="#d9e7ff" stroke="#1d4eef" />
        <text x="580" y="114" textAnchor="middle" fill="#1832a8" fontWeight="700" fontSize="12">
          Esperti disponibili?
        </text>
        <text x="580" y="130" textAnchor="middle" fill="#3a4256" fontSize="10">
          consulenti del dominio
        </text>

        {/* leaves left (data-driven path) */}
        <line x1="140" y1="140" x2="80" y2="180" stroke="#aeb5c6" strokeWidth="1.5" />
        <line x1="220" y1="140" x2="280" y2="180" stroke="#aeb5c6" strokeWidth="1.5" />
        <text x="105" y="160" textAnchor="middle" fontSize="10" fill="#5b6781" fontWeight="700">Sì</text>
        <text x="255" y="160" textAnchor="middle" fontSize="10" fill="#5b6781" fontWeight="700">No</text>

        {/* leaf: COCOMO */}
        <rect x="20" y="180" width="120" height="60" rx="10" fill="#fff" stroke="#1d4eef" strokeWidth="2" />
        <text x="80" y="205" textAnchor="middle" fontWeight="800" fontSize="14" fill="#1d4eef">COCOMO</text>
        <text x="80" y="222" textAnchor="middle" fontSize="10" fill="#5b6781">modello consolidato</text>

        {/* leaf: SLIM */}
        <rect x="160" y="180" width="120" height="60" rx="10" fill="#fff" stroke="#1d4eef" strokeWidth="2" />
        <text x="220" y="205" textAnchor="middle" fontWeight="800" fontSize="14" fill="#1d4eef">SLIM</text>
        <text x="220" y="222" textAnchor="middle" fontSize="10" fill="#5b6781">progetti grandi (&gt; 70 KLOC)</text>

        {/* leaves right */}
        <line x1="540" y1="140" x2="480" y2="180" stroke="#aeb5c6" strokeWidth="1.5" />
        <line x1="620" y1="140" x2="680" y2="180" stroke="#aeb5c6" strokeWidth="1.5" />
        <text x="505" y="160" textAnchor="middle" fontSize="10" fill="#5b6781" fontWeight="700">Sì</text>
        <text x="655" y="160" textAnchor="middle" fontSize="10" fill="#5b6781" fontWeight="700">No</text>

        {/* leaf: Delphi */}
        <rect x="420" y="180" width="120" height="60" rx="10" fill="#fff" stroke="#1d4eef" strokeWidth="2" />
        <text x="480" y="205" textAnchor="middle" fontWeight="800" fontSize="14" fill="#1d4eef">Delphi</text>
        <text x="480" y="222" textAnchor="middle" fontSize="10" fill="#5b6781">consenso esperti</text>

        {/* leaf: Analogia */}
        <rect x="560" y="180" width="180" height="60" rx="10" fill="#fff" stroke="#1d4eef" strokeWidth="2" />
        <text x="650" y="205" textAnchor="middle" fontWeight="800" fontSize="14" fill="#1d4eef">Analogia / COBRA</text>
        <text x="650" y="222" textAnchor="middle" fontSize="10" fill="#5b6781">ibrido + esperienza</text>

        {/* legend / annotation */}
        <g>
          <rect x="80" y="290" width="600" height="100" rx="14" fill="#f6f7f9" stroke="#d4d8e2" />
          <text x="380" y="315" textAnchor="middle" fontSize="11" fill="#5b6781" fontWeight="700" letterSpacing="2">
            REGOLE PRATICHE
          </text>
          <text x="100" y="340" fontSize="12" fill="#1c2030">• Niente dati né esperti → stima Parkinson o Price-to-win (rischiose)</text>
          <text x="100" y="358" fontSize="12" fill="#1c2030">• Progetto grande con storico ricco → COCOMO II Post-Architecture</text>
          <text x="100" y="376" fontSize="12" fill="#1c2030">• Tecnologia nuova senza precedenti → Delphi Wideband per ridurre il bias</text>
        </g>
      </svg>
    </div>
  );
}
