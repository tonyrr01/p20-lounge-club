export type UserRole =
  | "SUPER_ADMIN"
  | "LOUNGE_ADMIN"
  | "STAFF"
  | "TENANT_P20"
  | "DOS_PUNTAS_EXECUTIVE"
  | "VIP_MEMBER"
  | "GUEST";

export type ReservationStatus = "PENDING" | "CONFIRMED" | "PAID" | "CANCELLED" | "COMPLETED";
export type AccessStatus = "ACTIVE" | "USED" | "EXPIRED" | "CANCELLED";
export type EventStatus = "DRAFT" | "PUBLISHED" | "SOLD_OUT" | "CANCELLED" | "COMPLETED";
