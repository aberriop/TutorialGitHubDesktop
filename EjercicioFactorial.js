
let n = prompt('Dime un numero');

let factorial = 1;

for (i=1; i<=n; i++){
    factorial = factorial * i;
    console.log(`i:${i} - factorial:${factorial}`)
};