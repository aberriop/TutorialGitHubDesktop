const numbers = [3, 6, 7, 10];
//Map

let numbersPlus = numbers.map(function(numero) {
    let aux =numero + 1;
    return aux;
    // Lo mismo sería poner solo una línea -> return numero +1
})

console.log(numbersPlus);


//Todo en mayusculas

const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

let topicsMAYUS = topics.map(function(tema){
    return tema.toUpperCase();
});

console.log('topicsMAYUS', topicsMAYUS);

const reversed = topicsMAYUS.reverse();
console.log('reversed', reversed)


//Separar pares de impares

const pares = number.filter(each => each%2 === 0);
const impares =number.filter(each => each%2 !== 0);

console.log('pares',pares);
console.log('impares', impares);