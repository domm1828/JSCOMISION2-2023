/** ESTRUCTURAS DE CONTROL
 * ESTRUCTURAS CONDICIONALES
 * SE NECESITA ESTABLECER CONDICIONES Y DECISIONES
 * IF CONDICION SIMPLE
 

if(condicion && condicion || condicion){
    //codigo
}
*/
/** CONDICION ALTERNATIVA
 * IF - ELSE
 
if(condicion){

}
else{

}*/
//saber si la variable es mayor a 10;
let x = 10;
if (x > 5 && x < 10) {
    console.log("La variable es mayor a 10");
}
let nota = 10;
var mensaje;
if (nota < 10) {
    mensaje = "REPROBADO";
} else {
    mensaje = "APROBADO";
}
console.log("Estoy: ",mensaje);

if(nota>=10){
    mensaje="APROBADO--";
}
if(nota<10){
    mensaje ="REPROBADO--";
}
console.log("Mensaje ",mensaje);
// OPERADOR TERNARIO
mensaje = (nota >10 ) ? "--APROBADO--" : "--REPROBADO--";
console.log(mensaje);
//CONDICIONES MULTIPLES IF - ELSE IF - ELSE IF - N... ELSE IF - ELSE
// MENOR IGUAL 5 = MALO, MENOR  10= REPROBADO, MENOR O IGUAL 15 BIEN, MAYOR 15 EXCELENTE
nota=16;
if(nota <= 5){
    mensaje ="MALO";
}
else if(nota < 10){
    mensaje ="REPROBADO";
}
else if(nota <=15 ){
    mensaje = "BIEN";
}
else{
    mensaje="EXCELENTE";
}
console.log("Soy....",mensaje);

//OPERADOR TERNARIO ANIDAO 
nota =5;
mensaje = (nota<=5) ? "MALO" : 
          (nota<10) ? "REPROBADO":
          (nota<=15) ? "BIEN" : "EXCELENTE";

          console.log("Soy....",mensaje);

/** CODICIONALES SWITCH => EN CASO DE 
switch(nombreVaribale){
    case : break;
    default: break;
}
*/
let dia=2;
switch(dia){
    case 1:
        mensaje="hoy es lunes";
    break;
    case 2:
        mensaje="hoy es martes";
    break;
    default: mensaje="no coloco ningun dia-..";
    break;
}

console.log("-----",mensaje);
 nota=0;
switch(nota){
    case 0:
    mensaje="Nota Errada";
    break;
    case 1: case 2: case 3: case 4: case 5:
        mensaje ="MALO";
    break;
    case 6: case 7: case 8: case 9: 
        mensaje="Reprobrado";
    break;
    default:
        mensaje="Aprobado";
    break;
}

console.log("Estoy .....: ",mensaje);

//ESTRUCTURAS DE CONTROL REPETIVAS
/** FOR (INICIALIZACION, CONDICION, (ACCION => INCREMENTO DECREMENTO)) */
/**REPETIR LOS NUMEROS DE 1 A 5 */
for(let i=1; i<=5; i++){
console.log("incremento i: ",i);
}
/**REPETIR LOS NUMEROS DE 5 - 1 */
for(let i=5; i>0; i--){
    console.log("decremento i: ",i);
}
//incremento multiple
for(let i=0,j=5; i<5;i++,j--){
    console.log("valor de i y j:",i,j);
}

//bucle while
/**
 * inicializar la variable
 * while(condicion)
 * {
 * (ACCION => INCREMENTO DECREMENTO))
 * }
 */
console.log("*******while*******")
let i=1;
while(i<=5){
 console.log("valor de i:",i);
 i++;
}
i=5;
while(i<=1){
 console.log("valor de i:",i);
    i--;
}

/**DADA DOS VARIABLES  REALIZAR CON ESAS VARIABLES LAS OPERACIONES MATEMATICAS SIGUIENTE (+,-,*,/)
 * MEDIANTE UN SWITCH
*/
/* CALCULAR SI UN NUMERO ES PRIMO O NO */
/** REALIZAR LA TABLA DE MULTIPLICAR DE UN VALOR X HASTA EL 10
 * 1*1 = 1
 * 1*2=2
 * 1*3=3
 * 1*10=10
 */
/**TODOS LOS DEBERAS MOSTRAR POR LA CONSOLA */


