const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

const capitalizeTopics = topics.map(eachTopic => eachTopic.toUpperCase())

console.log('capitalizeTopics', capitalizeTopics);

const reversed = capitalizeTopics.reverse();
console.log('reversed', reversed);

const last = topics.map(function(temita){
    return temita.toUpperCase()})
    .reverse();

console.log('last', last);


// todos los meses del año

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const mesesMINUS = meses
    .filter(mes => mes.length > 7)
    .map(mes => mes.toUpperCase());

console.log(mesesMINUS);

const numberOFMonths = mesesMINUS.length;

console.log(`Solo ${numberOFMonths} MESES`);


// Ejercicio Vehículos

let vehiculo = prompt("moto", "coche", "autobus");
let kms_recorridos= prompt('KM totales');

let precio_km = 0;
let precio = 0;


if (vehiculo === 'coche'){
    precio_km = 0.10;
    precio = precio_km * parseInt(kms_recorridos);
} else if (vehiculo === 'moto')     
    {precio_km = 0.20;
    precio = precio_km * parseInt(kms_recorridos);
} else if (vehiculo === 'autobus')     
    {precio_km = 0.50;
    precio = precio_km * parseI(kms_recorridos);
}

console.log('km', precio_km)





};
    
}
