<?php
include_once "conexion.php";

$datos = json_decode(file_get_contents("php://input"), true);

$curso = $datos['curso'];
$precio = $datos['precio'];

$insertar = "INSERT INTO inscripcion (tipo, costo, duracion, id_usuario) 
             VALUES ('$curso', '$precio', 30, 1)";

if (mysqli_query($conexion, $insertar)) {
    echo json_encode(["exito" => true]);
} else {
    echo json_encode(["exito" => false, "error" => mysqli_error($conexion)]);
}