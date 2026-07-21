import { ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AccessPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-champagne">QR y registro de entradas</p>
        <h1 className="mt-2 text-3xl font-semibold">Check-in</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <Card>
          <ScanLine className="size-16 text-champagne" />
          <h2 className="mt-5 text-xl font-semibold">Validacion manual</h2>
          <p className="mt-2 text-sm text-marble/65">
            Escaneo con camara y validacion criptografica del QR quedan preparados para fase 2.
          </p>
          <div className="mt-6 flex gap-3">
            <input className="h-11 flex-1 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Codigo de acceso" />
            <Button>Validar</Button>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Pendientes</h2>
          <div className="mt-4 space-y-3 text-sm">
            {["Mariana Alvarez", "Grupo Dos Puntas", "Carlos Medina"].map((guest) => (
              <div key={guest} className="flex items-center justify-between rounded-md border border-white/10 p-3">
                <span>{guest}</span>
                <span className="text-champagne">Activo</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
