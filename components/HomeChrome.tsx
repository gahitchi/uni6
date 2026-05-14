"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchDialog } from "./SearchDialog";

export function HomeChrome({ totalSlides }: { totalSlides: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && /(INPUT|TEXTAREA|SELECT)/i.test(target.tagName)) return;
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-ink-100/70 glass">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center gap-3 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent-600 to-accent-800 text-[11px] font-bold text-white shadow-sm">
              U6
            </span>
            <span className="hidden md:inline text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-600">
              Unità 6 · Copertina
            </span>
          </Link>

          <div className="flex-1" />

          <span className="hidden md:inline text-[12px] text-ink-500">
            {totalSlides} slide · ≈ 45 minuti
          </span>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-2.5 py-1 text-[12px] text-ink-500 transition-colors hover:border-accent-300 hover:text-ink-700"
            aria-label="Cerca"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.9 3.5l3.8 3.8a1 1 0 11-1.4 1.4l-3.8-3.8A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden md:inline">Indice</span>
            <kbd className="hidden md:inline rounded border border-ink-200 bg-ink-50 px-1 py-0.5 text-[10px] font-semibold text-ink-500">
              /
            </kbd>
          </button>
        </div>
      </header>
      <SearchDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
