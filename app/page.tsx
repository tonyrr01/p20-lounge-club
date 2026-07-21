import Link from "next/link";
import { ArrowRight, Beer, CalendarDays, Coffee, Handshake, Martini, Sparkles, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/layout/site-header";
import { services } from "@/features/admin/demo-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-graphite text-marble">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,.92),rgba(23,23,23,.64),rgba(122,87,58,.34)),url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-champagne/40 bg-black/25 px-4 py-2 text-sm text-champagne">
              Dos Puntas Corporate Tower · Piso 20
            </p>
            <h1 className="text-5xl font-semibold leading-tight sm:text-7xl">
              Private Executive Lounge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-marble/78">
              Reservas, catas, cenas privadas, barra premium y acceso controlado para una
              experiencia corporativa sobria, calida y exclusiva.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/admin/reservations">
                  Reservar <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/admin/events">Ver experiencias</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/admin/menu">Ver menu</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/partners">Alianzas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-4">
        {[
          { label: "Sala ejecutiva", Icon: CalendarDays },
          { label: "Cava privada", Icon: Wine },
          { label: "Cerveza de barril", Icon: Beer },
          { label: "Cafe y chef", Icon: Coffee }
        ].map(({ label, Icon }) => (
          <Card key={label} className="shadow-none">
            <Icon className="size-7 text-champagne" />
            <h2 className="mt-5 text-xl font-semibold">{label}</h2>
            <p className="mt-2 text-sm leading-6 text-marble/65">
              Servicio reservado para juntas, cierres, lanzamientos y eventos after office.
            </p>
          </Card>
        ))}
      </section>

      <section className="border-y border-white/10 bg-[#191715]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Sparkles className="size-8 text-champagne" />
            <h2 className="mt-5 text-3xl font-semibold">Servicios del club</h2>
            <p className="mt-4 leading-7 text-marble/70">
              Una base operativa para controlar reservas, invitados, pagos, consumo, inventario y
              experiencias con maestro cervecero o chef privado.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 10).map((service) => (
              <div key={service} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3">
        {[
          ["Catas privadas", "Vino, cerveza artesanal y maridajes guiados para grupos ejecutivos."],
          ["Lounge completo", "Bloqueo total del espacio para eventos, lanzamientos o cierres de negocio."],
          ["Jueves y viernes", "After office con cupo controlado, mesa reservada y consumo registrado."]
        ].map(([title, copy]) => (
          <Card key={title} className="shadow-none">
            <Martini className="size-7 text-champagne" />
            <h2 className="mt-5 text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-marble/65">{copy}</p>
          </Card>
        ))}
      </section>

      <section className="border-t border-white/10 bg-[#151312]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Handshake className="size-8 text-champagne" />
            <h2 className="mt-5 text-3xl font-semibold">Alianzas para experiencias privadas</h2>
            <p className="mt-4 leading-7 text-marble/70">
              Chefs, caterings, destiladores, cerveceros y tequileros pueden proponer
              presentaciones para el lounge. P20 revisa, aprueba y lanza las mejores experiencias.
            </p>
          </div>
          <Card className="shadow-none">
            <p className="text-sm text-champagne">Nuevo canal de proveedores</p>
            <h3 className="mt-3 text-2xl font-semibold">Cerveza y tapas, tequila premium, cenas con chef</h3>
            <p className="mt-3 text-sm leading-6 text-marble/65">
              Recibe propuestas con precio, cupo, montaje, personal incluido y materiales de marca
              para convertirlas en eventos o paquetes reservables.
            </p>
            <Button asChild className="mt-5">
              <Link href="/partners">Subir propuesta</Link>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
