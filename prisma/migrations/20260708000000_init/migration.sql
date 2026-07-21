CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'LOUNGE_ADMIN', 'STAFF', 'TENANT_P20', 'DOS_PUNTAS_EXECUTIVE', 'VIP_MEMBER', 'GUEST');
CREATE TYPE "MembershipType" AS ENUM ('TENANT_P20', 'DOS_PUNTAS_EXECUTIVE', 'VIP_MEMBER', 'GUEST');
CREATE TYPE "ReservationSpace" AS ENUM ('MEETING_ROOM', 'FULL_LOUNGE', 'PRIVATE_BAR', 'AFTER_OFFICE_TABLE');
CREATE TYPE "ReservationStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PAID', 'CANCELLED', 'COMPLETED');
CREATE TYPE "AccessStatus" AS ENUM ('ACTIVE', 'USED', 'EXPIRED', 'CANCELLED');
CREATE TYPE "AccessPassType" AS ENUM ('HOST', 'GUEST', 'STAFF', 'PROVIDER');
CREATE TYPE "EventStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'SOLD_OUT', 'CANCELLED', 'COMPLETED');
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED', 'PARTIALLY_REFUNDED');
CREATE TYPE "ProductType" AS ENUM ('WINE', 'BEER', 'COFFEE', 'FOOD', 'SPIRIT', 'SOFT_DRINK', 'SERVICE', 'PACKAGE', 'OTHER');
CREATE TYPE "InventoryMovementType" AS ENUM ('IN', 'OUT', 'WASTE', 'ADJUSTMENT', 'RESERVED', 'RELEASED');
CREATE TYPE "WineStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD_OUT');

CREATE TABLE "Role" (
  "id" TEXT NOT NULL,
  "key" "UserRole" NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Membership" (
  "id" TEXT NOT NULL,
  "type" "MembershipType" NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "benefits" TEXT[],
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT,
  "role" "UserRole" NOT NULL DEFAULT 'GUEST',
  "membershipId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Reservation" (
  "id" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "hostId" TEXT,
  "hostName" TEXT NOT NULL,
  "hostEmail" TEXT NOT NULL,
  "space" "ReservationSpace" NOT NULL,
  "status" "ReservationStatus" NOT NULL DEFAULT 'PENDING',
  "startsAt" TIMESTAMP(3) NOT NULL,
  "endsAt" TIMESTAMP(3) NOT NULL,
  "guestCount" INTEGER NOT NULL,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ReservationGuest" (
  "id" TEXT NOT NULL,
  "reservationId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT,
  "phone" TEXT,
  "checkedInAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ReservationGuest_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AccessPass" (
  "id" TEXT NOT NULL,
  "reservationId" TEXT,
  "eventTicketId" TEXT,
  "type" "AccessPassType" NOT NULL DEFAULT 'GUEST',
  "token" TEXT NOT NULL,
  "status" "AccessStatus" NOT NULL DEFAULT 'ACTIVE',
  "validFrom" TIMESTAMP(3) NOT NULL,
  "validUntil" TIMESTAMP(3) NOT NULL,
  "usedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "AccessPass_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Service" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "priceCents" INTEGER NOT NULL DEFAULT 0,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ReservationService" (
  "reservationId" TEXT NOT NULL,
  "serviceId" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL DEFAULT 1,
  "priceCents" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "ReservationService_pkey" PRIMARY KEY ("reservationId", "serviceId")
);

CREATE TABLE "Event" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "type" TEXT NOT NULL,
  "startsAt" TIMESTAMP(3) NOT NULL,
  "endsAt" TIMESTAMP(3) NOT NULL,
  "capacity" INTEGER NOT NULL,
  "priceCents" INTEGER NOT NULL DEFAULT 0,
  "accessType" TEXT NOT NULL DEFAULT 'RESERVATION_OR_INVITE',
  "imageUrl" TEXT,
  "status" "EventStatus" NOT NULL DEFAULT 'DRAFT',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EventTicket" (
  "id" TEXT NOT NULL,
  "eventId" TEXT NOT NULL,
  "buyerName" TEXT NOT NULL,
  "buyerEmail" TEXT,
  "quantity" INTEGER NOT NULL DEFAULT 1,
  "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "EventTicket_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ProductCategory" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Product" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "type" "ProductType" NOT NULL,
  "categoryId" TEXT,
  "description" TEXT,
  "costCents" INTEGER NOT NULL DEFAULT 0,
  "priceCents" INTEGER NOT NULL DEFAULT 0,
  "stock" DECIMAL(65,30) NOT NULL DEFAULT 0,
  "minimumStock" DECIMAL(65,30) NOT NULL DEFAULT 0,
  "unit" TEXT NOT NULL DEFAULT 'piece',
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "InventoryMovement" (
  "id" TEXT NOT NULL,
  "productId" TEXT NOT NULL,
  "type" "InventoryMovementType" NOT NULL,
  "quantity" DECIMAL(65,30) NOT NULL,
  "reason" TEXT,
  "createdBy" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "InventoryMovement_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Wine" (
  "id" TEXT NOT NULL,
  "productId" TEXT NOT NULL,
  "grape" TEXT,
  "countryRegion" TEXT,
  "vintage" INTEGER,
  "bottlePriceCents" INTEGER NOT NULL DEFAULT 0,
  "glassPriceCents" INTEGER,
  "suggestedTemperature" TEXT,
  "pairing" TEXT,
  "notes" TEXT,
  "status" "WineStatus" NOT NULL DEFAULT 'AVAILABLE',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Wine_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BeerTap" (
  "id" TEXT NOT NULL,
  "lineNumber" INTEGER NOT NULL,
  "activeBeerName" TEXT NOT NULL,
  "style" TEXT,
  "brewery" TEXT,
  "story" TEXT,
  "priceCents" INTEGER NOT NULL DEFAULT 0,
  "kegLevelPercent" INTEGER NOT NULL DEFAULT 100,
  "installedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "rotationAt" TIMESTAMP(3),
  "eventId" TEXT,
  "isBeerOfWeek" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "BeerTap_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Payment" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "reservationId" TEXT,
  "eventTicketId" TEXT,
  "concept" TEXT NOT NULL,
  "amountCents" INTEGER NOT NULL,
  "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
  "provider" TEXT,
  "providerRef" TEXT,
  "paidAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ReportSnapshot" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "period" TEXT NOT NULL,
  "metrics" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ReportSnapshot_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Setting" (
  "id" TEXT NOT NULL,
  "key" TEXT NOT NULL,
  "value" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Role_key_key" ON "Role"("key");
CREATE UNIQUE INDEX "Membership_type_key" ON "Membership"("type");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "Reservation_code_key" ON "Reservation"("code");
CREATE INDEX "Reservation_startsAt_endsAt_idx" ON "Reservation"("startsAt", "endsAt");
CREATE INDEX "Reservation_status_idx" ON "Reservation"("status");
CREATE UNIQUE INDEX "AccessPass_token_key" ON "AccessPass"("token");
CREATE INDEX "AccessPass_token_idx" ON "AccessPass"("token");
CREATE INDEX "AccessPass_status_idx" ON "AccessPass"("status");
CREATE UNIQUE INDEX "Service_name_key" ON "Service"("name");
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");
CREATE INDEX "Event_startsAt_idx" ON "Event"("startsAt");
CREATE INDEX "Event_status_idx" ON "Event"("status");
CREATE UNIQUE INDEX "ProductCategory_name_key" ON "ProductCategory"("name");
CREATE INDEX "Product_type_idx" ON "Product"("type");
CREATE UNIQUE INDEX "Wine_productId_key" ON "Wine"("productId");
CREATE UNIQUE INDEX "BeerTap_lineNumber_key" ON "BeerTap"("lineNumber");
CREATE UNIQUE INDEX "Setting_key_key" ON "Setting"("key");

ALTER TABLE "User" ADD CONSTRAINT "User_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "ReservationGuest" ADD CONSTRAINT "ReservationGuest_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AccessPass" ADD CONSTRAINT "AccessPass_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ReservationService" ADD CONSTRAINT "ReservationService_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ReservationService" ADD CONSTRAINT "ReservationService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EventTicket" ADD CONSTRAINT "EventTicket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AccessPass" ADD CONSTRAINT "AccessPass_eventTicketId_fkey" FOREIGN KEY ("eventTicketId") REFERENCES "EventTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Wine" ADD CONSTRAINT "Wine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_eventTicketId_fkey" FOREIGN KEY ("eventTicketId") REFERENCES "EventTicket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
