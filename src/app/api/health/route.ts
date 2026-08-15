import { peekQuota } from "@/lib/quota";
import { chunks } from "@/lib/chunks";
import { readyKatas } from "@/data/katas";

export function GET() {
  return Response.json({
    ok: true,
    readyKatas: readyKatas().length,
    chunks: chunks.length,
    quota: peekQuota(),
    opencode: Boolean(process.env.OPENCODE_API_KEY),
    openrouter: Boolean(process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEYS),
  });
}
