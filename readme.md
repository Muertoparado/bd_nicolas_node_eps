MY_CONFIG={"hostname":"127.3.3.1", "port":5100}
MY_CONNECT={"host":"localhost","database":"eps", "user": "campus", "password": "campus2023", "port":3306} 

Esta aplicacion esta disenada para implementar un sistema de gestión de citas médicas, donde se pueden realizar consultas para obtener información detallada sobre las citas, los médicos, los pacientes y otros aspectos relacionados con el sistema.
A continuación, se describe brevemente la estructura y el trabajo de la base de datos:

Tabla "usuario":

Almacena la información de los usuarios/pacientes.
Tiene columnas para el ID de usuario, nombre, apellidos, teléfono, dirección, correo electrónico, tipo de documento, género y acudiente.

Tabla "acudiente":
Almacena la información de los acudientes de los usuarios/pacientes.
Tiene columnas para el código de acudiente, nombre completo, teléfono y dirección.

Tabla "genero":
Almacena los diferentes géneros disponibles.
Tiene columnas para el ID de género, nombre y abreviatura.

Tabla "tipo_documento":
Almacena los diferentes tipos de documentos de identidad.
Tiene columnas para el ID de tipo de documento, nombre y abreviatura.

Tabla "cita":
Almacena la información de las citas médicas.
Tiene columnas para el código de cita, fecha, estado de cita, médico y datos del usuario/paciente.

Tabla "estado_cita":
Almacena los diferentes estados posibles para una cita médica.
Tiene columnas para el ID de estado de cita y nombre.

Tabla "medico":
Almacena la información de los médicos.
Tiene columnas para el número de matrícula profesional, nombre completo, consultorio y especialidad.

Tabla "especialidad":
Almacena las diferentes especialidades médicas.
Tiene columnas para el ID de especialidad y nombre.

Tabla "consultorio":
Almacena la información de los consultorios médicos.
Tiene columnas para el código de consultorio y nombre.

<!-- endpoints -->

GET '/pacientes':
Función: Obtener todos los pacientes en orden alfabético.
Tipo de datos requeridos: No se requieren datos adicionales.

GET '/citas':
Función: Obtener todas las citas en orden alfabético.
Tipo de datos requeridos: No se requieren datos adicionales.

GET '/citaproxima/:id':
Función: Encontrar la próxima cita para un paciente específico.
Tipo de datos requeridos: ID del paciente (entero).

GET '/pacientes/med/:med':
Función: Encontrar todos los pacientes que tienen citas con un médico específico.
Tipo de datos requeridos: ID del médico (entero).

GET '/pacientes/:id':
Función: Obtener las consultorías para un paciente específico.
Tipo de datos requeridos: ID del paciente (entero).

GET '/citas/:fecha':
Función: Encontrar todas las citas para un día específico.
Tipo de datos requeridos: Fecha específica (cadena de texto en formato 'AAAA-MM-DD').

GET '/med/consultorios':
Función: Obtener los médicos y sus consultorios.
Tipo de datos requeridos: No se requieren datos adicionales.

GET '/med/:id/:fecha':
Función: Contar el número de citas que un médico tiene en un día específico.
Tipo de datos requeridos: ID del médico (entero) y fecha específica (cadena de texto en formato 'AAAA-MM-DD').

GET '/consultorios/:id':
Función: Obtener los consultorios donde se aplicaron las citas de un paciente.
Tipo de datos requeridos: ID del paciente (entero).

GET '/citas/genero/:gen':
Función: Obtener todas las citas realizadas por los pacientes de un género específico si su estado de la cita fue atendida.
Tipo de datos requeridos: ID del género (entero).

GET '/citas/rechazadas/:mes':
Función: Mostrar todas las citas que fueron rechazadas en un mes específico, mostrando la fecha de la cita, el nombre del usuario y el médico.
Tipo de datos requeridos: Mes específico (entero).