import { z } from "zod";

const optionalText = z.preprocess((value) => (value === "" ? undefined : value), z.string().optional());
const optionalUrl = z.preprocess((value) => (value === "" ? undefined : value), z.string().url().optional());
const optionalNumber = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.coerce.number().int().optional()
);

export const partnerProposalSchema = z.object({
  brandName: z.string().min(2),
  contactName: z.string().min(2),
  contactEmail: z.string().email(),
  contactPhone: optionalText,
  type: z.enum([
    "CHEF",
    "CATERING",
    "DISTILLER",
    "BREWER",
    "TEQUILA_PRODUCER",
    "WINE_PRODUCER",
    "MIXOLOGIST",
    "OTHER"
  ]),
  title: z.string().min(3),
  shortPitch: z.string().min(10).max(180),
  description: z.string().min(30).max(1500),
  suggestedPriceCents: optionalNumber.refine((value) => value === undefined || value >= 0),
  suggestedCapacity: optionalNumber.refine((value) => value === undefined || (value >= 1 && value <= 120)),
  preferredDates: optionalText,
  mediaUrl: optionalUrl
});

export type PartnerProposalInput = z.infer<typeof partnerProposalSchema>;
