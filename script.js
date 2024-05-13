document.addEventListener('DOMContentLoaded', () => {


	handleBusqueda();
});

function handleBusqueda() {
	const busquedaMostrar = document.querySelector('#listBusquedaNav label');
	const busquedaInput = document.querySelector('#listBusquedaNav input');
	const busquedaBoton = document.querySelector('#listBusquedaNav button');
	const busquedaForm = document.querySelector('#listBusquedaNav form');

	const carrito = document.querySelector('nav div:last-child ul li:nth-child(2)');
	const usuario = document.querySelector('nav div:last-child ul li:nth-child(3)');

	busquedaMostrar.addEventListener('click', () => {
		busquedaMostrar.style.display = 'none';
		carrito.style.display = 'none';
		if (usuario) usuario.style.display = 'none';
		busquedaInput.style.display = 'block';
		busquedaBoton.style.display = 'block';
	});

	busquedaInput.addEventListener('blur', () => {
		setTimeout(() => {
			busquedaInput.style.display = 'none';
			busquedaBoton.style.display = 'none';
			busquedaMostrar.style.display = 'inline-block';
			carrito.style.display = 'inline-block';
			if (usuario) usuario.style.display = 'inline-block';
		}, 100);
	});

	busquedaForm.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log(busquedaInput.value);
		// TODO:
		// * Hacer una request al backend
		// * Redireccionar a /search?term donde se muestren todos los productos que cumplan con la regex
	});
}