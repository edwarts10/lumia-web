<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$basedatos = "datalumia";

$conexion = mysqli_connect($servidor, $usuario, $clave, $basedatos);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

