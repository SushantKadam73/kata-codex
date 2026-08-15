# Kata Codex

A free, Vercel-hosted reading of [Varun Mayya's 16-Kata series](https://www.youtube.com/playlist?list=PLSAVyiM48sqvzLBEbPqD8TZpfu5UyzO9t) plus a Cutter-style Q&A that cites the exact YouTube second.

Not affiliated with Aeos / Varun Mayya. Independent study edition.

## What you get

- **Book / wiki** — one chapter per Kata. Lectures 1–13 are seeded (official playlist currently has 13 videos). 14–16 stay stubs until they drop. YouTube bot-gates caption downloads from datacenter IPs; run `npm run ingest` on your laptop for timed captions.
- **Cutter** — ask “what is GTO?” and get an answer grounded in the corpus, with thumbnail source cards.
- **OpenCode first** — Zen free models are the primary brain. OpenRouter `:free` models are the fallback. If both are down, the API returns the best extractive passage so the site still works.

## Why this is not a heavy RAG stack

Sixteen hours of speech will not fit a free-model context window, so we do retrieve. We do **not** need a paid vector database.

At build time the book is already chunked (section + slide). At ask time a local BM25 ranker (`src/lib/retrieve.ts`) picks 2–4 chunks and stuffs them into the prompt. That is enough for a closed 16-video corpus.

Do **not** run ffmpeg / yt-dlp / Whisper on Vercel. Ingest on your laptop (or the fallback VPS / GitHub Actions) and commit the JSON.

## Models and rate limits

### OpenCode Zen (primary)

Set `OPENCODE_API_KEY` from [opencode.ai/zen](https://opencode.ai/zen).

Tried in order (override with `OPENCODE_MODELS`):

- `opencode/big-pickle`
- `opencode/deepseek-v4-flash-free`
- `opencode/mimo-v2.5-free`
- `opencode/hy3-free`
- `opencode/laguna-s-2.1-free`
- `opencode/nemotron-3-ultra-free`
- `opencode/nemotron-3.5-lightning-free`

These are limited-time free pools. They 429 often, sometimes on the first request, and some endpoints only treat the official OpenCode CLI as a first-class client. We identify as `kata-codex` honestly. When Zen is exhausted the router falls through.

Do not spoof the official CLI User-Agent as a product strategy.

### OpenRouter (fallback)

Account-level free-model caps, **not** per key:

| Account | Per minute | Per day |
| --- | --- | --- |
| No credit purchase | 20 | **50** |
| Bought ≥ $10 credits once | 20 | **1,000** |

Creating more API keys does **not** raise the daily cap. OpenRouter says this explicitly. Extra keys only help if one key hits a *per-key credit* ceiling (`402`), which free models usually do not have.

`OPENROUTER_API_KEYS=key1,key2` is implemented anyway for that 402 case.

Tried in order (override with `OPENROUTER_MODELS`):

- `nvidia/nemotron-3-super-120b-a12b:free`
- `nvidia/nemotron-3-ultra-550b-a55b:free`
- `nvidia/nemotron-3.5-lightning:free`
- `poolside/laguna-s-2.1:free`
- `poolside/laguna-xs-2.1:free`
- `cohere/north-mini-code:free`
- `dots-studio/dots-3-note-preview:free`
- `liquid/lfm-2.5-2.6b:free`

Are free models “smart enough”? For this job, yes. The Cutter is extractive Q&A over a small, pre-written book. Nemotron-class and Big Pickle are enough if the retrieved chapter is the right one. You do not need a frontier model unless you want literary paraphrase.

### Site cap

`DAILY_CHAT_CAP=40` (default) stops a public Hobby deploy from burning the provider quota in an afternoon. Counts in IST.

## Local run

```bash
cd kata-codex
cp .env.example .env.local
# paste OPENCODE_API_KEY and optionally OPENROUTER_API_KEY
npm install
npm run dev
```

Open http://localhost:3000 (book) and /cutter (Q&A).

### Ingest new episodes

```bash
npm run ingest
```

Writes `data/ingested.json` with timed caption chunks. Merge into `src/data/katas.ts` or load that file at build time. Needs YouTube access from *your* machine — the sandbox cannot see YouTube until you allow it.

Slide frames (optional, laptop only): [yt-slide-mark](https://github.com/exopoiesis/yt-slide-mark) or [vid2slides](https://github.com/patrickmineault/vid2slides). Drop JPEGs in `public/slides/{videoId}/` later. Not required for v1.

## Vercel Hobby

1. Push the `kata-codex` folder (or the repo root if this *is* the repo).
2. Framework preset: Next.js.
3. Env vars: `OPENCODE_API_KEY`, optional `OPENROUTER_API_KEY` / `OPENROUTER_API_KEYS`, optional `DAILY_CHAT_CAP`.
4. Do not add a cron that hits YouTube. Hobby functions are fine for one chat call (we cap at 60s).

Zero paid services. No Postgres, no embeddings API, no vector host.

## Project map

```
src/app/page.tsx            book index
src/app/kata/[slug]/page.tsx chapter
src/app/cutter/page.tsx      Cutter UI
src/app/api/chat/route.ts    retrieve + OpenCode-first complete
src/data/katas.ts            the book
src/lib/retrieve.ts          BM25
src/lib/llm.ts               OpenCode → OpenRouter → extractive
scripts/ingest-playlist.mjs  offline captions
```
