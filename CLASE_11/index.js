/** callbacks
 *  promise
 *  async / await
 */

/** callbacks es una funcion que tiene 
 * como parametro otra funcion */

let ejemplo = ()=>{
    console.log("ejemplo");
}
setTimeout(ejemplo,2000);

let listArray = [1,3,5,7,8,900]

listArray.forEach((elmets)=>{
    console.log(elmets)
});

/** callbacks 
 * numeros aleatorios parametro la cantidad de repeticiones
 * si por sale 20 rompa el cliclo.
*/

const aleatorios = (repeticiones, pedro) =>{
    let num = [];
    for(let i=0;i<repeticiones; i++){
        let nale = Math.floor(Math.random()*repeticiones+1);
        num.push(nale);
        if(nale == 20){
            pedro({error:true,message:'Error saco 20..',value:num});
            return;
        }
    }
    return pedro(null,{error:false,value:num})
}

aleatorios(30,(error,success)=>{
    if(error){
        console.error(error.message);
        console.error(error.value);
        return;
    }
    console.log(success);
})

/** PROMESAS
 * promesa cumplidad fue resuelta resolve full filled (then)
 * promesa no cumplidad fue rechazada reject   (catch)
 * promesa en estado incierto promesa pendiente
 * promesa finalizada  finally=> resuelta - rechazada
 * 
 */
/**metodo de peticiones http */
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((data)=>{ console.log(data)})
     .catch((error)=>console.error(error))
     .finally(()=>{
        console.log("termino de ejecutarse")
     });

/*new Promise((resolve, reject)=>{

})*/

const aleatoriosPromise = (repeticiones)=>{
    return new Promise((success,error)=>{
        let num = [];
        for(let i=0;i<repeticiones; i++){
            let nale = Math.floor(Math.random()*repeticiones+1);
            num.push(nale);
            if(nale == 20){
                error({error:true,message:'Error saco 20..',value:num});
            }
        }
        success({error:false,value:num})
    });
}
aleatoriosPromise(25).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error(error);
})

/** async - await
 * await detiene la ejecucion 
 */



const responseData = async () =>{
    const response = await fetch("url...");
    const data = await response.text();
}


/** try define un bloque un instruccion a ejecutar
** catch define un bloque de codigo para manejar cualquier error si el bloque a ejecutar da un error
** throw define errores personalizados
*/

const validar = () =>{

    let inputs= document.getElementById("inputs").value;
    try{
      if(inputs.trim()=="") throw "no ingreso nada";
      if(isNaN(inputs)) throw "El ingresado no es numero";
      

    }
    catch(error){
        console.log(error?.message)
        document.getElementById("errorMessage").innerHTML=error
    }

}