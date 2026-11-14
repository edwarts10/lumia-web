<?php
use PHPUnit\Framework\TestCase;
class EjemploValidacionTest extends TestCase
{
    // valida el formato del correo
    private function esCorreoValido($correo)
    {
        return filter_var($correo, FILTER_VALIDATE_EMAIL) !==false;
    }
    // Función de ejemplo: valida longitud mínima de contraseña
    private function esPasswordValido($password)
    {
        return strlen($password) >= 8;
    }

    public function testCorreoValidoEsAceptado()
    {
        $this->assertTrue($this->esCorreoValido("usuario@lumia.com"));
    }

    public function testCorreoInvalidoEsRechazado()
    {
        $this->assertFalse($this->esCorreoValido("usuario-sin-arroba.com"));
    }

    public function testPasswordCortoEsRechazado()
    {
        $this->assertFalse($this->esPasswordValido("123"));
    }

    public function testPasswordLargoEsAceptado()
    {
        $this->assertTrue($this->esPasswordValido("clave12345"));
    }
}