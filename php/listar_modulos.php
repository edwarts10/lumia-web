<?php
include_once "conexion.php";
// responder en formato JSON
header('Content-Type: application/json');
// curso que pide la pagina si no llega usamos el 1
$id_curso = isset($_GET['id_curso']) ? (int) $_GET['id_curso'] : 1;

// buscamnos los modulos del curso
$consulta = mysqli_prepare($conexion, "SELECT id_modulo, nombre, contenido, video FROM modulo WHERE id_curso = ? ORDER BY id_modulo");
mysqli_stmt_bind_param($consulta, "i", $id_curso);
mysqli_stmt_execute($consulta);
$resultado = mysqli_stmt_get_result($consulta);

// los guardamos en una lista
$modulos = [];
while ($fila = mysqli_fetch_assoc($resultado)) {
    $modulos[] = $fila;
}

// enviamnos la lista a la pagina
echo json_encode($modulos);
