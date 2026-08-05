<?php
// Detecta si estamos en local (XAMPP) o en producción (InfinityFree)
if ($_SERVER['SERVER_NAME'] === 'localhost') {
    // Datos de conexión LOCAL (XAMPP)
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $basedatos = "datalumia";
} else {
    // Datos de conexión PRODUCCIÓN (InfinityFree)
    $servidor = "sql212.infinityfree.com";
    $usuario = "if0_42576334";
    $clave = "TU_CONTRASEÑA_AQUI";
    $basedatos = "if0_42576334_lumia";
}
$conexion = mysqli_connect($servidor, $usuario, $clave, $basedatos);
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
mysqli_set_charset($conexion, "utf8mb4"); 
?>