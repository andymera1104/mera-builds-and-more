import { useState } from "react";

const services = [
  "Roofing — Shingles / Lámina / Tile",
  "Tile Flooring — Tile / Porcelanato",
  "Painting — Interior / Exterior",
  "Fence & Residential Construction",
] as const;

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <div id="quote" className="mt-16 grid lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-2">
        <h3 className="font-display text-4xl text-foreground tracking-wide">
          Free Quote.
          <br />
          <span className="text-amber">Cotización Gratis.</span>
        </h3>
        <p className="mt-4 text-foreground/60 text-sm leading-relaxed max-w-[38ch]">
          Tell us about the job. A real person calls you back within one business day.
        </p>
        <a href="tel:9283221805" className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-amber">
          → 928·322·1805
        </a>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="lg:col-span-3 bg-steel-2 p-6 sm:p-8 rounded-[min(1vw,16px)] outline-1 -outline-offset-1 outline-white/5 grid sm:grid-cols-2 gap-4"
      >
        <label className="sm:col-span-1 block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Name / Nombre
          </span>
          <input
            type="text"
            required
            className="mt-2 w-full bg-ink border border-white/10 rounded-[min(1vw,8px)] px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-amber focus:outline-none"
          />
        </label>
        <label className="sm:col-span-1 block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Phone / Teléfono
          </span>
          <input
            type="tel"
            required
            className="mt-2 w-full bg-ink border border-white/10 rounded-[min(1vw,8px)] px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-amber focus:outline-none"
          />
        </label>
        <label className="sm:col-span-2 block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Service / Servicio
          </span>
          <select
            defaultValue={defaultService ?? services[0]}
            className="mt-2 w-full bg-ink border border-white/10 rounded-[min(1vw,8px)] px-3 py-3 text-sm text-foreground focus:border-amber focus:outline-none"
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2 block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Project details
          </span>
          <textarea
            rows={3}
            className="mt-2 w-full bg-ink border border-white/10 rounded-[min(1vw,8px)] px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-amber focus:outline-none resize-none"
          />
        </label>
        <button
          type="submit"
          className="sm:col-span-2 bg-amber text-ink font-bold text-base py-4 rounded-[min(1vw,12px)] hover:bg-paper transition-colors"
        >
          {sent ? "Thanks — we'll call you back" : "Send Free Quote Request"}
        </button>
        {sent && (
          <p className="sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Recibido · Or call 928·322·1805 now
          </p>
        )}
      </form>
    </div>
  );
}
