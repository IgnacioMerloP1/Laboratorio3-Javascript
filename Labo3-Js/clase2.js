//MAP - MAPEA / HACE OPERACIONES CON EL ARRAY
const numbers = [1,2,3,4,5,6,7];
const newnumbers = numbers.map(n=> n*2);
//console.log(newnumbers);
//FILTER - FILTRA / HACE CONDICIONES CON EL ARRAY
const pares = numbers.filter(n => n%2===0)
//console.log(pares)
//REDUCE - REDUCE EL ARRAY A UN SOLO ELEMENTO. 
const sumareduce = numbers.reduce((acum,actual) => {return acum + actual; }, 0);
//console.log(sumareduce)
//BUSCAR NUMERO MAS GRANDE
numeros = [1,2,3,4,5]
function MasGrande(numeros){
    let n=numeros[0]
    for(let i=1;i<=numeros.length;i++){
        if(numeros[i] > n){
            n=numeros[i]
        }
    }
    return n
}
//console.log(MasGrande(numeros))

//ESCRIBA UNA FUNCION QUE INVIERTA UNA CADENA DE TEXTO 
//Sin metodos de array
//- I: invertirCadena("Hola Mundo")  -  O: odum aloH
let cadena = "Hola mundo"
function invertirCadena(cadena){
    let cadena_invertida = ""
    for(let i=cadena.length -1 ;i>=0;i--){
        cadena_invertida +=cadena[i]
    }
    return cadena_invertida
}
//console.log(invertirCadena(cadena))
//ESCRIBA UNA FUNCION QUE ORDENE UN ARRAY DE NUMEROS DE FORMA DESCENDENTE.
let desorden = [1,5,2,7,3]
function ordenar(desorden){
    let aux=0
    for(i=0;i<=desorden.length -1;i++){
        for(c=1;i<=desorden.length; i++){
            if(desorden[c]>desorden[i]){
                aux=desorden[i]
                desorden[i]=desorden[c]
                desorden[c]=aux
            }
        }
    }
    return desorden
}
//console.log(ordenar(desorden))

function factorialRecursivo(num){
    if (num ===0 ) return 1;
    return num*factorialRecursivo(num-1);
}
