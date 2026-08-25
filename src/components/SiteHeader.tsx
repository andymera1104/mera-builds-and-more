import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/roofing", label: "Roofing" },
  { to: "/flooring", label: "Flooring" },
  { to: "/painting", label: "Painting" },
  { to: "/fence", label: "Fence" },
] as const;

export function SiteHeader() {
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
              LLC · Est. 2009
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
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:9283221805"
            className="hidden sm:flex items-center gap-2 font-mono text-xs tracking-wide text-foreground/80 hover:text-amber transition-colors"
          >
            <span className="size-1.5 rounded-full bg-amber" />
            928·322·1805
          </a>
          <a
            href="#quote"
            className="bg-amber text-ink font-semibold text-sm px-4 py-2 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
          >
            Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}
