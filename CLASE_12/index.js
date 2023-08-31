const leerJson = async () =>{
    let q=document.getElementById("filter").value
    document.getElementById("dataItem").innerHTML=''
    const response = await fetch("https://dummyjson.com/products/search?q="+q);
    const data = await response.json();

    data.products.forEach(element => {
        document.getElementById("dataItem").innerHTML +=`<p>${element.title} <img src="${element.thumbnail}"></p>`
    });
    console.log(data);
}

 