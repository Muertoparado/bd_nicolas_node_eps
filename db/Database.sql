CREATE DATABASE eps;
USE eps;
CREATE TABLE usuario(
    usu_id INT(5) PRIMARY KEY,
    usu_nombre VARCHAR(50) NOT NULL,
    usu_segdo_nombre VARCHAR(50),
    usu_primer_apellido_usar VARCHAR(50),
    usu_segdo_apellido_usar VARCHAR(50),
    usu_telefono VARCHAR(50),
    usu_direccion VARCHAR(100),
    usu_email VARCHAR(100),
    usu_tipodoc INT,
    usu_genero INT,
    usu_acudiente INT
);

CREATE TABLE acudiente(
    acu_codigo INT(5) PRIMARY KEY,
    acu_nombreCompleto VARCHAR(100) NOT NULL,
    acu_telefono VARCHAR(100),
    acu_direccion VARCHAR(200)
);

CREATE TABLE genero(
    gen_id INT PRIMARY KEY,
    gen_nombre VARCHAR(20),
    gen_abreviatura VARCHAR(20)
);

CREATE TABLE tipo_documento(
    tipodoc_id INT PRIMARY KEY,
    tipodoc_nombre VARCHAR(20),
    tipodoc_abreviatura VARCHAR(20)
);

CREATE TABLE cita(
    cit_codigo INT PRIMARY KEY,
    cit_fecha DATE,
    cit_estadoCita INT,
    cit_medico INT,
    cit_datosUsuario INT
);

CREATE TABLE estado_cita(
    estcita_id INT PRIMARY KEY,
    estcita_nombre VARCHAR(20)
);

CREATE TABLE medico (
    med_nroMatriculaProsional INT PRIMARY KEY,
    med_nombreCompleto VARCHAR(120),
    med_consultorio INT,
    med_especialidad INT
);

CREATE TABLE especialidad(
    esp_id INT PRIMARY KEY,
    esp_nombre VARCHAR(20)
);

CREATE TABLE consultorio(
    CONS_CODIGO INT PRIMARY KEY,
    cons_nombre VARCHAR(50)
);

ALTER TABLE usuario ADD CONSTRAINT fk_usu_tipodoc FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipodoc_id);
ALTER TABLE usuario ADD CONSTRAINT fk_usu_genero FOREIGN KEY (usu_genero) REFERENCES genero(gen_id);
ALTER TABLE usuario ADD CONSTRAINT fk_usu_acudiente FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo);
ALTER TABLE cita ADD CONSTRAINT fk_cit_datosUsuarios FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id);
ALTER TABLE cita ADD CONSTRAINT fk_cit_estadoCita FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id);
ALTER TABLE cita ADD CONSTRAINT fk_cit_medico FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProsional);
ALTER TABLE medico ADD CONSTRAINT fk_med_especialidad FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id);
ALTER TABLE medico ADD CONSTRAINT fk_med_consultorio FOREIGN KEY (med_consultorio) REFERENCES consultorio(cons_codigo);






