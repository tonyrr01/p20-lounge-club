import Link from "next/link";
import { CalendarPlus } from "lucide-react";
import { ReservationForm } from "@/components/forms/reservation-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { reservations } from "@/features/admin/demo-data";

export default function ReservationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-champagne">Calendario y bloques</p>
          <h1 className="mt-2 text-3xl font-semibold">Reservaciones</h1>
        </div>
        <Button className="gap-2">
          <CalendarPlus className="size-4" />
          Bloquear horario
        </Button>
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex gap-2 text-sm">
            {["Dia", "Semana", "Mes"].map((view) => (
              <button key={view} className="rounded-md border border-white/10 px-3 py-2 text-marble/75 hover:bg-white/10">
                {view}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            {reservations.map((reservation) => (
              <Link
                key={reservation.id}
                href={`/admin/reservations/${reservation.id}`}
                className="grid gap-2 rounded-md border border-white/10 p-4 hover:bg-white/[0.04] md:grid-cols-[120px_1fr_120px]"
              >
                <span className="text-champagne">{reservation.time}</span>
                <span>
                  <strong>{reservation.host}</strong>
                  <span className="ml-2 text-marble/60">{reservation.space}</span>
                </span>
                <span className="text-sm text-marble/60">{reservation.status}</span>
              </Link>
            ))}
          </div>
        </Card>
        <ReservationForm />
      </div>
    </div>
  );
}
