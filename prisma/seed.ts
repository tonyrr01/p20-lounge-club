import { PrismaClient, ProductType, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const roles = [
    ["SUPER_ADMIN", "Super Admin"],
    ["LOUNGE_ADMIN", "Admin Lounge"],
    ["STAFF", "Staff"],
    ["TENANT_P20", "Inquilino Piso 20"],
    ["DOS_PUNTAS_EXECUTIVE", "Ejecutivo Dos Puntas"],
    ["VIP_MEMBER", "Miembro VIP"],
    ["GUEST", "Invitado"]
  ] as const;

  for (const [key, name] of roles) {
    await prisma.role.upsert({
      where: { key },
      update: { name },
      create: { key, name, description: `Rol ${name} para P20 Lounge Club.` }
    });
  }

  const memberships = [
    ["TENANT_P20", "Inquilino Piso 20", ["Prioridad de reserva", "Tarifa preferente"]],
    ["DOS_PUNTAS_EXECUTIVE", "Ejecutivo Dos Puntas", ["Acceso por invitacion", "Eventos seleccionados"]],
    ["VIP_MEMBER", "Miembro Lounge VIP", ["Preventa de eventos", "Cava privada", "Invitaciones"]],
    ["GUEST", "Invitado", ["Acceso por QR o evento especifico"]]
  ] as const;

  for (const [type, name, benefits] of memberships) {
    await prisma.membership.upsert({
      where: { type },
      update: { name, benefits: [...benefits] },
      create: { type, name, benefits: [...benefits] }
    });
  }

  const adminMembership = await prisma.membership.findUniqueOrThrow({ where: { type: "VIP_MEMBER" } });
  await prisma.user.upsert({
    where: { email: "admin@p20lounge.mx" },
    update: {},
    create: {
      name: "Admin P20",
      email: "admin@p20lounge.mx",
      passwordHash: await bcrypt.hash("P20Lounge123!", 10),
      role: UserRole.SUPER_ADMIN,
      membershipId: adminMembership.id
    }
  });

  const serviceNames = [
    "Renta de sala de juntas",
    "Renta lounge completo",
    "Servicio de bar",
    "Cata de cerveza",
    "Cata de vino",
    "Chef privado",
    "Cafe ejecutivo",
    "Canapes",
    "Mixologia",
    "Servicio de mesero",
    "Decoracion basica",
    "Pantalla/presentacion",
    "Sonido ambiental",
    "Torneo de futbolito",
    "Torneo de dardos",
    "Limpieza post-evento"
  ];

  for (const name of serviceNames) {
    await prisma.service.upsert({
      where: { name },
      update: {},
      create: { name, priceCents: 0, active: true }
    });
  }

  const categories = ["Cafe", "Agua", "Refrescos", "Cerveza de barril", "Vino tinto", "Vino blanco", "Espumoso", "Destilados", "Cocteles", "Snacks", "Platillos de chef", "Maridajes", "Paquetes"];
  for (const name of categories) {
    await prisma.productCategory.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  const wineCategory = await prisma.productCategory.findUniqueOrThrow({ where: { name: "Vino tinto" } });
  const beerCategory = await prisma.productCategory.findUniqueOrThrow({ where: { name: "Cerveza de barril" } });
  const coffeeCategory = await prisma.productCategory.findUniqueOrThrow({ where: { name: "Cafe" } });
  const snackCategory = await prisma.productCategory.findUniqueOrThrow({ where: { name: "Snacks" } });

  const products = [
    { name: "Casa Madero 3V", type: ProductType.WINE, categoryId: wineCategory.id, stock: 8, minimumStock: 4, priceCents: 98000, costCents: 61000 },
    { name: "Linea 1 cerveza de barril", type: ProductType.BEER, categoryId: beerCategory.id, stock: 62, minimumStock: 20, priceCents: 14000, costCents: 5200 },
    { name: "Espresso ejecutivo", type: ProductType.COFFEE, categoryId: coffeeCategory.id, stock: 120, minimumStock: 30, priceCents: 6500, costCents: 1800 },
    { name: "Tabla de quesos", type: ProductType.FOOD, categoryId: snackCategory.id, stock: 12, minimumStock: 6, priceCents: 46000, costCents: 21000 }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.name.toLowerCase().replaceAll(" ", "-") },
      update: {},
      create: { id: product.name.toLowerCase().replaceAll(" ", "-"), ...product, unit: "piece" }
    });
  }

  await prisma.wine.upsert({
    where: { productId: "casa-madero-3v" },
    update: {},
    create: {
      productId: "casa-madero-3v",
      grape: "Cabernet Sauvignon, Merlot, Tempranillo",
      countryRegion: "Parras, Coahuila",
      vintage: 2021,
      bottlePriceCents: 98000,
      glassPriceCents: 19000,
      suggestedTemperature: "16-18 C",
      pairing: "Cortes, quesos maduros, tapas saladas",
      notes: "Vino mexicano para cava inicial."
    }
  });

  await prisma.beerTap.upsert({
    where: { lineNumber: 1 },
    update: {},
    create: {
      lineNumber: 1,
      activeBeerName: "Saison Tapatia",
      style: "Saison",
      brewery: "Maestro cervecero aliado",
      story: "Cerveza de temporada para catas corporativas.",
      priceCents: 14000,
      kegLevelPercent: 80,
      isBeerOfWeek: true
    }
  });

  await prisma.beerTap.upsert({
    where: { lineNumber: 2 },
    update: {},
    create: {
      lineNumber: 2,
      activeBeerName: "Porter Ejecutiva",
      style: "Porter",
      brewery: "Maestro cervecero aliado",
      priceCents: 15000,
      kegLevelPercent: 55
    }
  });

  const seedEvents = [
    {
      name: "Jueves de Barril: Saison Tapatia",
      type: "Cata cervecera",
      description: "Cata guiada con cerveza de temporada.",
      startsAt: new Date("2026-07-18T19:00:00.000Z"),
      endsAt: new Date("2026-07-18T22:00:00.000Z"),
      capacity: 32,
      priceCents: 85000,
      status: "PUBLISHED" as const
    },
    {
      name: "Cena privada con chef",
      type: "Cena privada con chef",
      description: "Menu de degustacion para grupo ejecutivo.",
      startsAt: new Date("2026-07-26T20:00:00.000Z"),
      endsAt: new Date("2026-07-26T23:30:00.000Z"),
      capacity: 16,
      priceCents: 240000,
      status: "DRAFT" as const
    }
  ];

  for (const event of seedEvents) {
    await prisma.event.upsert({
      where: { name: event.name },
      update: event,
      create: event
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
