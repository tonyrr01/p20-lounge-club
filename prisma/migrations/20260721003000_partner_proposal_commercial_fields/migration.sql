CREATE TYPE "PartnerBusinessModel" AS ENUM ('COMMISSION', 'VENUE_FEE', 'REVENUE_SHARE', 'PACKAGE_RESALE', 'MINIMUM_GUARANTEE');

ALTER TABLE "PartnerProposal"
  ADD COLUMN "businessModel" "PartnerBusinessModel" NOT NULL DEFAULT 'COMMISSION',
  ADD COLUMN "commissionPercent" INTEGER,
  ADD COLUMN "minimumGuaranteeCents" INTEGER,
  ADD COLUMN "serviceDurationMinutes" INTEGER,
  ADD COLUMN "staffCount" INTEGER,
  ADD COLUMN "leadTimeDays" INTEGER,
  ADD COLUMN "setupNeeds" TEXT,
  ADD COLUMN "complianceNotes" TEXT,
  ADD COLUMN "menuPreview" TEXT,
  ADD COLUMN "cancellationPolicy" TEXT;
