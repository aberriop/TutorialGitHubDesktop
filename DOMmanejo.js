
// Numero de enlaces en la pagina
var enlaces = document.getElementsByTagName("a");
console.log('enlace', enlaces);

// Direccion a la que enlaza el penultimo enlace
var enlacepenultimo = links[links.length -2].href;

// Numero de enlaces del tercer parrafo
const third = document.getElementById('third-paragraph');
const numberLinks = third.getElementsByTagName('a').length;

// Mostrar el primer resultado
const firstresult = document.querySelector('#number-links');
firstresult.innerHTML =`En esta pagina hay ${links.length} enlaces`;

//crear un nodo para el segundo
const secondresult = document.createElement('p');
const contentSecondResult = document.createTextNode(penultimate);
secondresult.appendChild(contentSecondResult);

