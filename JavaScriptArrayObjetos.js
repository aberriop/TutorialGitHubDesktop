const users = [
    {username: "ppc90", age: 30, premium: false},
    {username: "lu65", age: 24, premium: false},
    {username: "maria3", age: 36, premium: false},
    {username: "abc123", age: 20, premium: true},
    {username: "sergio58", age: 26, premium: true},
];


users.map(function (user){
    if (user.premium === true) {
        console.log('El usuario ' + user.username + ' es premium');
    }
});

let userNoPremium = users.filter(function(objeto){
    return objeto.premium === false;
});

console.log('UserNoPremium', userNoPremium);


// Ejercicio 2

const people = [
    {name: "Angelina", age: 80,},
    {name: "Eric", age: 2,},
    {name: "Paris", age: 5,},
    {name: "Kayne", age: 16,},
    {name: "Bob", age: 100,},
]

let nombres = people.map(function(person){
    return person.name
})

console.log(nombres)

// Ejercicio 3: quedarnos solo con Angelina y Bob

let people2 = people.filter(function(edad){
    if (edad.age >= 50){
        return people;
    }
});

console.log(people2)


// Ejercicio 4: Poner en mayuscula la primera letra de esri.

let empresa = 'esri';
let letra1 = empresa.charAt(0);
let letra2 = empresa.charAt(1);
let letra3 = empresa.charAt(2);
let letra4 = empresa.charAt(3);

let letra1M = letra1.toUpperCase();


console.log(letra1M + letra2 + letra3 + letra4);

// Ejercicio 5: Pon en mayúsculas la primera letra de cada palabra: Environmental systems research institute

const instituto = 'environmental systems research institute';
const porcion1= instituto.substring(1,13)
const porcion2= instituto.substring(15,21)
const porcion3= instituto.substring(23,30)
const porcion4= instituto.substring(32)

let letter1 = instituto.charAt(0);
let letter2 = instituto.charAt(14);
let letter3 = instituto.charAt(22);
let letter4 = instituto.charAt(31);

let letter1M = letter1.toUpperCase();
let letter2M = letter2.toUpperCase();
let letter3M = letter3.toUpperCase();
let letter4M = letter4.toUpperCase();

console.log(letter1M + porcion1 + ' ' + letter2M + porcion2 + ' ' + letter3M + porcion3 + ' ' + letter4M + porcion4);


//Otra forma
const frase = 'environmental systems research institute';
let fraseArray = frase.split('');
console.log(fraseArray)

let brrr = fraseArray.map(function(palabra){
    let mays = palabra.charAt(0).toUpperCase();
    let mins =palabra.slice(1);
    let palabrabien =mays + mins
    return palabrabien
}).join('');

console.log(brrr);