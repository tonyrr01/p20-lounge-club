import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { reservations, services } from "@/features/admin/demo-data";

export default async function ReservationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const reservation = reservations.find((item) => item.id === id) ?? reservations[0];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-champagne">{reservation.id}</p>
        <h1 className="mt-2 text-3xl font-semibold">{reservation.host}</h1>
        <p className="mt-2 text-marble/60">{reservation.space} · {reservation.time}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <Card>
          <h2 className="text-xl font-semibold">Detalle de reserva</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Estado", reservation.status],
              ["Invitados", String(reservation.guests)],
              ["Pago", "Anticipo pendiente"],
              ["Membresia", "Inquilino Piso 20"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 p-4">
                <p className="text-sm text-marble/55">{label}</p>
                <p className="mt-1 font-medium">{value}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-6 font-semibold">Servicios contratados</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.slice(0, 5).map((service) => (
              <span key={service} className="rounded-full border border-champagne/30 px-3 py-1 text-sm text-champagne">
                {service}
              </span>
            ))}
          </div>
        </Card>
        <Card>
          <QrCode className="size-14 text-champagne" />
          <h2 className="mt-4 text-xl font-semibold">Acceso QR</h2>
          <p className="mt-2 text-sm leading-6 text-marble/65">
            Pase preparado para anfitrion e invitados. La validacion completa queda para fase 2.
          </p>
          <Button className="mt-5 w-full">Generar pase</Button>
        </Card>
      </div>
    </div>
  );
}
