var dni = prompt("Dime tu DNI");
console.log("DNI", dni);
var resto = dni%23;

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni <0 || dni> 999999999){
    alert("el numero indicado no es el indicado")
}

else{
    console.log(resto)
}


console.log(letras[resto]);