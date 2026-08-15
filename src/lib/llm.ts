import type { ChatMessage } from "@/lib/types";

export type LlmOk = {
  ok: true;
  text: string;
  provider: "opencode" | "openrouter";
  model: string;
  usedFallback: boolean;
};

export type LlmErr = {
  ok: false;
  error: string;
  status?: number;
};

const DEFAULT_OPENCODE = [
  "opencode/big-pickle",
  "opencode/deepseek-v4-flash-free",
  "opencode/mimo-v2.5-free",
  "opencode/hy3-free",
  "opencode/laguna-s-2.1-free",
  "opencode/nemotron-3-ultra-free",
  "opencode/nemotron-3.5-lightning-free",
];

const DEFAULT_OPENROUTER = [
  "nvidia/nemotron-3-super-120b-a12b:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "nvidia/nemotron-3.5-lightning:free",
  "poolside/laguna-s-2.1:free",
  "poolside/laguna-xs-2.1:free",
  "cohere/north-mini-code:free",
  "dots-studio/dots-3-note-preview:free",
  "liquid/lfm-2.5-2.6b:free",
];

function splitList(value: string | undefined, fallback: string[]): string[] {
  const parts = (value ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length ? parts : fallback;
}

function openrouterKeys(): string[] {
  const multi = (process.env.OPENROUTER_API_KEYS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const one = process.env.OPENROUTER_API_KEY?.trim();
  const keys = [...multi];
  if (one && !keys.includes(one)) keys.unshift(one);
  return keys;
}

async function postChat(opts: {
  url: string;
  headers: Record<string, string>;
  model: string;
  messages: ChatMessage[];
  extras?: Record<string, unknown>;
}): Promise<{ status: number; text: string; body: unknown }> {
  const res = await fetch(opts.url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...opts.headers,
    },
    body: JSON.stringify({
      model: opts.model,
      messages: opts.messages,
      temperature: 0.3,
      max_tokens: 900,
      ...opts.extras,
    }),
  });
  const raw = await res.text();
  let body: unknown = raw;
  try {
    body = JSON.parse(raw);
  } catch {
    /* keep text */
  }
  const text = extractText(body) || raw;
  return { status: res.status, text, body };
}

function extractText(body: unknown): string {
  if (!body || typeof body !== "object") return "";
  const b = body as {
    choices?: Array<{ message?: { content?: unknown } }>;
    error?: { message?: string };
  };
  const content = b.choices?.[0]?.message?.content;
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === "string") return part;
        if (part && typeof part === "object" && "text" in part) {
          return String((part as { text?: string }).text ?? "");
        }
        return "";
      })
      .join("")
      .trim();
  }
  return "";
}

function isRetryable(status: number, text: string): boolean {
  if ([408, 409, 429, 500, 502, 503, 504].includes(status)) return true;
  const t = text.toLowerCase();
  return (
    t.includes("rate") ||
    t.includes("quota") ||
    t.includes("capacity") ||
    t.includes("overloaded") ||
    t.includes("free usage") ||
    t.includes("exceeded")
  );
}

async function tryOpenCode(messages: ChatMessage[]): Promise<LlmOk | LlmErr> {
  const key = process.env.OPENCODE_API_KEY?.trim();
  if (!key) {
    return { ok: false, error: "OPENCODE_API_KEY is not set" };
  }
  const base = (process.env.OPENCODE_BASE_URL || "https://opencode.ai/zen/v1").replace(
    /\/$/,
    "",
  );
  const models = splitList(process.env.OPENCODE_MODELS, DEFAULT_OPENCODE);
  let last: LlmErr = { ok: false, error: "No OpenCode model answered" };

  for (const model of models) {
    try {
      const result = await postChat({
        url: `${base}/chat/completions`,
        model,
        messages,
        headers: {
          Authorization: `Bearer ${key}`,
          // Official Zen clients send an opencode UA. Free pool is reserved
          // for that client family; we identify honestly as this app.
          "User-Agent": "kata-codex/0.1 (opencode-zen)",
          "HTTP-Referer": "https://kata-codex.local",
          "X-Title": "Kata Codex",
        },
      });
      if (result.status >= 200 && result.status < 300 && result.text) {
        return { ok: true, text: result.text, provider: "opencode", model, usedFallback: false };
      }
      last = {
        ok: false,
        error: `OpenCode ${model} → ${result.status}: ${result.text.slice(0, 240)}`,
        status: result.status,
      };
      if (!isRetryable(result.status, result.text)) break;
    } catch (err) {
      last = { ok: false, error: `OpenCode ${model} network: ${(err as Error).message}` };
    }
  }
  return last;
}

async function tryOpenRouter(messages: ChatMessage[]): Promise<LlmOk | LlmErr> {
  const keys = openrouterKeys();
  if (!keys.length) {
    return { ok: false, error: "No OpenRouter key configured" };
  }
  const models = splitList(process.env.OPENROUTER_MODELS, DEFAULT_OPENROUTER);
  let last: LlmErr = { ok: false, error: "No OpenRouter model answered" };
  let keyIndex = 0;

  for (const model of models) {
    const key = keys[keyIndex % keys.length];
    try {
      const result = await postChat({
        url: "https://openrouter.ai/api/v1/chat/completions",
        model,
        messages,
        headers: {
          Authorization: `Bearer ${key}`,
          "HTTP-Referer": "https://kata-codex.local",
          "X-Title": "Kata Codex",
        },
        extras: {
          models: models.filter((m) => m !== model).slice(0, 4),
        },
      });
      if (result.status >= 200 && result.status < 300 && result.text) {
        return {
          ok: true,
          text: result.text,
          provider: "openrouter",
          model,
          usedFallback: true,
        };
      }
      last = {
        ok: false,
        error: `OpenRouter ${model} → ${result.status}: ${result.text.slice(0, 240)}`,
        status: result.status,
      };
      // Extra keys do not raise the account daily cap. Rotate only on
      // per-key credit exhaustion, not on the shared free-model RPD.
      if (result.status === 402) keyIndex += 1;
      if (!isRetryable(result.status, result.text) && result.status !== 402) break;
    } catch (err) {
      last = { ok: false, error: `OpenRouter ${model} network: ${(err as Error).message}` };
    }
  }
  return last;
}

export async function completeChat(messages: ChatMessage[]): Promise<LlmOk | LlmErr> {
  const primary = await tryOpenCode(messages);
  if (primary.ok) return primary;
  const fallback = await tryOpenRouter(messages);
  if (fallback.ok) return fallback;
  return {
    ok: false,
    error: `OpenCode failed (${primary.ok === false ? primary.error : "unknown"}). OpenRouter failed (${fallback.ok === false ? fallback.error : "unknown"}).`,
  };
}

export function localExtractiveAnswer(question: string, context: string): string {
  const first = context.split("\n\n---\n\n")[0] ?? context;
  const lines = first.split("\n");
  const kata = lines[0] ?? "Kata";
  const section = (lines[1] ?? "").replace("Section: ", "");
  const ts = (lines[2] ?? "").replace("Timestamp: ", "").replace("s", "");
  const body = lines.slice(4).join(" ").slice(0, 700);
  return [
    `I could not reach OpenCode or OpenRouter, so here is the closest passage already in the book.`,
    ``,
    `${body}`,
    ``,
    `That sits in ${kata} (${section || "section"}). Open the chapter to watch from ${ts || "0"}s.`,
    ``,
    `SOURCE: kata=${(kata.match(/Kata (\d+)/)?.[1] ?? "0")}; t=${parseInt(ts || "0", 10) || 0}; title=${section || kata}`,
  ].join("\n");
}

export { DEFAULT_OPENCODE, DEFAULT_OPENROUTER };
