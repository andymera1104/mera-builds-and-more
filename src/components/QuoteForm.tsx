import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitQuote } from "@/lib/quote.functions";

const services = [
  "Roofing — Shingles / Lámina / Tile",
  "Tile Flooring — Tile / Porcelanato",
  "Painting — Interior / Exterior",
  "Fence & Residential Construction",
] as const;

const fieldClass =
  "mt-2 w-full bg-ink border border-white/10 rounded-[min(1vw,8px)] px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-amber focus:outline-none";
const labelClass = "font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const send = useServerFn(submitQuote);

  if (sent) {
    return (
      <div id="quote" className="mt-16 bg-steel-2 p-8 sm:p-12 rounded-[min(1vw,16px)] outline-1 -outline-offset-1 outline-amber/30 text-center">
        <p className="font-display text-5xl text-amber leading-none">¡Recibido!</p>
        <h3 className="mt-4 font-display text-3xl text-foreground tracking-wide">
          Your free quote request was sent
        </h3>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed max-w-[46ch] mx-auto">
          Gracias — un miembro del equipo de Mera Constructions LLC te llamará dentro de un día
          hábil. ¿Necesitas hablar ahora mismo?
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:9283221805"
            className="bg-amber text-ink font-semibold text-sm px-5 py-3 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
          >
            Llamar 928·322·1805
          </a>
          <a
            href="https://wa.me/19283221805"
            target="_blank"
            rel="noreferrer"
            className="border border-white/25 text-foreground font-mono text-xs uppercase tracking-[0.15em] px-5 py-3 rounded-[min(1vw,10px)] hover:border-amber hover:text-amber transition-colors"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setSent(false)}
            className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-amber transition-colors px-3 py-3"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

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
        <a
          href="https://wa.me/19283221805"
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex w-fit items-center gap-2 font-mono text-sm text-foreground/70 hover:text-amber transition-colors"
        >
          → WhatsApp us
        </a>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setBusy(true);
          setError(null);
          try {
            await send({
              data: {
                name: String(fd.get("name") ?? ""),
                phone: String(fd.get("phone") ?? ""),
                serviceType: String(fd.get("service") ?? ""),
                address: String(fd.get("address") ?? ""),
                message: String(fd.get("message") ?? ""),
              },
            });
            setSent(true);
          } catch (err) {
            setError(
              err instanceof Error
                ? err.message
                : "No pudimos enviar tu solicitud. Llama al 928-322-1805.",
            );
          } finally {
            setBusy(false);
          }
        }}
        className="lg:col-span-3 bg-steel-2 p-6 sm:p-8 rounded-[min(1vw,16px)] outline-1 -outline-offset-1 outline-white/5 grid sm:grid-cols-2 gap-4"
      >
        <label className="sm:col-span-1 block">
          <span className={labelClass}>Name / Nombre</span>
          <input type="text" name="name" required maxLength={100} className={fieldClass} placeholder="Juan Pérez" />
        </label>
        <label className="sm:col-span-1 block">
          <span className={labelClass}>Phone / Teléfono</span>
          <input type="tel" name="phone" required maxLength={30} className={fieldClass} placeholder="928-322-1805" />
        </label>
        <label className="sm:col-span-2 block">
          <span className={labelClass}>Service / Servicio</span>
          <select name="service" defaultValue={defaultService ?? services[0]} className={fieldClass}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2 block">
          <span className={labelClass}>Project address / Dirección del proyecto</span>
          <input
            type="text"
            name="address"
            required
            maxLength={200}
            className={fieldClass}
            placeholder="123 W Main St, Phoenix, AZ"
          />
        </label>
        <label className="sm:col-span-2 block">
          <span className={labelClass}>Message / Mensaje</span>
          <textarea
            name="message"
            rows={3}
            maxLength={1000}
            className={`${fieldClass} resize-none`}
            placeholder="Tell us about the job, size, and when you need it."
          />
        </label>
        <button
          type="submit"
          className="sm:col-span-2 bg-amber text-ink font-bold text-base py-4 rounded-[min(1vw,12px)] hover:bg-paper transition-colors"
        >
          Send Free Quote Request
        </button>
      </form>
    </div>
  );
}
