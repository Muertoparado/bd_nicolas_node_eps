INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usar, usu_segdo_apellido_usar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES
(1, 'Juan', 'Carlos', 'Pérez', 'Gómez', '1234567890', 'Calle 123, Ciudad', 'juan.perez@example.com', 1, 1, 1),
(2, 'María', 'Elena', 'García', 'López', '0987654321', 'Avenida 456, Ciudad', 'maria.garcia@example.com', 2, 2, 2),
(3, 'Pedro', 'José', 'Rodríguez', 'Martínez', '9876543210', 'Plaza 789, Ciudad', 'pedro.rodriguez@example.com', 1, 1, 3),
(4, 'Ana', 'María', 'López', 'González', '0123456789', 'Carrera 567, Ciudad', 'ana.lopez@example.com', 2, 2, 2),
(5, 'Carlos', 'Andrés', 'Hernández', 'Ruiz', '5432109876', 'Callejón 890, Ciudad', 'carlos.hernandez@example.com', 1, 1, 1);


INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES
(1, 'Ana Sánchez', '987654321', 'Calle 456, Ciudad'),
(2, 'Luis González', '123456789', 'Avenida 789, Ciudad'),
(3, 'María Torres', '012345678', 'Plaza 123, Ciudad');

INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura) VALUES
(1, 'Masculino', 'M'),
(2, 'Femenino', 'F');

INSERT INTO tipo_documento (tipodoc_id, tipodoc_nombre, tipodoc_abreviatura) VALUES
(1, 'Cédula de Ciudadanía', 'CC'),
(2, 'Tarjeta de Identidad', 'TI');

INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES
(1, '2023-07-15', 1, 1, 1),
(2, '2023-07-16', 2, 2, 2),
(3, '2023-07-17', 1, 1, 3),
(4, '2023-07-18', 2, 2, 4),
(5, '2023-07-19', 1, 1, 5);

INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES
(6, '2023-07-20', 1, 3, 1),
(7, '2023-07-21', 2, 4, 2),
(8, '2023-07-22', 1, 5, 3),
(9, '2023-07-23', 2, 6, 4),
(10, '2023-07-24', 1, 7, 5);
INSERT INTO estado_cita (estcita_id, estcita_nombre) VALUES
(5, 'Pendiente'),
(7, 'Confirmada');

INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES
(1, 'Dr. Andrés Gómez', 1, 1),
(2, 'Dra. Laura Rodríguez', 2, 2);

-- Generar datos aleatorios de médico
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES
(3, 'Dr. Ricardo López', 3, 1),
(4, 'Dra. Laura García', 4, 2),
(5, 'Dr. Javier Martínez', 5, 3),
(6, 'Dra. Ana Ramírez', 6, 4),
(7, 'Dr. Carlos González', 7, 5);


INSERT INTO especialidad (esp_id, esp_nombre) VALUES
(1, 'Pediatría'),
(2, 'Cardiología');

INSERT INTO especialidad (esp_id, esp_nombre) VALUES
(3, 'Dermatología'),
(4, 'Ginecología'),
(5, 'Oftalmología'),
(6, 'Ortopedia'),
(7, 'Psiquiatría');

INSERT INTO consultorio (CONS_CODIGO, cons_nombre) VALUES
(1, 'Consultorio 101'),
(2, 'Consultorio 202');


INSERT INTO consultorio (CONS_CODIGO, cons_nombre) VALUES
(3, 'Consultorio 303'),
(4, 'Consultorio 404'),
(5, 'Consultorio 505'),
(6, 'Consultorio 606'),
(7, 'Consultorio 707');
