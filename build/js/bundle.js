
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1 ; i <= 12 ; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        // Anadir la funcion de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista)
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);
    
    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/grande/${id}.jpg`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cerrar cuando se da click en el overlay
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Funcionalidad el boton
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML 
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
};