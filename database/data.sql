
-- CLIENTES
INSERT INTO clientes (id, nombre, telefono, email)
VALUES (1, 'Miguel Alvarez', '70000011', 'miguel@mail.com'),
       (2, 'Laura Mendoza', '70000012', 'laura@mail.com');


-- VEHICULOS
INSERT INTO vehiculos (id, marca, modelo, placa, cliente_id)
VALUES (1, 'Toyota', 'Hilux', 'P123-126', 1),
       (2, 'Honda', 'CR-V', 'P123-127', 2),
       (3, 'Mazda', 'CX-5', 'P123-128', 1);

