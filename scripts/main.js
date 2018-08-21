var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/futuristiccurl.jpg') {
      miImage.setAttribute('src','images/cybergirl.jpg');
    } else {
      miImage.setAttribute('src', 'images/futuristiccurl.jpg');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Eres la mejor:' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Eres la mejor:' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
//omg
//TODO SON OBJETOS EN JS
