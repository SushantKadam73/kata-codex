import { katas } from "@/data/katas";
import type { Chunk } from "@/lib/types";

export function buildChunks(): Chunk[] {
  const chunks: Chunk[] = [];
  for (const kata of katas) {
    if (kata.status === "stub") continue;
    for (const section of kata.sections) {
      chunks.push({
        id: `${kata.id}-${section.id}`,
        kataId: kata.id,
        slug: kata.slug,
        kataTitle: kata.title,
        sectionId: section.id,
        sectionTitle: section.title,
        videoId: kata.videoId,
        timestampSec: section.timestampSec,
        text: [
          `Kata ${kata.id}: ${kata.title}`,
          section.title,
          section.summary,
          section.body,
          ...(section.quotes ?? []),
          kata.concepts.join(", "),
        ].join("\n"),
      });
    }
    for (const slide of kata.slides) {
      chunks.push({
        id: `${kata.id}-slide-${slide.timestampSec}`,
        kataId: kata.id,
        slug: kata.slug,
        kataTitle: kata.title,
        sectionId: `slide-${slide.timestampSec}`,
        sectionTitle: `Slide: ${slide.title}`,
        videoId: kata.videoId,
        timestampSec: slide.timestampSec,
        text: [`Kata ${kata.id} slide: ${slide.title}`, ...slide.bullets].join("\n"),
      });
    }
  }
  return chunks;
}

export const chunks = buildChunks();
