const prompt = require("prompt-sync")(({sigint:true}))
let dataPersona =[];


const addDataPersona = (firstName,lastName,birthday,address,status,condition) =>{
    let person ={
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if(condition){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }

}
addDataPersona("JUAN","PEREZ",20,"CABA",5,true);
addDataPersona("ANTONIO","RAMON",18,"CABA",2,true);
addDataPersona("JOSE","QUINTERO",12,"CABA",3,true);
addDataPersona("ANTONIA Ramona","PEREZ",10,"CABA",1,true);
addDataPersona("SOLEDAD ","RAMIREZ",18,"CABA",0,true);
addDataPersona("MARIA","PEREZ",18,"CABA",0,true);

/** MOSTRAR EL PROMEDIO DE EDADES 
 * foreach
 * reduce((acumulador,elemento)=>{},valorInicialAcumulador)
*/
const promedio = ()=>{
    let suma = 0;
    dataPersona.forEach((person)=>{
        //suma = suma + person.birthday;
        suma += person.birthday;
    });
    let prom = suma / dataPersona.length;
    return prom;
}

let sumaReduce = dataPersona.reduce((sumaEdades,person)=>{
    return sumaEdades + person.birthday;
},0);
let promeReduce = sumaReduce / dataPersona.length;
console.log("**************")
console.log(promedio());
console.log("**************")
console.log(promeReduce);

console.log("******METODO STRING********")
/**METODOS DE STRING FUNCIONES DE CADENA */

let prueba = "  Ejemplo de prueba prueba prueba         ";
//length logitud de la cadena
console.log(prueba.length);
console.log(prueba[0]);
//mayusculas - minuscula
//toUpperCase() toLowerCase()
console.log(prueba.toUpperCase());
console.log(prueba.toLowerCase());
//trim() eliminar espacios en blanco al principio y al final
console.log(prueba.trim().length);
//replace("buscar","reemplzar") lo va a realizar en la primera coincidencia
console.log(prueba.replace("prueba","hola"));
//replaceAll("buscar","reemplazar") lo reemplaza donde consiga el criterio a buscar
console.log(prueba.replaceAll(" ",""));
//split("buscar") buscar el elemento y devuelve un array con los elementos
console.log(prueba.split("e"));
//includes("buscar") valor verdadero si existe o falso
console.log(prueba.includes("Pr"));

/**
 * 1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 */
let words = prompt("INGRESE EL CRITERIO A BUSCAR: ");
let dataFilter = dataPersona.filter( (person)=>{
   /* words = words.trim().toLowerCase();
    let firstName = person.firstName.toLowerCase();
    let lastName = person.lastName.toLowerCase();
    return firstName.includes(words) || lastName.includes(words);*/
    return person.firstName.toLowerCase().includes(words.trim().toLowerCase()) ||
    person.lastName.toLowerCase().includes(words.trim().toLowerCase());
});
console.table(dataPersona);
console.log("********")
console.table(dataFilter);

/** startsWith() */

dataFilter = dataPersona.filter( (person)=>{
    /* words = words.trim().toLowerCase();
     let firstName = person.firstName.toLowerCase();
     let lastName = person.lastName.toLowerCase();
     return firstName.includes(words) || lastName.includes(words);*/
     return person.firstName.toLowerCase().startsWith(words.trim().toLowerCase()) ||
     person.lastName.toLowerCase().startsWith(words.trim().toLowerCase());
 });
 
console.table(dataFilter);

