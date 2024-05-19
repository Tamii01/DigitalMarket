document.addEventListener('DOMContentLoaded', () => {


	handleBusqueda();
	mostrarBotonUsuario();
});

const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () =>{
  fileInput.click();
});

fileInput.onchange = ({target})=>{
  let file = target.files[0];
  if(file){
    let fileName = file.name;
    if(fileName.length >= 12){
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName);
  }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/upload.php");
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    let fileSize;
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    }
  });
  let data = new FormData(form);
  xhr.send(data);

  
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

function mostrarBotonUsuario(){
	// TODO:
	// * Chequear si es admin
	// * Mostrar u ocultar el boton de usuario en la navbar
}
}