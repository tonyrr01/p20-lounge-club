import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EventForm() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Crear evento</h2>
      <form className="mt-5 grid gap-4 md:grid-cols-2">
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Nombre del evento" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Tipo" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" type="datetime-local" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" type="datetime-local" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Cupo" type="number" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Precio" type="number" />
        <textarea className="min-h-24 rounded-md border border-white/10 bg-black/20 p-3 md:col-span-2" placeholder="Descripcion" />
        <Button className="md:col-span-2" type="button">Publicar borrador</Button>
      </form>
    </Card>
  );
}
