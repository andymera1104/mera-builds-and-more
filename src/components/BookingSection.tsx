import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { submitBooking } from "@/lib/booking.functions";
import { useI18n } from "@/i18n";

const fieldClass =
  "mt-2 w-full bg-ink border border-white/10 rounded-[min(1vw,8px)] px-3 py-3 text-sm text-foreground placeholder-foreground/30 focus:border-amber focus:outline-none";
const labelClass = "font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50";

export function BookingSection() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  const services = [
    t("service.roofing"),
    t("service.flooring"),
    t("service.painting"),
    t("service.fence"),
  ];
  const timeSlots = [
    t("booking.time.morning"),
    t("booking.time.midday"),
    t("booking.time.afternoon"),
  ];

  if (sent) {
    return (
      <div className="mt-12 bg-steel-2 p-8 sm:p-12 rounded-[min(1vw,16px)] outline-1 -outline-offset-1 outline-amber/30 text-center">
        <p className="font-display text-5xl text-amber leading-none">{t("booking.sent.badge")}</p>
        <h3 className="mt-4 font-display text-3xl text-foreground tracking-wide">
          {t("booking.sent.title")}
        </h3>
        <p className="mt-3 text-foreground/60 text-sm leading-relaxed max-w-[46ch] mx-auto">
          {t("booking.sent.body")}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:9283221805"
            className="bg-amber text-ink font-semibold text-sm px-5 py-3 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
          >
            {t("quote.sent.call")}
          </a>
          <button
            onClick={() => setSent(false)}
            className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-amber transition-colors px-3 py-3"
          >
            {t("booking.sent.again")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 grid lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-2">
        <span className="grid place-items-center size-14 rounded-[min(1vw,12px)] bg-amber/15 text-amber">
          <CalendarDays className="size-7" strokeWidth={1.5} />
        </span>
        <h3 className="mt-6 font-display text-4xl text-foreground tracking-wide">
          {t("booking.title1")}
          <br />
          <span className="text-amber">{t("booking.title2")}</span>
        </h3>
        <p className="mt-4 text-foreground/60 text-sm leading-relaxed max-w-[38ch]">
          {t("booking.sub")}
        </p>
        <a href="tel:9283221805" className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-amber">
          → 928·322·1805
        </a>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setSending(true);
          const form = e.currentTarget;
          const fd = new FormData(form);
          try {
            await submitBooking({
              data: {
                name: String(fd.get("name") ?? ""),
                phone: String(fd.get("phone") ?? ""),
                serviceType: String(fd.get("service") ?? ""),
                preferredDate: String(fd.get("date") ?? ""),
                preferredTime: String(fd.get("time") ?? ""),
                address: String(fd.get("address") ?? ""),
                notes: String(fd.get("notes") ?? ""),
              },
            });
            setSent(true);
            form.reset();
          } catch (err) {
            setError(err instanceof Error ? err.message : t("booking.error"));
          } finally {
            setSending(false);
          }
        }}
        className="lg:col-span-3 bg-steel-2 p-6 sm:p-8 rounded-[min(1vw,16px)] outline-1 -outline-offset-1 outline-white/5 grid sm:grid-cols-2 gap-4"
      >
        <label className="sm:col-span-1 block">
          <span className={labelClass}>{t("quote.name")}</span>
          <input type="text" name="name" required maxLength={100} className={fieldClass} placeholder="Juan Pérez" />
        </label>
        <label className="sm:col-span-1 block">
          <span className={labelClass}>{t("quote.phone")}</span>
          <input type="tel" name="phone" required maxLength={30} className={fieldClass} placeholder="928-322-1805" />
        </label>
        <label className="sm:col-span-2 block">
          <span className={labelClass}>{t("quote.service")}</span>
          <select name="service" className={fieldClass} defaultValue={services[0]}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-1 block">
          <span className={labelClass}>{t("booking.day")}</span>
          <input type="date" name="date" required min={today} className={fieldClass} />
        </label>
        <label className="sm:col-span-1 block">
          <span className={labelClass}>{t("booking.time")}</span>
          <select name="time" className={fieldClass} defaultValue={timeSlots[0]}>
            {timeSlots.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="sm:col-span-2 block">
          <span className={labelClass}>{t("booking.addressOpt")}</span>
          <input type="text" name="address" maxLength={200} className={fieldClass} placeholder="123 W Main St, Phoenix, AZ" />
        </label>
        <label className="sm:col-span-2 block">
          <span className={labelClass}>{t("booking.notes")}</span>
          <textarea
            name="notes"
            rows={2}
            maxLength={1000}
            className={`${fieldClass} resize-none`}
            placeholder={t("booking.notesPlaceholder")}
          />
        </label>
        {error && (
          <p className="sm:col-span-2 text-sm text-red-400 font-mono" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="sm:col-span-2 bg-amber text-ink font-bold text-base py-4 rounded-[min(1vw,12px)] hover:bg-paper transition-colors disabled:opacity-60"
        >
          {sending ? t("booking.sending") : t("booking.submit")}
        </button>
      </form>
    </div>
  );
}
