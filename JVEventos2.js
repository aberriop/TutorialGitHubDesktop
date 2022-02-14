var cajita = document.getElementById('cajita');
cajita.addEventListener('keyup', showKey);

function showKey(event) {
    console.log(`Has clickado la tecla ${event.code} y le corresponde el ${event.keyCode}`);
};

// Añadir a la lista 
function add() {
    var elemento = document.createElement("li");

    elemento.innerHTML = 'JavaScript';
    
    var lista = document.getElementById("lista");

    lista.appendChild(elemento);
}   
