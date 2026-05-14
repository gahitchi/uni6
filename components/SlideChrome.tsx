"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Lesson, Slide } from "@/content/types";
import type { SlideRef } from "@/lib/navigation";
import { SearchDialog } from "./SearchDialog";
import { cn } from "@/lib/cn";

export function SlideChrome({
  lesson,
  slide,
  prev,
  next,
  position,
  total,
  children,
}: {
  lesson: Lesson;
  slide: Slide;
  prev: SlideRef | null;
  next: SlideRef | null;
  position: number;
  total: number;
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && /(INPUT|TEXTAREA|SELECT)/i.test(target.tagName)) return;

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "ArrowRight" && next) {
        router.push(next.href);
      } else if (e.key === "ArrowLeft" && prev) {
        router.push(prev.href);
      } else if (e.key === "Home") {
        router.push("/");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, router]);

  return (
    <>
      {/* Top chrome — minimal: brand left, breadcrumb middle, controls right */}
      <header className="sticky top-0 z-30 border-b border-ink-100/70 glass">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center gap-3 px-4 md:px-6">
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Torna alla copertina"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-accent-600 to-accent-800 text-[11px] font-bold text-white shadow-sm">
              U6
            </span>
            <span className="hidden md:inline text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-600">
              Unità 6
            </span>
          </Link>

          <span className="hidden md:inline text-ink-300">·</span>
          <span className="hidden md:inline truncate text-[13px] text-ink-600">
            Lezione {lesson.number} — {lesson.title}
          </span>

          <div className="flex-1" />

          <button
            onClick={() => setSearchOpen(true)}
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
        <div className="h-[3px] w-full bg-ink-100/80">
          <div
            className="h-full bg-gradient-to-r from-accent-500 via-accent-600 to-accent-800 transition-[width] duration-500"
            style={{ width: `${(position / total) * 100}%` }}
          />
        </div>
      </header>

      {/* Slide stage */}
      <main className="relative mx-auto flex max-w-[1280px] items-center px-3 py-6 md:px-6 md:py-10">
        {/* Left arrow */}
        <NavButton dir="prev" target={prev} />

        <div className="min-w-0 flex-1 px-1 md:px-3">{children}</div>

        {/* Right arrow */}
        <NavButton dir="next" target={next} />
      </main>

      {/* Bottom chrome — counter + lesson dots + hints */}
      <footer className="sticky bottom-0 z-20 border-t border-ink-100/70 glass">
        <div className="mx-auto flex h-12 max-w-[1280px] items-center gap-4 px-4 md:px-6">
          <div className="hidden md:flex items-center gap-3">
            <DotsRail position={position} total={total} />
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-3 text-[12px] text-ink-500">
            <span className="hidden md:inline">
              <kbd className="rounded border border-ink-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-ink-600">
                ←
              </kbd>
              <kbd className="ml-1 rounded border border-ink-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-ink-600">
                →
              </kbd>
              <span className="ml-1.5">naviga</span>
            </span>
            <span className="hidden md:inline">
              <kbd className="rounded border border-ink-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-ink-600">
                N
              </kbd>
              <span className="ml-1.5">note</span>
            </span>
            <div className="flex items-center gap-1.5 rounded-md bg-ink-900 px-2.5 py-1 text-white">
              <span className="tabular-nums text-[13px] font-semibold">
                {String(position).padStart(2, "0")}
              </span>
              <span className="text-ink-400">/</span>
              <span className="tabular-nums text-[12px] text-ink-300">{total}</span>
            </div>
          </div>
        </div>
      </footer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function NavButton({
  dir,
  target,
}: {
  dir: "prev" | "next";
  target: SlideRef | null;
}) {
  const disabled = !target;
  const Icon = dir === "prev" ? "←" : "→";
  const className = cn(
    "group hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border bg-white text-2xl text-ink-500 shadow-card transition-all",
    disabled
      ? "border-ink-100 opacity-30 cursor-not-allowed"
      : "border-ink-200 hover:border-accent-300 hover:text-accent-700 hover:shadow-glow active:scale-95",
  );

  if (disabled) {
    return (
      <span className={className} aria-hidden>
        {Icon}
      </span>
    );
  }
  return (
    <Link
      href={target.href}
      className={className}
      aria-label={`${dir === "prev" ? "Slide precedente" : "Slide successiva"} — ${target.slideTitle}`}
    >
      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-x-0">
        {Icon}
      </span>
    </Link>
  );
}

function DotsRail({ position, total }: { position: number; total: number }) {
  // Show up to 13 dots window around the current position to avoid overflow.
  const window = 13;
  const half = Math.floor(window / 2);
  let start = Math.max(1, position - half);
  let end = Math.min(total, start + window - 1);
  if (end - start + 1 < window) start = Math.max(1, end - window + 1);
  const dots: number[] = [];
  for (let i = start; i <= end; i++) dots.push(i);
  return (
    <div className="flex items-center gap-1.5">
      {dots.map((d) => (
        <span
          key={d}
          className={cn(
            "h-1.5 rounded-full transition-all",
            d === position
              ? "w-5 bg-accent-600"
              : d < position
                ? "w-1.5 bg-ink-400"
                : "w-1.5 bg-ink-200",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}
