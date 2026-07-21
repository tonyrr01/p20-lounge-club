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

export const partnerTypes = [
  "Chef privado",
  "Catering",
  "Destilador",
  "Cervecero",
  "Tequilero",
  "Vinicola",
  "Mixologia"
];

export const partnerProposals = [
  {
    brand: "Steinbock Rauchbier",
    contact: "Maestro cervecero invitado",
    type: "Cervecero",
    title: "Catering de cerveza y tapas",
    status: "Aprobada",
    price: "$6,200",
    commercialModel: "Reventa P20",
    commission: "22%",
    guarantee: "$4,200",
    capacity: "20-30 personas",
    duration: "180 min",
    staff: "2 personas",
    leadTime: "7 dias",
    date: "Jueves o viernes after office",
    setupNeeds: "Barra auxiliar, hielo, mesa para tapas y acceso de carga 90 minutos antes.",
    complianceNotes: "Seguro, permiso para servicio de alcohol y factura por validar.",
    menuPreview: "Rauchbier ahumada con tapas de Gouda, Brie y queso Chihuahua.",
    includes: [
      "3 horas de servicio con dos personas",
      "Guia sobre estilo de cerveza y maridajes",
      "Barril de 30 litros de cerveza artesanal",
      "4 tapas por persona y 20 tapas extra"
    ]
  },
  {
    brand: "Casa Agave Alto",
    contact: "Sommelier de tequila",
    type: "Tequilero",
    title: "Degustacion ejecutiva de tequila premium",
    status: "En revision",
    price: "$9,800",
    commercialModel: "Revenue share",
    commission: "25%",
    guarantee: "Sin garantia",
    capacity: "16 personas",
    duration: "120 min",
    staff: "1 sommelier",
    leadTime: "10 dias",
    date: "Viernes privado",
    setupNeeds: "Cristaleria, agua mineral, mesa alta y estacion de servicio.",
    complianceNotes: "Constancia de origen, factura y lineamientos de consumo responsable.",
    menuPreview: "Tres expresiones premium con maridaje salado ligero.",
    includes: [
      "Cata guiada de tres expresiones",
      "Maridaje salado ligero",
      "Historia de origen y proceso",
      "Opcion de botella conmemorativa"
    ]
  },
  {
    brand: "Mesa Privada",
    contact: "Chef invitado",
    type: "Chef privado",
    title: "Cena de cierre de negocio",
    status: "Recibida",
    price: "$2,400 pp",
    commercialModel: "Comision",
    commission: "20%",
    guarantee: "$12,000",
    capacity: "10-18 personas",
    duration: "210 min",
    staff: "3 personas",
    leadTime: "14 dias",
    date: "Bajo reserva",
    setupNeeds: "Uso controlado de cocina, vajilla, montaje de mesa y apoyo de limpieza final.",
    complianceNotes: "Seguro de responsabilidad civil, manejo higienico y factura.",
    menuPreview: "Menu de cuatro tiempos con maridaje opcional.",
    includes: [
      "Menu de cuatro tiempos",
      "Servicio en lounge completo",
      "Maridaje opcional",
      "Brief previo con anfitrion"
    ]
  }
];
