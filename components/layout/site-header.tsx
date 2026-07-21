import Link from "next/link";
import { CalendarDays, Handshake, LayoutDashboard, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-graphite/88 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link className="flex items-center gap-3 font-semibold tracking-wide" href="/">
          <span className="flex size-9 items-center justify-center rounded-md border border-champagne/40 bg-champagne/15">
            <Wine className="size-5 text-champagne" />
          </span>
          P20 Lounge Club
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-marble/78 md:flex">
          <Link href="/admin">Admin</Link>
          <Link href="/admin/reservations">Reservas</Link>
          <Link href="/admin/events">Eventos</Link>
          <Link href="/admin/menu">Menu</Link>
          <Link href="/partners">Alianzas</Link>
        </nav>
        <Button asChild className="gap-2">
          <Link href="/admin/reservations">
            <CalendarDays className="size-4" />
            Reservar
          </Link>
        </Button>
      </div>
    </header>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const links = [
    ["Dashboard", "/admin", LayoutDashboard],
    ["Reservas", "/admin/reservations", CalendarDays],
    ["Eventos", "/admin/events", Wine],
    ["Alianzas", "/admin/partners", Handshake],
    ["Menu", "/admin/menu", Wine],
    ["Inventario", "/admin/inventory", Wine],
    ["Check-in", "/admin/access", CalendarDays]
  ] as const;

  return (
    <div className="min-h-screen bg-[#12100f]">
      <SiteHeader />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[220px_1fr]">
        <aside className="rounded-lg border border-white/10 bg-white/[0.05] p-3 md:sticky md:top-20 md:h-fit">
          {links.map(([label, href, Icon]) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-sm text-marble/78 hover:bg-white/10 hover:text-marble"
            >
              <Icon className="size-4 text-champagne" />
              {label}
            </Link>
          ))}
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
