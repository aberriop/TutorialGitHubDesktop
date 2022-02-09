// Por id
// Name
// Tag name
// clase CSS

var element1 = document.getElementById('dewey');
console.log('id', element1);

// innerHTML sirve para sobrescribir

// Opcion 1 
var nameFirst = document.getElementById('nameFirst');
nameFirst.innerHTML= "Hola";

//Opcion 2
document.getElementById('nameFirst').innerHTML = 'Chao';

var labels = document.getElementsByTagName('label');
console.log('label', labels);

var labelsCSS = document.getElementsByClassName('label-input');
console.log('labelCSS', labelsCSS)

//La propiedad name agrupa los elementos
var names = document.getElementsByName('drone');
console.log('name',names);

var element = document.querySelectorAll('#huey');
console.log('element', element);

//Parentnode
console.log('padre', nameFirst.parentNode);

// Borrat nodos: hay que seleccionar al padre e hijo y removerChild()

let firstOption = document.getElementById('first-option');
let inputDelete = document.getElementById('huey');

firstOption.removeChild(inputDelete);