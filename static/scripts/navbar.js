document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.style.opacity = '1';
	handleBusqueda();
});

function handleBusqueda() {
	const busquedaMostrar = document.querySelector('#listBusquedaNav label');
	const busquedaIcono = document.querySelector('#listBusquedaNav label i');
	const busquedaInput = document.querySelector('#listBusquedaNav input');
	const busquedaBoton = document.querySelector('#listBusquedaNav button');
	const busquedaForm = document.querySelector('#listBusquedaNav form');

	const carrito = document.querySelector('nav div:last-child ul li:nth-child(2)');
	const usuario = document.querySelector('nav div:last-child ul li:nth-child(3)');

	busquedaMostrar.addEventListener('click', () => {
		busquedaIcono.style.transform = 'rotate(-360deg) scaleX(0.3)';
		busquedaIcono.style.backgroundColor = "#fff"

		setTimeout(() => {
			busquedaIcono.style.transform = 'scaleX(0.3) translateX(500px)';
			setTimeout(() => {
				carrito.style.display = 'none';
				if (usuario) usuario.style.display = 'none';
					setTimeout(() => {
						busquedaIcono.style.display = 'none';
						busquedaInput.style.display = 'block';
						busquedaBoton.style.display = 'block';
						setTimeout(() => {
							busquedaMostrar.style.display = 'none';
							busquedaInput.style.opacity = '1';
							busquedaBoton.style.opacity = '1';
							busquedaInput.focus();
						}, 300);
				}, 300);
			}, 120);
		}, 500);
	});

	busquedaInput.addEventListener('blur', () => {
		setTimeout(() => {
			busquedaInput.style.opacity = '0';
			busquedaBoton.style.opacity = '0';
			setTimeout(() => {
				busquedaInput.style.display = 'none';
				busquedaBoton.style.display = 'none';
				busquedaMostrar.style.display = 'inline-block';
				carrito.style.display = 'inline-block';
				if (usuario) usuario.style.display = 'inline-block';
				busquedaIcono.style.display = 'block';
				busquedaIcono.style.transform = 'rotate(0) scaleX(1) translateX(0)';
				busquedaIcono.style.backgroundColor = "transparent";
				busquedaForm.reset();
			}, 600);
		}, 100);
	});

	busquedaForm.addEventListener('submit', (e) => {
		e.preventDefault();
		// console.log(busquedaInput.value);
		// TODO:
		// * Hacer una request al backend
		// * Redireccionar a /search?term donde se muestren todos los productos que cumplan con la regex
	});
}
