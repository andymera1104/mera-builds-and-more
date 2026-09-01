import { Link } from "@tanstack/react-router";
import { Languages } from "lucide-react";
import { useI18n, type TKey } from "@/i18n";

const nav = [
  { to: "/roofing", key: "nav.roofing" },
  { to: "/flooring", key: "nav.flooring" },
  { to: "/painting", key: "nav.painting" },
  { to: "/fence", key: "nav.fence" },
] as const;

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();

  return (
    <div className="sticky top-0 z-50 bg-steel/95 border-b border-white/10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid place-items-center size-8 bg-amber text-ink font-display text-2xl leading-none">
            M
          </span>
          <div className="leading-none">
            <p className="font-display text-xl tracking-wide text-foreground">
              MERA <span className="text-amber">CONSTRUCTIONS</span>
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/50">
              {t("header.tagline")}
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/70">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-amber transition-colors"
              activeProps={{ className: "text-amber" }}
            >
              {t(item.key as TKey)}
            </Link>
          ))}
          <Link to="/" hash="booking" className="hover:text-amber transition-colors">
            {t("nav.booking")}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label={t("lang.switch")}
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/80 border border-white/20 px-2.5 py-2 rounded-[min(1vw,10px)] hover:border-amber hover:text-amber transition-colors"
          >
            <Languages className="size-3.5" strokeWidth={1.75} />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="tel:9283221805"
            className="hidden sm:flex items-center gap-2 font-mono text-xs tracking-wide text-foreground/80 hover:text-amber transition-colors"
          >
            <span className="size-1.5 rounded-full bg-amber" />
            928·322·1805
          </a>
          <a
            href="https://wa.me/19283221805"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/80 border border-white/20 px-3 py-2 rounded-[min(1vw,10px)] hover:border-amber hover:text-amber transition-colors"
          >
            {t("common.whatsapp")}
          </a>
          <a
            href="#quote"
            className="bg-amber text-ink font-semibold text-sm px-4 py-2 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
          >
            {t("header.quote")}
          </a>
        </div>
      </div>
    </div>
  );
}
