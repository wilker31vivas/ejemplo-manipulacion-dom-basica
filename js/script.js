//Leyendo HTML desde JavaScript

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoClase = document.getElementsByClassName('parrafoClase');
const parrafoID = document.getElementById('parrafoID');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafoClase,
  parrafoID,
  input,
})


//Escribiendo HTML desde JavaScript

//escribir html en una etiqueta
h1.innerHTML = 'Patito <br> Feo';
//escribir texto en una etiqueta
h1.innerText = 'Patito <br> Feo';
//obtener el atributo class
console.log(h1.getAttribute('class'));
//colocar el atributo class
h1.setAttribute('class', 'rojo');
//agregar una clase
h1.classList.add('rojo');
//Eliminar una clase
h1.classList.remove('verde');
//Colocar value en un input
input.value = "456"
//Crear un elemento img
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

parrafoID.innerHTML = ""
parrafoID.append(img);


//Eventos en JavaScript: interactuando con usuarios
