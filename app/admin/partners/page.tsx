import { Banknote, CheckCircle2, Clock, ExternalLink, Rocket, ShieldCheck, Users } from "lucide-react";
import { approvePartnerProposal, launchPartnerProposal } from "@/app/admin/partners/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { partnerProposals } from "@/features/admin/demo-data";
import { prisma } from "@/lib/db/prisma";

const statusLabels = {
  SUBMITTED: "Recibida",
  IN_REVIEW: "En revision",
  APPROVED: "Aprobada",
  SCHEDULED: "Agendada",
  LAUNCHED: "Lanzada",
  REJECTED: "Rechazada"
};

const typeLabels = {
  CHEF: "Chef privado",
  CATERING: "Catering",
  DISTILLER: "Destilador",
  BREWER: "Cervecero",
  TEQUILA_PRODUCER: "Tequilero",
  WINE_PRODUCER: "Vinicola",
  MIXOLOGIST: "Mixologia",
  OTHER: "Otro"
};

const businessModelLabels = {
  COMMISSION: "Comision",
  VENUE_FEE: "Cuota lounge",
  REVENUE_SHARE: "Revenue share",
  PACKAGE_RESALE: "Reventa P20",
  MINIMUM_GUARANTEE: "Garantia minima"
};

async function getPartnerProposals() {
  try {
    const proposals = await prisma.partnerProposal.findMany({
      orderBy: { createdAt: "desc" }
    });

    return proposals.map((proposal) => ({
      id: proposal.id,
      brand: proposal.brandName,
      contact: proposal.contactName,
      type: typeLabels[proposal.type],
      title: proposal.title,
      status: statusLabels[proposal.status],
      price: proposal.suggestedPriceCents
        ? `$${(proposal.suggestedPriceCents / 100).toLocaleString("es-MX")}`
        : "Por definir",
      commercialModel: businessModelLabels[proposal.businessModel],
      commission: proposal.commissionPercent ? `${proposal.commissionPercent}%` : "Por definir",
      guarantee: proposal.minimumGuaranteeCents
        ? `$${(proposal.minimumGuaranteeCents / 100).toLocaleString("es-MX")}`
        : "Sin garantia",
      capacity: proposal.suggestedCapacity ? `${proposal.suggestedCapacity} personas` : "Por definir",
      duration: proposal.serviceDurationMinutes ? `${proposal.serviceDurationMinutes} min` : "Por definir",
      staff: proposal.staffCount ? `${proposal.staffCount} personas` : "Por definir",
      leadTime: proposal.leadTimeDays ? `${proposal.leadTimeDays} dias` : "Por definir",
      date: proposal.preferredDates ?? "Bajo reserva",
      includes: proposal.includes.length ? proposal.includes : [proposal.shortPitch],
      setupNeeds: proposal.setupNeeds ?? "Sin requerimientos capturados",
      complianceNotes: proposal.complianceNotes ?? "Documentacion pendiente de validar",
      menuPreview: proposal.menuPreview ?? proposal.shortPitch,
      canApprove: proposal.status !== "APPROVED" && proposal.status !== "LAUNCHED",
      canLaunch: proposal.status === "APPROVED" || proposal.status === "SCHEDULED"
    }));
  } catch {
    return partnerProposals.map((proposal) => ({
      ...proposal,
      id: undefined,
      commercialModel: "Comision",
      commission: "20%",
      guarantee: "Sin garantia",
      duration: "180 min",
      staff: "2 personas",
      leadTime: "7 dias",
      setupNeeds: "Montaje por validar",
      complianceNotes: "Documentacion por validar",
      menuPreview: proposal.includes.join(", "),
      canApprove: false,
      canLaunch: false
    }));
  }
}

export default async function AdminPartnersPage() {
  const proposals = await getPartnerProposals();
  const approvedCount = proposals.filter((proposal) => proposal.status === "Aprobada").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-champagne">Alianzas y proveedores</p>
          <h1 className="mt-2 text-3xl font-semibold">Propuestas para lanzar</h1>
        </div>
        <Button className="gap-2">
          <Rocket className="size-4" />
          Crear lanzamiento
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-none">
          <p className="text-sm text-marble/60">Recibidas</p>
          <p className="mt-3 text-3xl font-semibold">{proposals.length}</p>
          <p className="mt-2 text-sm text-champagne">Pipeline inicial</p>
        </Card>
        <Card className="shadow-none">
          <p className="text-sm text-marble/60">Aprobadas</p>
          <p className="mt-3 text-3xl font-semibold">{approvedCount}</p>
          <p className="mt-2 text-sm text-champagne">Listas para calendario</p>
        </Card>
        <Card className="shadow-none">
          <p className="text-sm text-marble/60">Categorias</p>
          <p className="mt-3 text-3xl font-semibold">7</p>
          <p className="mt-2 text-sm text-champagne">Chef, cerveza, tequila y mas</p>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <Card>
          <h2 className="text-xl font-semibold">Bandeja de propuestas</h2>
          <div className="mt-5 grid gap-4">
            {proposals.map((proposal) => (
              <div key={proposal.title} className="rounded-md border border-white/10 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-champagne">
                      {proposal.type} · {proposal.brand}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{proposal.title}</h3>
                    <p className="mt-1 text-sm text-marble/60">
                      {proposal.capacity} · {proposal.price} · {proposal.date}
                    </p>
                  </div>
                  <span className="rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-sm text-champagne">
                    {proposal.status}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-4">
                  {[
                    { label: "Modelo", value: proposal.commercialModel, Icon: Banknote },
                    { label: "Comision", value: proposal.commission, Icon: Banknote },
                    { label: "Duracion", value: proposal.duration, Icon: Clock },
                    { label: "Staff", value: proposal.staff, Icon: Users }
                  ].map(({ label, value, Icon }) => (
                    <div key={label} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                      <div className="flex items-center gap-2 text-xs text-marble/50">
                        <Icon className="size-3.5 text-champagne" />
                        {label}
                      </div>
                      <p className="mt-2 text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {proposal.includes.map((item) => (
                    <div key={item} className="rounded-md bg-white/[0.04] p-3 text-sm text-marble/70">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 lg:grid-cols-3">
                  <div className="rounded-md bg-black/20 p-3 text-sm leading-6 text-marble/65">
                    <p className="mb-1 text-xs uppercase tracking-[.18em] text-champagne">Operacion</p>
                    {proposal.setupNeeds}
                  </div>
                  <div className="rounded-md bg-black/20 p-3 text-sm leading-6 text-marble/65">
                    <p className="mb-1 text-xs uppercase tracking-[.18em] text-champagne">Compliance</p>
                    {proposal.complianceNotes}
                  </div>
                  <div className="rounded-md bg-black/20 p-3 text-sm leading-6 text-marble/65">
                    <p className="mb-1 text-xs uppercase tracking-[.18em] text-champagne">Lead time</p>
                    {proposal.leadTime} · {proposal.guarantee}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <form action={approvePartnerProposal}>
                    <input name="id" type="hidden" value={proposal.id} />
                    <Button className="gap-2" disabled={!proposal.canApprove || !proposal.id} type="submit">
                      <CheckCircle2 className="size-4" />
                      Aprobar
                    </Button>
                  </form>
                  <form action={launchPartnerProposal}>
                    <input name="id" type="hidden" value={proposal.id} />
                    <Button
                      className="gap-2"
                      disabled={!proposal.canLaunch || !proposal.id}
                      type="submit"
                      variant="secondary"
                    >
                      <Rocket className="size-4" />
                      Lanzar evento
                    </Button>
                  </form>
                  <Button className="gap-2" type="button" variant="ghost">
                    <ExternalLink className="size-4" />
                    Ver propuesta
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="h-fit">
          <ShieldCheck className="size-8 text-champagne" />
          <h2 className="mt-5 text-xl font-semibold">Scorecard de revision</h2>
          <div className="mt-4 space-y-3 text-sm text-marble/68">
            <p>Margen: comision, revenue share, garantia minima o reventa.</p>
            <p>Operabilidad: cupo, duracion, staff, montaje y lead time.</p>
            <p>Riesgo: permisos, seguro, alcohol, alimentos y cancelacion.</p>
            <p>Demanda: audiencia, narrativa, ticket promedio y materiales.</p>
            <p>Lanzamiento: fecha tentativa, capacidad y disponibilidad del lounge.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
