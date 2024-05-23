document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form_contacto");
    form.addEventListener("submit", (e) => validarCampos(e, form));
});

function validarCampos(e, form){
    e.preventDefault();

    const formCorrecto  = document.getElementById("form_correcto");

    const selectValor   = document.getElementById("form_select").value;
    const nombreValor   = document.getElementById("form_nombre").value;
    const emailValor    = document.getElementById("form_email").value;
    const mensajeValor  = document.getElementById("form_mensaje").value;

    if(!selectValido(selectValor)) {
        mostrarErrorSelect();
        return;
    }

    const errorNombre = nombreValido(nombreValor);
    if(errorNombre.length != 0) {
        mostrarErrorNombre(errorNombre);
        return;
    }
    const errorEmail = emailValido(emailValor);
    if(errorEmail.length != 0) {
        mostrarErrorEmail(errorEmail);
        return;
    }
    const errorMensaje = mensajeValido(mensajeValor);
    if(errorMensaje.length != 0) {
        mostrarErrorMensaje(errorMensaje);
        return;
    }

    formCorrecto.style.display = 'inline-block';
    setTimeout(() => {
        formCorrecto.style.display = 'none';
    }, 5000);
    form.reset();
};

let selectListening, nombreListening, emailListening, mensajeListening = false;

function mostrarErrorSelect() {
    const selectElem = document.getElementById("form_select");
    const selectError = document.getElementById("error_select");

    selectElem.style.outline = 'dotted red';
    selectError.innerHTML = 'Esta opción no es válida';

    if(!selectListening){
        selectListening = true;
        selectElem.addEventListener('change', handleSelectChange);
    }
}
function handleSelectChange() {
    const selectElem = document.getElementById("form_select");
    const selectError = document.getElementById("error_select");
    const selectValor = selectElem.value;

    if(selectValido(selectValor)){
        selectElem.style.outline = 'none';
        selectError.innerHTML = '';
        selectElem.removeEventListener('change', handleSelectChange);
        selectListening = false;
    }
}

function mostrarErrorNombre(errorNombre) {
    const nombreElem = document.getElementById("form_nombre");
    const nombreError = document.getElementById("error_nombre");

    nombreElem.style.outline = 'dotted red';
    nombreError.innerHTML = errorNombre;

    if(!nombreListening){
        nombreListening = true;
        nombreElem.addEventListener('change', handleNombreChange);
    }
}
function handleNombreChange() {
    const nombreElem = document.getElementById("form_nombre");
    const nombreError = document.getElementById("error_nombre");

    nombreElem.style.outline = 'none';
    nombreError.innerHTML = '';
    nombreElem.removeEventListener('change', handleNombreChange);
    nombreListening = false;
}

function mostrarErrorEmail(errorEmail) {
    const emailElem = document.getElementById("form_email");
    const emailError = document.getElementById("error_email");

    emailElem.style.outline = 'dotted red';
    emailError.innerHTML = errorEmail;

    if(!emailListening){
        emailListening = true;
        emailElem.addEventListener('change', handleEmailChange);
    }
}
function handleEmailChange() {
    const emailElem = document.getElementById("form_email");
    const emailError = document.getElementById("error_email");

    emailElem.style.outline = 'none';
    emailError.innerHTML = '';
    emailElem.removeEventListener('change', handleEmailChange);
    emailListening = false;
}

function mostrarErrorMensaje(errorMensaje) {
    const mensajeElem = document.getElementById("form_mensaje");
    const mensajeError = document.getElementById("error_mensaje");

    mensajeElem.style.outline = 'dotted red';
    mensajeError.innerHTML = errorMensaje;

    if(!mensajeListening){
        mensajeListening = true;
        mensajeElem.addEventListener('change', handleMensajeChange);
    }
}
function handleMensajeChange() {
    const mensajeElem = document.getElementById("form_mensaje");
    const mensajeError = document.getElementById("error_mensaje");

    mensajeElem.style.outline = 'none';
    mensajeError.innerHTML = '';
    mensajeElem.removeEventListener('change', handleMensajeChange);
    mensajeListening = false;
}

function selectValido(valor) {
    return valor > 0 && valor < 4;
}

function nombreValido(valor) {
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (valor === null || valor.trim() === '') {
        return 'El nombre no debe estar vacío';
    }
    else if (valor.length < 3 || valor.length > 20) {
        return 'El nombre debe contener entre 3 y 20 caracteres';
    }
    else if (!regexNombre.test(valor)) {
        return 'El nombre no debe contener números ni símbolos';
    }
    return "";
}

function emailValido(valor) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (valor === null || valor.trim() === '') {
        return 'El email no debe estar vacío';
    }
    else if (!regexEmail.test(valor)) {
        return 'El email no es válido';
    }
    return "";
}

function mensajeValido(valor) {
    if (valor === null || valor.trim() === '') {
        return 'El mensaje no debe estar vacío';
    }
    else if (valor.length < 3 || valor.length > 200) {
        return 'El mensaje debe contener entre 3 y 200 caracteres';
    }
    return "";
}

