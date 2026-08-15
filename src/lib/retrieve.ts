import { chunks } from "@/lib/chunks";
import type { Chunk, Citation } from "@/lib/types";

const STOP = new Set(
  "a an the and or of to in on for with from by as is are was were be been being this that those these it its at if then than so not no yes do does did can could should would will just about into over after before out up down how what why when where who whom which".split(
    " ",
  ),
);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

const N = chunks.length || 1;
const df = new Map<string, number>();
const docs = chunks.map((c) => {
  const tf = new Map<string, number>();
  for (const tok of tokenize(c.text)) {
    tf.set(tok, (tf.get(tok) ?? 0) + 1);
  }
  for (const tok of tf.keys()) {
    df.set(tok, (df.get(tok) ?? 0) + 1);
  }
  return { chunk: c, tf, len: [...tf.values()].reduce((a, b) => a + b, 0) };
});

const avgdl = docs.reduce((a, d) => a + d.len, 0) / (docs.length || 1);
const k1 = 1.4;
const b = 0.75;

function idf(term: string): number {
  const n = df.get(term) ?? 0;
  return Math.log(1 + (N - n + 0.5) / (n + 0.5));
}

export function searchChunks(query: string, k = 4): Chunk[] {
  const q = tokenize(query);
  if (!q.length) return docs.slice(0, k).map((d) => d.chunk);

  const scored = docs.map((d) => {
    let score = 0;
    for (const term of q) {
      const f = d.tf.get(term) ?? 0;
      if (!f) continue;
      const denom = f + k1 * (1 - b + b * (d.len / avgdl));
      score += idf(term) * ((f * (k1 + 1)) / denom);
    }
    // Light boost if the kata title itself is named.
    const title = d.chunk.kataTitle.toLowerCase();
    if (q.some((t) => title.includes(t))) score += 0.6;
    return { chunk: d.chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const picked: Chunk[] = [];
  const seen = new Set<string>();
  for (const row of scored) {
    if (row.score <= 0) continue;
    if (seen.has(row.chunk.id)) continue;
    seen.add(row.chunk.id);
    picked.push(row.chunk);
    if (picked.length >= k) break;
  }
  if (!picked.length) return docs.slice(0, k).map((d) => d.chunk);
  return picked;
}

export function toCitations(found: Chunk[]): Citation[] {
  return found.map((c) => ({
    kataId: c.kataId,
    slug: c.slug,
    title: `Kata ${c.kataId}: ${c.kataTitle}`,
    sectionTitle: c.sectionTitle,
    videoId: c.videoId,
    timestampSec: c.timestampSec,
    quote: c.text.split("\n").slice(2, 4).join(" ").slice(0, 280),
  }));
}

export function contextBlock(found: Chunk[]): string {
  return found
    .map((c, i) => {
      const t = Math.floor(c.timestampSec);
      return [
        `[#${i + 1}] Kata ${c.kataId} — ${c.kataTitle}`,
        `Section: ${c.sectionTitle}`,
        `Timestamp: ${t}s`,
        `Video: ${c.videoId ?? "not ingested"}`,
        c.text,
      ].join("\n");
    })
    .join("\n\n---\n\n");
}
