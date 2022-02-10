// Click guardar alert guardado
const boton = document.getElementById("button");


boton.addEventListener('click', showGuardado);

function showGuardado(){
    alert('Guardado')
};

// cambio color de background
const inputName = document.querySelector(".name");
console.log(inputName);

inputName.addEventListener('focus', changeColorFocus);
function changeColorFocus(){
    inputName.style.backgroundColor="#fff666";
};

inputName.addEventListener('focusout', changeColorNoFocus);
function changeColorNoFocus(){
    inputName.style.backgroundColor='#9999FF';
};

// vocal/consonante color distinto
const inputRandom = document.querySelector(".random");

inputRandom.addEventListener('keypress', checkletter);
function checkletter(event){
    const currentLetter =event.keyCode;
    if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 ||currentLetter === 111 ||currentLetter === 117){
        inputRandom.style.color ="#a8323e"
    } else {
        inputRandom.style.color ="#32a836"
    }
};



