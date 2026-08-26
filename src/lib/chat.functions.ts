import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submitChatLeadInput = z.object({
  serviceType: z.string().trim().min(1).max(200),
  dimensions: z.string().trim().max(500),
  neededDates: z.string().trim().max(300),
  phone: z.string().trim().min(7).max(30),
});

export const submitChatLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submitChatLeadInput.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("chat_leads").insert({
      service_type: data.serviceType,
      dimensions: data.dimensions,
      needed_dates: data.neededDates,
      phone: data.phone,
    });

    if (error) {
      console.error("[chat lead insert]", error);
      throw new Error("No pudimos guardar tu solicitud. Intenta de nuevo.");
    }

    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    if (!lovableApiKey) {
      return "¡Gracias! Revisamos tu proyecto y te llamamos al " + data.phone;
    }

    const prompt = `El usuario acaba de dejar sus datos para una cotización en Mera Constructions LLC.

Datos:
- Tipo de trabajo: ${data.serviceType}
- Dimensiones: ${data.dimensions || "no especificadas"}
- Fechas necesarias: ${data.neededDates || "no especificadas"}
- Teléfono: ${data.phone}

Escribe un mensaje corto y amigable de confirmación (máximo 3 oraciones). Agradece la información, di que revisaremos el proyecto y que llamaremos al teléfono proporcionado. Responde en el mismo idioma que usó el usuario.`;

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
      return json.choices?.[0]?.message?.content?.trim() || "¡Gracias! Te llamamos pronto.";
    } catch (err) {
      console.error("[ai confirmation]", err);
      return "¡Gracias! Revisamos tu proyecto y te llamamos al " + data.phone;
    }
  });
