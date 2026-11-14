<?php
include_once "conexion.php";

$datos = json_decode(file_get_contents("php://input"), true);

$curso = $datos['curso'];
$precio = $datos['precio'];
$nombre = $datos ['nombre'];
$correo = $datos ['correo'];

//buscamos si existe un usuario con este correo
$buscar = mysqli_prepare($conexion, "SELECT Id_usuario FROM usuario WHERE correo = ?");
mysqli_stmt_bind_param($buscar, "s", $correo);
mysqli_stmt_execute($buscar);
$resultado = mysqli_stmt_get_result($buscar);
$usuario_existente = mysqli_fetch_assoc($resultado);
if ($usuario_existente){
    // usamos el id porque ya existia
    $id_usuario = $usuario_existente ['Id_usuario'];
} else {
    // No existía: lo creamos como estudiante nuevo
    $clave_temporal = "pendiente"; // luego puede crear su clave real si abre una cuenta
    $crear = mysqli_prepare($conexion, "INSERT INTO usuario (Nombre, correo, contraseña, tipo) VALUES (?, ?, ?, 'estudiante')");
    mysqli_stmt_bind_param($crear, "sss", $nombre, $correo, $clave_temporal);
    mysqli_stmt_execute($crear);
    $id_usuario = mysqli_insert_id($conexion);
}

// Guardamos la inscripción  con el id_usuario correcto (no fijo en 1)
$insertar = mysqli_prepare($conexion, "INSERT INTO inscripcion (tipo, costo, duracion, id_usuario) VALUES (?, ?, 30, ?)");
mysqli_stmt_bind_param($insertar, "sdi", $curso, $precio, $id_usuario);

if (mysqli_stmt_execute($insertar)) {
    echo json_encode(["exito" => true]);
} else {
    echo json_encode(["exito" => false, "error" => mysqli_error($conexion)]);
}