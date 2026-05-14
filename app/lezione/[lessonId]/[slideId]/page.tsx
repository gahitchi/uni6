import { notFound } from "next/navigation";
import { SlideView } from "@/components/SlideView";
import { SlideChrome } from "@/components/SlideChrome";
import { adjacentSlides, getSlide } from "@/lib/navigation";
import { unit } from "@/content/unit";

interface PageParams {
  lessonId: string;
  slideId: string;
}

export function generateStaticParams() {
  const out: PageParams[] = [];
  for (const lesson of unit.lessons) {
    for (const slide of lesson.slides) {
      out.push({ lessonId: lesson.id, slideId: slide.id });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lessonId, slideId } = await params;
  const found = getSlide(lessonId, slideId);
  if (!found) return { title: "Sezione non trovata" };
  return {
    title: `${found.slide.title} — L${found.lesson.number} · Unità 6`,
    description: found.lesson.description,
  };
}

export default async function SlidePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lessonId, slideId } = await params;
  const found = getSlide(lessonId, slideId);
  if (!found) notFound();

  const { lesson, slide } = found;
  const { prev, next, position, total } = adjacentSlides(lessonId, slideId);

  return (
    <div className="deck-bg relative min-h-screen overflow-x-hidden">
      <SlideChrome
        lesson={lesson}
        slide={slide}
        prev={prev}
        next={next}
        position={position}
        total={total}
      >
        <SlideView slide={slide} lesson={lesson} />
      </SlideChrome>
    </div>
  );
}
