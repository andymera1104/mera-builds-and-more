import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const submitBookingInput = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  serviceType: z.string().trim().min(1).max(200),
  preferredDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/),
  preferredTime: z.string().trim().max(50).optional().default(""),
  address: z.string().trim().max(200).optional().default(""),
  notes: z.string().trim().max(1000).optional().default(""),
});

export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submitBookingInput.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("bookings").insert({
      name: data.name,
      phone: data.phone,
      service_type: data.serviceType,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime || null,
      address: data.address || null,
      notes: data.notes || null,
    });

    if (error) {
      console.error("[booking insert]", error);
      throw new Error("No pudimos agendar tu visita. Intenta de nuevo o llama al 928-322-1805.");
    }

    const { sendNotification } = await import("./notify.server");
    await sendNotification(
      `Nueva cita: ${data.serviceType} — ${data.preferredDate}`,
      [
        "Nueva reserva desde el sitio web.",
        "",
        `Nombre: ${data.name}`,
        `Teléfono: ${data.phone}`,
        `Servicio: ${data.serviceType}`,
        `Fecha: ${data.preferredDate} ${data.preferredTime || ""}`.trim(),
        `Dirección: ${data.address || "-"}`,
        `Notas: ${data.notes || "-"}`,
      ].join("\n"),
    );

    return { ok: true as const };
  });

