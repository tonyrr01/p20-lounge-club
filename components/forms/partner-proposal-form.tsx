import { Send } from "lucide-react";
import { createPartnerProposal } from "@/app/partners/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const inputClass = "h-11 rounded-md border border-white/10 bg-black/20 px-3";
const textAreaClass = "rounded-md border border-white/10 bg-black/20 p-3";

export function PartnerProposalForm() {
  return (
    <Card>
      <p className="text-sm text-champagne">Portal de proveedores</p>
      <h2 className="mt-2 text-2xl font-semibold">Subir propuesta</h2>
      <p className="mt-3 text-sm leading-6 text-marble/65">
        Comparte la informacion comercial y operativa que necesitamos para revisar margen,
        montaje, calidad y riesgo antes de aprobar una experiencia.
      </p>
      <form action={createPartnerProposal} className="mt-5 grid gap-4 md:grid-cols-2">
        <input className={inputClass} name="brandName" placeholder="Marca o empresa" required />
        <input className={inputClass} name="contactName" placeholder="Nombre de contacto" required />
        <input
          className={inputClass}
          name="contactEmail"
          placeholder="Correo"
          required
          type="email"
        />
        <input className={inputClass} name="contactPhone" placeholder="Telefono" />
        <select className={inputClass} name="type" required>
          <option value="CHEF">Chef privado</option>
          <option value="CATERING">Catering</option>
          <option value="DISTILLER">Destilador</option>
          <option value="BREWER">Cervecero</option>
          <option value="TEQUILA_PRODUCER">Tequilero</option>
          <option value="WINE_PRODUCER">Vinicola</option>
          <option value="MIXOLOGIST">Mixologia</option>
          <option value="OTHER">Otro</option>
        </select>
        <select className={inputClass} name="businessModel" required>
          <option value="COMMISSION">Comision por venta</option>
          <option value="VENUE_FEE">Renta/cuota del lounge</option>
          <option value="REVENUE_SHARE">Revenue share</option>
          <option value="PACKAGE_RESALE">P20 revende paquete</option>
          <option value="MINIMUM_GUARANTEE">Garantia minima</option>
        </select>
        <input className={inputClass} name="title" placeholder="Nombre de la experiencia" required />
        <input className={inputClass} name="suggestedPricePesos" placeholder="Precio sugerido MXN" />
        <input className={inputClass} name="commissionPercent" placeholder="Comision sugerida %" type="number" />
        <input className={inputClass} name="minimumGuaranteePesos" placeholder="Garantia minima MXN" />
        <input className={inputClass} name="suggestedCapacity" placeholder="Cupo sugerido" type="number" />
        <input className={inputClass} name="serviceDurationMinutes" placeholder="Duracion en minutos" type="number" />
        <input className={inputClass} name="staffCount" placeholder="Personas de staff" type="number" />
        <input className={inputClass} name="leadTimeDays" placeholder="Dias de anticipacion" type="number" />
        <input className={`${inputClass} md:col-span-2`} name="preferredDates" placeholder="Fechas u horarios sugeridos" />
        <input
          className={`${inputClass} md:col-span-2`}
          name="mediaUrl"
          placeholder="Link a brochure, fotos, menu o video"
          type="url"
        />
        <textarea
          className={`min-h-20 ${textAreaClass} md:col-span-2`}
          name="shortPitch"
          placeholder="Pitch corto para evaluar la propuesta"
          required
        />
        <textarea
          className={`min-h-24 ${textAreaClass} md:col-span-2`}
          name="menuPreview"
          placeholder="Menu, bebidas, maridaje o narrativa de experiencia"
        />
        <textarea
          className={`min-h-24 ${textAreaClass} md:col-span-2`}
          name="includes"
          placeholder="Incluye, una linea por elemento"
        />
        <textarea
          className={`min-h-24 ${textAreaClass} md:col-span-2`}
          name="setupNeeds"
          placeholder="Necesidades de montaje, barra, cocina, hielo, electricidad, mobiliario o AV"
        />
        <textarea
          className={`min-h-24 ${textAreaClass} md:col-span-2`}
          name="complianceNotes"
          placeholder="Permisos, seguro, manejo de alcohol/alimentos, facturacion o documentacion disponible"
        />
        <textarea
          className={`min-h-24 ${textAreaClass} md:col-span-2`}
          name="cancellationPolicy"
          placeholder="Politica de cancelacion, anticipo y cambios"
        />
        <textarea
          className={`min-h-32 ${textAreaClass} md:col-span-2`}
          name="description"
          placeholder="Duracion, personal, montaje, necesidades tecnicas y condiciones"
          required
        />
        <Button className="gap-2 md:col-span-2" type="submit">
          <Send className="size-4" />
          Enviar propuesta
        </Button>
      </form>
    </Card>
  );
}
