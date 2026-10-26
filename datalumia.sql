--  crear base de datos datalumia
CREATE DATABASE IF NOT EXISTS datalumia
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;
USE datalumia;
-- USUARIOS QUE INICIAN SESION EN LUMIA 
CREATE TABLE usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    tipo enum('estudiante', 'profesor') NOT NULL,
    PRIMARY KEY (id_usuario),
    UNIQUE (correo)
)engine=InnoDB DEFAULT CHARSET=utf8mb4;

-- datos del profesor que inicia sesion en LUMIA
CREATE TABLE profesor (
    id_profesor INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_asig int(11) default NULL,
    PRIMARY KEY (id_profesor)
)engine=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cursos que se ofrecen en LUMIA
create table curso (
    id_curso INT (11) NOT NULL AUTO_INCREMENT,
    nombre_curso VARCHAR(50) default NULL,
    id_profesor INT (11) default NULL,
    PRIMARY KEY (id_curso),
foreign key (id_profesor) references profesor(id_profesor) 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Datos del estudiante
CREATE TABLE estudiante (
    id_estudiante INT (11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE default NULL,
    correo VARCHAR(100) default NULL,
    id_curso INT (11) default NULL,
    PRIMARY KEY (id_estudiante),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- modulo de cada curso
CREATE TABLE modulo (
    id_modulo INT (11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    contenido TEXT default NULL,
    id_curso INT (11) default NULL,
    PRIMARY KEY (id_modulo),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- evaluacion de cada curso
CREATE TABLE evaluacion (
    id_evaluacion INT (11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100)default NULL,
    fecha DATE default NULL,
    id_curso INT (11) default NULL,
    calificacion FLOAT default NULL,
    PRIMARY KEY (id_evaluacion),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- inscripcion a cada curso
    CREATE TABLE inscripcion (
    id_inscripcion INT (11) NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(50) default NULL,
    costo FLOAT default NULL,
    duracion INT (11) default NULL,
    id_usuario INT (11) NOT NULL,
    PRIMARY KEY (id_inscripcion),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- pago de los cursos
    CREATE TABLE pago (
    id_pago INT (11) NOT NULL AUTO_INCREMENT,
    id_curso INT (11) default NULL,
    monto INT (11) default NULL,
    fecha DATE default NULL,    
    metodo VARCHAR(50) default NULL,
    id_usuario INT (11) default NULL,
    estado_pago VARCHAR(50) default NULL,
    PRIMARY KEY (id_pago),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
    )   ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- factura de los cursos
CREATE TABLE factura (
    id_factura INT (11) NOT NULL AUTO_INCREMENT,
    id_estudiante INT (11) default NULL,
    detalles VARCHAR(255) default NULL,
    total FLOAT default NULL,
    fecha_emsion DATE default NULL,
    PRIMARY KEY (id_factura),
    FOREIGN KEY (id_estudiante) REFERENCES estudiante(id_estudiante)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- mensaje del foro de cada curso
CREATE TABLE foro (
    id_foro INT (11) NOT NULL AUTO_INCREMENT,
    nombre_curso VARCHAR(100) default NULL,
    tema VARCHAR(100) default NULL,
    id_usuario INT (11) default NULL,
    contenido TEXT default NULL,
    PRIMARY KEY (id_foro),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;