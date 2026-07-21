import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(3),
  type: z.string().min(3),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  capacity: z.coerce.number().int().min(1),
  priceCents: z.coerce.number().int().min(0),
  description: z.string().max(1000).optional()
});

export type EventInput = z.infer<typeof eventSchema>;
