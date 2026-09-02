import { createFileRoute, Link } from "@tanstack/react-router";
import { Home as HomeIcon, Grid3x3, PaintRoller, Fence } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { QuoteForm } from "@/components/QuoteForm";
import { BookingSection } from "@/components/BookingSection";
import { useI18n, type TKey } from "@/i18n";

const title = "Roofing, Tile, Painting & Fence in Arizona | Mera Constructions LLC";
const description =
  "Mera Constructions LLC: roofing (shingles, lámina, tile), tile & porcelanato flooring, house painting, wood fences and residential construction. Free estimates — call 928-322-1805.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Mera Constructions LLC",
          telephone: "+1-928-322-1805",
          areaServed: "Arizona",
          slogan: "Built Square. Built to Last.",
          description,
        }),
      },
    ],
  }),
  component: Home,
});

const trades = [
  { num: "01", to: "/roofing", icon: HomeIcon, id: "roofing" },
  { num: "02", to: "/flooring", icon: Grid3x3, id: "flooring" },
  { num: "03", to: "/painting", icon: PaintRoller, id: "painting" },
  { num: "04", to: "/fence", icon: Fence, id: "fence" },
] as const;

function Home() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative overflow-hidden min-h-[min(90vh,720px)] flex items-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/__l5e/assets-v1/f0eb7801-74bd-46cf-ad0f-0766af3a954f/hero-video.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={(heroVideo as unknown as { url: string }).url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/75 z-10" />
        <div className="absolute inset-0 grid-lines opacity-30 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 w-full">
          <div className="max-w-3xl animate-rise">
<p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-6">
              {t("home.eyebrow")}
            </p>
            <h1 className="font-display leading-[0.85] text-foreground text-[clamp(3rem,9vw,7rem)] tracking-tight">
              MERA
              <br />
              CONSTRUCTIONS
              <br />
              <span className="text-amber">LLC</span>
            </h1>
            <p className="mt-6 font-display text-3xl sm:text-4xl text-amber tracking-wide">
              {t("home.slogan")}
            </p>
            <p className="mt-6 max-w-[30ch] font-display text-4xl sm:text-5xl text-foreground leading-[0.95] tracking-tight">
              {t("home.headline")}
            </p>
            <p className="mt-6 max-w-[46ch] text-foreground/70 text-lg leading-relaxed text-pretty">
              {t("home.sub")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="bg-amber text-ink font-bold text-base px-7 py-4 rounded-[min(1vw,12px)] hover:bg-paper transition-colors"
              >
                {t("home.cta.quote")}
              </a>
              <a
                href="tel:9283221805"
                className="bg-foreground text-ink font-bold text-base px-7 py-4 rounded-[min(1vw,12px)] hover:bg-paper transition-colors"
              >
                {t("home.cta.call")}
              </a>
              <a
                href="https://wa.me/19283221805"
                target="_blank"
                rel="noreferrer"
                className="border border-white/25 text-foreground font-mono text-sm px-6 py-4 rounded-[min(1vw,12px)] hover:border-amber hover:text-amber transition-colors"
              >
                {t("common.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-steel py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between border-b border-white/10 pb-6 mb-12">
            <h2 className="font-display text-5xl sm:text-6xl text-foreground leading-none tracking-tight">
              {t("home.trades.title1")}
              <br />
              <span className="text-foreground/40">{t("home.trades.title2")}</span>
            </h2>
<p className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              {t("home.trades.label")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trades.map((item) => (
              <Link
                key={item.num}
                to={item.to}
                className="group bg-steel-2 p-6 rounded-[min(1vw,14px)] outline-1 -outline-offset-1 outline-white/5 hover:-translate-y-1 hover:outline-amber/40 transition-all duration-300 animate-rise"
              >
                <div className="flex items-start justify-between">
                  <span className="grid place-items-center size-14 rounded-[min(1vw,12px)] bg-amber/15 text-amber">
                    <item.icon className="size-7" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-5xl text-amber/30 leading-none">{item.num}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl text-foreground tracking-wide">{t(`trade.${item.id}.title` as TKey)}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/50">
                  {t(`trade.${item.id}.tags` as TKey)}
                </p>
                <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{t(`trade.${item.id}.body` as TKey)}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber group-hover:gap-3 transition-all">
                  {t("home.trades.view")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
<span className="font-display text-5xl text-amber leading-none">10+</span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {t("home.stat1")}
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-display text-5xl text-amber leading-none">100%</span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {t("home.stat2")}
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-display text-5xl text-amber leading-none">48h</span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {t("home.stat3")}
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-steel-2/40 py-20 sm:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">{t("home.booking.label")}</p>
          <h2 className="font-display text-6xl sm:text-7xl text-foreground leading-[0.9] tracking-tight">
            {t("home.booking.title")}
          </h2>
          <BookingSection />
        </div>
      </section>

      <section className="bg-steel py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
<p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            {t("home.quote.label")}
          </p>
          <h2 className="font-display text-6xl sm:text-7xl text-foreground leading-[0.9] tracking-tight">
            {t("home.quote.title")}
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
