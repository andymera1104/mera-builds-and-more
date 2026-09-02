import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitChatLead } from "@/lib/chat.functions";
import { useI18n, type TKey } from "@/i18n";

const STEPS = [
  { key: "serviceType", q: "chat.q1", p: "chat.p1" },
  { key: "dimensions", q: "chat.q2", p: "chat.p2" },
  { key: "neededDates", q: "chat.q3", p: "chat.p3" },
  { key: "phone", q: "chat.q4", p: "chat.p4" },
] as const;

type StepKey = (typeof STEPS)[number]["key"];

interface Message {
  role: "bot" | "user";
  text: string;
}

export function ChatWidget() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<StepKey, string>>>({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const submitLead = useServerFn(submitChatLead);

  // Greeting follows the active language while the chat is untouched.
  useEffect(() => {
    if (stepIndex === 0 && !done && !loading) {
      setMessages([{ role: "bot", text: t(STEPS[0].q as TKey) }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (messages.length === 0) setMessages([{ role: "bot", text: t(STEPS[0].q as TKey) }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const currentStep = STEPS[stepIndex];
    if (!currentStep) return;

    const nextMessages: Message[] = [...messages, { role: "user", text }];
    const nextAnswers = { ...answers, [currentStep.key]: text };
    setMessages(nextMessages);
    setAnswers(nextAnswers);
    setInput("");

    if (stepIndex < STEPS.length - 1) {
      const nextStep = STEPS[stepIndex + 1]!;
      setStepIndex(stepIndex + 1);
      setMessages([...nextMessages, { role: "bot", text: t(nextStep.q as TKey) }]);
    } else {
      setLoading(true);
      try {
        const reply = await submitLead({
          data: {
            serviceType: nextAnswers.serviceType || "",
            dimensions: nextAnswers.dimensions || "",
            neededDates: nextAnswers.neededDates || "",
            phone: nextAnswers.phone || "",
            language: lang,
          },
        });
        setMessages([...nextMessages, { role: "bot", text: reply }]);
        setDone(true);
      } catch (err) {
        const errorText = err instanceof Error ? err.message : t("chat.error");
        setMessages([...nextMessages, { role: "bot", text: errorText }]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const reset = () => {
    setMessages([{ role: "bot", text: t(STEPS[0].q as TKey) }]);
    setStepIndex(0);
    setAnswers({});
    setInput("");
    setDone(false);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end">
      {open && (
        <div className="mb-3 w-[min(90vw,360px)] bg-steel-2 border border-white/10 rounded-[min(2vw,16px)] shadow-2xl overflow-hidden flex flex-col max-h-[min(80vh,520px)]">
          <div className="bg-ink px-4 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center size-7 bg-amber text-ink font-display text-lg leading-none rounded">M</span>
              <p className="font-display text-base text-foreground tracking-wide">{t("chat.title")}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-foreground/50 hover:text-amber transition-colors"
              aria-label={t("chat.close")}
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] text-sm leading-relaxed px-3 py-2 rounded-[min(1vw,10px)] ${
                    msg.role === "user"
                      ? "bg-amber text-ink"
                      : "bg-steel text-foreground border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-steel text-foreground/60 border border-white/10 px-3 py-2 rounded-[min(1vw,10px)] text-sm">
                  {t("chat.typing")}
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 bg-ink/50">
            {done ? (
              <button
                onClick={reset}
                className="w-full bg-amber text-ink font-semibold text-sm px-4 py-2.5 rounded-[min(1vw,10px)] hover:bg-paper transition-colors"
              >
                {t("chat.new")}
              </button>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t((STEPS[stepIndex]?.p ?? "chat.p1") as TKey)}
                  disabled={loading}
                  className="flex-1 bg-steel text-foreground text-sm px-3 py-2.5 rounded-[min(1vw,10px)] border border-white/10 placeholder:text-foreground/40 focus:outline-none focus:border-amber"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-amber text-ink font-semibold text-sm px-3 py-2.5 rounded-[min(1vw,10px)] hover:bg-paper transition-colors disabled:opacity-50"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex items-center gap-2 bg-amber text-ink font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:bg-paper transition-colors"
        aria-label={open ? t("chat.close") : t("chat.open")}
      >
        {open ? (
          <>
            <span>{t("chat.close")}</span>
            <span>✕</span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{t("chat.open")}</span>
          </>
        )}
      </button>
    </div>
  );
}
