import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submitChatLeadInput = z.object({
  serviceType: z.string().trim().min(1).max(200),
  dimensions: z.string().trim().max(500),
  neededDates: z.string().trim().max(300),
  phone: z.string().trim().min(7).max(30),
  language: z.enum(["en", "es"]).optional().default("es"),
});

export const submitChatLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submitChatLeadInput.parse(input))
  .handler(async ({ data }) => {
    const isEs = data.language !== "en";
    const fallback = isEs
      ? "¡Gracias! Revisamos tu proyecto y te llamamos al " + data.phone
      : "Thanks! We'll review your project and call you at " + data.phone;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("chat_leads").insert({
      service_type: data.serviceType,
      dimensions: data.dimensions,
      needed_dates: data.neededDates,
      phone: data.phone,
    });

    if (error) {
      console.error("[chat lead insert]", error);
      throw new Error(
        isEs
          ? "No pudimos guardar tu solicitud. Intenta de nuevo."
          : "We couldn't save your request. Please try again.",
      );
    }

    const { sendNotification } = await import("./notify.server");
    await sendNotification(
      `Nuevo prospecto del chat: ${data.serviceType}`,
      [
        "Nuevo prospecto desde el chat del sitio web.",
        "",
        `Servicio: ${data.serviceType}`,
        `Dimensiones: ${data.dimensions}`,
        `Fechas: ${data.neededDates}`,
        `Teléfono: ${data.phone}`,
      ].join("\n"),
    );



    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    if (!lovableApiKey) {
      return fallback;
    }

    const prompt = `A visitor just submitted their details for a quote at Mera Constructions LLC.

Details:
- Type of work: ${data.serviceType}
- Dimensions: ${data.dimensions || "not specified"}
- Needed dates: ${data.neededDates || "not specified"}
- Phone: ${data.phone}

Write a short, friendly confirmation message (max 3 sentences). Thank them, say we'll review the project and call the phone number provided. Reply in ${isEs ? "Spanish" : "English"}.`;


    try {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3.1-flash-lite",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        console.error("[ai gateway]", response.status, body);
        throw new Error("AI gateway error");
      }

      const json = (await response.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      return json.choices?.[0]?.message?.content?.trim() || fallback;
    } catch (err) {
      console.error("[ai confirmation]", err);
      return fallback;
    }
  });
