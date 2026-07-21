"use server";

import { PartnerProposalStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db/prisma";
import { partnerProposalSchema } from "@/lib/validations/partner-proposal";

export async function createPartnerProposal(formData: FormData) {
  const rawPrice = formData.get("suggestedPricePesos");
  const pricePesos = rawPrice ? Number(String(rawPrice).replace(/[^0-9.]/g, "")) : undefined;
  const rawGuarantee = formData.get("minimumGuaranteePesos");
  const guaranteePesos = rawGuarantee ? Number(String(rawGuarantee).replace(/[^0-9.]/g, "")) : undefined;
  const includes = String(formData.get("includes") ?? "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  const parsed = partnerProposalSchema.safeParse({
    brandName: formData.get("brandName"),
    contactName: formData.get("contactName"),
    contactEmail: formData.get("contactEmail"),
    contactPhone: formData.get("contactPhone"),
    type: formData.get("type"),
    title: formData.get("title"),
    shortPitch: formData.get("shortPitch"),
    description: formData.get("description"),
    suggestedPriceCents:
      pricePesos === undefined || Number.isNaN(pricePesos) ? undefined : Math.round(pricePesos * 100),
    suggestedCapacity: formData.get("suggestedCapacity"),
    businessModel: formData.get("businessModel") || "COMMISSION",
    commissionPercent: formData.get("commissionPercent"),
    minimumGuaranteeCents:
      guaranteePesos === undefined || Number.isNaN(guaranteePesos) ? undefined : Math.round(guaranteePesos * 100),
    serviceDurationMinutes: formData.get("serviceDurationMinutes"),
    staffCount: formData.get("staffCount"),
    leadTimeDays: formData.get("leadTimeDays"),
    setupNeeds: formData.get("setupNeeds"),
    complianceNotes: formData.get("complianceNotes"),
    menuPreview: formData.get("menuPreview"),
    cancellationPolicy: formData.get("cancellationPolicy"),
    preferredDates: formData.get("preferredDates"),
    mediaUrl: formData.get("mediaUrl")
  });

  if (!parsed.success) {
    redirect("/partners?estado=datos");
  }

  await prisma.partnerProposal.create({
    data: {
      ...parsed.data,
      includes,
      status: PartnerProposalStatus.SUBMITTED
    }
  });

  revalidatePath("/admin/partners");
  redirect("/partners?estado=recibida");
}
