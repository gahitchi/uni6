export function LOCDiagram() {
  const lines = [
    { code: "// Calcolo media voti", kind: "comment" },
    { code: "", kind: "blank" },
    { code: "function media(voti) {", kind: "exec" },
    { code: "  let somma = 0;", kind: "exec" },
    { code: "  // somma di tutti i voti", kind: "comment" },
    { code: "  for (let v of voti) {", kind: "exec" },
    { code: "    somma += v;", kind: "exec" },
    { code: "  }", kind: "exec" },
    { code: "", kind: "blank" },
    { code: "  return somma / voti.length;", kind: "exec" },
    { code: "}", kind: "exec" },
  ] as const;

  const totals = {
    LOC: lines.length,
    NCLOC: lines.filter((l) => l.kind !== "comment").length,
    NCNB: lines.filter((l) => l.kind === "exec").length,
    CLOC: lines.filter((l) => l.kind === "comment").length,
    EXEC: lines.filter((l) => l.kind === "exec").length,
  };

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 md:p-7 shadow-card">
      <div className="grid gap-6 md:grid-cols-[1fr_auto]">
        <div className="overflow-hidden rounded-xl bg-ink-950 p-4 font-mono text-xs md:text-[13px] leading-7">
          {lines.map((l, i) => (
            <div
              key={i}
              className={
                "flex gap-3 px-2 -mx-2 rounded transition-colors " +
                (l.kind === "comment"
                  ? "text-emerald-300/80"
                  : l.kind === "blank"
                    ? "text-ink-500"
                    : "text-accent-100")
              }
            >
              <span className="w-6 select-none text-right text-ink-500">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {l.code || "·"}
              </span>
            </div>
          ))}
        </div>
        <div className="min-w-[200px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
            Conteggi
          </p>
          <dl className="space-y-2">
            {Object.entries(totals).map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between rounded-lg bg-ink-50 px-3 py-2"
              >
                <dt className="font-mono text-sm font-semibold text-ink-700">
                  {k}
                </dt>
                <dd className="font-mono text-lg tabular-nums text-accent-700">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-ink-500">
            LOC totali, NCLOC senza commenti, NCNB senza commenti né righe
            vuote, CLOC solo commenti, EXEC solo eseguibili.
          </p>
        </div>
      </div>
    </div>
  );
}
