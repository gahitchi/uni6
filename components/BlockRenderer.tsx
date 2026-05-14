import type { Block } from "@/content/types";
import { Diagram } from "./diagrams";
import { cn } from "@/lib/cn";

const calloutStyles: Record<string, string> = {
  info: "border-accent-200 bg-accent-50/70 text-accent-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  neutral: "border-ink-200 bg-ink-50 text-ink-900",
};

const calloutIcon: Record<string, string> = {
  info: "ⓘ",
  warning: "⚠",
  success: "✓",
  neutral: "•",
};

function calloutBadge(tone: string) {
  const map: Record<string, string> = {
    info: "bg-accent-600 text-white",
    warning: "bg-amber-500 text-white",
    success: "bg-emerald-600 text-white",
    neutral: "bg-ink-700 text-white",
  };
  return map[tone] ?? map.info;
}

/**
 * Renders a single block.
 *
 * `slideMode` (default true) tunes typography for a true presentation slide —
 * larger sizes, more breathing room. Narrative `paragraph` blocks are skipped
 * on slide because they belong to the speaker's notes; everything else still
 * renders (definitions, lists, formulas, tables, diagrams, callouts, examples).
 */
export function BlockRenderer({
  block,
  slideMode = true,
}: {
  block: Block;
  slideMode?: boolean;
}) {
  // On slide: narrative paragraphs are presenter notes, not slide content.
  if (slideMode && block.kind === "paragraph") return null;

  switch (block.kind) {
    case "lead":
      return (
        <p className="text-[19px] md:text-[22px] leading-[1.5] text-ink-700 font-medium tracking-[-0.005em]">
          {block.text}
        </p>
      );
    case "paragraph":
      return (
        <p className="text-[15.5px] leading-[1.78] text-ink-700">
          {block.text}
        </p>
      );
    case "callout": {
      const tone = block.tone ?? "info";
      return (
        <div
          className={cn(
            "relative rounded-2xl border p-5 md:p-6",
            calloutStyles[tone],
          )}
        >
          <div className="flex items-start gap-4">
            <span
              className={cn(
                "grid h-7 w-7 flex-shrink-0 place-items-center rounded-full text-sm font-bold",
                calloutBadge(tone),
              )}
            >
              {calloutIcon[tone]}
            </span>
            <div className="flex-1">
              {block.title && (
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] opacity-80">
                  {block.title}
                </p>
              )}
              <p className="text-[16px] leading-relaxed font-medium">{block.text}</p>
            </div>
          </div>
        </div>
      );
    }
    case "definition":
      return (
        <div className="rounded-2xl border border-ink-200 bg-white shadow-card overflow-hidden">
          <div className="border-b border-ink-100 bg-gradient-to-b from-ink-50 to-white px-5 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent-700">
              Definizione
            </p>
            <p className="text-[20px] font-semibold tracking-[-0.012em] text-ink-900">
              {block.term}
            </p>
          </div>
          <p className="px-5 py-4 text-[16px] leading-[1.65] text-ink-700">
            {block.text}
          </p>
        </div>
      );
    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3.5 text-[16.5px] leading-[1.5] text-ink-800"
            >
              <span
                className={cn(
                  "mt-2 inline-block flex-shrink-0",
                  block.variant === "check"
                    ? "h-5 w-5 rounded-md bg-emerald-100 text-emerald-700"
                    : block.variant === "arrow"
                      ? "h-5 w-5 text-accent-600"
                      : "h-2 w-2 rounded-full bg-accent-600",
                )}
              >
                {block.variant === "check" && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {block.variant === "arrow" && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M7.3 14.7a1 1 0 010-1.4L10.6 10 7.3 6.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ordered":
      return (
        <ol className="space-y-3.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3.5 text-[16.5px] leading-[1.5] text-ink-800"
            >
              <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-600 to-accent-800 text-[12px] font-bold text-white shadow-sm">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "formula":
      return (
        <div className="rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50/60 via-white to-white px-6 py-7 md:px-8 md:py-9 shadow-card">
          {block.label && (
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-accent-700">
              {block.label}
            </p>
          )}
          <p className="formula text-2xl md:text-[32px] text-ink-900">
            {block.expression}
          </p>
          {block.where && (
            <dl className="mt-5 grid gap-2 text-[14px]">
              {block.where.map((w, i) => (
                <div key={i} className="flex gap-3 text-ink-700">
                  <dt className="formula min-w-[90px] text-accent-700">{w.symbol}</dt>
                  <dd>{w.meaning}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      );
    case "table":
      return (
        <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card">
          {block.caption && (
            <div className="border-b border-ink-100 bg-gradient-to-b from-ink-50 to-white px-5 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">
                {block.caption}
              </p>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-ink-100 bg-gradient-to-b from-ink-50 to-white">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-left font-semibold text-ink-700"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr
                    key={r}
                    className="border-b border-ink-100/70 last:border-b-0 transition-colors hover:bg-accent-50/40"
                  >
                    {row.map((c, i) => (
                      <td
                        key={i}
                        className={cn(
                          "px-4 py-2.5 text-ink-700",
                          block.highlightCols?.includes(i) &&
                            "bg-accent-50/70 font-mono font-semibold text-accent-800",
                        )}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "example":
      return (
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white p-5 md:p-6">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              ✦
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800">
              {block.title ?? "Esempio"}
            </p>
          </div>
          <p className="text-[16px] leading-relaxed text-ink-800">{block.text}</p>
          {block.steps && (
            <ul className="mt-4 space-y-1.5 border-l-2 border-emerald-300 pl-4 text-[14.5px]">
              {block.steps.map((s, i) => (
                <li key={i} className="text-ink-700 leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          )}
          {block.result && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[14.5px] font-semibold text-emerald-800 shadow-sm">
              <span className="text-emerald-600">→</span>
              {block.result}
            </div>
          )}
        </div>
      );
    case "takeaway":
      return (
        <div className="relative flex items-start gap-4 rounded-2xl border-l-[6px] border-accent-600 bg-gradient-to-r from-accent-50/70 via-accent-50/20 to-transparent px-5 py-4">
          <span className="mt-0.5 text-[22px] leading-none font-semibold text-accent-600">→</span>
          <p className="text-[16.5px] font-semibold leading-snug tracking-[-0.005em] text-ink-900">
            {block.text}
          </p>
        </div>
      );
    case "diagram":
      return (
        <figure className="space-y-2">
          <Diagram name={block.name} />
          {block.caption && (
            <figcaption className="text-center text-xs text-ink-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "quote":
      return (
        <blockquote className="rounded-r-2xl border-l-[6px] border-ink-300 bg-ink-50/70 py-4 pl-6 pr-5 italic text-ink-700">
          <p className="text-[17px] leading-relaxed">&ldquo;{block.text}&rdquo;</p>
          {block.attribution && (
            <footer className="mt-2 text-[12px] font-semibold not-italic text-ink-500">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );
    case "checklist":
      return (
        <ul className="grid gap-2 md:grid-cols-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-white px-3.5 py-2.5 text-[14px] text-ink-700 shadow-sm"
            >
              <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded border-2 border-accent-300 text-accent-600">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "twoColumn":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {[block.left, block.right].map((col, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-2xl border border-ink-200 bg-white p-5 shadow-card"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-700">
                {col.title}
              </p>
              <ul className="space-y-2.5 text-[15.5px] leading-[1.55] text-ink-700">
                {col.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}
