type Bucket = { day: string; count: number };

const bucket: Bucket = { day: "", count: 0 };

function todayIST(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

export function takeQuota(limit = Number(process.env.DAILY_CHAT_CAP || 40)): {
  ok: boolean;
  remaining: number;
} {
  const day = todayIST();
  if (bucket.day !== day) {
    bucket.day = day;
    bucket.count = 0;
  }
  if (bucket.count >= limit) {
    return { ok: false, remaining: 0 };
  }
  bucket.count += 1;
  return { ok: true, remaining: Math.max(0, limit - bucket.count) };
}

export function peekQuota(limit = Number(process.env.DAILY_CHAT_CAP || 40)) {
  const day = todayIST();
  if (bucket.day !== day) return { remaining: limit, used: 0, limit };
  return { remaining: Math.max(0, limit - bucket.count), used: bucket.count, limit };
}
