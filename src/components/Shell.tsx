"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("kata-theme") as "light" | "dark" | null;
    const next = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("kata-theme", next);
  }

  return (
    <>
      <header className="wrap topbar">
        <Link href="/" className="brand">
          <span>Varun Mayya · 16 lectures</span>
          <strong>Kata Codex</strong>
        </Link>
        <nav className="nav">
          <Link href="/" aria-current={path === "/" ? "page" : undefined}>
            Book
          </Link>
          <Link href="/cutter" aria-current={path.startsWith("/cutter") ? "page" : undefined}>
            Cutter
          </Link>
          <button className="ghost" type="button" onClick={toggle}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </header>
      {children}
    </>
  );
}
