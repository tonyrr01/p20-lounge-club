# Arquitectura inicial

## Principios

- Separar UI, reglas de negocio y datos.
- Mantener pantallas operativas simples para staff y admin.
- Modelar desde el inicio reservas, eventos, inventario y accesos como entidades conectadas.
- Evitar datos sensibles hardcodeados: credenciales, URLs y secretos viven en variables de entorno.

## Capas

- `app/`: rutas de Next.js, layouts y paginas.
- `components/`: componentes reutilizables de UI, layout, formularios y tarjetas.
- `features/`: datos demo y futura logica por dominio.
- `lib/db`: cliente Prisma.
- `lib/auth`: configuracion Auth.js.
- `lib/validations`: schemas Zod.
- `prisma/`: schema y seed.

## Roles

- `SUPER_ADMIN`: control total.
- `LOUNGE_ADMIN`: operacion completa del lounge.
- `STAFF`: reservas del dia, check-in, pedidos e inventario operativo.
- `TENANT_P20`: reservas con beneficios y prioridad.
- `DOS_PUNTAS_EXECUTIVE`: acceso limitado o por invitacion.
- `VIP_MEMBER`: experiencias, eventos privados y beneficios.
- `GUEST`: acceso por QR, invitacion o evento.

## Decisiones de producto

El MVP evita resolver todos los flujos en profundidad. Prioriza una base administrable:

- Landing para presentar concepto y experiencias.
- Admin dashboard para estado operativo.
- Reservas y eventos como nucleo comercial.
- Menu/inventario como nucleo de consumo.
- Accesos QR preparados sin cerrar todavia la validacion avanzada.

## Riesgos a resolver pronto

- Empalmes de reservas por espacio y horario.
- Autorizacion granular por rol.
- Auditoria de check-ins y cambios de estado.
- Manejo de inventario fraccional para barriles, botellas por copa e ingredientes.
- Integracion de pagos y conciliacion.
