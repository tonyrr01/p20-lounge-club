"use server";

import { EventStatus, PartnerProposalStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db/prisma";

export async function approvePartnerProposal(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await prisma.partnerProposal.update({
    where: { id },
    data: { status: PartnerProposalStatus.APPROVED }
  });

  revalidatePath("/admin/partners");
}

export async function launchPartnerProposal(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const proposal = await prisma.partnerProposal.findUniqueOrThrow({ where: { id } });
  const startsAt = new Date();
  startsAt.setDate(startsAt.getDate() + 14);
  startsAt.setHours(19, 0, 0, 0);

  const endsAt = new Date(startsAt);
  endsAt.setHours(22, 0, 0, 0);

  await prisma.event.upsert({
    where: { name: proposal.title },
    update: {
      description: proposal.shortPitch,
      partnerProposalId: proposal.id,
      status: EventStatus.PUBLISHED
    },
    create: {
      name: proposal.title,
      description: proposal.shortPitch,
      type: proposal.type.replaceAll("_", " ").toLowerCase(),
      startsAt,
      endsAt,
      capacity: proposal.suggestedCapacity ?? 24,
      priceCents: proposal.suggestedPriceCents ?? 0,
      status: EventStatus.PUBLISHED,
      partnerProposalId: proposal.id
    }
  });

  await prisma.partnerProposal.update({
    where: { id },
    data: {
      status: PartnerProposalStatus.LAUNCHED,
      internalNotes: "Lanzada como evento desde alianzas."
    }
  });

  revalidatePath("/admin/partners");
  revalidatePath("/admin/events");
}
