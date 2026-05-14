"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { buildSlideIndex } from "@/lib/navigation";

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const index = useMemo(() => buildSlideIndex(), []);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 20);
    return index
      .filter(
        (s) =>
          s.slideTitle.toLowerCase().includes(q) ||
          s.lessonTitle.toLowerCase().includes(q),
      )
      .slice(0, 20);
  }, [index, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(results.length - 1, a + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(0, a - 1));
      } else if (e.key === "Enter") {
        const r = results[active];
        if (r) {
          router.push(r.href);
          onClose();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, active, router, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/50 px-4 pt-[10vh] animate-fade-in backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-ink-100 px-4 py-3">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-ink-400">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.9 3.5l3.8 3.8a1 1 0 11-1.4 1.4l-3.8-3.8A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Cerca per sezione o concetto..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-400"
          />
          <kbd className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 text-[10px] font-semibold text-ink-500">
            esc
          </kbd>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto py-1">
          {results.map((r, i) => (
            <li key={r.href}>
              <button
                className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
                  i === active ? "bg-accent-50" : "hover:bg-ink-50"
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => {
                  router.push(r.href);
                  onClose();
                }}
              >
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md bg-accent-600 text-[10px] font-bold text-white">
                  L{r.lessonNumber}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium text-ink-900">
                    {r.slideTitle}
                  </span>
                  <span className="block text-xs text-ink-500">
                    {r.lessonTitle}
                  </span>
                </span>
                {i === active && (
                  <span className="text-xs text-accent-700">↵</span>
                )}
              </button>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-ink-500">
              Nessun risultato per{" "}
              <span className="font-semibold text-ink-700">&ldquo;{query}&rdquo;</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
