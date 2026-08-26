import { createFileRoute, Link } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-video.mp4";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mera Constructions LLC | Roofing, Tile, Painting & Fence in AZ" },
      {
        name: "description",
        content:
          "Mera Constructions LLC: roofing (shingles, lámina, tile), tile flooring, house painting and wood fence + residential construction. Free estimates — call 928-322-1805.",
      },
      { property: "og:title", content: "Mera Constructions LLC | Built Square. Built to Last." },
      {
        property: "og:description",
        content:
          "Roofing, tile flooring, painting and fence construction across Arizona. Free quotes / cotización gratuita — 928-322-1805.",
      },
    ],
  }),
  component: Home,
});

const trades = [
  {
    num: "01",
    to: "/roofing",
    title: "Roofing",
    tags: "Shingles · Lámina · Tile",
    body: "Installation, inspection & maintenance for shingle, metal and tile roofs.",
  },
  {
    num: "02",
    to: "/flooring",
    title: "Tile Flooring",
    tags: "Tile · Porcelanato",
    body: "Precision-laid floors, inspected and maintained to stay level.",
  },
  {
    num: "03",
    to: "/painting",
    title: "Painting",
    tags: "Interior · Exterior",
    body: "Clean lines and even coats for fresh, lasting color.",
  },
  {
    num: "04",
    to: "/fence",
    title: "Fence & Residential",
    tags: "Wood · Residential",
    body: "Wood fences and full residential builds, measured and square.",
  },
] as const;

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 animate-rise">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-6">
              ( 01 ) — Roofing · Flooring · Painting · Fence
            </p>
            <h1 className="font-display leading-[0.85] text-foreground text-[clamp(3rem,9vw,7rem)] tracking-tight">
              MERA
              <br />
              CONSTRUCTIONS
              <br />
              <span className="text-amber">LLC</span>
            </h1>
            <p className="mt-6 font-display text-3xl sm:text-4xl text-foreground/80 tracking-wide">
              Built Square · Built to Last.
            </p>
            <p className="mt-8 max-w-[46ch] text-foreground/70 text-lg leading-relaxed text-pretty">
              A family-run crew putting the roof over your head, the tile under your feet, the color
              on your walls, and the fence around your yard. Medido, cuadrado, hecho para durar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="bg-amber text-ink font-bold text-base px-7 py-4 rounded-[min(1vw,12px)] hover:bg-paper transition-colors"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:9283221805"
                className="border border-white/25 text-foreground font-mono text-sm px-6 py-4 rounded-[min(1vw,12px)] hover:border-amber hover:text-amber transition-colors"
              >
                Call 928·322·1805
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 animate-rise [animation-delay:120ms]">
            <img
              src={heroImg}
              alt="Mera Constructions crew installing roof shingles on a home at dusk"
              width={1088}
              height={1280}
              className="w-full aspect-[4/5] object-cover bg-steel-2 outline-1 -outline-offset-1 outline-white/10 rounded-[min(1vw,14px)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-steel py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between border-b border-white/10 pb-6 mb-12">
            <h2 className="font-display text-5xl sm:text-6xl text-foreground leading-none tracking-tight">
              FOUR TRADES.
              <br />
              <span className="text-foreground/40">ONE CREW.</span>
            </h2>
            <p className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              ( 02 ) — Services
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trades.map((t) => (
              <Link
                key={t.num}
                to={t.to}
                className="group bg-steel-2 p-6 rounded-[min(1vw,14px)] outline-1 -outline-offset-1 outline-white/5 hover:-translate-y-1 hover:outline-amber/40 transition-all duration-300 animate-rise"
              >
                <p className="font-display text-7xl text-amber/90 leading-none">{t.num}</p>
                <h3 className="mt-6 font-display text-3xl text-foreground tracking-wide">{t.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/50">
                  {t.tags}
                </p>
                <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{t.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber group-hover:gap-3 transition-all">
                  View trade →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <span className="font-display text-5xl text-amber leading-none">15+</span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Years on the jobsite, family-run since 2009. Trabajamos con las manos, no con atajos.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-display text-5xl text-amber leading-none">100%</span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Licensed &amp; insured. Every estimate free, every job walked and inspected with you.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-display text-5xl text-amber leading-none">48h</span>
            <p className="text-foreground/70 text-sm leading-relaxed">
              On-site measurements and a written quote back in two business days — en español o
              inglés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-steel py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">
            ( 03 ) — Free Estimate
          </p>
          <h2 className="font-display text-6xl sm:text-7xl text-foreground leading-[0.9] tracking-tight">
            Cotización Gratuita
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
