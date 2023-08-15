let dataPersona = [];
var indexPersonUpdate = 0;

 
const addDataPersona = (firstName, lastName, birthday, address, status, dni, condition = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if (condition) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }

}

const addFormPerson = () => {
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    if (findDniOne(dni.value) == -1) {
        addDataPersona(firstName.value, lastName.value, birthday.value, address.value, status.value, dni.value);
        document.getElementById("formPerson").reset();
        dni.focus();
        addStorageItems();
        document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
        messageAlert("Datos Guardados");
    }
    else {
        dni.focus();
        messageAlert("ERROR, EL DNI YA SE ENCUENTRA REGISTRADO", "error");
    }
}



const listPerson = (dataArray) => {
    let list = '';
    if (dataArray.length > 0) {
        dataArray.forEach((person,index) => {
            list += `<tr>
                    <td>${person.dni}</td>
                    <td>${person.firstName} ${person.lastName}</td>
                    <td>${person.birthday}</td>
                    <td>${person.address}</td>
                    <td>${person.status}</td>
                    <td>
                    <button type="button" onclick="editarRegisterPerson(${person.dni})" class="m-1 btn btn-success">EDITAR</button>
                    <button type="button" onclick="deleteRegisterPerson(${person.dni})" class="m-1 btn btn-danger">ELIMINAR</button></td>
                    </tr>`;
        });
    }
    else {
        list = `<tr>
                    <td class="text-center" colspan="6">NO HAY REGISTRO FILTRADOS</td>
                </tr>`;
    }
    return list;
}

const findDniOne = (dni) => {
    return dataPersona.findIndex((person) => {
        return person.dni == parseInt(dni)
    })
}

const searchInput = () => {
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();
    let filterData = filteDataPerson(search);

    document.getElementById("listPerson").innerHTML = listPerson(filterData);

}

const filteDataPerson = (search) => {
    return dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) ||
            person.lastName.toLowerCase().includes(search);
    });
}

const deleteRegisterPerson = (dni) =>{
    let position = findDniOne(dni);
    dataPersona.splice(position,1);
    document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
    showHiddeTextButton(0);
    addStorageItems();
}

const editarRegisterPerson = (dni) =>{
    let position = findDniOne(dni);
    let person = dataPersona[position];

    document.getElementById("fistName").value = person.firstName;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("birthday").value = person.birthday;
    document.getElementById("address").value = person.address;
    document.getElementById("status").value = person.status;
    document.getElementById("dni").value = person.dni;
    document.getElementById("position").value = position;
    indexPersonUpdate = position;
    showHiddeTextButton(1);
 
}

const editFormPerson = () =>{
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    let position = document.getElementById("position").value;

    if (findDniOne(dni.value) == -1 ||  findDniOne(dni.value) == position ) {
      
        dataPersona[position].dni = dni.value;
        dataPersona[position].firstName = firstName.value;
        dataPersona[position].lastName = lastName.value;
        dataPersona[position].birthday = birthday.value;
        dataPersona[position].address = address.value;
        dataPersona[position].status = status.value;
        showHiddeTextButton(2);
        dni.focus();
        document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
        messageAlert("Datos Guardados");
        
        addStorageItems();
    }
    else {
        dni.focus();
        messageAlert("ERROR, EL DNI YA SE ENCUENTRA REGISTRADO", "error");
    }

}

const showHiddeTextButton =(valor)=>{
    let formulario =document.getElementById("formPerson");
    if(valor ==1){
        formulario.removeAttribute('onsubmit');
        formulario.setAttribute('onsubmit','event.preventDefault();editFormPerson()')
        document.getElementById('addButton').textContent = "Editar Datos";
    }
    else{
        document.getElementById('addButton').textContent = "Agregar Datos";
        formulario.removeAttribute('onsubmit');
        formulario.setAttribute('onsubmit','event.preventDefault();addFormPerson()');
        formulario.reset();
    }
}

const messageAlert = (title, icon = 'success') => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 900
    })
}

const addStorageItems = () =>{
    
        localStorage.setItem('listArray',JSON.stringify(dataPersona))
        sessionStorage.setItem('listArray',JSON.stringify(dataPersona))
}

const validateDataArray =()=>{
    if(localStorage.getItem('listArray')==null){
        return [];
    }
    else{
        let list = localStorage.getItem('listArray');
        return JSON.parse(list);
    }
}

dataPersona = validateDataArray();
console.log(dataPersona);
document.getElementById("listPerson").innerHTML = listPerson(dataPersona);

//storage

///STORAGE => LOCALSTORE
/** setItem('nombre key',valor); */
localStorage.setItem('ejemplo','hola....');
localStorage.setItem('ejemplosss','hola....');
/** getItem('nombre key') */
console.log(localStorage.getItem('ejemplos'));
/** removeItem('nombre key') */
//localStorage.removeItem('ejemplo')
/** clear() remove todos los itemes */
//localStorage.clear();
// sessionStorage
sessionStorage.setItem("ejemplo","hola");
sessionStorage.getItem("ejemplo");