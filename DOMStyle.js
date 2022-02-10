var animal= prompt('¿Cuál es mi animal favorito?');

if(animal === 'Suricata') {
    document.getElementById("resultado").innerHTML = "correcto";
    document.getElementById("resultado").style.color = "green";
    document.getElementById("foto").classList.remove('hide');
}else {
    document.getElementById("resultado").innerHTML = "Incorrecto!";
    document.getElementById("resultado").style.color = "red";
}


//Otra forma
// var animal= prompt('¿Cuál es mi animal favorito?');

//var element = document.getElementByID("resultado");

//if(animal === 'Suricata'){
    //element.innerHTML = "Correcto";
    //element.style.color = "green";
    //document.getElementById("foto").//classList.remove('hide');
//} else {
    //element.innerHTML = "Incorrecto";element.style.color = "red";
//};

var boton = document.getElementById("myBtn");

boton.addEventListener('click', showMessage);

function showMessage(){
    console.log('Has hecho click');
};