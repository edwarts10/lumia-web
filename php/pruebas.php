<?php
include_once "conexion.php";

echo "<h2>Pruebas unitarias - LUMIA</h2>";

// Prueba 1: Verificar conexión a la base de datos
if ($conexion) {
    echo "✓ Prueba 1: Conexión a la base de datos - OK <br>";
} else {
    echo "✗ Prueba 1: Conexión a la base de datos - FALLÓ <br>";
}
// Prueba 2: Verificar que se puede consultar la tabla usuario
$consulta = "SELECT * FROM usuario LIMIT 1";
$resultado = mysqli_query($conexion, $consulta);

if ($resultado && mysqli_num_rows($resultado) > 0) {
    echo "✓ Prueba 2: Consulta de usuarios - OK <br>";
} else {
    echo "✗ Prueba 2: Consulta de usuarios - FALLÓ <br>";
}
// Prueba 3: Verificar que el cifrado de contraseñas funciona
$claveOriginal = "miClave123";
$claveCifrada = password_hash($claveOriginal, PASSWORD_DEFAULT);

if (password_verify($claveOriginal, $claveCifrada)) {
    echo "✓ Prueba 3: Cifrado y verificación de contraseñas - OK <br>";
} else {
    echo "✗ Prueba 3: Cifrado y verificación de contraseñas - FALLÓ <br>";
}
// Prueba 4: Verificar validación de formato de correo
$correoValido = "usuario@lumia.com";
$correoInvalido = "esto-no-es-correo";

if (filter_var($correoValido, FILTER_VALIDATE_EMAIL) && !filter_var($correoInvalido, FILTER_VALIDATE_EMAIL)) {
    echo "✓ Prueba 4: Validación de formato de correo - OK <br>";
} else {
    echo "✗ Prueba 4: Validación de formato de correo - FALLÓ <br>";
}