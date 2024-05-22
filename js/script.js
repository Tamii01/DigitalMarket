const nombre = document.getElementById("nombre")
const email = document.getElementById("email")

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    parrafo.innerHTML = ""

    if (nombre.value === null || nombre.value.trim() === '') {
        warnings += `El campo nombre no debe estar vacío <br>`
        entrar = true
    }
    else if (nombre.value.length <= 2) {
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    else if(!regexNombre.test(nombre.value)){
        warnings += `El nombre no debe contener números ni símbolos <br>`
        entrar = true
    }

    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "<br> Enviado"
        setTimeout(() => {
            parrafo.innerHTML = ""; // Limpia el mensaje después de 10 segundos
        }, 5000); // 5000 milisegundos = 5 segundos
        form.reset(); // Opcional: para resetear el formulario después de enviarlo
    }

})