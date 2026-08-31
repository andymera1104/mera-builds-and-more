import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submitQuoteInput = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  serviceType: z.string().trim().min(1).max(200),
  address: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
});

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submitQuoteInput.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("quote_requests").insert({
      name: data.name,
      phone: data.phone,
      service_type: data.serviceType,
      address: data.address || null,
      message: data.message || null,
    });

    if (error) {
      console.error("[quote insert]", error);
      throw new Error("No pudimos enviar tu solicitud. Llama al 928-322-1805.");
    }

    return { ok: true as const };
  });
