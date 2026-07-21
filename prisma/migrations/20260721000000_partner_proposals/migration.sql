CREATE TYPE "PartnerType" AS ENUM ('CHEF', 'CATERING', 'DISTILLER', 'BREWER', 'TEQUILA_PRODUCER', 'WINE_PRODUCER', 'MIXOLOGIST', 'OTHER');
CREATE TYPE "PartnerProposalStatus" AS ENUM ('SUBMITTED', 'IN_REVIEW', 'APPROVED', 'SCHEDULED', 'LAUNCHED', 'REJECTED');

CREATE TABLE "PartnerProposal" (
  "id" TEXT NOT NULL,
  "brandName" TEXT NOT NULL,
  "contactName" TEXT NOT NULL,
  "contactEmail" TEXT NOT NULL,
  "contactPhone" TEXT,
  "type" "PartnerType" NOT NULL,
  "title" TEXT NOT NULL,
  "shortPitch" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "includes" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "targetAudience" TEXT,
  "suggestedPriceCents" INTEGER,
  "suggestedCapacity" INTEGER,
  "preferredDates" TEXT,
  "mediaUrl" TEXT,
  "status" "PartnerProposalStatus" NOT NULL DEFAULT 'SUBMITTED',
  "internalNotes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "PartnerProposal_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Event" ADD COLUMN "partnerProposalId" TEXT;

CREATE INDEX "PartnerProposal_status_idx" ON "PartnerProposal"("status");
CREATE INDEX "PartnerProposal_type_idx" ON "PartnerProposal"("type");

ALTER TABLE "Event" ADD CONSTRAINT "Event_partnerProposalId_fkey" FOREIGN KEY ("partnerProposalId") REFERENCES "PartnerProposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
