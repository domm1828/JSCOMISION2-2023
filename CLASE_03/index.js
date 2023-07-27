/**DECLARACIONES DE FUNCIONES
 * 
 * FUNCIONES POR DECLARACION
 */
//FUNCION SIN PARAMETROS SIN RETORNAR VALORES
function ejemplo(){
    console.log("hola");
}
//invoco...
ejemplo();

//FUNCION CON PARAMETROS SIN RETORNAR VALORES

function suma(x,y,z){
    let result=x+y+z;
    console.log(result);
    return result;
}
//invoco...
let x = suma(5,8,9);

/** para indicar retorno de valores en la funcion se utilizar return */

console.log(x*100);

/** FUNCION MEDIANTE EXPRESION */

const restar = function resta(x,y){
    return x-y;
}
restar(3,4);

/** FUNCIONES ANONIMAS */
const mult = function (x,y){
    return x*y;
}
mult(4,5);

/** FUNCIONES AUTOEJECUTABLES */
(function (){
    console.log("hola...");
})();

/** FUNCIONES FLECHA FUNCIONES ARROW 
 * const restar = function resta(x,y){
 *  return x-y;
 * }
*/

const restaDos = (x,y)=>{
    return x-y;
}

restaDos(3,4);

/** OPERACIONES MATEMTICAS SEGUN LA ACCION QUE INGRESE EL USUARIO + - * / */

const prompt = require("prompt-sync")(({sigint:true}))

const calculo = (z,x,y) =>{
    let result;
    if(z==1){
        result = x+y;
    }
    else if(z==2){
        result = x-y;
    }
    else if(z==3){
        result = x*y;
    }
    else if(z==4){
        result = x / y;
    }
    else{
        result ="FUERA DE RANGO 1-4";
    }
    return result;
}

let a = prompt("INGRESE UN NUMERO A: ");
let b = prompt("INGRESE UN NUMERO B: ");
let op = prompt("SELECCIONE UNA ACCION 1.- SUMA 2.- RESTA 3.- MULT 4.-DIV= ");

let acciones = calculo(op,a,b);
console.log(acciones);

/** DADA UNA ACCION POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR
 * SUMAR, DIVIDIR Y RESTAR, SEGUN EL VALOR QUE INGRESE EL USUARIO
 */
