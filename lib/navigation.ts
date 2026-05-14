import { unit } from "@/content/unit";
import type { Lesson, Slide } from "@/content/types";

export interface SlideRef {
  lessonId: string;
  lessonNumber: number;
  lessonTitle: string;
  slideIndex: number;
  slideId: string;
  slideTitle: string;
  href: string;
}

export function buildSlideIndex(): SlideRef[] {
  const out: SlideRef[] = [];
  for (const lesson of unit.lessons) {
    lesson.slides.forEach((slide, idx) => {
      out.push({
        lessonId: lesson.id,
        lessonNumber: lesson.number,
        lessonTitle: lesson.title,
        slideIndex: idx,
        slideId: slide.id,
        slideTitle: slide.title,
        href: `/lezione/${lesson.id}/${slide.id}`,
      });
    });
  }
  return out;
}

export function getLesson(lessonId: string): Lesson | undefined {
  return unit.lessons.find((l) => l.id === lessonId);
}

export function getSlide(
  lessonId: string,
  slideId: string,
): { lesson: Lesson; slide: Slide; index: number } | null {
  const lesson = getLesson(lessonId);
  if (!lesson) return null;
  const index = lesson.slides.findIndex((s) => s.id === slideId);
  if (index < 0) return null;
  return { lesson, slide: lesson.slides[index], index };
}

export function adjacentSlides(
  lessonId: string,
  slideId: string,
): { prev: SlideRef | null; next: SlideRef | null; position: number; total: number } {
  const idx = buildSlideIndex();
  const i = idx.findIndex(
    (s) => s.lessonId === lessonId && s.slideId === slideId,
  );
  return {
    prev: i > 0 ? idx[i - 1] : null,
    next: i >= 0 && i < idx.length - 1 ? idx[i + 1] : null,
    position: i + 1,
    total: idx.length,
  };
}
