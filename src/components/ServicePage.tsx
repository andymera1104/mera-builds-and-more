import { QuoteForm } from "./QuoteForm";
import { useI18n } from "@/i18n";
import { useState } from "react";

type SubService = { key: string; title: string; body: string };

export function ServicePage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  video,
  subServices,
  steps,
  quoteService,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  video: string;
  subServices: SubService[];
  steps: string[];
  quoteService: string;
}) {
  const { t } = useI18n();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="bg-steel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber mb-4">{eyebrow}</p>
        <h1 className="font-display text-6xl sm:text-7xl text-foreground leading-[0.9] tracking-tight whitespace-pre-line">
          {title}
        </h1>
        <p className="mt-6 max-w-[60ch] text-foreground/70 text-lg leading-relaxed text-pretty">
          {intro}
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative w-full aspect-[8/7] overflow-hidden bg-steel-2 outline-1 -outline-offset-1 outline-white/10 rounded-[min(1vw,14px)]">
            <img
              src={image}
              alt={imageAlt}
              width={1024}
              height={912}
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            {!videoFailed && (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={image}
                aria-label={imageAlt}
                onError={() => setVideoFailed(true)}
                className="absolute inset-0 size-full object-cover motion-reduce:hidden"
              >
                <source src={video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="space-y-5">
            {subServices.map((s, i) => (
              <div
                key={s.title}
                className={`flex gap-4 border-l-2 pl-5 ${i === 0 ? "border-amber" : "border-white/15"}`}
              >
                <span className={`font-mono text-xs pt-1 ${i === 0 ? "text-amber" : "text-foreground/50"}`}>
                  {s.key}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-foreground tracking-wide">{s.title}</h2>
                  <p className="text-sm text-foreground/60 mt-1">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`p-5 rounded-[min(1vw,12px)] text-ink ${i === steps.length - 1 ? "bg-amber" : "bg-paper"}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                {t("sp.step")} 0{i + 1}
              </span>
              <p className="mt-2 font-display text-2xl tracking-wide">{step}</p>
            </div>
          ))}
        </div>

        <QuoteForm defaultService={quoteService} />
      </div>
    </section>
  );
}
