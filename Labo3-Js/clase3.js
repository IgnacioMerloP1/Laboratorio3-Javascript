const obj = {
    name: 'Ignacio',
    age: 22,
    email: 'nachomerlogm@gmail.com'
};

/*GET
console.log(obj.name)
console.log(obj["name"])
//SET
obj.city="Buenos Aires";
console.log(obj.city)
*/
/*
class Persona {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
}

const persona1 = new Persona();
persona1.name = "Ignacio";
persona1.age = 22;

console.log(persona1) 

let nombre = obj.name;
let {name, age} = obj;
console.log(nombre)

const array = [1,2,3,4,5];
let [first, second,...rest] = array;
console.log(rest)



if (age<=18){
    mensaje="No permitido"
}else{
    mensaje="Permitido"
}
console.log(mensaje)  */

let edad = 18;
let mensaje = "";

mensaje = (edad>=18) ? "Permitido" : "No permitido;"
console.log(mensaje)

/*
Escribe una funcion que determine el numero de vocales en una cadena de texto.
*/
function contarVocales(cadena){
    let cont = 0;
    const vocales = ["a","e","i","o","u"];
    for(let i=0; i<cadena.length; i++){
        if(vocales.includes(cadena[i].toLowerCase())){
            cont++;
        }
    }
    return cont
}
console.log(contarVocales("Lagartija"));

/*
Escribe una funcion que cuente la cantidad de palabras en una cadena de texto.
*/
function contarPalabras(cadena){
    return cadena.split(/\s+/).length;
}
console.log(contarPalabras("Esto es una cadena de ejemplo."));

/*
Escriba una funcion que determine si un año es bisiesto segun el calendario gregoriano
*/
function esBisiesto(year){
    return (year % 4 ===0 && year %100 !==0) || year%400 === 0;
}
console.log(esBisiesto(2020));
console.log(esBisiesto(2023));

/*
Escribe una funcion que elimine los duplicados de un array
*/

function eliminarDuplicados(array){
    let nunca = new Set(array);
    return nunca;
}
console.log(eliminarDuplicados([1,2,2,3,4,5,5]))

/*
Escribe una funcion que filtre los elementos unicos de dos arrays
*/

function filtrarUnicos(arr1, arr2){
    const conjunto = new Set([...arr1, ...arr2]);
    return Array.from(conjunto)
}
console.log(filtrarUnicos([1,2,3],[2,3,4]))