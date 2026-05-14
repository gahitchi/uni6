const factors = ["C", "A", "E", "I", "U", "M", "T", "F", "P", "R", "IO"];
const factorNames = [
  "Correttezza",
  "Affidabilità",
  "Efficienza",
  "Integrità",
  "Usabilità",
  "Manutenibilità",
  "Testabilità",
  "Flessibilità",
  "Portabilità",
  "Riusabilità",
  "Interoperabilità",
];

// matrix[row][col] - row=factor (in order), col=factor (in order)
// 'S' synergy, 'C' conflict, '' empty
const matrix: (string | null)[][] = [
  /*           C   A   E   I   U   M   T   F   P   R   IO */
  /* C */    [null, null, null, null, null, null, null, null, null, null, null],
  /* A */    ["S", null, null, null, null, null, null, null, null, null, null],
  /* E */    [null, null, null, null, null, null, null, null, null, null, null],
  /* I */    [null, null, "C", null, null, null, null, null, null, null, null],
  /* U */    ["S", "S", "C", "S", null, null, null, null, null, null, null],
  /* M */    ["S", "S", "C", null, "S", null, null, null, null, null, null],
  /* T */    ["S", "S", "C", null, "S", "S", null, null, null, null, null],
  /* F */    ["S", "C", "C", "C", "S", "S", "S", null, null, null, null],
  /* P */    [null, null, "C", null, null, "S", "S", null, null, null, null],
  /* R */    [null, "C", "C", "C", "S", "S", "S", "S", null, null, null],
  /* IO */   [null, null, "C", "C", null, null, null, null, "S", null, null],
];

export function FactorMatrix() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center text-xs">
          <thead>
            <tr>
              <th className="w-44 p-2 text-left text-ink-500">Fattore</th>
              {factors.map((f) => (
                <th key={f} className="border-b border-ink-100 p-2 font-mono font-semibold text-ink-600">
                  {f}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {factors.map((f, r) => (
              <tr key={f} className="border-b border-ink-100/70">
                <td className="p-2 text-left">
                  <span className="font-mono text-ink-500">{f}</span>{" "}
                  <span className="text-ink-700">{factorNames[r]}</span>
                </td>
                {factors.map((_, c) => {
                  const cell = matrix[r][c];
                  return (
                    <td key={c} className="p-1">
                      {r === c ? (
                        <span className="block h-7 w-7 mx-auto rounded-md bg-ink-100" />
                      ) : cell === "S" ? (
                        <span className="block h-7 w-7 mx-auto rounded-md bg-accent-100 text-accent-800 font-semibold leading-7">
                          S
                        </span>
                      ) : cell === "C" ? (
                        <span className="block h-7 w-7 mx-auto rounded-md bg-amber-100 text-amber-800 font-semibold leading-7">
                          C
                        </span>
                      ) : (
                        <span className="block h-7 w-7 mx-auto" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-ink-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-accent-100" />
          S — sinergia
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-amber-100" />
          C — conflitto
        </span>
      </div>
    </div>
  );
}
