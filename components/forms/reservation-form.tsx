import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ReservationForm() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Crear reserva</h2>
      <form className="mt-5 grid gap-4 md:grid-cols-2">
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Anfitrion" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Correo" />
        <select className="h-11 rounded-md border border-white/10 bg-black/20 px-3">
          <option>Sala de juntas</option>
          <option>Lounge completo</option>
          <option>Bar privado</option>
          <option>Mesa after office</option>
        </select>
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Invitados" type="number" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" type="datetime-local" />
        <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" type="datetime-local" />
        <textarea className="min-h-24 rounded-md border border-white/10 bg-black/20 p-3 md:col-span-2" placeholder="Notas especiales" />
        <Button className="md:col-span-2" type="button">Guardar reserva</Button>
      </form>
    </Card>
  );
}
