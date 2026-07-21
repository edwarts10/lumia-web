<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
include_once "conexion.php";

$email = $_POST['email'];
$clave = $_POST['clave'];

$consulta = "SELECT * FROM usuario WHERE correo = '$email' AND contraseña = '$clave'";
$resultado = mysqli_query($conexion, $consulta);

if (mysqli_num_rows($resultado) == 1) {
    header("Location: ../cursos.html");
} else {
    echo "Usuario o contraseña incorrectos";
}