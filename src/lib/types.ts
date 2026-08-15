export type Slide = {
  title: string;
  bullets: string[];
  timestampSec: number;
};

export type Section = {
  id: string;
  title: string;
  timestampSec: number;
  summary: string;
  body: string;
  quotes?: string[];
};

export type Kata = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  videoId: string | null;
  duration: string;
  published: string;
  status: "ready" | "stub";
  themes: string[];
  concepts: string[];
  synopsis: string;
  slides: Slide[];
  sections: Section[];
};

export type Chunk = {
  id: string;
  kataId: number;
  slug: string;
  kataTitle: string;
  sectionId: string;
  sectionTitle: string;
  videoId: string | null;
  timestampSec: number;
  text: string;
};

export type Citation = {
  kataId: number;
  slug: string;
  title: string;
  sectionTitle: string;
  videoId: string | null;
  timestampSec: number;
  quote: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatResponse = {
  answer: string;
  citations: Citation[];
  provider: "opencode" | "openrouter" | "local";
  model: string;
  usedFallback: boolean;
  quota?: {
    remainingToday?: number;
    note?: string;
  };
};
