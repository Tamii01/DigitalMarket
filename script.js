document.addEventListener('DOMContentLoaded', () => {
	handleBusqueda();
});

function handleBusqueda() {
	const busquedaMostrar = document.querySelector('#listBusquedaNav label');
	const busquedaInput = document.querySelector('#listBusquedaNav input');
	const busquedaEnviar = document.querySelector('#listBusquedaNav > i');

	const padreListaIconos = document.querySelector("#listBusquedaNav").parentNode;
	const carritoYusuario = padreListaIconos.querySelectorAll("li:not(#listBusquedaNav)");

	busquedaMostrar.addEventListener('click', () => {
		busquedaMostrar.style.display = 'none';
		carritoYusuario.forEach(elem => elem.style.display = 'none');
		busquedaInput.style.display = 'block';
		busquedaEnviar.style.display = 'block';
	});

	busquedaInput.addEventListener('blur', () => {
		setTimeout(() => {
			busquedaInput.style.display = 'none';
			busquedaEnviar.style.display = 'none';
			busquedaMostrar.style.display = 'inline-block';
			carritoYusuario.forEach(elem => elem.style.display = 'inline-block');
		}, 100);
	});

	busquedaEnviar.addEventListener('click', () => {
		console.log(busquedaInput.value);
		// TODO:
		// * Hacer una request al backend
		// * Redireccionar a /search?term donde se muestren todos los productos que cumplan con la regex
	});
}