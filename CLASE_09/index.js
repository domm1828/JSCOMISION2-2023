/**ALMACENAMIENTO LOCAL localStorage */

/**agregar item - key setItem('nombre atributo - key - variable' , contenido) */

let tokens = {
    type:"Token...",
    clave:123123
}
let ejemploArray = [1,2,3,0,"hola"];

localStorage.setItem("token",JSON.stringify(tokens));
console.log(localStorage.getItem("token"));
let ejemploStore = JSON.parse(localStorage.getItem("token"));
console.log(ejemploStore);
localStorage.setItem("arrayItem",JSON.stringify(ejemploArray));


localStorage.setItem("arrayItemsplice",ejemploArray.join(","));

console.log( localStorage.getItem("arrayItemsplice").split(","));

console.log(JSON.parse(localStorage.getItem("arrayItem")))

//localStorage.clear();

/** ALMACENAMIENTO EN SESION  sessionStorage
 * 
 */
sessionStorage.setItem('ejemplo',"valor......");
sessionStorage.setItem('ejemplo2',"valor......")
console.log(sessionStorage.getItem('ejemplo'))
console.log(sessionStorage.length)

for(i=0;i<localStorage.length; i++){
    let element = localStorage.key(i);
    document.getElementById("itemLocal").innerHTML += `<li>${element}</li>`;
}

for(i=0;i<sessionStorage.length; i++){
    let element = sessionStorage.key(i);
    document.getElementById("itemSESION").innerHTML += `<li>${element}</li>`;
}