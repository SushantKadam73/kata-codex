#!/usr/bin/env node
/**
 * Offline ingest. Do not run this on Vercel.
 *
 * Pulls the official Katas playlist, fetches timed captions, and writes
 * data/ingested.json. Re-run whenever a new Kata drops.
 *
 *   npm run ingest
 *   PLAYLIST_ID=PLSAVyiM48sqvzLBEbPqD8TZpfu5UyzO9t node scripts/ingest-playlist.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PLAYLIST_ID = process.env.PLAYLIST_ID || "PLSAVyiM48sqvzLBEbPqD8TZpfu5UyzO9t";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "data", "ingested.json");

function videoIdFromUrl(url = "") {
  const m = String(url).match(/[?&]v=([\w-]{11})/) || String(url).match(/youtu\.be\/([\w-]{11})/);
  return m?.[1] ?? null;
}

async function playlistVideoIds(playlistId) {
  const url = `https://www.youtube.com/playlist?list=${playlistId}`;
  const html = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      "accept-language": "en-IN,en;q=0.9",
    },
  }).then((r) => r.text());

  const ids = new Set();
  const re = /"videoId":"([\w-]{11})"/g;
  let m;
  while ((m = re.exec(html))) ids.add(m[1]);
  // Fallback: watch URLs
  const re2 = /watch\?v=([\w-]{11})/g;
  while ((m = re2.exec(html))) ids.add(m[1]);
  return [...ids];
}

async function timedtext(videoId) {
  const langs = ["en", "en-US", "en-GB", "en-IN"];
  for (const lang of langs) {
    const url = `https://www.youtube.com/api/timedtext?v=${videoId}&lang=${lang}&fmt=json3`;
    const res = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0 KataCodexIngest/0.1" },
    });
    if (!res.ok) continue;
    const text = await res.text();
    if (!text || text[0] !== "{") continue;
    try {
      const json = JSON.parse(text);
      const events = json.events || [];
      const cues = [];
      for (const ev of events) {
        const segs = ev.segs || [];
        const line = segs.map((s) => s.utf8 || "").join("").replace(/\n/g, " ").trim();
        if (!line) continue;
        cues.push({
          startMs: ev.tStartMs ?? 0,
          durationMs: ev.dDurationMs ?? 0,
          text: line,
        });
      }
      if (cues.length) return { lang, cues };
    } catch {
      /* try next lang */
    }
  }
  return { lang: null, cues: [] };
}

function chunkCues(cues, windowSec = 90) {
  const chunks = [];
  let buf = [];
  let start = 0;
  for (const cue of cues) {
    if (!buf.length) start = cue.startMs;
    buf.push(cue.text);
    const span = (cue.startMs + (cue.durationMs || 0) - start) / 1000;
    if (span >= windowSec) {
      chunks.push({ startSec: Math.floor(start / 1000), text: buf.join(" ") });
      buf = [];
    }
  }
  if (buf.length) chunks.push({ startSec: Math.floor(start / 1000), text: buf.join(" ") });
  return chunks;
}

async function main() {
  console.log(`Playlist ${PLAYLIST_ID}`);
  const ids = await playlistVideoIds(PLAYLIST_ID);
  console.log(`Found ${ids.length} video ids`);
  const videos = [];
  for (const id of ids) {
    process.stdout.write(`captions ${id} ... `);
    const { lang, cues } = await timedtext(id);
    const chunks = chunkCues(cues);
    console.log(lang ? `${cues.length} cues / ${chunks.length} chunks (${lang})` : "no captions");
    videos.push({
      videoId: id,
      url: `https://www.youtube.com/watch?v=${id}`,
      captionLang: lang,
      cueCount: cues.length,
      chunks,
    });
    await new Promise((r) => setTimeout(r, 400));
  }
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(
    OUT,
    JSON.stringify(
      {
        playlistId: PLAYLIST_ID,
        ingestedAt: new Date().toISOString(),
        videoCount: videos.length,
        videos,
      },
      null,
      2,
    ),
  );
  console.log(`Wrote ${OUT}`);
  console.log("Next: merge chunks into src/data/katas.ts (or load ingested.json at build time).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
