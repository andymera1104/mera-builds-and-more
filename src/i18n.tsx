import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const en = {
  // header
  "nav.roofing": "Roofing",
  "nav.flooring": "Flooring",
  "nav.painting": "Painting",
  "nav.fence": "Fence",
  "nav.booking": "Booking",
  "header.tagline": "LLC · Construction",
  "header.quote": "Free Quote",
  "common.whatsapp": "WhatsApp",
  "lang.switch": "Español",

  // home hero
  "home.eyebrow": "Roofing · Flooring · Painting · Fence",
  "home.slogan": "Built Square · Built to Last.",
  "home.headline": "Roofs, floors, paint and fences — done right the first time.",
  "home.sub":
    "Family-run Arizona crew. Free written estimates, licensed & insured, and a real person on the phone. Free quote in English or Spanish.",
  "home.cta.quote": "Free quote",
  "home.cta.call": "Call now · 928·322·1805",

  // trades
  "home.trades.title1": "FOUR TRADES.",
  "home.trades.title2": "ONE CREW.",
  "home.trades.label": "Services",
  "home.trades.view": "View trade →",
  "trade.roofing.title": "Roofing",
  "trade.roofing.tags": "Shingles · Metal · Tile",
  "trade.roofing.body": "Installation, inspection & maintenance for shingle, metal and tile roofs.",
  "trade.flooring.title": "Tile Flooring",
  "trade.flooring.tags": "Tile · Porcelain",
  "trade.flooring.body": "Precision-laid floors, inspected and maintained to stay level.",
  "trade.painting.title": "Painting",
  "trade.painting.tags": "Interior · Exterior",
  "trade.painting.body": "Clean lines and even coats for fresh, lasting color.",
  "trade.fence.title": "Fence & Residential",
  "trade.fence.tags": "Wood · Residential",
  "trade.fence.body": "Wood fences and full residential builds, measured and square.",

  // stats
  "home.stat1": "Years on the jobsite, family-run. We work with our hands, never with shortcuts.",
  "home.stat2":
    "Licensed & insured. Every estimate free, every job walked and inspected with you.",
  "home.stat3":
    "On-site measurements and a written quote back in two business days — in English or Spanish.",

  // sections
  "home.booking.label": "Booking",
  "home.booking.title": "Book Your Visit",
  "home.quote.label": "Free Estimate",
  "home.quote.title": "Free Quote",

  // services list (shared)
  "service.roofing": "Roofing — Shingles / Metal / Tile",
  "service.flooring": "Tile Flooring — Tile / Porcelain",
  "service.painting": "Painting — Interior / Exterior",
  "service.fence": "Fence & Residential Construction",

  // quote form
  "quote.title1": "Free Quote.",
  "quote.title2": "No cost, no pressure.",
  "quote.sub": "Tell us about the job. A real person calls you back within one business day.",
  "quote.whatsapp": "→ WhatsApp us",
  "quote.name": "Name",
  "quote.phone": "Phone",
  "quote.service": "Service",
  "quote.address": "Project address",
  "quote.message": "Message",
  "quote.messagePlaceholder": "Tell us about the job, size, and when you need it.",
  "quote.submit": "Send Free Quote Request",
  "quote.sending": "Sending…",
  "quote.sent.badge": "Received!",
  "quote.sent.title": "Your free quote request was sent",
  "quote.sent.body":
    "Thanks — someone from Mera Constructions LLC will call you within one business day. Need to talk right now?",
  "quote.sent.call": "Call 928·322·1805",
  "quote.sent.again": "Send another request",
  "quote.error": "We couldn't send your request. Call 928-322-1805.",

  // booking
  "booking.title1": "Book a Free Visit.",
  "booking.title2": "No cost, no obligation.",
  "booking.sub":
    "Pick a day that works for you and we come to the project, take measurements and give you a written quote on the spot.",
  "booking.day": "Preferred day",
  "booking.time": "Time",
  "booking.addressOpt": "Project address (optional)",
  "booking.notes": "Notes (optional)",
  "booking.notesPlaceholder": "Anything we should know before the visit.",
  "booking.submit": "Book My Free Visit",
  "booking.sending": "Booking…",
  "booking.sent.badge": "Booked!",
  "booking.sent.title": "Your visit request was booked",
  "booking.sent.body":
    "We got your visit request. We'll call to confirm the exact day and time — the visit and the estimate are free.",
  "booking.sent.again": "Book another visit",
  "booking.error": "We couldn't book your visit. Please try again.",
  "booking.time.morning": "Morning (8–11 AM)",
  "booking.time.midday": "Midday (11 AM–2 PM)",
  "booking.time.afternoon": "Afternoon (2–5 PM)",

  // footer
  "footer.blurb":
    "Roofing, tile flooring, painting, fence & residential builds. Measured, square, built to last.",
  "footer.contact": "Contact",
  "footer.whatsapp": "Chat on WhatsApp",
  "footer.hours": "Mon–Sat · 7am–6pm",
  "footer.area": "Arizona · Serving the Valley",
  "footer.quote": "Free Quote",
  "footer.quoteBody": "Free estimate in English or Spanish. No pressure, just a real number.",
  "footer.start": "Start Your Estimate",
  "footer.legal": "© 2026 Mera Constructions LLC · Licensed & Insured",
  "footer.motto": "Built Square · Built to Last",

  // chat widget
  "chat.q1": "Hi, I'm the Mera Constructions assistant. What kind of work do you need?",
  "chat.p1": "E.g. roofing, flooring, painting, fence...",
  "chat.q2": "What are the dimensions or approximate size of the job?",
  "chat.p2": "E.g. 1,200 sq ft, 10x12 patio, etc.",
  "chat.q3": "What day or dates do you need it?",
  "chat.p3": "E.g. as soon as possible, September, etc.",
  "chat.q4": "What phone number can we call you at?",
  "chat.p4": "E.g. 928-322-1805",
  "chat.title": "Mera Assistant",
  "chat.typing": "Typing…",
  "chat.new": "New quote",
  "chat.open": "Free Quote Chat",
  "chat.close": "Close",
  "chat.error": "Something went wrong. Please try again.",

  // service pages
  "sp.step": "Step",
  "roofing.eyebrow": "Roofing",
  "roofing.title": "Roofing",
  "roofing.intro":
    "Shingles, metal (lámina) and tile roofs built for Arizona heat and monsoon rain. Every roof we touch gets installation, inspection and maintenance done by the same crew.",
  "roofing.alt": "Roofer laying asphalt shingles on a residential roof",
  "roofing.s1.title": "Installation",
  "roofing.s1.body":
    "Shingles, metal and tile — installed square with proper flashing, underlayment and ventilation.",
  "roofing.s2.title": "Inspection",
  "roofing.s2.body":
    "Full roof check after storms and each season — leaks, lifting shingles and drainage found early.",
  "roofing.s3.title": "Maintenance",
  "roofing.s3.body":
    "Gutter clearing, sealant and patch repairs that keep the roof working for decades.",

  "flooring.eyebrow": "Tile Flooring",
  "flooring.title": "Tile Flooring",
  "flooring.intro":
    "Tile and porcelain floors laid on a laser-flat base, with tight grout lines and zero lippage. Interior and exterior, kitchens, baths, patios and full-home installs.",
  "flooring.alt": "Tile setter installing large porcelain floor tiles",
  "flooring.s1.title": "Installation",
  "flooring.s1.body":
    "Ceramic tile and porcelain set over a leveled, prepped substrate with proper waterproofing.",
  "flooring.s2.title": "Inspection",
  "flooring.s2.body":
    "Level, hollow-spot and grout checks — loose tile and moisture problems caught before they spread.",
  "flooring.s3.title": "Maintenance",
  "flooring.s3.body":
    "Regrouting, sealing and tile replacement so floors keep looking new for years.",

  "painting.eyebrow": "Painting",
  "painting.title": "House Painting",
  "painting.intro":
    "Interior and exterior house painting. Careful prep, premium coatings and crisp lines that hold up to the Arizona sun year after year.",
  "painting.alt": "Painter rolling fresh exterior paint on a stucco house wall",
  "painting.s1.title": "Preparation",
  "painting.s1.body":
    "Wash, scrape, patch, caulk and mask — the step that decides how long the paint lasts.",
  "painting.s2.title": "Painting",
  "painting.s2.body":
    "Interior walls, ceilings, trim and doors; exterior stucco, siding and fascia with UV-rated coatings.",
  "painting.s3.title": "Maintenance",
  "painting.s3.body": "Yearly walkthroughs, touch-ups and recoating so your color stays true.",

  "fence.eyebrow": "Fence & Residential",
  "fence.title": "Fence &\nResidential",
  "fence.intro":
    "Custom wood fencing — cedar, pressure-treated and privacy styles — plus full residential construction: new builds, additions and remodels, framed square from the footing up.",
  "fence.alt": "New cedar wood privacy fence with a residential framing project behind it",
  "fence.s1.title": "Wood Fence",
  "fence.s1.body":
    "Privacy, picket and ranch-style fences set in concrete footings with straight, plumb posts.",
  "fence.s2.title": "Residential Construction",
  "fence.s2.body":
    "New residential builds, additions, patios and remodels — framing, roofing and finish work in-house.",
  "fence.s3.title": "Inspection & Maintenance",
  "fence.s3.body": "Post, gate and structure checks, board replacement, staining and sealing.",

  "step.request": "Call or Request",
  "step.measure": "On-Site Measure",
  "step.quote": "Written Quote",
  "step.built": "Built Square",
  "step.level": "Laid Level",
  "step.color": "Color & Measure",
  "step.finish": "Clean Finish",
};

type Dict = typeof en;

const es: Dict = {
  "nav.roofing": "Techos",
  "nav.flooring": "Pisos",
  "nav.painting": "Pintura",
  "nav.fence": "Cercas",
  "nav.booking": "Agendar",
  "header.tagline": "LLC · Construcción",
  "header.quote": "Cotiza gratis",
  "common.whatsapp": "WhatsApp",
  "lang.switch": "English",

  "home.eyebrow": "Techos · Pisos · Pintura · Cercas",
  "home.slogan": "Hecho Cuadrado · Hecho para Durar.",
  "home.headline": "Techos, pisos, pintura y cercas — bien hechos desde la primera vez.",
  "home.sub":
    "Equipo familiar en Arizona. Cotizaciones escritas gratis, con licencia y seguro, y una persona real al teléfono. Cotización gratuita en español o inglés.",
  "home.cta.quote": "Cotización gratuita",
  "home.cta.call": "Llamar ahora · 928·322·1805",

  "home.trades.title1": "CUATRO OFICIOS.",
  "home.trades.title2": "UN EQUIPO.",
  "home.trades.label": "Servicios",
  "home.trades.view": "Ver servicio →",
  "trade.roofing.title": "Techos",
  "trade.roofing.tags": "Shingles · Lámina · Teja",
  "trade.roofing.body":
    "Instalación, inspección y mantenimiento de techos de shingle, lámina y teja.",
  "trade.flooring.title": "Pisos de Tile",
  "trade.flooring.tags": "Tile · Porcelanato",
  "trade.flooring.body": "Pisos colocados a precisión, inspeccionados y mantenidos a nivel.",
  "trade.painting.title": "Pintura",
  "trade.painting.tags": "Interior · Exterior",
  "trade.painting.body": "Líneas limpias y capas parejas para un color fresco y duradero.",
  "trade.fence.title": "Cercas y Residencial",
  "trade.fence.tags": "Madera · Residencial",
  "trade.fence.body": "Cercas de madera y construcción residencial completa, medidas y a escuadra.",

  "home.stat1":
    "Años en la obra, empresa familiar. Trabajamos con las manos, no con atajos.",
  "home.stat2":
    "Con licencia y seguro. Cada cotización es gratis y cada trabajo se recorre e inspecciona contigo.",
  "home.stat3":
    "Medición en sitio y cotización escrita en dos días hábiles — en español o inglés.",

  "home.booking.label": "Agendar",
  "home.booking.title": "Agenda Tu Visita",
  "home.quote.label": "Cotización Gratis",
  "home.quote.title": "Cotización Gratuita",

  "service.roofing": "Techos — Shingles / Lámina / Teja",
  "service.flooring": "Pisos — Tile / Porcelanato",
  "service.painting": "Pintura — Interior / Exterior",
  "service.fence": "Cercas y Construcción Residencial",

  "quote.title1": "Cotización Gratis.",
  "quote.title2": "Sin costo, sin compromiso.",
  "quote.sub":
    "Cuéntanos del trabajo. Una persona real te llama dentro de un día hábil.",
  "quote.whatsapp": "→ Escríbenos por WhatsApp",
  "quote.name": "Nombre",
  "quote.phone": "Teléfono",
  "quote.service": "Servicio",
  "quote.address": "Dirección del proyecto",
  "quote.message": "Mensaje",
  "quote.messagePlaceholder": "Cuéntanos del trabajo, el tamaño y para cuándo lo necesitas.",
  "quote.submit": "Enviar solicitud gratuita",
  "quote.sending": "Enviando…",
  "quote.sent.badge": "¡Recibido!",
  "quote.sent.title": "Tu solicitud de cotización fue enviada",
  "quote.sent.body":
    "Gracias — un miembro del equipo de Mera Constructions LLC te llamará dentro de un día hábil. ¿Necesitas hablar ahora mismo?",
  "quote.sent.call": "Llamar 928·322·1805",
  "quote.sent.again": "Enviar otra solicitud",
  "quote.error": "No pudimos enviar tu solicitud. Llama al 928-322-1805.",

  "booking.title1": "Agenda una visita gratis.",
  "booking.title2": "Sin costo, sin compromiso.",
  "booking.sub":
    "Elige el día que te funcione y vamos al proyecto, tomamos medidas y te damos una cotización escrita en el momento.",
  "booking.day": "Día preferido",
  "booking.time": "Hora",
  "booking.addressOpt": "Dirección del proyecto (opcional)",
  "booking.notes": "Notas (opcional)",
  "booking.notesPlaceholder": "Algo que debamos saber antes de la visita.",
  "booking.submit": "Agendar mi visita gratis",
  "booking.sending": "Agendando…",
  "booking.sent.badge": "¡Agendado!",
  "booking.sent.title": "Tu visita quedó agendada",
  "booking.sent.body":
    "Recibimos tu solicitud de visita. Te llamamos para confirmar el día y la hora exacta — la visita y la cotización son gratis.",
  "booking.sent.again": "Agendar otra visita",
  "booking.error": "No pudimos agendar tu visita. Intenta de nuevo.",
  "booking.time.morning": "Mañana (8–11 AM)",
  "booking.time.midday": "Mediodía (11 AM–2 PM)",
  "booking.time.afternoon": "Tarde (2–5 PM)",

  "footer.blurb":
    "Techos, pisos de tile, pintura, cercas y construcción residencial. Medido, cuadrado, hecho para durar.",
  "footer.contact": "Contacto",
  "footer.whatsapp": "Chat por WhatsApp",
  "footer.hours": "Lun–Sáb · 7am–6pm",
  "footer.area": "Arizona · Servicio en el Valle",
  "footer.quote": "Cotización Gratis",
  "footer.quoteBody":
    "Cotización gratuita en español o inglés. Sin presión, solo un número real.",
  "footer.start": "Comenzar mi cotización",
  "footer.legal": "© 2026 Mera Constructions LLC · Con licencia y seguro",
  "footer.motto": "Hecho Cuadrado · Hecho para Durar",

  "chat.q1": "Hola, soy el asistente de Mera Constructions. ¿Qué tipo de trabajo necesitas?",
  "chat.p1": "Ej: techo, pisos, pintura, cerca...",
  "chat.q2": "¿Cuáles son las dimensiones o el tamaño aproximado del trabajo?",
  "chat.p2": "Ej: 1,200 sq ft, patio 10x12, etc.",
  "chat.q3": "¿Para qué día o fechas lo necesitas?",
  "chat.p3": "Ej: lo antes posible, septiembre, etc.",
  "chat.q4": "¿A qué número de teléfono te podemos llamar?",
  "chat.p4": "Ej: 928-322-1805",
  "chat.title": "Asistente Mera",
  "chat.typing": "Escribiendo…",
  "chat.new": "Nueva cotización",
  "chat.open": "Chat de cotización",
  "chat.close": "Cerrar",
  "chat.error": "Hubo un error. Intenta de nuevo.",

  "sp.step": "Paso",
  "roofing.eyebrow": "Techos",
  "roofing.title": "Techos",
  "roofing.intro":
    "Shingles, lámina (metal) y teja hechos para el calor de Arizona y las lluvias del monzón. Cada techo lleva instalación, inspección y mantenimiento con el mismo equipo.",
  "roofing.alt": "Techador colocando shingles de asfalto en un techo residencial",
  "roofing.s1.title": "Instalación",
  "roofing.s1.body":
    "Shingles, lámina y teja — instalados a escuadra con flashing, underlayment y ventilación correctos.",
  "roofing.s2.title": "Inspección",
  "roofing.s2.body":
    "Revisión completa después de tormentas y cada temporada — goteras, shingles levantados y drenaje detectados a tiempo.",
  "roofing.s3.title": "Mantenimiento",
  "roofing.s3.body":
    "Limpieza de canaletas, sellado y reparaciones que mantienen el techo funcionando por décadas.",

  "flooring.eyebrow": "Pisos de Tile",
  "flooring.title": "Pisos de Tile",
  "flooring.intro":
    "Pisos de tile y porcelanato colocados sobre una base perfectamente nivelada, con juntas cerradas y sin desniveles. Interior y exterior: cocinas, baños, patios y casas completas.",
  "flooring.alt": "Instalador colocando piezas grandes de porcelanato",
  "flooring.s1.title": "Instalación",
  "flooring.s1.body":
    "Cerámica y porcelanato colocados sobre una base nivelada y preparada, con impermeabilizado correcto.",
  "flooring.s2.title": "Inspección",
  "flooring.s2.body":
    "Revisión de nivel, huecos y juntas — tile suelto y humedad detectados antes de que crezcan.",
  "flooring.s3.title": "Mantenimiento",
  "flooring.s3.body":
    "Rejunteo, sellado y reemplazo de piezas para que el piso siga viéndose nuevo por años.",

  "painting.eyebrow": "Pintura",
  "painting.title": "Pintura para Casas",
  "painting.intro":
    "Pintura para casas — interior y exterior. Preparación cuidadosa, recubrimientos premium y líneas limpias que aguantan el sol de Arizona año tras año.",
  "painting.alt": "Pintor aplicando pintura exterior en una pared de estuco",
  "painting.s1.title": "Preparación",
  "painting.s1.body":
    "Lavar, raspar, resanar, sellar y enmascarar — el paso que decide cuánto dura la pintura.",
  "painting.s2.title": "Pintado",
  "painting.s2.body":
    "Paredes, techos, molduras y puertas por dentro; estuco, siding y fascia por fuera con pinturas resistentes al UV.",
  "painting.s3.title": "Mantenimiento",
  "painting.s3.body":
    "Revisiones anuales, retoques y repintado para que tu color se mantenga.",

  "fence.eyebrow": "Cercas y Residencial",
  "fence.title": "Cercas y\nResidencial",
  "fence.intro":
    "Cercas de madera a medida — cedro, madera tratada y estilos de privacidad — más construcción residencial completa: casas nuevas, ampliaciones y remodelaciones, a escuadra desde la cimentación.",
  "fence.alt": "Cerca nueva de cedro con un proyecto residencial en construcción atrás",
  "fence.s1.title": "Cerca de Madera",
  "fence.s1.body":
    "Cercas de privacidad, picket y estilo rancho, con postes plomados en bases de concreto.",
  "fence.s2.title": "Construcción Residencial",
  "fence.s2.body":
    "Casas nuevas, ampliaciones, patios y remodelaciones — estructura, techo y acabados con equipo propio.",
  "fence.s3.title": "Inspección y Mantenimiento",
  "fence.s3.body":
    "Revisión de postes, portones y estructura, cambio de tablas, teñido y sellado.",

  "step.request": "Llama o Solicita",
  "step.measure": "Medición en Sitio",
  "step.quote": "Cotización Escrita",
  "step.built": "Hecho Cuadrado",
  "step.level": "Piso a Nivel",
  "step.color": "Color y Medida",
  "step.finish": "Acabado Limpio",
};

const dicts: Record<Lang, Dict> = { en, es };

export type TKey = keyof Dict;

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

const STORAGE_KEY = "mera-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      setLangState(stored);
      return;
    }
    const browser = [navigator.language, ...(navigator.languages ?? [])].some((l) =>
      l?.toLowerCase().startsWith("es"),
    );
    if (browser) setLangState("es");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  const { lang, setLang } = useContext(LangContext);
  const t = (key: TKey) => dicts[lang][key];
  return { lang, setLang, t };
}
