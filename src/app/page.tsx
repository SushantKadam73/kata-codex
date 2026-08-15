import Link from "next/link";
import { katas } from "@/data/katas";

export default function HomePage() {
  const ready = katas.filter((k) => k.status === "ready").length;
  return (
    <main className="wrap">
      <section className="hero">
        <div>
          <p className="kicker">A public reading of the 16 Katas</p>
          <h1>The book they were too lazy to rewind.</h1>
          <p className="lede">
            Sixteen long lectures, turned into chapters you can actually read — slides, arguments,
            timestamps — plus a Cutter that answers from the corpus and drops you on the exact
            YouTube second. {ready} chapters are fully seeded. The rest fill when you run ingest.
          </p>
        </div>
        <div>
          <p className="kicker">Not affiliated with Aeos</p>
          <p className="lede">
            Independent study edition. Ask the Cutter “what is GTO?” or open Kata 2 if you want
            the Lightning Way in writing.
          </p>
        </div>
      </section>
      <section className="grid">
        {katas.map((kata) => (
          <Link
            key={kata.slug}
            href={`/kata/${kata.slug}`}
            className={`card ${kata.status === "stub" ? "stub" : ""}`}
          >
            <span className="num">Kata {String(kata.id).padStart(2, "0")}</span>
            <h2>{kata.title}</h2>
            <p>{kata.subtitle}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
