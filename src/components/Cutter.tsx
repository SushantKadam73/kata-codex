"use client";

import { useEffect, useRef, useState } from "react";
import { formatTimestamp, youtubeThumb, youtubeWatchUrl } from "@/lib/format";
import type { ChatMessage, ChatResponse, Citation } from "@/lib/types";

const STARTERS = [
  "What is GTO?",
  "What makes a good hire?",
  "Why do companies break after 50 people?",
  "What is a scouter?",
];

export function Cutter() {
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [meta, setMeta] = useState("OpenCode first · OpenRouter fallback");
  const logRef = useRef<HTMLDivElement>(null);
  const beepRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [history, busy]);

  function tick() {
    try {
      const ctx = (beepRef.current ??= new AudioContext());
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = 392;
      gain.gain.value = 0.03;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      /* audio optional */
    }
  }

  async function ask(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    setBusy(true);
    setInput("");
    const nextHistory = [...history, { role: "user" as const, content: q }];
    setHistory(nextHistory);
    tick();
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: q, history: nextHistory.slice(0, -1) }),
      });
      const data = (await res.json()) as ChatResponse & { error?: string };
      if (data.error && !data.answer) {
        setHistory((h) => [...h, { role: "assistant", content: data.error ?? "The Cutter stalled." }]);
        return;
      }
      setHistory((h) => [...h, { role: "assistant", content: data.answer }]);
      setCitations(data.citations ?? []);
      setMeta(
        `${data.provider} · ${data.model}${data.usedFallback ? " · fallback" : ""}${
          data.quota?.remainingToday != null ? ` · ${data.quota.remainingToday} left today` : ""
        }`,
      );
    } catch (err) {
      setHistory((h) => [
        ...h,
        { role: "assistant", content: `Network error: ${(err as Error).message}` },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="cutter">
      <div>
        <p className="kicker">Cutter knowledge interface</p>
        <h1>Ask the Katas.</h1>
        <div className="stage">
          <p className="status">{busy ? "Scanning episodes…" : meta}</p>
          <div className="log" ref={logRef}>
            {history.length === 0 ? (
              <div className="bubble assistant">
                What is GTO? What makes a good hire? The Cutter reads the ingested Katas and
                answers with the source second.
              </div>
            ) : null}
            {history.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`bubble ${m.role}`}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="composer">
            <input
              value={input}
              placeholder="Ask anything in the corpus"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void ask(input);
              }}
            />
            <button type="button" onClick={() => void ask(input)} disabled={busy}>
              Cut
            </button>
          </div>
          <p className="status" style={{ marginTop: "0.8rem" }}>
            {STARTERS.map((s) => (
              <button
                key={s}
                type="button"
                className="ghost"
                style={{ marginRight: "0.4rem", marginTop: "0.4rem", color: "inherit" }}
                onClick={() => void ask(s)}
              >
                {s}
              </button>
            ))}
          </p>
        </div>
      </div>
      <aside className="cites">
        <p className="kicker">Sources</p>
        {citations.length === 0 ? <p className="lede">Hover a source after you ask.</p> : null}
        {citations.map((c) => {
          const href = c.videoId ? youtubeWatchUrl(c.videoId, c.timestampSec) : `/kata/${c.slug}`;
          return (
            <a key={`${c.slug}-${c.timestampSec}-${c.sectionTitle}`} className="cite" href={href} target={c.videoId ? "_blank" : undefined} rel="noopener noreferrer">
              {c.videoId ? <img src={youtubeThumb(c.videoId)} alt="" /> : null}
              <strong>{c.title}</strong>
              <small>
                {c.sectionTitle} · {formatTimestamp(c.timestampSec)}
              </small>
            </a>
          );
        })}
      </aside>
    </section>
  );
}
