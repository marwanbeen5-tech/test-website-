"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-border bg-bg/85 shadow-lg shadow-black/10 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <Link href="/" aria-label="Início" className="transition hover:opacity-80">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-1 text-sm transition hover:text-fg ${active ? "text-fg" : "text-muted"}`}
              >
                {item.label}
                <span
                  className={`bg-gradient-brand absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/teste-gratis"
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold transition hover:border-brand hover:bg-surface"
          >
            Teste Grátis
          </Link>
          <Link
            href="/#planos"
            className="bg-gradient-brand btn-shine btn-glow rounded-full px-5 py-2 text-sm font-semibold"
          >
            Escolher Plano
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <Icon name={open ? "close" : "menu"} className="h-6 w-6 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-border bg-bg/95 backdrop-blur-xl" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="flex min-h-0 flex-col gap-4 px-4">
          <div className="h-0" />
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-muted">
              {item.label}
            </Link>
          ))}
          <Link
            href="/teste-gratis"
            onClick={() => setOpen(false)}
            className="rounded-full border border-border px-5 py-2 text-center font-semibold"
          >
            Teste Grátis
          </Link>
          <Link
            href="/#planos"
            onClick={() => setOpen(false)}
            className="bg-gradient-brand mb-4 rounded-full px-5 py-2 text-center font-semibold"
          >
            Escolher Plano
          </Link>
        </nav>
      </div>

      <div
        ref={progress}
        className="bg-gradient-brand absolute bottom-0 left-0 h-0.5 w-full origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
