# Modelo de datos

## Nucleo

- `User`, `Role`, `Membership`: identidad, permisos y beneficios.
- `Reservation`, `ReservationGuest`, `AccessPass`: reserva, asistentes y pases QR.
- `Service`, `ReservationService`: servicios adicionales contratados.
- `Event`, `EventTicket`: experiencias vendibles con cupo.
- `Product`, `ProductCategory`, `InventoryMovement`: menu e inventario.
- `Wine`, `BeerTap`: extensiones especificas para cava y cerveza de barril.
- `Payment`: pagos de reservas, tickets y consumos futuros.
- `ReportSnapshot`: metricas periodicas precalculadas.
- `Setting`: configuracion operativa.

## Validaciones de negocio pendientes

- No permitir reservas empalmadas para el mismo espacio.
- No permitir check-in fuera de vigencia.
- No permitir vender por encima de stock o cupo.
- Bloquear QR cancelados, vencidos o usados.
- Registrar todo movimiento de inventario que afecte stock.
