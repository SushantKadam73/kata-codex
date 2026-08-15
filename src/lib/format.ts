export function formatTimestamp(totalSeconds: number): string {
  const sec = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function youtubeWatchUrl(videoId: string, timestampSec = 0): string {
  const t = Math.max(0, Math.floor(timestampSec));
  return `https://www.youtube.com/watch?v=${videoId}&t=${t}s`;
}

export function youtubeEmbedUrl(videoId: string, timestampSec = 0): string {
  const t = Math.max(0, Math.floor(timestampSec));
  return `https://www.youtube.com/embed/${videoId}?start=${t}&rel=0`;
}

export function youtubeThumb(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function youtubeThumbHq(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}
