<?php
include_once "conexion.php";
$nombre =$_POST['nombre'];
$apellido =$_POST['apellido'];
$correo =$_POST['correo'];
$telefono =$_POST['telefono'];
$clave =$_POST['clave'];
$confirmar =$_POST['confirmar'];
$tipo =$_POST['tipo'];

//Validar que las contraseñas coincidan
if ($clave !=$confirmar) {
    echo "lascontraseñas no coinciden";
    exit ();
}
//Verificar que el correo no esté registrado

$verificar = "SELECT * FROM usuario WHERE correo = '$correo'";
$resultado = mysqli_query($conexion, $verificar);

if (mysqli_num_rows($resultado) > 0) {
    echo "Ese correo ya está registrado";
    exit();
}
//Insertar el usuario en la BD
$insertar = "INSERT INTO usuario (Nombre, correo, contraseña, tipo) 
             VALUES ('$nombre', '$correo', '$clave', '$tipo')";

if (mysqli_query($conexion, $insertar)) {
    header("Location: ../inicio sesion.html");
} else {
    echo "Error al registrar: " . mysqli_error($conexion);
}