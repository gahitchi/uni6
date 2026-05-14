"use client";

import { useEffect, useState } from "react";
import type { Slide, Lesson, Block } from "@/content/types";
import { BlockRenderer } from "./BlockRenderer";
import { cn } from "@/lib/cn";

/**
 * Slide canvas. Renders a centered, frameless surface that feels like a
 * presentation deck (not a long-form article). Paragraph blocks are hidden
 * on the slide — they reappear in the notes drawer (press `N`).
 */
export function SlideView({ slide, lesson }: { slide: Slide; lesson: Lesson }) {
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && /(INPUT|TEXTAREA|SELECT)/i.test(target.tagName)) return;
      if (e.key === "n" || e.key === "N") setShowNotes((v) => !v);
      if (e.key === "Escape") setShowNotes(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visibleBlocks = slide.blocks.filter((b) => b.kind !== "paragraph");
  const isOpener = slide.kind === "opener";
  const isCloser = slide.kind === "closer";

  // Speaker notes: explicit notes[] take precedence; otherwise we surface any
  // paragraph blocks as fallback talking points.
  const notes =
    slide.notes && slide.notes.length > 0
      ? slide.notes
      : (slide.blocks.filter((b) => b.kind === "paragraph") as Extract<
          Block,
          { kind: "paragraph" }
        >[]).map((b) => b.text);

  return (
    <article
      className={cn(
        "slide-canvas relative mx-auto w-full overflow-hidden rounded-3xl border border-ink-200 bg-white",
        "px-7 py-10 md:px-14 md:py-14 lg:px-20 lg:py-16",
        "min-h-[min(78vh,720px)]",
        "animate-fade-in",
        isOpener && "border-t-[3px] border-t-accent-600",
        isCloser && "border-b-[3px] border-b-accent-600",
      )}
    >
      {/* Single accent glow — calmer than dual radial */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-100/25 blur-3xl"
        aria-hidden
      />

      <header
        className={cn(
          "relative mb-9 md:mb-12",
          isCloser && "text-center",
        )}
      >
        <div className={cn("flex flex-col", isCloser && "items-center")}>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent-700">
            Lezione {lesson.number} · {slide.eyebrow ?? lesson.title}
          </p>
          <span className="eyebrow-rule" aria-hidden />
        </div>
        <h1
          className={cn(
            "mt-5 font-semibold text-ink-900",
            isOpener
              ? "text-[44px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.035em]"
              : isCloser
                ? "text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] tracking-[-0.03em]"
                : "text-[30px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.028em]",
          )}
        >
          {slide.title}
        </h1>
      </header>

      <div className="relative space-y-5 md:space-y-6 animate-slide-up">
        {visibleBlocks.map((b, i) => (
          <BlockRenderer key={i} block={b} />
        ))}
      </div>

      {/* Notes panel — opens from the bottom */}
      {notes.length > 0 && (
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-10 origin-bottom border-t border-ink-200 bg-ink-50/95 backdrop-blur transition-transform duration-300",
            showNotes ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex items-center justify-between px-6 py-3 md:px-10">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-500">
              <span className="grid h-5 w-5 place-items-center rounded bg-ink-900 text-[10px] font-bold text-white">
                N
              </span>
              Note del relatore
            </div>
            <button
              type="button"
              onClick={() => setShowNotes(false)}
              className="rounded-md p-1 text-ink-500 hover:text-ink-900"
              aria-label="Chiudi note"
            >
              ✕
            </button>
          </div>
          <div className="max-h-[40vh] overflow-y-auto px-6 pb-6 md:px-10">
            <ul className="space-y-2.5 text-[15px] leading-[1.7] text-ink-700">
              {notes.map((n, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-400" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
