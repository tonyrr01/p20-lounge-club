import { z } from "zod";

export const reservationSchema = z.object({
  hostName: z.string().min(2, "Captura el nombre del anfitrion."),
  hostEmail: z.string().email("Captura un correo valido."),
  space: z.enum(["MEETING_ROOM", "FULL_LOUNGE", "PRIVATE_BAR", "AFTER_OFFICE_TABLE"]),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  guestCount: z.coerce.number().int().min(1).max(80),
  notes: z.string().max(600).optional()
});

export type ReservationInput = z.infer<typeof reservationSchema>;
