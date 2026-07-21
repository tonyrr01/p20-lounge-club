import { Send } from "lucide-react";
import { createPartnerProposal } from "@/app/partners/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PartnerProposalForm() {
  return (
    <Card>
      <p className="text-sm text-champagne">Portal de proveedores</p>
      <h2 className="mt-2 text-2xl font-semibold">Subir propuesta</h2>
      <form action={createPartnerProposal} className="mt-5 grid gap-4 md:grid-cols-2">
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3"
          name="brandName"
          placeholder="Marca o empresa"
          required
        />
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3"
          name="contactName"
          placeholder="Nombre de contacto"
          required
        />
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3"
          name="contactEmail"
          placeholder="Correo"
          required
          type="email"
        />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" name="contactPhone" placeholder="Telefono" />
        <select className="h-11 rounded-md border border-white/10 bg-black/20 px-3" name="type" required>
          <option value="CHEF">Chef privado</option>
          <option value="CATERING">Catering</option>
          <option value="DISTILLER">Destilador</option>
          <option value="BREWER">Cervecero</option>
          <option value="TEQUILA_PRODUCER">Tequilero</option>
          <option value="WINE_PRODUCER">Vinicola</option>
          <option value="MIXOLOGIST">Mixologia</option>
          <option value="OTHER">Otro</option>
        </select>
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3"
          name="title"
          placeholder="Nombre de la experiencia"
          required
        />
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3"
          name="suggestedPricePesos"
          placeholder="Precio sugerido MXN"
        />
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3"
          name="suggestedCapacity"
          placeholder="Cupo sugerido"
          type="number"
        />
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3 md:col-span-2"
          name="preferredDates"
          placeholder="Fechas u horarios sugeridos"
        />
        <input
          className="h-11 rounded-md border border-white/10 bg-black/20 px-3 md:col-span-2"
          name="mediaUrl"
          placeholder="Link a brochure, fotos, menu o video"
          type="url"
        />
        <textarea
          className="min-h-20 rounded-md border border-white/10 bg-black/20 p-3 md:col-span-2"
          name="shortPitch"
          placeholder="Pitch corto para evaluar la propuesta"
          required
        />
        <textarea
          className="min-h-24 rounded-md border border-white/10 bg-black/20 p-3 md:col-span-2"
          name="includes"
          placeholder="Incluye, una linea por elemento"
        />
        <textarea
          className="min-h-32 rounded-md border border-white/10 bg-black/20 p-3 md:col-span-2"
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
