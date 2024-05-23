const nombre = document.getElementById("nombre")
const email = document.getElementById("email")

const form = document.getElementById("form")
const error_nombre = document.getElementById("error_nombre")
const error_email = document.getElementById("error_email")
const error_select = document.getElementById("error_select")
const success_message = document.getElementById("success_message")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warning_nombre = ""
    let warning_email = ""
    let warning_select = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    error_nombre.innerHTML = ""
    error_email.innerHTML = ""
    error_select.innerHTML = ""
    success_message.innerHTML = ""

    if (problema.value === "0") {
        warning_select += `Debe seleccionar un tipo de solicitud`
        entrar = true
    }

    if (nombre.value === null || nombre.value.trim() === '') {
        warning_nombre += `El campo nombre no debe estar vacío`
        entrar = true
    }
    else if (nombre.value.length <= 2) {
        warning_nombre += `El nombre es muy corto`
        entrar = true
    }
    else if (!regexNombre.test(nombre.value)) {
        warning_nombre += `El nombre no debe contener números ni símbolos`
        entrar = true
    }

    if (email.value === null || email.value.trim() === '') {
        warning_email += `El campo email no debe estar vacío`
        entrar = true
    }

    else if (!regexEmail.test(email.value)) {
        warning_email += `El email no es válido`
        entrar = true
    }


    if (entrar) {
        error_nombre.innerHTML = warning_nombre
        error_email.innerHTML = warning_email
        error_select.innerHTML = warning_select
    } else {
        success_message.innerHTML = "Formulario enviado con éxito"
        setTimeout(() => {
            success_message.innerHTML = ""; // Limpia el mensaje después de 10 segundos
        }, 5000); // 5000 milisegundos = 5 segundos
        form.reset(); // Rsetea el formulario después de enviarlo
    }

})