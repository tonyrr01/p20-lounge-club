# P20 Lounge Club

Aplicacion web para administrar el lounge ejecutivo del Piso 20 en Dos Puntas Corporate Tower: reservaciones, eventos, accesos, invitados, menu, cava, cerveza de barril, inventario, pagos y operacion interna.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Auth.js preparado para autenticacion
- Zod para validaciones
- React Hook Form preparado para formularios avanzados

Se eligio Prisma + PostgreSQL para tener relaciones claras, migraciones trazables y una base solida para crecer hacia pagos, accesos QR, reportes y futura app movil/PWA.

## Como correr localmente

```bash
cd p20-lounge-club
cp .env.example .env
pnpm install
docker compose up -d
pnpm prisma:migrate
pnpm seed
pnpm dev
```

La app abre en `http://localhost:3000`.

Usuario seed:

- Email: `admin@p20lounge.mx`
- Password: `P20Lounge123!`

## Scripts

- `pnpm dev`: servidor local.
- `pnpm build`: build de produccion.
- `pnpm lint`: revision de lint.
- `pnpm format`: formatea el proyecto.
- `pnpm prisma:migrate`: crea/aplica migraciones Prisma.
- `pnpm prisma:deploy`: aplica migraciones en produccion.
- `pnpm prisma:studio`: abre Prisma Studio.
- `pnpm seed`: carga datos iniciales.

## Deploy en Vercel

Al importar el repositorio en Vercel, configura:

- Root Directory: `p20-lounge-club`
- Framework Preset: `Next.js`
- Install Command: `pnpm install`
- Build Command: `pnpm build`

Variables de entorno necesarias:

- `DATABASE_URL`: URL de PostgreSQL de produccion.
- `AUTH_SECRET`: secreto largo y aleatorio para Auth.js.
- `AUTH_URL`: URL publica del proyecto en Vercel.
- `NEXT_PUBLIC_APP_URL`: misma URL publica para uso del frontend.

Antes de usar datos reales, aplica la migracion inicial contra la base de produccion:

```bash
pnpm prisma:deploy
pnpm seed
```

## MVP incluido

- Landing page premium con concepto Private Executive Lounge.
- Login estructural preparado para Auth.js.
- Dashboard admin.
- Reservaciones con calendario simple, formulario y detalle.
- Eventos con listado y formulario.
- Menu y productos.
- Inventario operativo.
- Check-in con validacion manual preparada para QR.
- Schema Prisma inicial con usuarios, roles, membresias, reservas, invitados, accesos, servicios, eventos, productos, cava, beer taps, pagos, report snapshots y settings.
- Seed inicial de roles, membresias, servicios, categorias, productos, vino, cerveza de barril y eventos.

## Estructura

```txt
p20-lounge-club/
  app/
  components/
  features/
  lib/
  prisma/
  docs/
  scripts/
  styles/
  types/
```

## Siguiente fase recomendada

1. Conectar pantallas CRUD a Prisma con Server Actions.
2. Implementar Auth.js con credenciales y control real por rol.
3. Validar empalmes de reservaciones en backend.
4. Generar QR firmados para anfitrion, invitados, staff y proveedores.
5. Agregar pagos con proveedor elegido: Stripe, Mercado Pago o terminal bancaria.
6. Crear reportes con snapshots diarios y filtros por periodo.
7. Convertir la experiencia staff/check-in en PWA para tablet.
