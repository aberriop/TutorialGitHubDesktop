

class Food {
    value= 10;
    color= 'red';
    eat () {
        console.log('yummy')
    }
}


// Instancia de clase
const apple = new Food ();

// Meter un nuevo atributo
apple.type = 'Reineta';
apple.show = () => console.log('Es una manzana');
apple.hide =function (){
    return 'Nope'
}

const donut = new Food ();



// Otro ejemplo Clase 2

class Coche {
    constructor (marca, color){
        this.brand = marca;
        this.color = color;

        this.show = function(){
            return 'El coche es de marca ' + this.brand;
        }
    }
    run(){
        console.log('Listo', this.color)
    }
};

const hyundai = new Coche('Hyundai', 'green');
const coche2 = new Coche('Kia', 'yellow');


// Otro ejercicio

class Cuadrado {
    constructor(lado){
        this.area= lado*lado;
        this.perimetro= lado*4;
        }

    showArea(){
        console.log('El area es de '+ this.area)
    }

};

const pequeño = new Cuadrado(2);
const mediano = new Cuadrado(5);
const grande = new Cuadrado(10);

console.log(pequeño)
