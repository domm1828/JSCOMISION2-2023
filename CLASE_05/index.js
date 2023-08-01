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
addDataPersona("ANTONIA","PEREZ",10,"CABA",1,true);
addDataPersona("SOLEDAD","RAMIREZ",18,"CABA",0,true);
addDataPersona("MARIA","PEREZ",18,"CABA",0,true);


/**  ACTIVIDAD AGREGAR 10 OBJETOS PERSONAS EN AL ARRAY CON DATA DIFERENTE...
 * 1.-FILTRADO POR NOMBRE (COINCIDA)(SOLICITAR AL USUARIO EL NOMBRE O PALABRA A BUSCAR)
 * 2.- MOSTRAR EL PROMEDIO DE EDADES
 */

/*
for(let i=1; i<=3; i++){
    let firstName = prompt("INGRESE EL NOMBRE: ");
    let lastName = prompt("INGRESE EL APELLIDO: ");
    let birthday = parseInt(prompt("INGRESE LA EDAD: "));
    let address = prompt("INGRESE LA DIRECCION: ");
    let status = parseInt(prompt("INGRESE EL STATUS: "));
    addDataPersona(firstName,lastName,birthday,address,status,true);
}*/

/**FUNCIONES DE ARRAY EN LA MAYORIA VA A DEVOLVER UN NUEVO ARRAY
 *  FOREACH
 */
//recorrido del array de object
const forDataPersona = (person, position) =>{
    console.log(`${person.firstName} => position =>${position}`)
}
dataPersona.forEach(forDataPersona);

console.log("***********")
/** FILTER REALIZAMOS FILTRADOS */

let dataPersonaFilter = dataPersona.filter((element)=>{
    return (element.birthday >=18 && element.status==0);
});

/**FIND DEVOLVERA UNA NUEVO ARRAY CON EL ELEMENTO ENCOTRADO 
 * 
 * find primera coincidencia de arriba - abajo
 * findLast primera coincidencia de abajo -arriba
 * findIndex // devuelve la posicion
*/

dataPersonaFilter = dataPersona.findIndex((person)=>{
    return person.birthday ==50;
});
/**some verdadero o falso */
dataPersonaFilter = dataPersona.some((person)=>{
    return person.birthday < 2;
})

/**MAP nos permite realizar iteracion con los elementos */
dataPersonaFilter = dataPersona.map((person)=>{
   // return {'fullName':person.firstName+ ' '+ person.lastName};
   let dataNewPerson = {
    fullName:person.firstName+ ' '+ person.lastName,
    edad :''
   }
   if(person.birthday >=18 ){
    dataNewPerson.edad ='MAYOR DE EDAD';
   }
   else{
    dataNewPerson.edad='MENOR DE EDAD';
   }
   return dataNewPerson;
});

/**METODOS DE ORDENAMIENTO 
 * SORT();
 */
console.table(dataPersonaFilter);
console.log("***********")
console.table(dataPersona);
let dataPersonaOrderAsc = dataPersona.sort((a,b)=>{
        return a.birthday - b.birthday;
});
console.log("***********")
console.table(dataPersonaOrderAsc);

let dataPersonaOrderDesc = dataPersona.sort((a,b)=>{
    return b.birthday - a.birthday;
});
console.log("***********")
console.table(dataPersonaOrderDesc);


console.log("***********")
console.table(dataPersona.at(3));
