import { contextBlock, searchChunks, toCitations } from "@/lib/retrieve";
import { SYSTEM_PROMPT, userPrompt } from "@/lib/prompts";
import { completeChat, localExtractiveAnswer } from "@/lib/llm";
import { peekQuota, takeQuota } from "@/lib/quota";
import type { ChatMessage, ChatResponse } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET() {
  return Response.json({ ok: true, quota: peekQuota() });
}

export async function POST(req: Request) {
  let body: { message?: string; history?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = (body.message ?? "").trim();
  if (!message) {
    return Response.json({ error: "Ask a question." }, { status: 400 });
  }
  if (message.length > 1200) {
    return Response.json({ error: "Keep questions under 1,200 characters." }, { status: 400 });
  }

  const quota = takeQuota();
  if (!quota.ok) {
    const payload: ChatResponse = {
      answer:
        "Daily Cutter budget is used up (IST day). This is the site cap, not OpenCode's. Come back after midnight IST, or raise DAILY_CHAT_CAP if you are running it privately.",
      citations: [],
      provider: "local",
      model: "quota",
      usedFallback: false,
      quota: { remainingToday: 0, note: "site daily cap" },
    };
    return Response.json(payload, { status: 429 });
  }

  const found = searchChunks(message, 4);
  const citations = toCitations(found);
  const context = contextBlock(found);

  const history = (body.history ?? []).slice(-6).filter(
    (m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string",
  );

  const messages: ChatMessage[] = [
    { role: "user", content: SYSTEM_PROMPT },
    ...history,
    { role: "user", content: userPrompt(message, context) },
  ];

  const result = await completeChat(messages);

  if (!result.ok) {
    const payload: ChatResponse = {
      answer: localExtractiveAnswer(message, context),
      citations,
      provider: "local",
      model: "extractive",
      usedFallback: true,
      quota: { remainingToday: quota.remaining, note: result.error },
    };
    return Response.json(payload);
  }

  const payload: ChatResponse = {
    answer: result.text,
    citations,
    provider: result.provider,
    model: result.model,
    usedFallback: result.usedFallback,
    quota: { remainingToday: quota.remaining },
  };
  return Response.json(payload);
}
