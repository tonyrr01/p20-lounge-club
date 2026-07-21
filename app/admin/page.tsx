import { MetricCard } from "@/components/cards/metric-card";
import { Card } from "@/components/ui/card";
import { events, products, reservations } from "@/features/admin/demo-data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-champagne">Operacion del dia</p>
        <h1 className="mt-2 text-3xl font-semibold">Dashboard admin</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Reservas de hoy" value="7" detail="3 pendientes de check-in" />
        <MetricCard label="Ingresos estimados" value="$48,600" detail="Reservas y eventos" />
        <MetricCard label="Ocupacion" value="68%" detail="Bloques activos esta semana" />
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold">Reservas activas</h2>
          <div className="mt-4 space-y-3">
            {reservations.map((reservation) => (
              <div key={reservation.id} className="rounded-md border border-white/10 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{reservation.host}</p>
                  <span className="text-sm text-champagne">{reservation.status}</span>
                </div>
                <p className="mt-1 text-sm text-marble/60">
                  {reservation.space} · {reservation.time} · {reservation.guests} invitados
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Inventario bajo</h2>
          <div className="mt-4 space-y-3">
            {products
              .filter((product) => product.stock <= product.min * 2)
              .map((product) => (
                <div key={product.name} className="flex items-center justify-between rounded-md border border-white/10 p-4">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-marble/60">{product.category}</p>
                  </div>
                  <span className="text-sm text-champagne">{product.stock} disp.</span>
                </div>
              ))}
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="text-xl font-semibold">Proximos eventos</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.name} className="rounded-md border border-white/10 p-4">
              <p className="font-medium">{event.name}</p>
              <p className="mt-2 text-sm text-marble/60">{event.type} · {event.date}</p>
              <p className="mt-3 text-sm text-champagne">{event.capacity} · {event.price}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
