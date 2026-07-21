<?php
include_once "conexion.php";

$email = $_POST['email'];
$clave = $_POST['clave'];

$consulta = "SELECT * FROM usuario WHERE correo = '$email'";
$resultado = mysqli_query($conexion, $consulta);

if (mysqli_num_rows($resultado) == 1) {
    $usuario = mysqli_fetch_assoc($resultado);

    if (password_verify($clave, $usuario['contraseña'])) {
        header("Location: ../cursos.html");
    } else {
        echo "Usuario o contraseña incorrectos";
    }
} else {
    echo "Usuario o contraseña incorrectos";
}