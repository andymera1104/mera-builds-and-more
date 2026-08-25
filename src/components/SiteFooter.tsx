export function SiteFooter() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-3xl text-foreground tracking-wide">
            MERA <span className="text-amber">CONSTRUCTIONS</span> LLC
          </p>
          <p className="mt-3 text-sm text-foreground/50 leading-relaxed max-w-[34ch]">
            Roofing, tile flooring, painting, fence &amp; residential builds. Medido, cuadrado,
            hecho para durar.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber mb-4">
            Contact
          </p>
          <a href="tel:9283221805" className="block font-display text-3xl text-foreground tracking-wide">
            928·322·1805
          </a>
          <p className="mt-2 text-sm text-foreground/50">Mon–Sat · 7am–6pm</p>
          <p className="text-sm text-foreground/50">Arizona · Serving the Valley</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber mb-4">
            Free Quote
          </p>
          <p className="text-sm text-foreground/50 leading-relaxed">
            Cotización gratuita en español o inglés. No pressure, just a real number.
          </p>
          <a
            href="#quote"
            className="mt-4 inline-block bg-amber text-ink font-semibold text-sm px-5 py-3 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
          >
            Start Your Estimate
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          © 2026 Mera Constructions LLC · Licensed &amp; Insured
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          Built Square · Hecho Cuadrado
        </p>
      </div>
    </footer>
  );
}
