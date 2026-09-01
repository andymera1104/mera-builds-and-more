import { useI18n } from "@/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-3xl text-foreground tracking-wide">
            MERA <span className="text-amber">CONSTRUCTIONS</span> LLC
          </p>
          <p className="mt-3 text-sm text-foreground/50 leading-relaxed max-w-[34ch]">
            {t("footer.blurb")}
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber mb-4">
            {t("footer.contact")}
          </p>
          <a href="tel:9283221805" className="block font-display text-3xl text-foreground tracking-wide">
            928·322·1805
          </a>
          <a
            href="https://wa.me/19283221805"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block bg-amber/15 text-amber font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-[min(1vw,10px)] hover:bg-amber hover:text-ink transition-colors"
          >
            {t("footer.whatsapp")}
          </a>
          <p className="mt-3 text-sm text-foreground/50">{t("footer.hours")}</p>
          <p className="text-sm text-foreground/50">{t("footer.area")}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber mb-4">
            {t("footer.quote")}
          </p>
          <p className="text-sm text-foreground/50 leading-relaxed">{t("footer.quoteBody")}</p>
          <a
            href="#quote"
            className="mt-4 inline-block bg-amber text-ink font-semibold text-sm px-5 py-3 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
          >
            {t("footer.start")}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          {t("footer.legal")}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          {t("footer.motto")}
        </p>
      </div>
    </footer>
  );
}
