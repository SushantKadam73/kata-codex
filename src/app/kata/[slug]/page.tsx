import Link from "next/link";
import { notFound } from "next/navigation";
import { getKata, katas } from "@/data/katas";
import { formatTimestamp, youtubeEmbedUrl, youtubeWatchUrl } from "@/lib/format";

export function generateStaticParams() {
  return katas.map((k) => ({ slug: k.slug }));
}

export default async function KataPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kata = getKata(slug);
  if (!kata) notFound();

  return (
    <main className="wrap layout">
      <aside className="toc">
        <p className="kicker">Contents</p>
        {katas.map((k) => (
          <Link key={k.slug} href={`/kata/${k.slug}`} className={k.slug === slug ? "active" : ""}>
            {String(k.id).padStart(2, "0")} · {k.title}
          </Link>
        ))}
      </aside>
      <article className="chapter">
        <header>
          <p className="kicker">Kata {String(kata.id).padStart(2, "0")} · {kata.status}</p>
          <h1>{kata.title}</h1>
          <p className="meta">
            {kata.subtitle} · {kata.duration}
            {kata.videoId ? (
              <>
                {" · "}
                <a href={youtubeWatchUrl(kata.videoId)} target="_blank" rel="noopener noreferrer">
                  Watch
                </a>
              </>
            ) : (
              " · video not ingested"
            )}
          </p>
        </header>
        {kata.videoId ? (
          <iframe
            className="player"
            src={youtubeEmbedUrl(kata.videoId)}
            title={kata.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
        <p className="synopsis">{kata.synopsis}</p>
        {kata.slides.length > 0 ? (
          <section>
            <p className="kicker">Slides</p>
            {kata.slides.map((slide) => (
              <div className="slide" key={slide.title}>
                <h3>{slide.title}</h3>
                {kata.videoId ? (
                  <a href={youtubeWatchUrl(kata.videoId, slide.timestampSec)} target="_blank" rel="noopener noreferrer">
                    {formatTimestamp(slide.timestampSec)}
                  </a>
                ) : null}
                <ul>
                  {slide.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : null}
        {kata.sections.map((section) => (
          <section className="section" key={section.id} id={section.id}>
            <p className="num">
              {kata.videoId ? (
                <a href={youtubeWatchUrl(kata.videoId, section.timestampSec)} target="_blank" rel="noopener noreferrer">
                  {formatTimestamp(section.timestampSec)}
                </a>
              ) : (
                "pending"
              )}
            </p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            {section.quotes?.map((q) => (
              <blockquote key={q}>{q}</blockquote>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
