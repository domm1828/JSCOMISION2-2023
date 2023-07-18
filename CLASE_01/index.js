/**JAVASCRIPT 3 FORMAS DE DECLAR UNA VARIABLE */

var x=8;
/** bloques { } */
let y=5;
const z='5';

/** PERMITE VERIFICAR QUE TIPO DE DATO ES LA VARIBLE
 * typeof
 */

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(x%y);
// x = 8 y =5
x +=y;
x++;
x--;
++x;
--x;
//x = x + y = 18
console.log(++x);
console.log(x);

/** OPERADORES DE IGUALDA
 * 
 *  == IGUALES SUS VALORES 
 *  === IGAULES (IDENTICO)
 *  != DIFERENTES
 *  !== DIFERENTES (IDENTICO)
 *  > MAYOR
 *  >= MAYOR O IGUAL
 *  < MENOR
 *  <= MENOR O IGUAL
 * 
 */
// y ='5' z=5
//(a <= 10)
// a = 5; b=8; c=3;

//!(a<b) 

let xy = (x>5) ? 'no' : 'si';
 console.log('xy=>',xy);