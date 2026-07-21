import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-graphite px-4 text-marble">
      <Card className="w-full max-w-md">
        <p className="text-sm text-champagne">Acceso privado</p>
        <h1 className="mt-3 text-3xl font-semibold">P20 Lounge Club</h1>
        <p className="mt-3 text-sm leading-6 text-marble/65">
          La autenticacion queda preparada para Auth.js con Prisma. En fase 1 esta pantalla sirve
          como punto de entrada operativo.
        </p>
        <div className="mt-6 grid gap-3">
          <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="correo@empresa.com" />
          <input className="h-11 rounded-md border border-white/10 bg-black/20 px-3" placeholder="Contrasena" type="password" />
          <Button asChild>
            <Link href="/admin">Entrar al panel</Link>
          </Button>
        </div>
      </Card>
    </main>
  );
}
