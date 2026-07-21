export const services = [
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
  "Pantalla/presentacion",
  "Torneo de futbolito"
];

export const reservations = [
  {
    id: "RSV-1024",
    host: "Mariana Alvarez",
    space: "Sala de juntas",
    time: "10:00 - 12:00",
    status: "Confirmada",
    guests: 8
  },
  {
    id: "RSV-1025",
    host: "Grupo Dos Puntas",
    space: "Lounge completo",
    time: "18:30 - 22:30",
    status: "Pendiente de pago",
    guests: 28
  },
  {
    id: "RSV-1026",
    host: "Carlos Medina",
    space: "Bar privado",
    time: "20:00 - 23:00",
    status: "Pagada",
    guests: 14
  }
];

export const events = [
  {
    name: "Jueves de Barril: Saison Tapatia",
    type: "Cata cervecera",
    date: "Jue 18 Jul",
    capacity: "24 / 32",
    price: "$850"
  },
  {
    name: "Cena privada con chef",
    type: "Cena privada",
    date: "Vie 26 Jul",
    capacity: "10 / 16",
    price: "$2,400"
  },
  {
    name: "Networking Piso 20",
    type: "After office",
    date: "Vie 02 Ago",
    capacity: "38 / 50",
    price: "$650"
  }
];

export const products = [
  { name: "Vino tinto Casa Madero 3V", category: "Vino tinto", stock: 8, min: 4, price: "$980" },
  { name: "Cerveza de barril Linea 1", category: "Cerveza", stock: 62, min: 20, price: "$140" },
  { name: "Espresso ejecutivo", category: "Cafe", stock: 120, min: 30, price: "$65" },
  { name: "Tabla de quesos", category: "Snacks", stock: 12, min: 6, price: "$460" }
];
