document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formLogin");

    form.addEventListener("submit", function (event) {
        let usuario = document.getElementById("usuario").value.trim();
        let contraseña = document.getElementById("contraseña").value.trim();
        let errores = [];

        if (usuario === "") {
            errores.push("El campo Usuario es obligatorio.");
        }

        if (contraseña === "") {
            errores.push("El campo Contraseña es obligatorio.");
        }

        if (errores.length > 0) {
            event.preventDefault();
            alert(errores.join("\n"));
        } else {
            alert("Formulario enviado correctamente ");
        }
    });
});
