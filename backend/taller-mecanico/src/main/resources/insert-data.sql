
-- CLIENTES
INSERT INTO clientes (id, nombre, telefono, email)
VALUES (1, 'Juan Perez', '70000001', 'juan@mail.com'),
       (2, 'Maria Lopez', '70000002', 'maria@mail.com'),
       (3, 'Carlos Ruiz', '70000003', 'carlos@mail.com'),
       (4, 'Ana Torres', '70000004', 'ana@mail.com'),
       (5, 'Luis Gomez', '70000005', 'luis@mail.com'),
       (6, 'Pedro Martinez', '70000006', 'pedro@mail.com'),
       (7, 'Sofia Hernandez', '70000007', 'sofia@mail.com'),
       (8, 'Diego Castro', '70000008', 'diego@mail.com'),
       (9, 'Elena Flores', '70000009', 'elena@mail.com'),
       (10, 'Ricardo Diaz', '70000010', 'ricardo@mail.com');


-- VEHICULOS
INSERT INTO vehiculos (id, marca, modelo, placa, cliente_id)
VALUES (1, 'Toyota', 'Corolla', 'P123-111', 1),
       (2, 'Honda', 'Civic', 'P123-112', 1),
       (3, 'Ford', 'Focus', 'P123-113', 2),
       (4, 'Nissan', 'Sentra', 'P123-114', 3),
       (5, 'Mazda', '3', 'P123-115', 4),
       (6, 'Hyundai', 'Elantra', 'P123-116', 5),
       (7, 'Kia', 'Rio', 'P123-117', 6),
       (8, 'Chevrolet', 'Cruze', 'P123-118', 7),
       (9, 'Volkswagen', 'Jetta', 'P123-119', 8),
       (10, 'BMW', 'X3', 'P123-120', 9),
       (11, 'Audi', 'A4', 'P123-121', 10),
       (12, 'Toyota', 'Yaris', 'P123-122', 2),
       (13, 'Honda', 'Accord', 'P123-123', 3),
       (14, 'Ford', 'Escape', 'P123-124', 4),
       (15, 'Nissan', 'Altima', 'P123-125', 5);


-- PRODUCTOS (INVENTARIO)
INSERT INTO productos (id, nombre, descripcion, precio, stock)
VALUES (1, 'Aceite', 'Aceite de motor', 25.00, 50),
       (2, 'Filtro de aceite', 'Filtro estándar', 10.00, 40),
       (3, 'Pastillas de freno', 'Freno delantero', 45.00, 30),
       (4, 'Bateria', 'Bateria 12V', 120.00, 20),
       (5, 'Llanta', 'Llanta rin 15', 80.00, 25),
       (6, 'Bujias', 'Juego de bujias', 15.00, 60);


-- SERVICIOS
INSERT INTO servicios (id, descripcion, fecha, estado, vehiculo_id)
VALUES (1, 'Cambio de aceite', '2026-04-01', 'TERMINADO', 1),
       (2, 'Cambio de frenos', '2026-04-02', 'TERMINADO', 2),
       (3, 'Revision general', '2026-04-03', 'EN_PROCESO', 3),
       (4, 'Cambio de bateria', '2026-04-04', 'PENDIENTE', 4),
       (5, 'Cambio de llantas', '2026-04-05', 'TERMINADO', 5);


-- TABLA INTERMEDIA SERVICIO_PRODUCTO
INSERT INTO servicio_producto (servicio_id, producto_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (3, 6),
       (4, 4),
       (5, 5);


-- FACTURAS
INSERT INTO facturas (id, fecha, total, cliente_id)
VALUES (1, '2026-04-01', 35.00, 1),
       (2, '2026-04-02', 45.00, 1),
       (3, '2026-04-03', 15.00, 2),
       (4, '2026-04-04', 120.00, 3),
       (5, '2026-04-05', 80.00, 4);


-- DETALLE FACTURA
INSERT INTO detalle_factura (id, cantidad, precio_unitario, subtotal, factura_id, producto_id)
VALUES (1, 1, 25.00, 25.00, 1, 1),
       (2, 1, 10.00, 10.00, 1, 2),
       (3, 1, 45.00, 45.00, 2, 3),
       (4, 1, 15.00, 15.00, 3, 6),
       (5, 1, 120.00, 120.00, 4, 4),
       (6, 1, 80.00, 80.00, 5, 5);