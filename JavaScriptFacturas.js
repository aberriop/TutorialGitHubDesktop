
class cliente {
    constructor (nombre, direccion,telefono, nif){
        this.name = nombre;
        this.adress = direccion;
        this.phone = telefono;
        this.id = nif;
    }

};

class elemento {
    constructor (descripcion, cantidad, precio) {
        this.description = descripcion;
        this.quantity = cantidad;
        this.price = precio;
    }
};

class factura { 
    constructor (cliente, elementos){
        this.client = cliente;
        this.elements= elementos;
        this.info ={
            baseimponible: 0,
            iva: 21,
            metodo: "contado",
            total: 0,
        }
        this.totalprice = function (){
            //Base imponible = precio * cantidad. Hacer un bucle.
            for (let i = 0; i < this.elements.length; i++){
                this.info.baseimponible = this.elements[i].quantity * this.elements[i].price;
            }
            console.log('total', this.info.baseimponible);
            // total = base imponible * (1+(iva/100))
            this.info.total = this.info.baseimponible*(1+(this.info.iva/100));
            console.log(`El total es de  ${this.info.total`});
        }
};


const cliente1 = new cliente ('Pepe', 'Pinto', 123, '520');
const art1 = new elemento ('boli', 5, 1);
const art2 = new elemento ('lapiz', 1, 2);

const bill = new factura (cliente1, [art1, art2]);