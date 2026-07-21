import { EventForm } from "@/components/forms/event-form";
import { Card } from "@/components/ui/card";
import { events } from "@/features/admin/demo-data";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-champagne">Experiencias y cupos</p>
        <h1 className="mt-2 text-3xl font-semibold">Eventos</h1>
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <Card>
          <div className="grid gap-3">
            {events.map((event) => (
              <div key={event.name} className="rounded-md border border-white/10 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold">{event.name}</h2>
                    <p className="mt-1 text-sm text-marble/60">{event.type} · {event.date}</p>
                  </div>
                  <span className="rounded-full bg-champagne/15 px-3 py-1 text-sm text-champagne">Publicado</span>
                </div>
                <p className="mt-4 text-sm text-marble/70">Cupo {event.capacity} · Precio {event.price}</p>
              </div>
            ))}
          </div>
        </Card>
        <EventForm />
      </div>
    </div>
  );
}
