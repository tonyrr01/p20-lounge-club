import Link from "next/link";
import {
  BadgeCheck,
  Banknote,
  Beer,
  CalendarCheck,
  ChefHat,
  ClipboardCheck,
  Gem,
  Martini,
  Megaphone,
  ShieldCheck,
  Wine
} from "lucide-react";
import { PartnerProposalForm } from "@/components/forms/partner-proposal-form";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { partnerTypes } from "@/features/admin/demo-data";

const commercialModels = [
  {
    title: "Comision por venta",
    description: "P20 genera demanda y retiene un porcentaje por reservas cerradas."
  },
  {
    title: "Reventa de paquete",
    description: "El proveedor entrega precio neto y P20 publica un paquete con margen propio."
  },
  {
    title: "Garantia minima",
    description: "Se protege al proveedor con un minimo y P20 captura upside por ocupacion."
  }
];

const reviewCriteria = [
  "Margen y ticket promedio",
  "Calidad visual y narrativa de marca",
  "Staff, duracion y montaje",
  "Permisos, seguro y manejo responsable",
  "Disponibilidad y tiempo de anticipacion",
  "Potencial para eventos privados o corporativos"
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-graphite text-marble">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,.92),rgba(23,23,23,.74),rgba(91,29,42,.34)),url('https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="relative mx-auto grid min-h-[62vh] max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-champagne/40 bg-black/25 px-4 py-2 text-sm text-champagne">
              Alianzas P20
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
              Presenta tu experiencia en el lounge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-marble/78">
              Abrimos agenda para chefs, caterings, destiladores, cerveceros, tequileros,
              vinicolas y mixologos que quieran lanzar experiencias premium para ejecutivos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#propuesta">Subir propuesta</a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/admin/partners">Revision admin</Link>
              </Button>
            </div>
          </div>
          <Card className="bg-black/35">
            <Megaphone className="size-8 text-champagne" />
            <h2 className="mt-5 text-2xl font-semibold">De propuesta a evento</h2>
            <p className="mt-3 text-sm leading-6 text-marble/68">
              El equipo P20 revisa concepto, precio, cupo, montaje y calendario. Las propuestas
              aprobadas se convierten en eventos o paquetes publicables.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-marble/60">
              <span className="rounded-md bg-white/[0.06] p-2">Aprobacion</span>
              <span className="rounded-md bg-white/[0.06] p-2">Calendario</span>
              <span className="rounded-md bg-white/[0.06] p-2">Lanzamiento</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-4">
        {[
          { label: "Chef y catering", Icon: ChefHat },
          { label: "Cerveceros", Icon: Beer },
          { label: "Tequila y destilados", Icon: Martini },
          { label: "Vino y maridaje", Icon: Wine }
        ].map(({ label, Icon }) => (
          <Card key={label} className="shadow-none">
            <Icon className="size-7 text-champagne" />
            <h2 className="mt-5 text-xl font-semibold">{label}</h2>
            <p className="mt-2 text-sm leading-6 text-marble/65">
              Experiencias cuidadas para juntas, networking, lanzamientos y cierres de negocio.
            </p>
          </Card>
        ))}
      </section>

      <section className="border-y border-white/10 bg-[#11100f]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-3">
          {commercialModels.map((model) => (
            <Card key={model.title} className="shadow-none">
              <Banknote className="size-7 text-champagne" />
              <h2 className="mt-5 text-xl font-semibold">{model.title}</h2>
              <p className="mt-2 text-sm leading-6 text-marble/65">{model.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#191715]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Gem className="size-8 text-champagne" />
            <h2 className="mt-5 text-3xl font-semibold">Que buscamos</h2>
            <p className="mt-4 leading-7 text-marble/70">
              Propuestas listas para ejecutarse: servicio, narrativa de marca, maridaje, personal,
              montaje, precio, cupo y fechas sugeridas.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {partnerTypes.map((type) => (
              <div key={type} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="propuesta" className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <Card className="shadow-none">
            <ClipboardCheck className="size-8 text-champagne" />
            <h2 className="mt-5 text-2xl font-semibold">Flujo de aprobacion</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-marble/68">
              <p>1. El proveedor sube su propuesta con precio, cupo, montaje y materiales.</p>
              <p>2. Admin Lounge revisa calidad, operacion, margen, compliance y disponibilidad.</p>
              <p>3. La propuesta aprobada se agenda y se lanza como evento, paquete o experiencia privada.</p>
            </div>
          </Card>
          <Card className="shadow-none">
            <ShieldCheck className="size-8 text-champagne" />
            <h2 className="mt-5 text-2xl font-semibold">Criterios de seleccion</h2>
            <div className="mt-5 grid gap-2">
              {reviewCriteria.map((criteria) => (
                <div key={criteria} className="flex items-center gap-3 rounded-md bg-white/[0.04] p-3 text-sm text-marble/70">
                  <BadgeCheck className="size-4 text-champagne" />
                  {criteria}
                </div>
              ))}
            </div>
          </Card>
          <Card className="shadow-none">
            <CalendarCheck className="size-8 text-champagne" />
            <h2 className="mt-5 text-2xl font-semibold">Que puede lanzar P20</h2>
            <div className="mt-5 grid gap-2 text-sm text-marble/68">
              <p>Eventos con boleto, experiencias privadas bajo reserva y paquetes para anfitriones corporativos.</p>
              <p>Las mejores propuestas pueden operar como proveedor preferente del lounge.</p>
            </div>
          </Card>
        </div>
        <PartnerProposalForm />
      </section>
    </main>
  );
}
